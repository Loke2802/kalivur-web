import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteConfig } from "@/content/site";

const geist = Geist({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Kalivur | Empleados Digitales con IA", template: "%s | Kalivur" },
  description: siteConfig.description,
  openGraph: { title: "Kalivur | Empleados Digitales con IA", description: siteConfig.description, locale: "es_PE", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${geist.className} antialiased`}><SiteHeader/><main>{children}</main><SiteFooter/></body></html>;
}
