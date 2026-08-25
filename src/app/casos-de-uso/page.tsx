import { PageHero } from "@/components/sections/page-hero";
import { PrimaryCta } from "@/components/ui/cta";
import { useCases } from "@/content/site";
export const metadata={title:"Casos de uso"};
export default function UseCasesPage(){return <><PageHero eyebrow="Casos de uso" title="Automatización aplicada a situaciones concretas" description="No partimos de una industria genérica: partimos de conversaciones, tareas y decisiones que hoy absorben tiempo de tu equipo."/><section className="container-shell pb-24"><div className="grid gap-4 md:grid-cols-2">{useCases.map((u)=><article key={u.title} className="card p-7"><h2 className="text-2xl font-semibold">{u.title}</h2><p className="mt-4 leading-7 text-[var(--muted)]">{u.description}</p></article>)}</div><div className="mt-10"><PrimaryCta>Evaluar mi caso</PrimaryCta></div></section></>}
