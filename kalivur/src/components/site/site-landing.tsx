"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, BarChart3, Check, ChevronDown, Code2, Gauge, Globe2,
  LayoutTemplate, Menu, MessageCircle, MousePointerClick, PanelTop,
  PenTool, Search, Settings2, ShieldCheck, Smartphone, Sparkles, X,
} from "lucide-react";
import { useState } from "react";
import styles from "./site-landing.module.css";

const whatsapp = "https://wa.me/51912896722?text=Hola%2C%20vi%20Kalivur%20Site%20y%20quiero%20cotizar%20una%20p%C3%A1gina%20web.";

const nav = [
  ["Servicios", "#servicios"], ["Portafolio", "#portafolio"],
  ["Cómo trabajamos", "#proceso"], ["Precio", "#precio"], ["FAQ", "#faq"],
] as const;

const services = [
  { icon: LayoutTemplate, title: "Landing Pages", text: "Una página enfocada en presentar tu oferta y convertir visitas en consultas." },
  { icon: Globe2, title: "Web Corporativa", text: "Una presencia digital sólida para comunicar quién eres, qué haces y por qué elegirte." },
  { icon: PanelTop, title: "Catálogo Web", text: "Muestra tus productos o servicios de forma clara, ordenada y fácil de consultar." },
  { icon: Settings2, title: "Mejora y mantenimiento", text: "Optimizamos, actualizamos y cuidamos la web que tu negocio ya tiene." },
];

const benefits = [
  [PenTool, "Diseño profesional"], [Smartphone, "Adaptada a celulares"], [Gauge, "Carga rápida"],
  [MessageCircle, "Integración con WhatsApp"], [MousePointerClick, "Formularios"], [Search, "SEO básico"],
  [BarChart3, "Analítica"], [ShieldCheck, "Soporte"],
] as const;

const faqs = [
  ["¿Cuánto demora una página web?", "Una landing suele estar lista entre 7 y 15 días hábiles. El plazo final depende del alcance y de la entrega de contenidos."],
  ["¿El dominio está incluido?", "Podemos ayudarte a elegirlo y registrarlo. Su costo se cotiza aparte para que siempre quede a tu nombre."],
  ["¿El hosting está incluido?", "Podemos incluir la configuración del hosting en la propuesta según las necesidades de tu proyecto."],
  ["¿Puedo usar mi dominio actual?", "Sí. Conectamos tu dominio actual a la nueva web sin que pierdas su propiedad."],
  ["¿La página funciona en celulares?", "Sí. Diseñamos cada página para que se vea y funcione correctamente en celular, tablet y computadora."],
  ["¿Puedo pedir cambios?", "Sí. La propuesta incluye una etapa de revisión para ajustar el diseño y el contenido acordado."],
  ["¿Incluye mantenimiento?", "El mantenimiento puede añadirse como servicio mensual o solicitarse cuando lo necesites."],
  ["¿La página será mía?", "Sí. Al completar el proyecto, la web y sus accesos quedan bajo tu control."],
  ["¿Puedo agregar más funciones después?", "Claro. Construimos una base que puede crecer con nuevas secciones, formularios e integraciones."],
] as const;

function Brand({ priority = false }: { priority?: boolean }) {
  return <span className={styles.brand}><Image src="/site/kalivur-site-logo.png" alt="Kalivur Site — Páginas web para hacer crecer tu negocio" width={1600} height={400} priority={priority}/></span>;
}

function WebMockup() {
  return <div className={styles.mockupStage} aria-label="Vista ilustrativa de una web en laptop y celular" role="img">
    <div className={styles.orbOne}/><div className={styles.orbTwo}/>
    <div className={styles.laptop}>
      <div className={styles.laptopTop}>
        <span/><span/><span/><i>kalivur.com</i>
      </div>
      <div className={styles.laptopScreen}>
        <div className={styles.miniNav}><b>K.</b><i/><i/><button>Contacto</button></div>
        <div className={styles.miniHero}>
          <small>CREAMOS EXPERIENCIAS DIGITALES</small>
          <strong>Una web que hace<br/><em>crecer tu negocio.</em></strong>
          <span>Diseño estratégico para marcas que quieren avanzar.</span>
          <button>Empecemos <ArrowRight size={11}/></button>
        </div>
        <div className={styles.miniCards}><i/><i/><i/></div>
      </div>
      <div className={styles.laptopBase}/>
    </div>
    <div className={styles.phone}>
      <div className={styles.phoneSpeaker}/><div className={styles.phoneScreen}>
        <b>K.</b><small>TU NEGOCIO,<br/>SIEMPRE ABIERTO.</small><i/><i/><i/>
      </div>
    </div>
    <div className={styles.floatBadge}><Sparkles size={16}/><span><b>Diseño a medida</b><small>para tu negocio</small></span></div>
  </div>;
}

