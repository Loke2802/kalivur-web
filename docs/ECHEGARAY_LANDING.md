# Metalmecánica Echegaray landing

## Scope and baseline review

Route: `/metalmecanica-echegaray`. Intended production URL: `https://kalivur.com/metalmecanica-echegaray`.

Reviewed `AGENTS.md`, the complete `docs/MVP_SPEC.md`, `main` at `2dfd5c6`, and all seven existing commits on `feat/metalmecanica-echegaray-landing` through `05acff5`. Main contains documentation, not the implemented Kalivur MVP. The separate `feat/implement-mvp-website` branch is outside this change.

Kept the existing Next.js / React / Tailwind / Lucide stack and Kalivur root page and metadata. Fixed the anonymous PostCSS configuration export, added an explicit typecheck script and npm lockfile, and retained Next.js-generated TypeScript setup and agent guidance. Removed unused provisional image selectors from global CSS; the new visual system is scoped in a CSS module.

## Implementation

- Spanish content is centralized in `src/content/echegaray.ts`.
- Static Server Component sections; a small client component closes the native mobile menu after navigation or Escape.
- Eight WhatsApp links use `https://wa.me/51978919969` with encoded general, model, or special-order messages. No messages are sent automatically.
- Covers 40 years of experience, 400+ developed models, cast iron, Stahl, traditional/commercial brands and brands of Chinese origin, special orders, six process steps, machinery, customer business types, and the supplied address.
- Route-specific metadata, canonical URL, Open Graph text, and provisional ME favicon. Sitemap lists both implemented pages; robots references that sitemap.
- No added application dependencies, backend, database, form submission, store, payment, or dynamic catalog.

## Visual assets and pending decisions

The industrial photograph is **provisional and referential**, not the actual Echegaray workshop or a photograph of its valve guides. The page labels it explicitly and includes attribution and license links. See `public/images/ATTRIBUTION.md` for the Wikimedia source, author, CC BY-SA 4.0 license, and display cropping. Screenshot reproductions of this photograph retain those terms.

ME and Stahl are typeset placeholders, pending official brand assets. Replace the image with approved real workshop/product photography when available. Tolerances, hardness, metallurgy, certifications, standards, and specific vehicle brands are intentionally absent because they were not confirmed. No invented customers or testimonials.

## Validation

Validated on Windows with Node.js and the committed package versions:

| Check | Result |
| --- | --- |
| `npm install` | Passed; 0 reported vulnerabilities. npm reported an inherited ESLint 9 deprecation and optional-package cleanup warning. |
| `npm run lint` | Passed, no ESLint errors or warnings after fixing PostCSS export. |
| `npm run typecheck` | Passed. |
| `npm run build` | Passed; both pages and metadata routes statically prerendered. |
| `npm run start -- --hostname 127.0.0.1 --port 3001` | Production build served successfully. |
| HTTP requests | `/`, `/metalmecanica-echegaray`, `/robots.txt`, `/sitemap.xml`, and the route icon all returned 200. |
| Responsive browser review | 375, 768, 1024, and 1440 px; no horizontal overflow. Desktop and full mobile screenshots included. |
| Navigation and contact | All fragment targets exist; mobile Contact navigation reaches its section and closes the menu. All eight WhatsApp destinations use the supplied number. Model and special-order messages checked. Maps uses the supplied address. |
| Accessibility | One h1, semantic headings, alt text, keyboard-reachable navigation, visible 3px focus outline, skip link, and reduced-motion CSS. |
| Assets and metadata | Local image loads; Spanish title, description, and canonical checked in browser. Root retains Kalivur content and metadata. |
| Dependency changes | No new application package; Prettier ran temporarily without modifying package dependencies. |

The sandbox initially blocked Google Fonts. The unchanged `next/font/google` Inter setup built successfully with network access. Builds need access to Google Fonts; browsers receive the self-hosted font from Next.js.

Screenshots: `docs/screenshots/echegaray-hero.png`, `echegaray-1440.png`, `echegaray-375.png`. These are locally served production-build screenshots, not evidence of a public production deployment.

## Publication

Deliver through a draft pull request targeting `main`; no automatic merge. Confirm the Vercel preview deployment, if connected, and review the landing before merging. If Vercel is not connected, import `Loke2802/kalivur-web` as a Next.js project, use the repository root, `npm ci`, and `npm run build`, and select `main` as the production branch. Confirm that `kalivur.com` belongs to that project before publishing. After approved merge, verify the intended public route. This document does not assert that the landing is already in production.
