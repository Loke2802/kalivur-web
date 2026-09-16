# Kalivur: web, edición y clientes

## Organización del producto

- `/`: presentación corporativa y acceso a las áreas.
- `/nosotros`: quiénes somos, propósito y forma de trabajo.
- `/soluciones`: catálogo de servicios y próximas áreas de marketing.
- `/luri`: presentación de Luri y acceso al chat.
- `/site`: página propia de Kalivur Site.
- `/contacto`: canales comerciales.
- `/intranet`: acceso al portal existente de Luri. Actualmente apunta al entorno
  de pruebas, claramente identificado; no sustituye la autenticación del portal.

## Componentes y responsabilidad

| Componente | Responsabilidad | Estado |
| --- | --- | --- |
| Next.js, este proyecto | Páginas públicas y navegación | Implementado localmente |
| CMS de contenido | Textos, imágenes, orden de bloques y enlaces | Pendiente de integración |
| Portal Luri | Acceso de usuarios y herramientas por empresa | Enlace al portal de pruebas configurado |
| API Luri + PostgreSQL | Contactos privados y futura ampliación CRM | Modelo existente revisado; captura web pendiente |
| Chat público | Interfaz para consultar a Luri | Interfaz disponible; endpoint de producción pendiente |
| Proveedor de pagos | Cobro y confirmación de transacciones | Preparado en configuración; deshabilitado |
| n8n | Automatizaciones posteriores a eventos | Integración futura |

## Edición manual

El objetivo es un CMS con biblioteca de imágenes y páginas formadas por bloques
ordenables. Cada servicio tendrá su ruta, título, imagen, contenido y botones.
Publicar contenido debe ser independiente de modificar código de componentes.
El CMS nunca contendrá contactos ni credenciales. Aún no hay un editor visual
operativo: la configuración actual se edita en archivos y requiere reconstruir
la web para publicar cambios.

`src/content/integrations.json` centraliza el destino de intranet y la reserva de
configuración de pagos. Cambiar el proveedor o enlace de pago no debe obligar a
rediseñar las páginas. `payments.enabled` permanece en `false` y ningún botón
de cobro se muestra mientras no exista una configuración verificada.

Un enlace de pago solo dirige al proveedor. La activación automática de servicios
requerirá un webhook autenticado, validación del importe y moneda en el backend,
y procesamiento idempotente. La vuelta del navegador a una página de éxito no
demuestra por sí sola que se pagó.

## Clientes y base de datos

La base principal será PostgreSQL de Luri, con aislamiento por empresa. El modelo
existente y las ampliaciones previstas están en [database/README.md](../database/README.md).
La web está exportada como archivos estáticos: no puede conectarse directamente
a PostgreSQL. Las escrituras se harán mediante una API del backend de Luri.

## Publicación y repositorios

El sitio público está alojado en Sites bajo `kalivur.com`. El repositorio
`Loke2802/kalivur-web` conserva su proyecto previo de Metalmecánica Echegaray.
La versión corporativa actual y Kalivur Site se incorporan en `kalivur/`,
como aplicación independiente, mediante rama y PR sin reemplazar esa historia.
El CRM y backend están en `Loke2802/BotWA-Starter`; su verificación actual
se documenta en `CRM_INTRANET.md`.

## Próximos pasos verificables

1. Integrar el CMS y comprobar edición, carga de imágenes, reordenación y publicación.
2. Terminar la aplicación de los recursos de marca y revisar escritorio y móvil.
3. Conectar el chat al backend correcto con información publicada de Kalivur.
4. Integrar la captura de clientes y verificarla en PostgreSQL y en la intranet.
5. Preparar la rama de GitHub conservando el proyecto remoto existente.
6. Publicar una versión comprobada, manteniendo visibles los estados reales de
   cada servicio, y verificar HTTPS y rutas directas.
