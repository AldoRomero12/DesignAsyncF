"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { CARDS } from "@/constants/landing";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

/* SVGs */
function SvgIdioma() {
  return (
    <svg viewBox="0 0 160 220" fill="none" aria-hidden="true" className="about-fan-svg">
      <rect width="160" height="220" fill="transparent"/>
      <text x="20" y="50"  fontSize="28" fill="#FF1414" opacity="0.4" fontFamily="serif" fontWeight="700">Ñ</text>
      <text x="80" y="80"  fontSize="20" fill="#FF1414" opacity="0.25" fontFamily="serif">¿</text>
      <text x="30" y="110" fontSize="16" fill="#FFFFFF"  opacity="0.1"  fontFamily="sans-serif">español</text>
      <text x="60" y="145" fontSize="32" fill="#FF1414" opacity="0.3"  fontFamily="serif" fontWeight="700">É</text>
      <text x="10" y="180" fontSize="14" fill="#FFFFFF"  opacity="0.08" fontFamily="sans-serif">comunidad</text>
      <circle cx="130" cy="40" r="30" fill="#FF1414" opacity="0.08"/>
    </svg>
  );
}

function SvgComunidad() {
  return (
    <svg viewBox="0 0 175 240" fill="none" aria-hidden="true" className="about-fan-svg">
      <rect width="175" height="240" fill="transparent"/>
      <circle cx="52"  cy="72" r="14" fill="#FF1414" opacity="0.25" stroke="#FF1414" strokeWidth="0.5"/>
      <circle cx="87"  cy="60" r="18" fill="#FF1414" opacity="0.40" stroke="#FF1414" strokeWidth="0.5"/>
      <circle cx="122" cy="72" r="14" fill="#FF1414" opacity="0.25" stroke="#FF1414" strokeWidth="0.5"/>
      <path d="M28 110 Q52 88 76 110"   stroke="#FF1414" strokeWidth="0.8" strokeOpacity="0.35" fill="none"/>
      <path d="M57 105 Q87 80 117 105"  stroke="#FF1414" strokeWidth="0.8" strokeOpacity="0.5"  fill="none"/>
      <path d="M98 110 Q122 88 146 110" stroke="#FF1414" strokeWidth="0.8" strokeOpacity="0.35" fill="none"/>
      <circle cx="60"  cy="148" r="11" stroke="#FF1414" strokeWidth="0.5" strokeOpacity="0.4" fill="none"/>
      <circle cx="114" cy="148" r="11" stroke="#FF1414" strokeWidth="0.5" strokeOpacity="0.4" fill="none"/>
      <path d="M40 178 Q60 160 80 178"   stroke="#FF1414" strokeWidth="0.6" strokeOpacity="0.25" fill="none"/>
      <path d="M94 178 Q114 160 134 178" stroke="#FF1414" strokeWidth="0.6" strokeOpacity="0.25" fill="none"/>
      <line x1="70" y1="148" x2="104" y2="148" stroke="#FF1414" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="3 4"/>
      <text x="42" y="220" fontSize="52" fill="#FF1414" opacity="0.05" fontFamily="sans-serif" fontWeight="700">DA</text>
    </svg>
  );
}

function SvgEcosistema() {
  return (
    <svg viewBox="0 0 160 220" fill="none" aria-hidden="true" className="about-fan-svg">
      <rect width="160" height="220" fill="transparent"/>
      <g opacity="0.3">
        {[32, 64, 96, 128].map(x =>
          [40, 70, 100, 130].map(y => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="#FFFFFF"/>
          ))
        )}
      </g>
      <rect x="24" y="155" width="50" height="28" rx="4"
        fill="#FFFFFF" opacity="0.12" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.4"/>
      <rect x="86" y="155" width="50" height="28" rx="4"
        stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.25"/>
      <circle cx="130" cy="165" r="8" fill="#C41E1E" opacity="0.3"/>
    </svg>
  );
}

const SVGS = [<SvgIdioma />, <SvgComunidad />, <SvgEcosistema />];

const BASE_TRANSFORMS = [
  "rotate(-14deg) translateX(-115px) translateY(10px)",
  "translateY(0)",
  "rotate(14deg) translateX(115px) translateY(10px)",
];

