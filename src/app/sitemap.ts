import type { MetadataRoute } from "next";
const routes=["","/soluciones","/casos-de-uso","/nosotros","/contacto"];
export default function sitemap(): MetadataRoute.Sitemap { const base=process.env.NEXT_PUBLIC_SITE_URL; if(!base) return []; return routes.map((route)=>({url:`${base}${route}`,changeFrequency:route===""?"weekly":"monthly",priority:route===""?1:.7})); }
