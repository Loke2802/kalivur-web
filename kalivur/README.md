# Kalivur Web y Kalivur Site

Sitio corporativo publicado en https://kalivur.com y división de desarrollo web en https://kalivur.com/site.

## Desarrollo

Next.js 14, React, TypeScript y Tailwind CSS. Instalar con `pnpm install --frozen-lockfile`, iniciar con `pnpm dev`, validar con `pnpm lint`, `pnpm typecheck` y `pnpm build`.

## Contactos oficiales

- Kalivur: +51 932 996 303.
- Kalivur Site: +51 912 896 722, kalivur.site@kalivur.com.
- El WhatsApp flotante usa el contacto de Site en `/site` y el de Kalivur en las demás rutas.

## Estructura

- `src/app`: páginas corporativas, Luri, contacto, intranet y Kalivur Site.
- `public`: logos e ilustración pública de Luri.
- `src/content`: contenido y configuración de integraciones.
- `integration`: documentación y adaptadores de referencia para Luri.
- `database` y `docs`: arquitectura, CRM y estado de implementación.

El backend y CRM se mantienen en https://github.com/Loke2802/BotWA-Starter. El CRM está verificado en staging; producción y la integración de IA quedan pendientes. El CMS visual y los pagos tampoco están activados. Consultar `docs/CRM_INTRANET.md`.

## Publicación

Exportación estática `out/` publicada con Sites; `.openai/hosting.json` conserva el identificador de la publicación existente. GitHub almacena el código; un push a GitHub no publica automáticamente en Sites.

Nunca subir `.env.local`, claves, bases de datos, dependencias ni archivos de compilación. `.env.example` documenta únicamente opciones públicas.
