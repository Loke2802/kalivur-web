import type { Metadata } from "next";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { Container } from "@/components/layout/container";
import integrations from "@/content/integrations.json";

export const metadata: Metadata = {
  title: "Intranet",
  description: "Acceso al espacio de trabajo de Kalivur y Luri.",
  robots: { index: false, follow: false },
};

export default function IntranetPage() {
  const { intranet } = integrations;
  const isStaging = intranet.environment === "staging";
  const available = !isStaging || process.env.NODE_ENV !== "production";

  return (
    <section className="corporate-detail">
      <Container>
        <p className="eyebrow">ESPACIO DE TRABAJO</p>
        <h1>Intranet Kalivur</h1>
        <p className="lead">
          Accede al portal de Luri con tu cuenta para trabajar con las herramientas
          disponibles para tu empresa.
        </p>
        <div className="contact-option">
          <LockKeyhole aria-hidden="true" size={28} />
          <h2 className="mt-4">Portal de Luri</h2>
          <p>
            {!available ? "El acceso para clientes estará disponible próximamente. Contacta con el equipo de Kalivur para conocer las opciones para tu empresa." : isStaging
              ? "El acceso disponible corresponde al entorno de pruebas. El acceso de producción se habilitará cuando esté preparado."
              : "Inicia sesión con la cuenta que te ha asignado el administrador de tu empresa."}
          </p>
          {available && <a className="button w-fit" href={intranet.url}>
            {isStaging ? "Entrar al portal de pruebas" : "Entrar al portal"}
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>}
        </div>
      </Container>
    </section>
  );
}


