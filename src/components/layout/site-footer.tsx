import Link from "next/link";
import { navigation, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] py-12">
      <div className="container-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div><div className="text-lg font-semibold">Kalivur.</div><p className="mt-3 max-w-xl text-sm leading-6 text-[var(--muted)]">{siteConfig.description}</p></div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--muted)]" aria-label="Pie de página">{navigation.map((item)=><Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      </div>
      <div className="container-shell mt-8 border-t border-[var(--line)] pt-5 text-xs text-[var(--muted)]">© {new Date().getFullYear()} Kalivur. Todos los derechos reservados.</div>
    </footer>
  );
}
