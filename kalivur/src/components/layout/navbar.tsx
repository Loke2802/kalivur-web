"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { Container } from "./container";
export function Navbar(){const pathname=usePathname();if(pathname==="/site"||pathname.startsWith("/site/"))return null;const pages=[{label:"Inicio",href:"/"},...siteConfig.navigation,{label:"Contacto",href:"/contacto"}];return <header className="corporate-header"><Container><div className="corporate-header-top"><Link href="/" aria-label="Kalivur, inicio"><Image className="brand-logo" src="/brand/kalivur.png" width={160} height={54} alt="Kalivur" priority/></Link><span>Tecnología y negocios</span></div><nav className="corporate-tabs" aria-label="Páginas de Kalivur">{pages.map(page=><Link key={page.href} href={page.href} aria-current={pathname===page.href?"page":undefined}>{page.label}</Link>)}</nav></Container></header>}