export function About() {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({ once: false });

  const [active, setActive] = useState<number | null>(null);
  const [contentVisible, setContentVisible] = useState<number | null>(null);
  const transitioning = useRef(false);
  const contentTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const expandTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Limpia timers al desmontar */
  useEffect(() => () => {
    if (contentTimer.current)  clearTimeout(contentTimer.current);
    if (expandTimer.current)   clearTimeout(expandTimer.current);
  }, []);

  const clearTimers = () => {
    if (contentTimer.current)  clearTimeout(contentTimer.current);
    if (expandTimer.current)   clearTimeout(expandTimer.current);
  };

  const collapse = useCallback(() => {
    clearTimers();
    /* 1. Oculta contenido inmediatamente */
    setContentVisible(null);
    /* 2. Después de 140ms (contenido ya invisible), colapsa la tarjeta */
    expandTimer.current = setTimeout(() => {
      setActive(null);
      transitioning.current = false;
    }, 140);
  }, []);

  const expand = useCallback((idx: number) => {
    if (transitioning.current) return;
    if (active === idx) { collapse(); return; }

    transitioning.current = true;
    clearTimers();

    /* 1. Oculta contenido anterior inmediatamente */
    setContentVisible(null);

    /* 2. Después de 160ms (contenido anterior invisible), expande la nueva tarjeta */
    expandTimer.current = setTimeout(() => {
      setActive(idx);
      /* 3. Después de 380ms (tarjeta ya expandida), muestra el contenido nuevo */
      contentTimer.current = setTimeout(() => {
        setContentVisible(idx);
        transitioning.current = false;
      }, 380);
    }, active !== null ? 160 : 0);
  }, [active, collapse]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, idx: number) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); expand(idx); }
  }, [expand]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && active !== null) collapse();
      if (e.key === "ArrowLeft"  && active !== null && active > 0) expand(active - 1);
      if (e.key === "ArrowRight" && active !== null && active < CARDS.length - 1) expand(active + 1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, collapse, expand]);

  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div ref={ref} className={`section-container reveal-section ${isVisible ? "is-visible" : ""}`}>
        {/* Header */}
        <div className="section-header">
          <span className="section-eyebrow">La plataforma</span>
          <h2 className="section-title" id="about-heading">
            ¿Qué es <span className="text-accent">Design Async</span>?
          </h2>
          <p className="section-desc">
            El espacio que la comunidad hispanohablante estaba esperando. Un lugar
            construido en nuestro idioma, para que el talento latino no tenga fronteras.
          </p>
        </div>

        {/* Fan de tarjetas */}
        <div className="about-fan" role="group" aria-label="Pilares de Design Async">
          {CARDS.map((card, i) => {
            const isExpanded = active === i;
            const showContent = contentVisible === i;
            const isOther = active !== null && active !== i;

            return (
              <div
                key={card.id}
                className={[
                  "about-fan-card",
                  i === 0 ? "about-fan-card-left"   : "",
                  i === 1 ? "about-fan-card-center" : "",
                  i === 2 ? "about-fan-card-right"  : "",
                  isExpanded ? "is-expanded" : "",
                ].join(" ")}
                style={{
                  opacity:        isOther ? 0.3 : 1,
                  pointerEvents:  isOther ? "none" : "auto",
                  transform:      isExpanded ? undefined : BASE_TRANSFORMS[i],
                  zIndex:         isExpanded ? 10 : i === 1 ? 3 : 1,
                }}
                role="button"
                tabIndex={0}
                aria-label={isExpanded ? `Cerrar: ${card.label}` : `Expandir: ${card.label}`}
                aria-expanded={isExpanded}
                onClick={() => expand(i)}
                onKeyDown={e => handleKeyDown(e, i)}
              >
                {/* SVG de fondo */}
                {SVGS[i]}

                {/* Overlay gradiente */}
                <div className="about-fan-card-overlay" aria-hidden="true" />

                {/* Etiqueta - visible cuando no está expandida */}
                <span
                  className="about-fan-card-label"
                  style={{ opacity: isExpanded ? 0 : 1 }}
                  aria-hidden={isExpanded}
                >
                  {card.label}
                </span>

                {/* Contenido expandido */}
                <div
                  className="about-fan-expanded-content"
                  style={{ opacity: showContent ? 1 : 0, pointerEvents: showContent ? "auto" : "none" }}
                  aria-hidden={!showContent}
                >
                  <span className="about-fan-exp-eyebrow">{card.eyebrow}</span>
                  <h3 className="about-fan-exp-title">
                    {card.title.split("\n").map((line, j, arr) => (
                      <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
                    ))}
                  </h3>
                  <p className="about-fan-exp-desc">{card.desc}</p>
                  <div className="about-fan-exp-tags">
                    {card.tags.map(t => (
                      <span key={t} className="about-fan-exp-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hint / Navegación */}
        {active === null ? (
          <p className="about-fan-hint" aria-live="polite">
            Selecciona una tarjeta para saber más
          </p>
        ) : (
          <div className="about-fan-nav" aria-label="Navegación de tarjetas">
            <button
              className="about-fan-nav-btn"
              onClick={() => expand(active - 1)}
              disabled={active === 0}
              aria-label="Tarjeta anterior"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="about-fan-dots" role="tablist">
              {CARDS.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={active === i}
                  aria-label={`Ir a tarjeta ${i + 1}`}
                  className={`about-fan-dot ${active === i ? "about-fan-dot-active" : ""}`}
                  onClick={() => expand(i)}
                />
              ))}
            </div>
            <button
              className="about-fan-nav-btn"
              onClick={() => expand(active + 1)}
              disabled={active === CARDS.length - 1}
              aria-label="Tarjeta siguiente"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Texto inferior */}
        <div className="about-bottom">
          <div className="about-desc-block">
            <h3 className="about-desc-heading">
              Construida para profesionales como tú
            </h3>
            <p className="about-desc-body">
              <strong>Design Async</strong> es la plataforma de comunidad creada
              por <strong>Guanet</strong> para conectar a profesionales del diseño
              y un ecosistema propio, en nuestro idioma, con nuestra cultura y para nuestros objetivos.
            </p>
            <a href="#caracteristicas" className="btn btn-publish about-cta">
              Ver características
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}