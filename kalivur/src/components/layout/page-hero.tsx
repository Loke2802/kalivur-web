import { Container } from "./container";
export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) { return <section className="page-hero"><Container><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{text}</p></Container></section>; }
