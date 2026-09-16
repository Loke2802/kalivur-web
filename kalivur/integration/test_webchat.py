from types import SimpleNamespace
from uuid import uuid4

import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

from botwa_webchat import create_router, WindowLimiter
from app.infrastructure.database import get_session
from app.infrastructure.models.bot import BotModel
from app.application.knowledge_management.provider import BotKnowledgeProvider


@pytest.fixture
def channel(monkeypatch):
    org, bot = uuid4(), uuid4()
    state = {"active": True, "queries": []}
    entry = SimpleNamespace(id=uuid4(), organization_id=org, bot_id=bot,
                            status="published", content="Kalivur Site desarrolla páginas web.")

    class Session:
        def get(self, model, identifier):
            if model is BotModel:
                assert identifier == bot
                return SimpleNamespace(organization_id=org, status="active" if state["active"] else "inactive")
            assert identifier == org
            return SimpleNamespace(status="active")

    def published(self, organization_id, bot_id, *, search, limit):
        state["queries"].append((organization_id, bot_id))
        return [entry] if search == "web" else []

    monkeypatch.setattr(BotKnowledgeProvider, "retrieve_published", published)
    app = FastAPI()
    app.include_router(create_router(org, bot, frozenset({"https://kalivur.com"})))
    app.dependency_overrides[get_session] = lambda: Session()
    return TestClient(app), state, org, bot


def post(client, payload, origin="https://kalivur.com"):
    return client.post("/public/webchat/message", json=payload, headers={"Origin": origin})


def test_published_answer_uses_server_scope(channel):
    client, state, org, bot = channel
    response = post(client, {"message": "Quiero una web"})
    assert response.status_code == 200
    assert response.json()["reply"] == "Kalivur Site desarrolla páginas web."
    assert set(state["queries"]) == {(org, bot)}


def test_tenant_injection_rejected(channel):
    client, state, _, _ = channel
    assert post(client, {"message": "web", "bot_id": str(uuid4())}).status_code == 422
    assert not state["queries"]


def test_foreign_origin_rejected(channel):
    assert post(channel[0], {"message": "web"}, "https://other.example").status_code == 403


def test_inactive_bot_rejected(channel):
    channel[1]["active"] = False
    assert post(channel[0], {"message": "web"}).status_code == 503


def test_no_match_honest_fallback(channel):
    assert "No tengo información" in post(channel[0], {"message": "astronomía"}).json()["reply"]


@pytest.mark.parametrize("message", ["", "  ", "x" * 1501])
def test_invalid_message(channel, message):
    assert post(channel[0], {"message": message}).status_code == 422


def test_large_body(channel):
    assert post(channel[0], {"message": "x" * 10000}).status_code == 413


def test_rate_limit():
    limiter = WindowLimiter()
    assert all(limiter.allow("peer") for _ in range(12))
    assert not limiter.allow("peer")
