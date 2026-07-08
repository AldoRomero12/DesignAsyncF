import type { NavItem, Feature, CARD } from "@/types/landing";
import { Home, LayoutDashboard, Sparkles } from "lucide-react";

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#inicio", icon: Home },
  { label: "Plataforma", href: "#about", icon: LayoutDashboard },
  { label: "Características", href: "#caracteristicas", icon: Sparkles  },
];

export const FEATURES: Feature[] = [
  {
    num:      "01",
    category: "Discusión",
    title:    "Espacios donde vale la pena hablar.",
    desc:     "Canales organizados por disciplina, nivel y contexto. No hay ruido, solo conversaciones que construyen.",
    reverse:  false,
    svgKey:   "discusion",
  },
  {
    num:      "02",
    category: "Grupos",
    title:    "Tu tribu dentro de la comunidad.",
    desc:     "Grupos temáticos por disciplina: UX, dev, producto, marketing. Encuentra a los tuyos sin buscar en el ruido.",
    reverse:  true,
    svgKey:   "grupos",
  },
  {
    num:      "03",
    category: "Colaboración",
    title:    "Proyectos reales. Personas reales.",
    desc:     "Colaboración abierta donde miembros de distintas disciplinas co-crean juntos. No teoría - práctica.",
    reverse:  false,
    svgKey:   "colaboracion",
  },
];

export const CARDS: CARD[] = [
  {
    id:       "idioma",
    eyebrow:  "01 - Idioma",
    title:    "En español, sin excusas.",
    desc:     "Todo el contenido, los eventos y el soporte están en español. No una traducción, una experiencia diseñada desde el origen para nuestra comunidad.",
    tags:     ["Español", "Nativo", "Sin barreras"],
    label:    "En tu idioma",
  },
  {
    id:       "comunidad",
    eyebrow:  "02 - Comunidad",
    title:    "Tu comunidad. Tu idioma.",
    desc:     "Design Async es el espacio donde el talento hispanohablante de diseño y tecnología se conecta, colabora y crece sin fronteras ni barreras de idioma.",
    tags:     ["Diseñadores", "Hispanohablante", "Activa"],
    label:    "Design Async",
  },
  {
    id:       "ecosistema",
    eyebrow:  "03 - Ecosistema",
    title:    "Construido para ti.",
    desc:     "No una plantilla. Un ecosistema propio con herramientas, grupos y espacios diseñados específicamente para profesionales como tú.",
    tags:     ["Herramientas", "Grupos", "Recursos"],
    label:    "Tu ecosistema",
  },
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