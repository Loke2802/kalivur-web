# Conexión de contactos con Luri

El código canónico del backend se preparó en la rama
`codex/website-contact-registration` de BotWA-Starter. Este directorio conserva
una copia del módulo y sus pruebas para facilitar la revisión desde la web.

En el backend el módulo vive en `app/api/public_contacts_routes.py` y `create_app`
llama a `install_public_contacts(app)`. No está habilitado automáticamente.

Variables del backend de pruebas:

```text
LURI_PUBLIC_CONTACTS_ENABLED=true
LURI_PUBLIC_CONTACTS_ORGANIZATION_ID=<UUID del tenant de pruebas>
LURI_PUBLIC_CONTACTS_ORIGINS=http://localhost:3002
```

Variables de construcción de esta web, una vez desplegado el endpoint:

```text
NEXT_PUBLIC_LURI_CONTACTS_URL=https://staging-api.kalivur.com/website/public/contacts
NEXT_PUBLIC_LURI_CONTACTS_ENVIRONMENT=staging
```

No se ponen claves del backend ni contraseñas en variables públicas. Deben
conservarse las claves existentes de cifrado y HMAC del backend.

Alcance: registra nombre y WhatsApp como contacto no verificado; no envía mensajes,
no modifica registros existentes, no almacena un historial de consultas y no
habilita todavía el chat. Para verificar el despliegue, enviar datos ficticios,
consultar el contacto desde el portal autenticado y comprobar que repetir el
registro no crea duplicados. La confirmación del formulario requiere respuesta
satisfactoria del backend. Un fallo conserva los campos para reintentar.

Estado: endpoint desplegado y activo en staging; formulario local y persistencia
real en PostgreSQL verificados, incluido reintento sin duplicados. Ver
[STAGING_STATUS.md](STAGING_STATUS.md) para evidencia y límites de la comprobación.
