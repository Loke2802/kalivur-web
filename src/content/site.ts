export const siteConfig = {
  name: "Kalivur",
  description:
    "Empleados Digitales con inteligencia artificial para atención, ventas, citas y procesos de negocio.",
  demoHref: "/contacto",
  whatsappHref: null as string | null,
};

export const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Casos de uso", href: "/casos-de-uso" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export const solutions = [
  {
    title: "Atención al cliente",
    description: "Responde preguntas frecuentes, orienta clientes y deriva casos especiales.",
  },
  {
    title: "Ventas y seguimiento",
    description: "Califica oportunidades, recupera conversaciones y acompaña al cliente hasta el siguiente paso.",
  },
  {
    title: "Citas y reservas",
    description: "Consulta disponibilidad, recopila datos y ayuda a confirmar citas o reservas.",
  },
  {
    title: "Operaciones internas",
    description: "Conecta información y automatiza tareas repetitivas entre equipos y sistemas.",
  },
];

export const useCases = [
  {
    title: "Clínicas y consultorios",
    description: "Atiende consultas, ordena solicitudes de cita y deriva situaciones que requieren intervención humana.",
  },
  {
    title: "Spas y centros de bienestar",
    description: "Mantiene conversaciones activas, orienta servicios y ayuda a coordinar reservas sin sobrecargar recepción.",
  },
  {
    title: "Servicios profesionales",
    description: "Filtra consultas, recopila información inicial y mantiene cada oportunidad encaminada al siguiente paso.",
  },
  {
    title: "Equipos comerciales",
    description: "Da continuidad a leads, organiza seguimientos y conecta conversaciones con el proceso comercial.",
  },
];

export const benefits = [
  "Disponibilidad continua",
  "Experiencia consistente para el cliente",
  "Menos trabajo repetitivo",
  "Conversaciones y acciones trazables",
  "Integración con herramientas existentes",
  "Escalamiento a una persona cuando hace falta",
];