function ProjectVisual({ variant }: { variant: "kalivur" | "metal" | "concept" }) {
  return <div className={`${styles.projectVisual} ${styles[variant]}`} aria-hidden="true">
    <div className={styles.projectBrowser}><span/><span/><span/><i/></div>
    {variant === "kalivur" && <><small>KALIVUR SITE</small><strong>Tu negocio merece<br/>una web que trabaje.</strong><b/></>}
    {variant === "metal" && <><small>ECHEGARAY</small><strong>Ingeniería que<br/>construye futuro.</strong><div className={styles.metalShape}/></>}
    {variant === "concept" && <><div className={styles.conceptGrid}/><span className={styles.conceptPill}>TU PRÓXIMO PROYECTO</span></>}
  </div>;
}

export function SiteLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return <div className={styles.siteShell}>
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/site" aria-label="Kalivur Site, inicio"><Brand priority/></Link>
        <nav className={styles.desktopNav} aria-label="Navegación de Kalivur Site">
          {nav.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <a className={`${styles.button} ${styles.headerCta}`} href={whatsapp} target="_blank" rel="noreferrer">Quiero mi web <ArrowRight size={16}/></a>
        <button className={styles.menuButton} onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
      {menuOpen && <nav className={styles.mobileNav} aria-label="Navegación móvil">
        {nav.map(([label, href]) => <a href={href} onClick={() => setMenuOpen(false)} key={href}>{label}</a>)}
        <a className={styles.button} href={whatsapp} target="_blank" rel="noreferrer">Quiero mi web <ArrowRight size={16}/></a>
      </nav>}
    </header>

    <main>
      <section className={styles.hero} id="inicio">
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span/> Diseño web para negocios que quieren crecer</p>
            <h1>Tu negocio merece una web que <em>trabaje por ti.</em></h1>
            <p className={styles.lead}>Diseñamos páginas web modernas, rápidas y pensadas para convertir visitas en oportunidades reales.</p>
            <div className={styles.actions}>
              <a className={styles.button} href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Cotiza por WhatsApp</a>
              <a className={styles.secondaryButton} href="#portafolio">Ver trabajos <ArrowRight size={17}/></a>
            </div>
            <div className={styles.quickBenefits}>{["Responsive", "SEO básico", "WhatsApp", "Soporte"].map(x => <span key={x}><Check size={13}/>{x}</span>)}</div>
          </div>
          <WebMockup/>
        </div>
      </section>

      <section className={styles.problem}>
        <div className={`${styles.container} ${styles.problemGrid}`}>
          <div><p className={styles.eyebrow}><span/> El costo de una mala presencia digital</p><h2>Una mala web también puede hacerte <em>perder clientes.</em></h2></div>
          <div className={styles.problemList}>{[
            ["01", "Se ve antigua", "Tu negocio pierde credibilidad en segundos."], ["02", "No funciona bien en celular", "La mayoría de tus clientes navega desde su teléfono."],
            ["03", "Carga lento", "Cada segundo de espera aumenta el abandono."], ["04", "No genera consultas", "Una web sin estrategia solo ocupa espacio."],
          ].map(([n,t,d]) => <article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><X size={18}/></article>)}</div>
        </div>
        <div className={`${styles.container} ${styles.problemClose}`}><Sparkles size={20}/><p><b>Kalivur Site</b> convierte tu presencia digital en una herramienta comercial.</p></div>
      </section>

      <section className={styles.section} id="servicios">
        <div className={styles.container}>
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}><span/> Lo que construimos</p><h2>Una web para cada etapa de <em>tu negocio.</em></h2></div><p>Soluciones claras, bien diseñadas y construidas alrededor de lo que necesitas lograr.</p></div>
          <div className={styles.serviceGrid}>{services.map(({icon:Icon,title,text},i)=><article className={styles.serviceCard} key={title}><span className={styles.cardNumber}>0{i+1}</span><div className={styles.iconBox}><Icon size={23}/></div><h3>{title}</h3><p>{text}</p><a href={whatsapp} target="_blank" rel="noreferrer" aria-label={`Cotizar ${title}`}>Cuéntanos tu idea <ArrowRight size={16}/></a></article>)}</div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className={`${styles.container} ${styles.benefitsGrid}`}>
          <div className={styles.benefitsIntro}><p className={styles.eyebrow}><span/> Nuestro estándar</p><h2>No hacemos páginas <em>por hacerlas.</em></h2><p>Cada decisión de diseño tiene una función: ayudarte a comunicar mejor, generar confianza y facilitar el contacto.</p><div className={styles.codeBadge}><Code2 size={19}/><span>Diseño + Tecnología + Estrategia</span></div></div>
          <div className={styles.benefitList}>{benefits.map(([Icon,label],i)=><div key={label}><span>0{i+1}</span><Icon size={20}/><b>{label}</b><Check size={17}/></div>)}</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.portfolio}`} id="portafolio">
        <div className={styles.container}>
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}><span/> Trabajo seleccionado</p><h2>Mira lo que podemos <em>construir.</em></h2></div><p>Cada proyecto combina claridad, personalidad y una experiencia pensada para sus clientes.</p></div>
          <div className={styles.projectGrid}>
            <article className={styles.projectCard}><ProjectVisual variant="kalivur"/><div className={styles.projectMeta}><div><span>Diseño web · Landing page</span><h3>Kalivur Site</h3><p>Servicios digitales</p></div><a href="#inicio" aria-label="Ver proyecto Kalivur Site"><ArrowRight/></a></div></article>
            <article className={styles.projectCard}><ProjectVisual variant="metal"/><div className={styles.projectMeta}><div><span>Web corporativa</span><h3>Metalmecánica Echegaray</h3><p>Industria metalmecánica</p></div><span className={styles.projectStatus}>Próximamente</span></div></article>
            <article className={`${styles.projectCard} ${styles.conceptCard}`}><ProjectVisual variant="concept"/><div className={styles.projectMeta}><div><span>Concepto</span><h3>Tu proyecto puede estar aquí</h3><p>Diseñemos algo que represente tu negocio.</p></div><a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Cotizar un proyecto"><ArrowRight/></a></div></article>
          </div>
        </div>
      </section>

      <section className={styles.process} id="proceso">
        <div className={styles.container}>
          <div className={styles.processHeader}><div><p className={styles.eyebrow}><span/> Un proceso simple y claro</p><h2>Primero entendemos tu negocio. <em>Después construimos.</em></h2></div><p>Te acompañamos de principio a fin, con comunicación clara y avances visibles.</p></div>
          <div className={styles.processLine}>{[
            ["Brief", "Conocemos tu negocio, objetivos y público."], ["Propuesta", "Definimos alcance, tiempos y solución."], ["Diseño", "Creamos una dirección visual para tu marca."], ["Desarrollo", "Convertimos el diseño en una web rápida."], ["Publicación", "Probamos todo y dejamos tu web en línea."],
          ].map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><div className={styles.processDot}/><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className={styles.price} id="precio">
        <div className={styles.container}>
          <div className={styles.priceCard}><div className={styles.priceGlow}/><div><p className={styles.eyebrow}><span/> Una inversión clara para empezar</p><h2>Páginas web <em>desde S/350</em></h2><p>Cada negocio es diferente. Cuéntanos qué necesitas y te preparamos una propuesta a medida.</p></div><div className={styles.priceAction}><span>Hablemos de tu proyecto</span><a className={styles.lightButton} href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Cotizar por WhatsApp</a><small>Respuesta directa, sin compromiso.</small></div></div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={`${styles.container} ${styles.aboutGrid}`}><div className={styles.aboutMark}><span>K</span><i>SITE</i></div><div><p className={styles.eyebrow}><span/> Sobre Kalivur Site</p><h2>Tecnología, diseño y negocio <em>en un solo equipo.</em></h2><p>Kalivur Site es la división de desarrollo web de Kalivur. Combinamos diseño, tecnología y visión comercial para construir soluciones digitales que acompañen el crecimiento de nuestros clientes.</p><div className={styles.aboutTags}><span>Diseño estratégico</span><span>Desarrollo moderno</span><span>Visión comercial</span></div></div></div>
      </section>

      <section className={styles.faq} id="faq">
        <div className={`${styles.container} ${styles.faqGrid}`}><div className={styles.faqIntro}><p className={styles.eyebrow}><span/> Preguntas frecuentes</p><h2>Todo claro antes de <em>empezar.</em></h2><p>Si tienes otra pregunta, conversemos directamente por WhatsApp.</p><a href={whatsapp} target="_blank" rel="noreferrer">Hablar con nosotros <ArrowRight size={16}/></a></div><div className={styles.accordion}>{faqs.map(([q,a],i)=><div className={styles.faqItem} key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span>{q}</span><ChevronDown className={openFaq===i?styles.rotate:""} size={19}/></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></div>
      </section>

      <section className={styles.finalCta} id="contacto">
        <div className={styles.ctaGrid}/><div className={styles.container}><div className={styles.ctaInner}><p className={styles.eyebrow}><span/> Hagamos algo que funcione</p><h2>Tu próxima web puede <em>empezar hoy.</em></h2><p>Cuéntanos sobre tu negocio y te ayudamos a encontrar la solución adecuada.</p><a className={styles.lightButton} href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={19}/> Hablar con Kalivur Site</a><div className={styles.contactData}><a href="https://wa.me/51912896722" target="_blank" rel="noreferrer">+51 912 896 722</a><a href="mailto:kalivur.site@kalivur.com">kalivur.site@kalivur.com</a></div></div></div>
      </section>
    </main>

    <footer className={styles.footer}><div className={styles.container}><div className={styles.footerGrid}><div><Brand/><p>Diseñamos páginas web que ayudan a los negocios a verse mejor, comunicar con claridad y crecer.</p></div><div><b>Explora</b><a href="#servicios">Servicios</a><a href="#portafolio">Portafolio</a><a href="#proceso">Cómo trabajamos</a><a href="#precio">Precio</a></div><div><b>Contacto</b><a href="https://wa.me/51912896722" target="_blank" rel="noreferrer">+51 912 896 722</a><a href="mailto:kalivur.site@kalivur.com">kalivur.site@kalivur.com</a></div></div><div className={styles.footerBottom}><span>Kalivur Site, una división de Kalivur.</span><span>© 2026 Kalivur</span></div></div></footer>
  </div>;
}
