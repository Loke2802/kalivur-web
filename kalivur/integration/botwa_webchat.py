"""Read-only public web channel for Luri's existing published knowledge.

Mount with install_webchat(app) after create_app(). Disabled unless explicitly
configured. This channel never invokes WhatsApp, automation or admin APIs.
"""

import os
import time
from collections import OrderedDict
from threading import Lock
from typing import Annotated
from uuid import UUID

from fastapi import APIRouter, Depends, FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, ConfigDict, Field
from sqlalchemy.orm import Session

from app.application.knowledge_management.provider import BotKnowledgeProvider
from app.application.knowledge_management.retriever import PublishedBotKnowledgeRetriever
from app.domain.knowledge.contracts import KnowledgeQuery
from app.infrastructure.database import get_session
from app.infrastructure.models.bot import BotModel
from app.infrastructure.models.organization import OrganizationModel
from app.infrastructure.repositories.knowledge_entry_repository import SqlAlchemyKnowledgeEntryRepository


class ChatRequest(BaseModel):
    model_config = ConfigDict(extra="forbid", str_strip_whitespace=True)
    message: str = Field(min_length=1, max_length=1500)


class ChatReply(BaseModel):
    reply: str


class WindowLimiter:
    """Bounded single-process limit; configure edge limiting for replicas."""

    def __init__(self):
        self.lock = Lock()
        self.window = -1
        self.total = 0
        self.counts = OrderedDict()

    def allow(self, peer: str) -> bool:
        with self.lock:
            window = int(time.monotonic() // 60)
            if window != self.window:
                self.window, self.total = window, 0
                self.counts.clear()
            if self.total >= 120:
                return False
            self.total += 1
            count = self.counts.get(peer, 0) + 1
            self.counts[peer] = count
            return count <= 12


def create_router(organization_id: UUID, bot_id: UUID, origins: frozenset[str]):
    router = APIRouter(prefix="/public/webchat", tags=["webchat"])
    limiter = WindowLimiter()

    async def validate_request(request: Request):
        if request.headers.get("origin") not in origins:
            raise HTTPException(403, "Origin not allowed")
        peer = request.client.host if request.client else "unknown"
        if not limiter.allow(peer):
            raise HTTPException(429, "Too many requests", headers={"Retry-After": "60"})
        if request.headers.get("content-type", "").split(";")[0] != "application/json":
            raise HTTPException(415, "JSON required")
        # Stream a bounded body before parsing; never log the message.
        chunks = bytearray()
        async for chunk in request.stream():
            chunks.extend(chunk)
            if len(chunks) > 8192:
                raise HTTPException(413, "Message too large")
        try:
            return ChatRequest.model_validate_json(bytes(chunks))
        except ValueError as exc:
            raise HTTPException(422, "Invalid message") from exc

    @router.post("/message", response_model=ChatReply)
    def message(
        body: Annotated[ChatRequest, Depends(validate_request)],
        session: Annotated[Session, Depends(get_session)],
    ):
        organization = session.get(OrganizationModel, organization_id)
        bot = session.get(BotModel, bot_id)
        if (organization is None or organization.status != "active" or bot is None
                or bot.organization_id != organization_id or bot.status != "active"):
            raise HTTPException(503, "Chat unavailable")
        provider = BotKnowledgeProvider(SqlAlchemyKnowledgeEntryRepository(session))
        retriever = PublishedBotKnowledgeRetriever(provider, organization_id, bot_id)
        matches = retriever.retrieve(KnowledgeQuery(
            content=body.message, intent="information", company_id=str(organization_id)
        ))
        reply = matches[0].content if matches else (
            "No tengo información publicada suficiente para responder esa consulta. "
            "Puedes contactar con el equipo de Kalivur por WhatsApp para recibir ayuda."
        )
        return ChatReply(reply=reply[:8000])

    return router


def install_webchat(app: FastAPI):
    if os.environ.get("LURI_WEBCHAT_ENABLED") != "true":
        return
    organization_id = UUID(os.environ["LURI_WEBCHAT_ORGANIZATION_ID"])
    bot_id = UUID(os.environ["LURI_WEBCHAT_BOT_ID"])
    origins = frozenset(value.strip() for value in os.environ.get(
        "LURI_WEBCHAT_ORIGINS", "https://kalivur.com,https://www.kalivur.com"
    ).split(",") if value.strip())
    if not origins or "*" in origins:
        raise ValueError("Explicit webchat origins are required")
    app.include_router(create_router(organization_id, bot_id, origins))
    app.add_middleware(CORSMiddleware, allow_origins=list(origins),
                       allow_methods=["POST"], allow_headers=["Content-Type"],
                       allow_credentials=False)
