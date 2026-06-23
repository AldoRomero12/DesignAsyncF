"use client";

import { Globe, Layers, Zap, Users, BookOpen, Network, Trophy, MessageSquare, Lightbulb, ArrowRight,} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

/* Datos */
const PILLARS = [
  {
    icon: <Globe size={22} />,
    title: "En tu idioma",
    desc: "Todo el contenido, eventos y soporte en español. Sin barreras, sin traducciones.",
    color: "pillar-blue",
  },
  {
    icon: <Layers size={22} />,
    title: "Multidisciplinario",
    desc: "Diseño, desarrollo, producto y marketing convergen en un solo espacio.",
    color: "pillar-purple",
  },
  {
    icon: <Zap size={22} />,
    title: "Orientado a resultados",
    desc: "Conexiones reales que generan oportunidades, proyectos y crecimiento.",
    color: "pillar-yellow",
  },
  {
    icon: <Users size={22} />,
    title: "Comunidad viva",
    desc: "Más de 500 profesionales activos que comparten, colaboran y se impulsan.",
    color: "pillar-green",
  },
];

const FOR_WHO = [
  { icon: <Users size={14} />,       text: "Diseñadores UX/UI que quieren conectar con pares" },
  { icon: <Lightbulb size={14} />,   text: "Desarrolladores buscando colaboración real" },
  { icon: <Trophy size={14} />,      text: "Product managers que buscan inspiración y networking" },
  { icon: <Network size={14} />,     text: "Freelancers construyendo su reputación profesional" },
  { icon: <BookOpen size={14} />,    text: "Equipos que quieren visibilidad en la comunidad" },
  { icon: <MessageSquare size={14}/>, text: "Estudiantes en busca de orientación auténtica" },
];

/* Componente */
export function About() {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section
      id="about"
      ref={ref}
      className={`about-section reveal-section ${isVisible ? "is-visible" : ""}`}
      aria-labelledby="about-heading"
    >
      <div className="section-container">

        {/* Header */}
        <div className="section-header">
          <span className="section-eyebrow">La plataforma</span>
          <h2 className="section-title" id="about-heading">
            ¿Qué es{" "}
            <span className="text-accent">Design Async</span>?
          </h2>
          <p className="section-desc">
            El espacio que la comunidad hispanohablante estaba esperando. Un lugar construido en nuestro idioma,
            para que el talento latino no tenga fronteras.
          </p>
        </div>

        {/* Pillars */}
        <div className="about-pillars-grid">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className={`about-pillar-card ${p.color}`}
            >
              <div className="about-pillar-icon" aria-hidden="true">
                {p.icon}
              </div>
              <h3 className="about-pillar-title">{p.title}</h3>
              <p className="about-pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        {/*Para quién + CTA */}
        <div className="about-bottom">

          {/* Descripción principal */}
          <div className="about-desc-block">
            <h3 className="about-desc-heading">
              Construida para profesionales como tú
            </h3>
            <p className="about-desc-body">
              <strong>Design Async</strong> es la plataforma de comunidad creada
              por <strong>Guanet</strong> para conectar a profesionales del diseño
              y la tecnología en todo el mundo hispanohablante. Un espacio donde
              el conocimiento fluye, las oportunidades se construyen y los
              proyectos nacen de la colaboración genuina.
            </p>
            <p className="about-desc-body">
              Creemos que el talento latinoamericano no necesita traducirse.
              Por eso construimos un ecosistema propio, en nuestro idioma,
              con nuestra cultura y para nuestros objetivos.
            </p>
            <a href="#caracteristicas" className="btn btn-publish about-cta">
              Ver características
              <span aria-hidden="true"><ArrowRight size={16} /></span>
            </a>
          </div>

          {/* Para quién */}
          <div className="about-forwho">
            <p className="about-forwho-label">¿Para quién es Design Async?</p>
            <ul className="about-forwho-list">
              {FOR_WHO.map((item) => (
                <li key={item.text} className="about-forwho-item">
                  <span className="about-forwho-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}