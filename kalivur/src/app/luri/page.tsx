import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, CalendarDays, Users } from "lucide-react";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = { title: "Luri, tu aliada digital", description: "Conoce a Luri: atención, organización y tecnología al servicio de tu negocio. Una solución de Kalivur adaptada a tu empresa." };

export default function LuriPage() {
  return <section className="corporate-detail luri-page"><Container>
    <div className="luri-intro"><div>
      <p className="eyebrow">LA ASISTENTE DIGITAL DE KALIVUR</p>
      <h1>Hola, soy Luri.<br/><span>Tu negocio, mejor acompañado.</span></h1>
      <p className="lead">Ayudo a que la atención de tus clientes sea más clara, cercana y organizada. Tú conoces tu negocio; juntos preparamos la información y los procesos que necesitas.</p>
      <Link className="button w-fit" href="/contacto">Quiero conocer Luri</Link>
    </div><div className="luri-portrait">
      <Image src="/brand/luri-character.png" alt="Luri, la asistente digital de Kalivur, te da la bienvenida con la mano extendida" width={1184} height={1344} priority sizes="(max-width: 760px) 85vw, 420px"/>
      <p>Más tiempo para lo que importa.</p>
    </div></div>
    <div className="luri-section-heading"><p className="eyebrow">PENSADA PARA TU DÍA A DÍA</p><h2>Una aliada para atender y organizar.</h2></div>
    <div className="business-grid luri-benefits">
      <article className="business-card"><MessageCircle aria-hidden="true"/><h3>Consultas con contexto</h3><p>Preparamos a Luri con la información de tus servicios para orientar a tus clientes y dar respuestas coherentes con tu negocio.</p></article>
      <article className="business-card"><CalendarDays aria-hidden="true"/><h3>Un siguiente paso claro</h3><p>Definimos cómo acompañar cada consulta: solicitar información, registrar un contacto o avanzar hacia una cita, según las conexiones de tu proyecto.</p></article>
      <article className="business-card"><Users aria-hidden="true"/><h3>Tu equipo al centro</h3><p>La tecnología acompaña a las personas. Diseñamos contigo cuándo interviene tu equipo y cómo dar continuidad a la atención.</p></article>
    </div>
    <div className="luri-process"><div><p className="eyebrow">LURI PARA TU EMPRESA</p><h2>Empezamos por escucharte.</h2><p>Cada negocio tiene preguntas, procesos y prioridades diferentes. Por eso acordamos el alcance antes de poner a Luri a trabajar.</p></div><ol><li><strong>Conocemos tu negocio</strong><span>Servicios, clientes y consultas habituales.</span></li><li><strong>Preparamos la experiencia</strong><span>Información, tono y herramientas necesarias.</span></li><li><strong>Probamos contigo</strong><span>Revisamos las respuestas y la atención antes de activar el servicio.</span></li></ol></div>
    <div className="overview-news"><div><h2>Conversemos sobre lo que necesitas.</h2><p>Descubre cómo podría acompañar Luri a tu empresa.</p></div><Link href="/contacto">Consultar por Luri →</Link></div>
  </Container></section>;
}
