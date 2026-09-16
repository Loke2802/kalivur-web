import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import "./corporate.css";
import { SiteChat } from "@/components/chat/site-chat";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/content/site";
const manrope=Manrope({subsets:["latin"],variable:"--font-manrope"}); const space=Space_Grotesk({subsets:["latin"],variable:"--font-space"});
export const metadata: Metadata={metadataBase:new URL(siteConfig.url),title:{default:"Kalivur | Tecnología, diseño y negocios",template:"%s | Kalivur"},description:siteConfig.description,openGraph:{type:"website",locale:"es_PE",siteName:"Kalivur",title:"Kalivur | Tecnología, diseño y negocios",description:siteConfig.description}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body className={`${manrope.variable} ${space.variable}`}><Navbar/><main>{children}</main><Footer/><SiteChat/></body></html>}
