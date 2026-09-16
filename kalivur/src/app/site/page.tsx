import type { Metadata } from "next";
import { SiteLanding } from "@/components/site/site-landing";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "Kalivur Site | Diseño de páginas web profesionales en Perú" },
  description: "Diseñamos páginas web modernas, rápidas y profesionales para emprendedores, PYMES y empresas. Landing pages desde S/350. Cotiza por WhatsApp.",
  alternates: { canonical: `${siteConfig.url}/site` },
  openGraph: {
    title: "Kalivur Site | Diseño de páginas web profesionales en Perú",
    description: "Páginas web modernas, rápidas y pensadas para convertir visitas en oportunidades reales.",
    url: `${siteConfig.url}/site`,
    type: "website",
    locale: "es_PE",
    siteName: "Kalivur Site",
  },
};

export default function SitePage() {
  return <SiteLanding />;
}
