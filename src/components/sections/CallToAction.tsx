"use client";

import { TbCircleNumber1Filled, TbCircleNumber2Filled, } from "react-icons/tb";
import { SiStreamrunners,} from "react-icons/si";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function CallToAction() {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section className="cta-section" aria-labelledby="cta-heading" id="acceso">
      <div
        ref={ref}
        className={`cta-inner reveal-section ${isVisible ? "is-visible" : ""}`}
      >
        {/* Bullets — encima del recuadro */}
        <ul className="cta-bullets" aria-label="Razones para unirse">
          <li className="cta-bullet">
            <span className="cta-bullet-num" aria-hidden="true"><TbCircleNumber1Filled /></span>
            ¿Sin comunidad donde crecer?
          </li>
          <li className="cta-bullet">
            <span className="cta-bullet-num" aria-hidden="true"><TbCircleNumber2Filled /></span>
            ¿Todo en inglés, nada en tu idioma?
          </li>
        </ul>

        {/* Wrapper relativo para posicionar lápiz y badge respecto al card */}
        <div className="cta-card-wrap">

          {/* Pincel — fuera del card, esquina inferior izquierda */}
          <div className="cta-illustration" aria-hidden="true">
            <img
              src="/images/pincel.png"
              alt=""
              className="cta-pincel-img"
              draggable={false}
            />
          </div>

          {/* Badge ES GRATIS — fuera del card, esquina superior izquierda */}
          <div className="cta-badge-free" aria-label="Es gratis">
            <span>Es</span>
            <span>Gratis!</span>
          </div>

          {/* Card solo con texto */}
          <div className="cta-card">
            <h2 className="cta-big-heading" id="cta-heading">
              Únete <em className="cta-big-accent">ahora!</em>
            </h2>
          </div>

          {/* Botón — fuera del card, abajo derecha */}
          <div className="cta-card-footer">
            <a href="#" className="btn btn-publish btn-cta">
              Explorar comunidad
              <SiStreamrunners size={15} aria-hidden="true" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}