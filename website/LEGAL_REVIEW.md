# Legal content review status (internal — not published)

The website infrastructure is live-ready. The following pages require legal review before treating copy as final:

| Page | Source | Status |
|------|--------|--------|
| `/privacy` | `website/src/data/legal/privacy-policy(.sk).md` (bundled + sanitized) | **Needs review** — SK route uses interim EN body until legal translation is finalized |
| `/terms` | `website/src/data/legal/terms-of-service(.sk).md` (bundled + sanitized) | **Needs review** — SK route uses interim EN body until legal translation is finalized |
| `/delete-account` | `website` inline copy | Production-ready for App Store compliance |
| `/community-guidelines` | `website` inline copy | Production-ready baseline; optional legal polish |
| `/support` | `website` inline copy | Production-ready |

Operator placeholders (`LEGAL_ENTITY_NAME`, etc.) are stripped from public output until finalized.
