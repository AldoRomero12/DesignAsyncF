import type { NavItem, Feature, Testimonial, SliderItem, } from "@/types/landing";

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Plataforma", href: "#about" },
  { label: "Características", href: "#caracteristicas" },
  { label: "Comunidad", href: "#testimonios" },
];

export const FEATURES: Feature[] = [
  {
    icon: "MessageSquare",
    title: "Espacios de discusión",
    description:
      "Canales temáticos organizados por disciplina, nivel y área de interés.",
    badge: "Próximamente",
  },
  {
    icon: "Briefcase",
    title: "Networking profesional",
    description:
      "Perfiles verificados, portafolios y conexiones con propósito real.",
    badge: "Próximamente",
  },
  {
    icon: "Globe",
    title: "Eventos virtuales",
    description:
      "Agenda integrada de eventos, conferencias y sesiones abiertas para toda la comunidad.",
    badge: "Próximamente",
  },
  {
    icon: "Rocket",
    title: "Recursos compartidos",
    description:
      "Biblioteca colaborativa de herramientas, plantillas, tutoriales y referencias.",
    badge: "Próximamente",
  },
  {
    icon: "Users",
    title: "Grupos temáticos",
    description:
      "Comunidades dentro de la comunidad: UX, dev, producto, marketing y más.",
    badge: "Próximamente",
  },
  {
    icon: "Lightbulb",
    title: "Colaboración activa",
    description:
      "Proyectos abiertos donde miembros de distintas disciplinas co-crean juntos.",
    badge: "Próximamente",
  },
];

// NOTA: Los testimonios son ficticios y solo sirven como demostración visual.
// Deben ser reemplazados por testimonios reales antes del lanzamiento.
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Valentina Pérez",
    role: "UX Designer Senior",
    country: "México",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    content:
      "Finalmente una comunidad que habla mi idioma, no solo en el literal, sino en lo profesional. El nivel de las conversaciones es increíble.",
  },
  {
    name: "Mateo Guzmán",
    role: "Frontend Engineer",
    country: "México",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    content:
      "Encontré mi primer cliente freelance gracias a una conexión hecha aquí. La calidad del networking es otro nivel.",
  },
  {
    name: "Camila Torres",
    role: "Product Manager",
    country: "Argentina",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    content:
      "Los eventos son lo que más valoro. Cada sesión me deja con algo accionable para aplicar al día siguiente.",
  },
  {
    name: "Andrés Novelo",
    role: "Design Lead",
    country: "México",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    content:
      "Una plataforma construida con criterio. Se nota que quienes la crearon entienden lo que los profesionales realmente necesitan.",
  },
  {
    name: "Lucía Fernández",
    role: "Brand Strategist",
    country: "España",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    content:
      "Llevo años buscando una comunidad así en español. Design Async llena un vacío enorme en el ecosistema latinoamericano.",
  },
  {
    name: "Diego Paredes",
    role: "Full Stack Developer",
    country: "Argentina",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    content:
      "La calidad de los recursos compartidos aquí supera lo que encontraba en comunidades en inglés. Y el ambiente es mucho más colaborativo.",
  },
];

export const SLIDER_ITEMS: SliderItem[] = [
  { text: "Diseño sin fronteras" },
  { text: "·", accent: true },
  { text: "Tecnología en español" },
  { text: "·", accent: true },
  { text: "Networking real" },
  { text: "·", accent: true },
  { text: "Comunidad hispanohablante" },
  { text: "·", accent: true },
  { text: "Innovación colectiva" },
  { text: "·", accent: true },
  { text: "Crecimiento profesional" },
  { text: "·", accent: true },
  { text: "Colaboración auténtica" },
  { text: "·", accent: true },
  { text: "Conocimiento compartido" },
  { text: "·", accent: true },
  { text: "Talento latinoamericano" },
  { text: "·", accent: true },
  { text: "Diseño sin fronteras" },
  { text: "·", accent: true },
  { text: "Tecnología en español" },
  { text: "·", accent: true },
  { text: "Networking real" },
  { text: "·", accent: true },
  { text: "Comunidad hispanohablante" },
  { text: "·", accent: true },
  { text: "Innovación colectiva" },
  { text: "·", accent: true },
];

export const SOCIAL_LINKS = [
  { platform: "Twitter",   href: "#", icon: "FaXTwitter" },
  { platform: "LinkedIn",  href: "#", icon: "FaLinkedinIn" },
  { platform: "Instagram", href: "#", icon: "FaInstagram" },
  { platform: "Facebook",   href: "#", icon: "FaFacebook" },
];

export const FOOTER_NAV = [
  {
    group: "Plataforma",
    links: [
      { label: "Características", href: "#caracteristicas" },
      { label: "Beneficios", href: "#beneficios" },
      { label: "Comunidad", href: "#testimonios" },
      { label: "Eventos", href: "#" },
    ],
  },
  {
    group: "Empresa",
    links: [
      { label: "Sobre Guanet", href: "#" },
      { label: "Design Async", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contacto", href: "#" },
    ],
  },
  {
    group: "Legal",
    links: [
      { label: "Términos de uso", href: "#" },
      { label: "Privacidad", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];