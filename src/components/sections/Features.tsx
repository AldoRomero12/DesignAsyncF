"use client";

import { ArrowRight } from "lucide-react";
import { FEATURES } from "@/constants/landing";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

function SvgDiscusion() {
  return (
    <svg viewBox="0 0 320 220" fill="none" aria-hidden="true" className="feature-svg">
      <rect x="24" y="30" width="170" height="48" rx="16"
        fill="#C41E1E" opacity="0.1" stroke="#C41E1E" strokeWidth="0.5" strokeOpacity="0.4"/>
      <rect x="40" y="44" width="80" height="8" rx="4" fill="#C41E1E" opacity="0.25"/>
      <rect x="40" y="58" width="130" height="8" rx="4" fill="#C41E1E" opacity="0.15"/>
      <path d="M36 78 L24 90 L52 78" fill="#C41E1E" opacity="0.08"
        stroke="#C41E1E" strokeWidth="0.5" strokeOpacity="0.3"/>
      <rect x="126" y="106" width="170" height="48" rx="16"
        fill="#C41E1E" opacity="0.06" stroke="#C41E1E" strokeWidth="0.5" strokeOpacity="0.25"/>
      <rect x="140" y="120" width="100" height="8" rx="4" fill="#C41E1E" opacity="0.15"/>
      <rect x="140" y="134" width="60" height="8" rx="4" fill="#C41E1E" opacity="0.1"/>
      <path d="M284 154 L296 166 L268 154" fill="#C41E1E" opacity="0.05"
        stroke="#C41E1E" strokeWidth="0.5" strokeOpacity="0.2"/>
      <rect x="40" y="158" width="100" height="36" rx="12"
        stroke="#C41E1E" strokeWidth="0.5" strokeOpacity="0.2"/>
      <rect x="52" y="170" width="60" height="6" rx="3" fill="#C41E1E" opacity="0.12"/>
      <circle cx="36"  cy="96"  r="10" fill="#C41E1E" opacity="0.25"/>
      <circle cx="288" cy="172" r="8"  fill="#C41E1E" opacity="0.15"/>
    </svg>
  );
}

function SvgGrupos() {
  return (
    <svg viewBox="0 0 320 220" fill="none" aria-hidden="true" className="feature-svg">
      <circle cx="160" cy="110" r="65" stroke="#C41E1E" strokeWidth="0.5" strokeOpacity="0.25"/>
      <circle cx="160" cy="110" r="42" stroke="#C41E1E" strokeWidth="0.5" strokeOpacity="0.4"/>
      <circle cx="160" cy="110" r="15"
        fill="#C41E1E" opacity="0.15" stroke="#C41E1E" strokeWidth="0.5"/>
      <circle cx="160" cy="45"  r="10" fill="#C41E1E" opacity="0.6"/>
      <circle cx="217" cy="77"  r="8"  fill="#C41E1E" opacity="0.4"/>
      <circle cx="217" cy="143" r="8"  fill="#C41E1E" opacity="0.3"/>
      <circle cx="160" cy="175" r="6"  fill="#C41E1E" opacity="0.5"/>
      <circle cx="103" cy="143" r="8"  fill="#C41E1E" opacity="0.35"/>
      <circle cx="103" cy="77"  r="8"  fill="#C41E1E" opacity="0.45"/>
      <line x1="160" y1="55"  x2="160" y2="95"  stroke="#C41E1E" strokeWidth="0.5" strokeOpacity="0.4"/>
      <line x1="209" y1="81"  x2="175" y2="100" stroke="#C41E1E" strokeWidth="0.5" strokeOpacity="0.3"/>
      <line x1="209" y1="139" x2="175" y2="120" stroke="#C41E1E" strokeWidth="0.5" strokeOpacity="0.3"/>
      <line x1="160" y1="169" x2="160" y2="125" stroke="#C41E1E" strokeWidth="0.5" strokeOpacity="0.4"/>
      <line x1="111" y1="139" x2="145" y2="120" stroke="#C41E1E" strokeWidth="0.5" strokeOpacity="0.3"/>
      <line x1="111" y1="81"  x2="145" y2="100" stroke="#C41E1E" strokeWidth="0.5" strokeOpacity="0.3"/>
    </svg>
  );
}

function SvgColaboracion() {
  return (
    <svg viewBox="0 0 320 220" fill="none" aria-hidden="true" className="feature-svg">
      <rect x="40"  y="36"  width="100" height="60" rx="6"
        stroke="#C41E1E" strokeWidth="0.5" strokeOpacity="0.3"/>
      <rect x="180" y="36"  width="100" height="60" rx="6"
        fill="#C41E1E" opacity="0.06" stroke="#C41E1E" strokeWidth="0.5" strokeOpacity="0.4"/>
      <rect x="110" y="126" width="100" height="60" rx="6"
        fill="#C41E1E" opacity="0.1"  stroke="#C41E1E" strokeWidth="0.5" strokeOpacity="0.5"/>
      <line x1="140" y1="66"  x2="180" y2="66"
        stroke="#C41E1E" strokeWidth="0.5" strokeOpacity="0.4"/>
      <line x1="90"  y1="96"  x2="130" y2="126"
        stroke="#C41E1E" strokeWidth="0.5" strokeOpacity="0.3"/>
      <line x1="230" y1="96"  x2="190" y2="126"
        stroke="#C41E1E" strokeWidth="0.5" strokeOpacity="0.3"/>
      <circle cx="90"  cy="66"  r="4" fill="#C41E1E" opacity="0.5"/>
      <circle cx="230" cy="66"  r="4" fill="#C41E1E" opacity="0.7"/>
      <circle cx="160" cy="156" r="6" fill="#C41E1E" opacity="0.6"/>
    </svg>
  );
}

/* Mapa svgKey → componente */
const SVG_MAP: Record<string, React.ReactNode> = {
  discusion:    <SvgDiscusion />,
  grupos:       <SvgGrupos />,
  colaboracion: <SvgColaboracion />,
};

export function Features() {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({ once: false });

  return (
    <section id="caracteristicas" className="features-section" aria-labelledby="features-heading">
      <div ref={ref} className={`section-container reveal-section ${isVisible ? "is-visible" : ""}`}>
        {/* Header */}
        <div className="section-header">
          <span className="section-eyebrow">Características</span>
          <h2 className="section-title" id="features-heading">
            Todo en un solo{" "}
            <span className="text-accent">espacio</span>
          </h2>
          <p className="section-desc">
            Tres pilares que definen cómo se vive Design Async desde adentro.
          </p>
        </div>

        {/* Bloques - uno por uno */}
        {FEATURES.map((f) => (
          <article key={f.num} className={`feature-block ${f.reverse ? "feature-block-reverse" : ""}`} aria-label={`Característica ${f.num}: ${f.category}`}>
            <div className="feature-text">
              <span className="feature-num">
                {f.num} ~ {f.category}
              </span>
              <h3 className="feature-name">
                {f.title.split("").map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {}
                  </span>
                ))}
              </h3>
              <p className="feature-desc">{f.desc}</p>
              <a href="#acceso" className="feature-link" aria-label={`Saber más sobre ${f.category}`}>
                Saber más <ArrowRight size={12} aria-hidden="true" />
              </a>
            </div>
            <div className="feature-visual" aria-hidden="true">
              {SVG_MAP[f.svgKey]}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}