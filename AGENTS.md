# AGENTS.md — Kalivur Web

## Project goal
Build the public MVP website for Kalivur, a technology company that creates AI-powered Digital Employees for businesses.

The website must be designed to generate trust and convert visitors into demo requests or WhatsApp conversations.

## Working language
- Source code, file names, commits, and technical comments: English.
- Public website copy: Spanish.
- Keep the copy centralized so internationalization can be added later.

## Required stack
- Next.js with App Router
- React
- TypeScript with strict mode
- Tailwind CSS
- Lucide React for icons
- Vercel-ready deployment

Do not add a backend, database, authentication, CMS, analytics platform, or paid dependency during this phase.
Do not add Framer Motion unless motion cannot be achieved cleanly with CSS.

## Product positioning
Kalivur builds Digital Employees powered by artificial intelligence to automate customer service, sales, appointments, and internal business processes.

The initial commercial focus is small and medium businesses, especially clinics, medical offices, spas, and service businesses.

Kalivur is not positioned as a cheap chatbot provider. It is a business automation and AI solutions company focused on measurable outcomes.

## MVP scope
Implement one polished landing page at `/` with these sections:

1. Sticky navigation
2. Hero
3. Trust/value strip
4. Problems Kalivur solves
5. Solutions / Digital Employees
6. How Kalivur works
7. Initial use cases
8. Product preview / dashboard concept
9. Business benefits
10. Final call to action
11. Footer

Create placeholder routes that reuse the main layout:
- `/soluciones`
- `/casos-de-uso`
- `/nosotros`
- `/contacto`

Do not create a blog in this phase.

## Primary conversion actions
- Primary CTA: `Solicitar una demo`
- Secondary CTA: `Hablar por WhatsApp`

Until real URLs are provided:
- Demo CTA should link to `/contacto`.
- WhatsApp CTA must use a clearly named placeholder constant and must not contain a fake phone number.

## Design direction
The experience should feel modern, premium, calm, and technically credible.

Reference qualities:
- strong typography
- generous whitespace
- restrained gradients
- subtle grid or glow details
- clean cards
- clear visual hierarchy
- high contrast and accessible controls
- smooth, subtle transitions

Avoid:
- generic AI robot imagery
- excessive neon
- crowded layouts
- heavy glassmorphism
- autoplay media
- exaggerated claims or invented statistics
- copying another company's visual identity

## Responsive requirements
Design mobile-first and verify at approximately:
- 375 px
- 768 px
- 1024 px
- 1440 px

Navigation must work on mobile. No horizontal overflow is acceptable.

## Accessibility
- Semantic HTML landmarks and heading hierarchy
- Keyboard-accessible navigation and controls
- Visible focus states
- Sufficient contrast
- Respect `prefers-reduced-motion`
- Useful alt text for meaningful images
- Decorative visuals hidden from screen readers

## SEO
Implement:
- Next.js metadata
- Spanish title and description
- Open Graph metadata
- robots configuration
- sitemap
- favicon placeholders when no final asset exists

Do not invent social handles, addresses, phone numbers, client logos, testimonials, or legal company details.

## Code architecture
Prefer a clear structure such as:

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    soluciones/page.tsx
    casos-de-uso/page.tsx
    nosotros/page.tsx
    contacto/page.tsx
  components/
    layout/
    sections/
    ui/
  content/
    site.ts
  lib/
    utils.ts
public/
```

Guidelines:
- Use Server Components by default.
- Add `use client` only when required.
- Keep page sections in focused components.
- Centralize navigation, CTA labels, contact placeholders, and landing-page content in `src/content/site.ts`.
- Use reusable primitives instead of repeating long Tailwind class strings.
- Avoid premature abstraction and unnecessary state management.
- Use `next/font` for typography.
- Use `next/image` for raster assets.

## Quality gates
Before finishing:
- Install dependencies successfully.
- Run lint.
- Run TypeScript checking if it is not included in lint/build.
- Run production build.
- Fix all errors and warnings caused by the implementation.
- Check all internal links.
- Confirm responsive navigation and CTA behavior.

## Delivery workflow
1. Inspect the repository before changing files.
2. Read `docs/MVP_SPEC.md` fully.
3. Create a feature branch.
4. Implement the complete MVP rather than stopping at scaffolding.
5. Keep commits coherent and descriptive.
6. Open a draft pull request with:
   - summary
   - screenshots or visual evidence when available
   - validation commands and results
   - remaining placeholders or decisions

Do not merge directly into `main`.
