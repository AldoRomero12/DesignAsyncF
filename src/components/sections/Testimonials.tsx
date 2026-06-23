"use client";

// NOTA: Todos los testimonios son ficticios y creados solo para fines de demostración visual.
// Deben ser reemplazados por testimonios reales antes del lanzamiento oficial y producción.

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/constants/landing";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

function StarRow() {
  return (
    <div className="testimonial-stars" aria-label="5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13} className="testimonial-star" aria-hidden="true" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section
      id="testimonios"
      className="testimonials-section"
      aria-labelledby="testimonials-heading"
    >
      <div ref={ref} className={`section-container reveal-section ${isVisible ? "is-visible" : ""}`}>
        <div className="section-header">
          <span className="section-eyebrow">Comunidad</span>
          <h2 className="section-title" id="testimonials-heading">
            Lo que dice{" "}
            <span className="text-accent">nuestra comunidad</span>
          </h2>
          <p className="section-desc">
            Voces reales de profesionales que encontraron en Design Async
            el espacio que estaban buscando.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="testimonial-card"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <StarRow />
              <blockquote className="testimonial-quote">
                &ldquo;{t.content}&rdquo;
              </blockquote>
              <figcaption className="testimonial-author">
                <img
                  src={t.avatar}
                  alt={`Foto de ${t.name}`}
                  className="testimonial-avatar"
                  loading="lazy"
                  width={40}
                  height={40}
                />
                <div>
                  <strong className="testimonial-name">{t.name}</strong>
                  <span className="testimonial-meta">
                    {t.role} · {t.country}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}