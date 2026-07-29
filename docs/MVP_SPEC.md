# Kalivur Web — MVP Specification

## Objective
Launch a professional public website that explains Kalivur clearly, builds trust, and converts visitors into demo requests or WhatsApp conversations.

This is a fast MVP. It must look polished and be easy to update later, but it must avoid unnecessary features.

## Audience
Primary audience:
- owners and managers of small and medium businesses
- clinics, medical offices, spas, and service businesses
- teams losing leads or time because of slow, manual communication

## Core message
Kalivur creates AI-powered Digital Employees that help businesses respond, sell, schedule, and operate more efficiently.

## Main landing page

### 1. Navigation
Brand: Kalivur

Links:
- Inicio
- Soluciones
- Casos de uso
- Nosotros
- Contacto

Actions:
- Hablar por WhatsApp
- Solicitar una demo

### 2. Hero
Eyebrow:
`Inteligencia artificial aplicada a negocios`

Headline:
`Empleados Digitales que trabajan para tu empresa 24/7`

Supporting copy:
`Automatizamos atención, ventas, citas y procesos internos con inteligencia artificial diseñada alrededor de tu negocio.`

Primary CTA:
`Solicitar una demo`

Secondary CTA:
`Conocer las soluciones`

Visual direction:
Create a custom, code-based product composition showing a WhatsApp-style conversation connected to a compact operations dashboard. Do not use stock robot imagery.

### 3. Value strip
Use short, credible statements without invented percentages:
- Atención continua
- Respuestas más rápidas
- Procesos conectados
- Supervisión humana

### 4. Problems section
Heading:
`Tu empresa no debería perder oportunidades por responder tarde`

Problems:
- consultas sin responder
- tareas repetitivas
- citas y seguimientos manuales
- información dispersa entre herramientas

### 5. Solutions section
Heading:
`Un equipo digital para cada parte del negocio`

Cards:

#### Atención al cliente
Responde preguntas frecuentes, orienta clientes y deriva casos especiales.

#### Ventas y seguimiento
Califica oportunidades, recupera conversaciones y acompaña al cliente hasta el siguiente paso.

#### Citas y reservas
Consulta disponibilidad, recopila datos y ayuda a confirmar citas o reservas.

#### Operaciones internas
Conecta información y automatiza tareas repetitivas entre equipos y sistemas.

### 6. How it works
Heading:
`Tecnología adaptada a tu operación, no al revés`

Steps:
1. Diagnóstico
2. Diseño del empleado digital
3. Integración e implementación
4. Medición y mejora continua

### 7. Use cases
Initial cards:
- Clínicas y consultorios
- Spas y centros de bienestar
- Servicios profesionales
- Equipos comerciales

Each card should describe a practical outcome, not a generic industry summary.

### 8. Product preview
Heading:
`Control humano, operación inteligente`

Show a polished dashboard mockup with:
- conversations
- pending handoffs
- appointments
- response status
- recent activity

Important:
- label all figures as sample data or use neutral values
- do not present invented customer results
- this is a conceptual preview, not a finished SaaS product claim

### 9. Benefits
Heading:
`Más capacidad sin aumentar la carga operativa`

Benefits:
- disponibilidad continua
- consistent customer experience
- less repetitive work
- traceable conversations and actions
- integration with existing tools
- human escalation when needed

Public copy must remain in Spanish.

### 10. Final CTA
Headline:
`Convierte tus procesos repetitivos en una ventaja competitiva`

Copy:
`Conversemos sobre el primer Empleado Digital que puede implementar tu empresa.`

CTA:
`Solicitar una demo`

### 11. Footer
Include:
- short Kalivur description
- navigation
- contact placeholder
- social link placeholders
- copyright

Do not invent contact information or legal pages. Hide unavailable links or mark them clearly as pending in configuration, not in visible production copy.

## Placeholder pages

### `/soluciones`
Explain the four solution categories in more detail and lead to demo request.

### `/casos-de-uso`
Show initial industries and operational examples without fabricated client stories.

### `/nosotros`
Present Kalivur as a company combining business understanding, automation, and AI. Keep it concise. Do not invent team size, founding history, offices, investors, or certifications.

### `/contacto`
Create a clean contact page with:
- name
- company
- email
- WhatsApp or phone optional
- area to automate
- message

For this MVP, the form may be UI-only with a clear implementation note in code. It must not falsely display a successful submission to a nonexistent backend. Provide a mailto fallback only when a real email is configured.

## Visual system
Default direction:
- light-first interface
- near-black text
- warm white or very light neutral background
- one restrained Kalivur brand accent
- subtle blue/violet secondary glow only where useful
- rounded corners, but not overly soft
- thin borders
- moderate shadows
- editorial typography combined with product UI details

Codex may choose the exact initial tokens and document them in CSS variables. They must be centralized and easy to replace when the final brand system is confirmed.

## Interaction
- subtle reveal and hover transitions
- no distracting scroll hijacking
- no unnecessary carousel
- no autoplay video
- reduced-motion support

## Technical acceptance criteria
- Next.js App Router
- TypeScript strict
- Tailwind CSS
- responsive from mobile to desktop
- accessible navigation
- reusable components
- centralized content/configuration
- valid metadata, sitemap, and robots
- production build passes
- lint passes
- no fake business data
- no broken links
- ready for Vercel deployment

## Deferred decisions
These must remain easy to update later:
- final logo assets
- final brand palette
- real WhatsApp number
- real contact email
- domain and production URL
- analytics
- form backend
- legal pages
- real product screenshots
- testimonials and client logos
