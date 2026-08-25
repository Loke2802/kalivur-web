export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="container-shell pb-14 pt-20 sm:pt-28"><p className="eyebrow">{eyebrow}</p><h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-.055em] sm:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">{description}</p></section>;
}
