import { PageHero } from "@/components/sections/page-hero";
import { PrimaryCta } from "@/components/ui/cta";
import { solutions } from "@/content/site";

export const metadata = { title: "Soluciones" };
export default function SolutionsPage(){return <><PageHero eyebrow="Soluciones" title="Empleados Digitales para los procesos que más tiempo consumen" description="Diseñamos automatización alrededor del trabajo real de tu empresa: conversar, vender, coordinar y conectar información."/><section className="container-shell pb-24"><div className="grid gap-4 md:grid-cols-2">{solutions.map((s,i)=><article key={s.title} className="card p-7"><span className="text-xs font-semibold text-[var(--accent)]">0{i+1}</span><h2 className="mt-8 text-2xl font-semibold">{s.title}</h2><p className="mt-3 leading-7 text-[var(--muted)]">{s.description}</p><p className="mt-6 text-sm text-[var(--muted)]">La implementación se define según tus herramientas, reglas y puntos de control humano.</p></article>)}</div><div className="mt-10"><PrimaryCta/></div></section></>}
