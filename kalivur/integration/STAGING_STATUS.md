# Estado de conexión — 15 septiembre 2026

- PR backend: https://github.com/Loke2802/BotWA-Starter/pull/40 (integrado).
- Commit publicado: `bb913fd98987f7750773023f2571a4da36851873`.
- CI de master: `35012715006`, todos los trabajos aprobados, incluida publicación GHCR.
- Imagen: `ghcr.io/loke2802/botwa-starter:sha-bb913fd98987f7750773023f2571a4da36851873`.
- Digest: `sha256:5f418b70e123d05ecf452bdbe317ddde3a4149c75545db9df7afc46022a64d38`.
- API de DigitalOcean actualizada; despliegue `7f92e1fd-5bfa-41de-afdd-3b80a0b66764` confirmado «went live».
- Worker y job conservan su versión anterior; no hay cambios de esquema.
- Formulario local: `http://localhost:3002/contacto`, con aviso de datos ficticios.
- Configuración local en `.env.local` (ignorada por Git).

## Conexión verificada

Las tres variables `LURI_PUBLIC_CONTACTS_*` se guardaron tras la autorización
explícita del usuario. Se conservaron los valores y el alcance Run time de las
variables existentes de WhatsApp. Despliegue de activación:
`eaa7a1c9-7abf-46c6-b3ea-5e18e5dac231`, confirmado «went live».

- Preflight real: HTTP 200 y origen permitido `http://localhost:3002`.
- Primer envío desde el formulario: respuesta satisfactoria del backend.
- Consulta de PostgreSQL desde la consola de la API: un contacto, nombre correcto
  y nombre almacenado cifrado.
- Segundo envío desde el formulario, mismo teléfono y otro nombre: respuesta
  satisfactoria. Nueva consulta a PostgreSQL: un contacto y nombre original intacto.
- Registro ficticio conservado para revisión: `Prueba Web Kalivur 2026-09-15`,
  teléfono de ficción `+12025550147`, en la organización Kalivur de staging.

El portal perdió la sesión antes de consultar Clientes. La persistencia se verificó
directamente en PostgreSQL a través de la consola autorizada de DigitalOcean; la
revisión visual de ese contacto en el portal requiere volver a iniciar sesión.

Se reparó la caché local de Next.js que devolvía 404 para `main-app.js`. El formulario
ahora espera a que JavaScript esté listo y usa método POST como alternativa segura
para evitar incluir datos personales en una URL si falla la carga del cliente.

Esta conexión está activa únicamente para la web local de pruebas. No se publicó
el formulario en el dominio comercial ni se activó el chat de Luri.
