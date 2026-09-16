import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/soluciones", "/casos-de-uso", "/nosotros", "/contacto", "/site", "/luri"].map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date() })); }
