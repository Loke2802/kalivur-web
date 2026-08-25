import Link from "next/link";
import { Menu, MessageCircle } from "lucide-react";
import { navigation, siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[rgba(247,247,243,.88)] backdrop-blur-xl">
      <div className="container-shell flex h-18 items-center justify-between gap-6">
        <Link href="/" className="text-xl font-semibold tracking-[-0.04em]">Kalivur<span className="text-[var(--accent)]">.</span></Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="text-sm text-[var(--muted)] transition hover:text-black">{item.label}</Link>)}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          {siteConfig.whatsappHref && <a href={siteConfig.whatsappHref} className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"><MessageCircle size={16}/>Hablar por WhatsApp</a>}
          <Link href={siteConfig.demoHref} className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white">Solicitar una demo</Link>
        </div>
        <details className="relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-2 text-sm"><Menu size={18}/> Menú</summary>
          <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-[var(--line)] bg-white p-3 shadow-2xl">
            <nav className="grid" aria-label="Navegación móvil">
              {navigation.map((item) => <Link key={item.href} href={item.href} className="rounded-xl px-3 py-3 text-sm hover:bg-black/5">{item.label}</Link>)}
              <Link href={siteConfig.demoHref} className="mt-2 rounded-xl bg-black px-3 py-3 text-center text-sm font-semibold text-white">Solicitar una demo</Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
