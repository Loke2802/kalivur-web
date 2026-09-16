# CRM de Kalivur – implementación y acceso

El CRM se implementó en el backend/portal existente de Luri. Código:
D:/Kalivur Web/.luri-backend, rama codex/intranet-crm.
La ficha comercial complementa los contactos cifrados; no crea una base
paralela en la web pública.

## Uso

Abrir https://staging-api.kalivur.com/portal, iniciar sesión con la cuenta
existente y seleccionar Clientes. Este entorno es de pruebas: usar datos ficticios.

- Nuevo contacto: nombre y WhatsApp con código de país.
- Abrir ficha: editar clasificación, servicio, responsable, seguimiento y notas.
- Clasificación: Prospecto, Cliente o Inactivo.
- Pendientes: muestra seguimientos cuya fecha ya llegó; no envía mensajes.
- Archivo: conserva datos y permite reactivar con el permiso correspondiente.
- Nombre: filtro de la página actual; paginación y clasificación consultan la API.
- Teléfono/notas: visibles solo para roles con permiso de información sensible.

## Desarrollo y pruebas

PR https://github.com/Loke2802/BotWA-Starter/pull/41 integrado.
Versión: 4f763909e3bd150d8d8ae13fbce3eab867a37b31.
CI: https://github.com/Loke2802/BotWA-Starter/actions/runs/35091528432
949 pruebas aprobadas en la suite general, 39 omitidas por entorno.
37 pruebas PostgreSQL aprobadas, ninguna omitida, incluida edición concurrente.
Controles de calidad y seguridad de imagen aprobados.

Imagen: ghcr.io/loke2802/botwa-starter:sha-4f763909e3bd150d8d8ae13fbce3eab867a37b31
Digest: sha256:70cd19b72d12cb7e7baca4ff106786fb843f8a0e523eb0083f69824717ed6358

Migración: 20260916_0023. Añade customer_profile con relaciones que obligan
a que contacto y responsable pertenezcan a la misma empresa.
El job de migración en DigitalOcean completó el despliegue
383e8fcf-c63d-4ffa-9985-d386e7619bfb, antes de actualizar el portal.
El panel de la base administrada mostró recuperación hasta 7 días,
con opción de última transacción. No se creó un clúster adicional.

El acceso de producción de la web comercial continúa pendiente.
La información detallada está en .luri-backend/docs/CRM_INTRANET.md.

## Despliegue del portal confirmado

DigitalOcean: a6bf9cb1-7931-4d2c-a80f-c404c63a1652, SUCCESS / LIVE DEPLOYMENT.
El recurso /portal/assets/crm.js responde 200 y contiene la interfaz nueva.
GET /organizations/{empresa}/crm/customers sin sesión responde 401.
La sesión previa del navegador del portal había caducado; no se restablecieron
contraseñas ni se crearon accesos adicionales.

## Comprobación final — 16 de septiembre de 2026

- DigitalOcean muestra el despliegue del CRM activo y Healthy.
- GET /health/ready devuelve {"status":"ready"} después del despliegue.
- El portal muestra el formulario de inicio de sesión. Queda pendiente la
  comprobación funcional autenticada en staging con la cuenta existente.
- La migración completó el job previo al despliegue; no se logró ejecutar
  la consulta adicional de inspección directa del esquema por la consola web.
- /version conserva un SHA anterior debido a BOTWA_BUILD_SHA configurado
  en el entorno. La imagen desplegada se verificó por su digest y por el
  recurso nuevo crm.js. Pendiente alinear esa variable de metadatos.
- Producción no fue activada; esta entrega corresponde al entorno de pruebas.

## Verificación autenticada completada — 16 de septiembre de 2026

Con la sesión que inició el usuario en staging se actualizó la página y se
comprobó la interfaz Clientes y oportunidades. Se creó el contacto ficticio
Prueba CRM 2026-09-16 (+12025550148), se reabrió su ficha, se editaron las
notas y se confirmó su persistencia después de recargar completamente el portal.
Finalmente se archivó ese registro: desapareció de la lista activa y el contador
volvió de cuatro a tres contactos. No se enviaron mensajes ni se modificaron
los contactos preexistentes. Esta comprobación resuelve el pendiente de acceso
autenticado indicado antes; producción sigue sin activarse.
