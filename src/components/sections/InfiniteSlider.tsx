"use client";

import { Palette, Code2, Network, Users, Lightbulb, TrendingUp, Handshake, BookOpen, Star, } from "lucide-react";

// Cada ítem tiene texto + icono propio
const SLIDER_ITEMS = [
  { text: "Diseño sin fronteras",        icon: <Palette   size={15} aria-hidden="true" /> },
  { text: "Tecnología en español",       icon: <Code2     size={15} aria-hidden="true" /> },
  { text: "Networking real",             icon: <Network   size={15} aria-hidden="true" /> },
  { text: "Comunidad hispanohablante",   icon: <Users     size={15} aria-hidden="true" /> },
  { text: "Innovación colectiva",        icon: <Lightbulb size={15} aria-hidden="true" /> },
  { text: "Crecimiento profesional",     icon: <TrendingUp size={15} aria-hidden="true" /> },
  { text: "Colaboración auténtica",      icon: <Handshake size={15} aria-hidden="true" /> },
  { text: "Conocimiento compartido",     icon: <BookOpen  size={15} aria-hidden="true" /> },
  { text: "Talento latinoamericano",     icon: <Star      size={15} aria-hidden="true" /> },
];

export function InfiniteSlider() {
  // Se triplico para un loop absolutamente continuo sin saltos
  const items = [...SLIDER_ITEMS, ...SLIDER_ITEMS, ...SLIDER_ITEMS];

  return (
    <div
      className="slider-section"
      aria-label="Características de Design Async"
      role="region"
    >
      <div className="slider-track" aria-hidden="true">
        <div className="slider-inner">
          {items.map((item, i) => (
            <span key={i} className="slider-item">
              <span className="slider-item-icon">{item.icon}</span>
              {item.text}
              <span className="slider-sep" aria-hidden="true">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}