# Base de datos de clientes

## Decisión

El sistema de registro de clientes será PostgreSQL de **Kalivur–Luri**. La web
corporativa no mantendrá otra base de clientes ni guardará datos personales en
GitHub, en archivos de contenido público o en el navegador como almacenamiento
principal. El CMS se dedicará al contenido público de la web.

El modelo existente se verificó en el código de Luri el 15 de septiembre de 2026:
`app/infrastructure/models/contact.py` del proyecto BotWA Starter. Esta revisión
confirma el modelo en código; no verifica la existencia de una base de producción
ni aplica cambios en ninguna base remota.

## Estructura existente que se reutiliza

| Entidad / campo | Uso |
| --- | --- |
| `organization` | Empresa propietaria de los datos |
| `contact.id` | Identificador UUID del contacto |
| `contact.organization_id` | Empresa a la que pertenece; obligatorio |
| `contact.channel_type` | Canal por el que se identifica al contacto |
| `contact.external_identifier_hash` | Búsqueda de identidad sin guardar el identificador en claro |
| `contact.external_identifier_ciphertext` | Identificador cifrado |
| `contact.display_name_ciphertext` | Nombre cifrado |
| `contact.notes_ciphertext` | Notas cifradas |
| `contact.status` | `active` o `archived`; no representa la etapa comercial |
| `contact.created_by_user_id`, `updated_by_user_id` | Autoría cuando corresponde |
| `contact.created_at`, `updated_at` | Fechas del registro |

La clave única existente combina empresa, canal y hash del identificador.
No se debe fusionar automáticamente a personas de canales diferentes usando
únicamente su nombre. La deduplicación debe usar la normalización y los servicios
de cifrado de Luri, no una implementación independiente en la web.

## Ampliación prevista del CRM

Avance del 16 de septiembre: customer_profile está implementado en el backend y su migración se desplegó en staging. Las demás entidades siguen pendientes. Ver [CRM de la intranet](../docs/CRM_INTRANET.md).

- `customer_profile`: organización, contacto, clasificación comercial
  (`lead`, `customer`, `inactive`), servicio de interés, responsable y fechas.
  Nombre, teléfono y correo se resuelven a través del sistema de identidades de
  Luri; no se duplican en columnas de texto sin cifrar.
- `lead_submission`: organización, contacto, origen (`website`, `webchat`), página,
  identificador de solicitud para idempotencia, consulta cifrada y fecha.
- `consent_event`: organización, contacto, finalidad, versión del aviso mostrado,
  aceptación o revocación y fecha. Consultar no implica suscribirse a marketing.
- `payment_record`: organización, cliente, proveedor, referencia externa única,
  importe, moneda, estado verificado y fechas. Nunca números de tarjeta ni CVV.

Las relaciones deben impedir asociar registros entre empresas. Las migraciones
Alembic vivirán en el repositorio del backend de Luri, junto a sus modelos y
pruebas. No se incluye SQL para ejecutar a ciegas contra un esquema posiblemente
distinto del desplegado.

## Flujo que se implementará al conectar la captura

1. El visitante decide enviar sus datos desde un formulario o el chat.
2. La API valida y limita la petición; la organización se determina en el servidor.
3. El servicio de contactos de Luri normaliza, cifra y busca o crea el contacto.
4. Una transacción registra el contacto, la consulta y el evento de consentimiento
   que corresponda. Una clave de idempotencia evita duplicados por reintentos.
5. Solo después del commit se confirma al visitante que se guardó su solicitud.
6. La intranet permite revisar los datos según los permisos de la empresa.
7. Si se incorpora n8n, procesa eventos posteriores al guardado con credenciales
   de servicio limitadas; no es el almacén principal de clientes.

El chat actual es de consulta y **no guarda clientes**. Su historial visible es
temporal. El enlace a WhatsApp tampoco acredita que un cliente haya sido guardado.

### Avance de conexión: registro inicial

Se implementó `POST /website/public/contacts` en una rama aislada de Luri y el
formulario de contacto de esta web. Reutiliza `contact`, cifra nombre y teléfono,
registra consentimiento en las notas del contacto nuevo y no modifica contactos
ya existentes. No requiere migración. Además de las pruebas locales, se verificó
la captura real en PostgreSQL de staging y el reintento sin duplicados. La evidencia
está en [integration/STAGING_STATUS.md](../integration/STAGING_STATUS.md).

El formulario aparece únicamente al configurar `NEXT_PUBLIC_LURI_CONTACTS_URL`.
En staging se debe usar `NEXT_PUBLIC_LURI_CONTACTS_ENVIRONMENT=staging` para mostrar
el aviso de datos ficticios. No se ha conectado la web comercial a la base de pruebas.

## Condiciones para activar el almacenamiento real

- Identificar backend y base de producción, sin usar el entorno de pruebas para
  datos comerciales reales.
- Confirmar organización Kalivur, usuario administrador y permisos del CRM.
- Implementar el endpoint de captura en Luri, sus migraciones y pruebas de
  aislamiento entre empresas, reintentos y fallos de transacción.
- Verificar escritura y lectura real desde la intranet con un registro de prueba
  controlado, y su posterior eliminación.
- Configurar copias de seguridad y comprobar restauración antes de uso comercial.

Las credenciales de PostgreSQL y las claves de cifrado permanecen exclusivamente
en el backend. Nunca deben usar el prefijo `NEXT_PUBLIC_`.

