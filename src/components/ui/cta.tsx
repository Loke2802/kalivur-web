import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PrimaryCta({ href = "/contacto", children = "Solicitar una demo" }: { href?: string; children?: React.ReactNode }) {
  return <Link href={href} className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#292929]">{children}<ArrowRight size={16}/></Link>;
}
