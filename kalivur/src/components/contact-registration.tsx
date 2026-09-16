"use client";

import { useEffect, useState, type FormEvent } from "react";

export function ContactRegistration() {
  const endpoint = process.env.NEXT_PUBLIC_LURI_CONTACTS_URL;
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!endpoint || (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_LURI_CONTACTS_ENVIRONMENT !== "production")) return null;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    const form = event.currentTarget;
    const values = new FormData(form);
    setBusy(true);
    setMessage("");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(endpoint!, {
        method: "POST", headers: { "Content-Type": "application/json" },
        credentials: "omit", signal: controller.signal,
        body: JSON.stringify({ name: String(values.get("name")).trim(),
          whatsapp: String(values.get("whatsapp")).trim(),
          consent: values.get("consent") === "on", notice_version: "contact-registration-v1" }),
      });
      if (!response.ok || (await response.json()).accepted !== true) throw new Error("Unavailable");
      setMessage("Registro recibido. Si ya estabas registrado, conservamos tus datos anteriores.");
      form.reset();
    } catch {
      setMessage("No pudimos confirmar el registro. Puedes reintentar o contactarnos por WhatsApp.");
    } finally {
      clearTimeout(timeout);
      setBusy(false);
    }
  }

  return <div className="contact-option">
    <h2>Registra tu contacto</h2>
    {process.env.NEXT_PUBLIC_LURI_CONTACTS_ENVIRONMENT === "staging" &&
      <p><strong>Entorno de pruebas: utiliza únicamente datos ficticios.</strong></p>}
    <p>Déjanos tu nombre y WhatsApp para consultar por los servicios de Kalivur.</p>
    <form method="post" onSubmit={submit} className="grid max-w-xl gap-4">
      <label className="grid gap-2">Nombre
        <input className="rounded border p-3" name="name" autoComplete="name" required minLength={2} maxLength={120} disabled={busy}/>
      </label>
      <label className="grid gap-2">WhatsApp con código de país
        <input className="rounded border p-3" name="whatsapp" type="tel" autoComplete="tel" placeholder="+51 seguido de tu número" pattern="\+[1-9][0-9]{7,14}" required disabled={busy} aria-describedby="phone-help"/>
      </label>
      <span id="phone-help" className="text-sm">Incluye + y código de país, sin espacios.</span>
      <label className="flex items-start gap-3"><input className="mt-1" type="checkbox" name="consent" required disabled={busy}/>
        <span>Autorizo a Kalivur a guardar mi nombre y WhatsApp para atender mi consulta sobre sus servicios. Esto no me suscribe a publicidad. Puedo solicitar la eliminación de mis datos en kalivur.site@kalivur.com.</span>
      </label>
      <button className="button w-fit" disabled={busy || !ready} type="submit">{busy ? "Guardando…" : "Registrar contacto"}</button>
      <noscript>Activa JavaScript para registrar tu contacto o escríbenos por WhatsApp.</noscript>
      <p role="status" aria-live="polite">{message}</p>
    </form>
  </div>;
}

