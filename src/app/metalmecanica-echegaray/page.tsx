import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  MapPin,
  MessageCircle,
  Settings2,
  Store,
  Truck,
  Wrench,
  Factory,
} from "lucide-react";
import {
  echegaray as content,
  mapsUrl,
  whatsappUrl,
} from "@/content/echegaray";
import styles from "./page.module.css";
import { MobileMenu } from "./mobile-menu";

const title = "Metalmecánica Echegaray | Guías de válvula en Lima";
const description =
  "40 años fabricando guías de válvula de fierro fundido. Más de 400 modelos para principales marcas comerciales y marcas de origen chino. Fabricación especial a pedido en Lima, Perú.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "https://kalivur.com/metalmecanica-echegaray" },
  openGraph: {
    title,
    description,
    locale: "es_PE",
    type: "website",
    url: "https://kalivur.com/metalmecanica-echegaray",
    siteName: content.name,
  },
};

function WhatsApp({
  children = content.labels.whatsapp,
  message,
  className = "",
}: {
  children?: React.ReactNode;
  message?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.whatsapp} ${className}`}
    >
      <MessageCircle size={19} aria-hidden="true" />
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}

function Brand() {
  return (
    <a
      href="#inicio"
      className={styles.brand}
      aria-label={`${content.name} — ${content.labels.back}`}
    >
      <span className={styles.brandMark} aria-hidden="true">
        ME
        <span />
      </span>
      <span>
        <small>METALMECÁNICA</small>
        <strong>ECHEGARAY</strong>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navInner}>
        <Brand />
        <nav className={styles.desktopNav} aria-label="Navegación principal">
          {content.nav.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <WhatsApp className={styles.navCta}>
          {content.labels.shortWhatsapp}
        </WhatsApp>
        <MobileMenu />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <>
      <section id="inicio" className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <span />
            {content.hero.eyebrow}
          </p>
          <h1>
            {content.hero.title}
            <br />
            <em>{content.hero.emphasis}</em>
          </h1>
          <p className={styles.heroSubtitle}>{content.hero.subtitle}</p>
          <p className={styles.heroDescription}>{content.hero.description}</p>
          <div className={styles.heroActions}>
            <WhatsApp />
            <a className={styles.textLink} href="#productos">
              {content.labels.products}
              <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
          <p className={styles.location}>
            <MapPin size={15} aria-hidden="true" />
            {content.hero.location}
            <span> / </span>Stahl
          </p>
        </div>
        <figure className={styles.heroImage}>
          <Image
            src="/images/echegaray-machining.jpg"
            alt={content.hero.alt}
            fill
            preload
            sizes="(max-width: 900px) 100vw, 52vw"
          />
          <div className={styles.imageOverlay} />
          <div className={styles.imageTop}>
            <span>
              STAHL
              <span className={styles.stahlLine} />
            </span>
            <span className={styles.imageLabel}>{content.labels.image}</span>
          </div>
          <figcaption>
            <small>{content.hero.figureText}</small>
            <p>{content.hero.figureLabel}</p>
            <span>{content.hero.caption}</span>
            <span className={styles.imageCredit}>
              <a
                href={content.hero.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.hero.credit}
              </a>{" "}
              ·{" "}
              <a
                href={content.hero.license}
                target="_blank"
                rel="noopener noreferrer"
              >
                CC BY-SA 4.0
              </a>{" "}
              · {content.hero.crop}
            </span>
          </figcaption>
        </figure>
      </section>
      <section className={styles.quick}>
        <div>
          <h2>{content.quick.title}</h2>
          <p>{content.quick.text}</p>
        </div>
        <WhatsApp>{content.phone}</WhatsApp>
      </section>
    </>
  );
}

function Company() {
  return (
    <section id="empresa" className={styles.company}>
      <div className={styles.stats}>
        {content.stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
      <div className={styles.companyBody}>
        <div>
          <p className={styles.eyebrow}>{content.company.eyebrow}</p>
          <h2>{content.company.title}</h2>
        </div>
        <div className={styles.companyText}>
          <p>{content.company.text}</p>
          <p>{content.company.detail}</p>
          <span className={styles.companyNote}>
            <span />
            {content.company.note}
          </span>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="productos" className={styles.products}>
      <div className={styles.sectionHeading}>
        <div>
          <p className={styles.eyebrow}>{content.products.eyebrow}</p>
          <h2>{content.products.title}</h2>
        </div>
        <p>{content.products.intro}</p>
      </div>
      <div className={styles.productGrid}>
        <article className={styles.standardProduct}>
          <div className={styles.productTop}>
            <span className={styles.tag}>{content.products.standard.tag}</span>
            <span className={styles.stahl}>
              Stahl<span>GUÍAS DE VÁLVULA</span>
            </span>
          </div>
          <Settings2
            size={44}
            strokeWidth={1.3}
            className={styles.productIcon}
            aria-hidden="true"
          />
          <h3>{content.products.standard.title}</h3>
          <p>{content.products.standard.text}</p>
          <ul>
            {content.products.standard.features.map((feature) => (
              <li key={feature}>
                <Check size={17} aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
          <WhatsApp message={content.productMessage}>
            {content.products.standard.cta}
          </WhatsApp>
        </article>
        <article className={styles.customProduct}>
          <span className={styles.tag}>{content.products.custom.tag}</span>
          <div className={styles.customBody}>
            <span className={styles.customNumber} aria-hidden="true">
              A MEDIDA
            </span>
            <h3>{content.products.custom.title}</h3>
            <p>{content.products.custom.text}</p>
            <p className={styles.customDetail}>
              {content.products.custom.detail}
            </p>
          </div>
          <WhatsApp message={content.specialMessage}>
            {content.products.custom.cta}
          </WhatsApp>
        </article>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="fabricacion" className={styles.process}>
      <div className={styles.sectionHeading}>
        <div>
          <p className={styles.eyebrow}>{content.process.eyebrow}</p>
          <h2>{content.process.title}</h2>
        </div>
        <p>{content.process.intro}</p>
      </div>
      <ol className={styles.steps}>
        {content.process.steps.map((step, index) => (
          <li key={step.title}>
            <span className={styles.stepNumber}>
              0{index + 1}
              <ArrowRight size={18} aria-hidden="true" />
            </span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
      <div className={styles.machines}>
        <span>
          <Factory size={19} aria-hidden="true" />
          {content.process.machinesLabel}
        </span>
        <ul>
          {content.process.machines.map((machine) => (
            <li key={machine}>{machine}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Audience() {
  const icons = [Store, Settings2, Truck, Wrench];
  return (
    <section className={styles.audience}>
      <div className={styles.sectionHeading}>
        <div>
          <p className={styles.eyebrow}>{content.audience.eyebrow}</p>
          <h2>{content.audience.title}</h2>
        </div>
        <p>{content.audience.text}</p>
      </div>
      <div className={styles.audienceGrid}>
        {content.audience.items.map((item, index) => {
          const Icon = icons[index];
          return (
            <article key={item.title}>
              <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <>
      <section id="contacto" className={styles.contact}>
        <div>
          <p className={styles.eyebrow}>{content.contact.eyebrow}</p>
          <h2>{content.contact.title}</h2>
          <p className={styles.contactDescription}>{content.contact.text}</p>
          <WhatsApp>{content.labels.open}</WhatsApp>
        </div>
        <div className={styles.contactDetails}>
          <div>
            <span>{content.contact.phoneLabel}</span>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.phone}
            >
              {content.phone}
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div>
            <span>{content.contact.addressLabel}</span>
            <address>{content.address}</address>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.textLink}
            >
              {content.labels.map}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <Brand />
        <p>{content.contact.footer}</p>
        <span>{content.contact.made}</span>
      </footer>
    </>
  );
}

export default function EchegarayPage() {
  return (
    <div className={styles.site}>
      <a href="#contenido" className={styles.skip}>
        {content.labels.skip}
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Company />
        <Products />
        <Process />
        <Audience />
        <Contact />
      </main>
      <a
        className={styles.floatingWhatsapp}
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${content.labels.whatsapp} — ${content.phone}`}
      >
        <MessageCircle size={25} aria-hidden="true" />
        <span>{content.labels.shortWhatsapp}</span>
      </a>
    </div>
  );
}
