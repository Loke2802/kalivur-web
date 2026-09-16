# Kalivur web → Luri

The website is a static Next.js export. The public chat connects directly over
HTTPS to a dedicated read-only BotWA route. No API keys are sent to browsers.

`botwa_webchat.py` uses the existing `PublishedBotKnowledgeRetriever`, scoped to
one server-configured active organization and bot. It never calls the legacy
conversation routes, uses sample knowledge, sends WhatsApp messages, or runs
automations. This first connection returns published answers, not generated AI.
Each request is independent; the visible transcript is kept in page memory only.

## Backend installation

Copy `botwa_webchat.py` into the BotWA project root. After constructing the FastAPI
app, call `from botwa_webchat import install_webchat; install_webchat(app)` before
the server starts. The channel remains disabled unless all configuration exists:

```text
LURI_WEBCHAT_ENABLED=true
LURI_WEBCHAT_ORGANIZATION_ID=<Kalivur organization UUID>
LURI_WEBCHAT_BOT_ID=<Kalivur bot UUID>
LURI_WEBCHAT_ORIGINS=https://kalivur.com,https://www.kalivur.com
```

Deploy with the existing production BotWA configuration and database. Do not use
staging data for a public production chat. Configure ingress/body-size limits
and per-client edge rate limiting before scaling to multiple instances. The
included per-process limiter bounds traffic to 120/minute and 12/minute per
connection peer; behind a reverse proxy this can be shared by all visitors.
Only an explicit trusted proxy policy may change how client IPs are resolved.
Origin validation supplements abuse prevention and is not authentication.

## Website activation

Set `NEXT_PUBLIC_LURI_CHAT_URL=https://<production-luri-host>/public/webchat/message`
in the build environment and rebuild/publish. There are no client credentials.
Before activation test a real published Kalivur answer, unknown questions,
rejection of a different origin, disabled/inactive bot, oversized input, rate
limits, and backend outage. The widget retains failed input and offers WhatsApp.

## Scope

Live connection still requires the production URL, exact organization/bot IDs,
backend deployment and published Kalivur knowledge. AI generation and durable
conversation history are separate extensions, not simulated by this adapter.
