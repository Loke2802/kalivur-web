export const siteConfig = {
  name: "Kalivur",
  description: "Kalivur conecta tecnología, diseño web e inteligencia artificial para acompañar el crecimiento de tu negocio.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kalivur.com",
  navigation: [
    { label: "Quiénes somos", href: "/nosotros" }, { label: "Servicios", href: "/soluciones" },
    { label: "Luri", href: "/luri" }, { label: "Kalivur Site", href: "/site" },
    { label: "Intranet", href: "/intranet" },
  ],
};
export const contactConfig = { email: null, whatsappUrl: null, demoUrl: "/contacto" };
export const solutions = [
  { title: "Atención al cliente con IA", text: "Empleados Digitales que responden consultas, orientan a clientes y dan continuidad a cada conversación." },
  { title: "Automatización de procesos", text: "Flujos que conectan mensajes, formularios, agendas y herramientas internas para reducir trabajo repetitivo." },
  { title: "IA aplicada al negocio", text: "Soluciones diseñadas alrededor de los procesos, prioridades y objetivos reales de tu empresa." },
];
export const useCases = ["Clínicas y consultorios", "Spas y centros de bienestar", "Empresas de servicios", "Equipos comerciales", "Atención interna y recursos humanos"];
