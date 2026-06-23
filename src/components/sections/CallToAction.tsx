"use client";

import { ArrowRight, Users, Rocket } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function CallToAction() {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section className="cta-section" aria-labelledby="cta-heading" id="acceso">
      <div className="cta-orb cta-orb-1" aria-hidden="true" />
      <div className="cta-orb cta-orb-2" aria-hidden="true" />
      <div className="cta-orb cta-orb-3" aria-hidden="true" />

      <div
        ref={ref}
        className={`cta-inner reveal-section ${isVisible ? "is-visible" : ""}`}
      >
        <div aria-hidden="true">
          <span className="cta-icon-badge">
            <Rocket size={20} />
          </span>
        </div>

        <h2 className="cta-heading" id="cta-heading">
          Forma parte de algo que{" "}
          <span className="cta-heading-accent">apenas comienza</span>
        </h2>

        <p className="cta-sub">
          Design Async está construyendo la comunidad de referencia para
          diseñadores hispanohablantes. Sé parte desde el inicio
          y ayúdanos a dar forma a lo que viene.
        </p>

        <div className="cta-btn-row">
          <a href="#" className="btn cta-btn-primary">
            <Users size={16} aria-hidden="true" />
            Explorar la comunidad
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href="#plataforma" className="btn cta-btn-secondary">
            Solicitar acceso anticipado
          </a>
        </div>

        <p className="cta-footnote">
          Sin costo · Sin tarjeta · Solo para hispanohablantes
        </p>
      </div>
    </section>
  );
}