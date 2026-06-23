"use client";

import { MessageSquare, Briefcase, Globe, Rocket, Users, Lightbulb, } from "lucide-react";
import { FEATURES } from "@/constants/landing";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const ICON_MAP: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare size={20} />,
  Briefcase:     <Briefcase size={20} />,
  Globe:         <Globe size={20} />,
  Rocket:        <Rocket size={20} />,
  Users:         <Users size={20} />,
  Lightbulb:     <Lightbulb size={20} />,
};

export function Features() {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section
      id="caracteristicas"
      className="features-section"
      aria-labelledby="features-heading"
    >
      <div ref={ref} className={`section-container reveal-section ${isVisible ? "is-visible" : ""}`}>
        <div className="section-header">
          <span className="section-eyebrow">Características</span>
          <h2 className="section-title" id="features-heading">
            Todo en un solo{" "}
            <span className="text-accent">espacio</span>
          </h2>
          <p className="section-desc">
            Herramientas, espacios y funcionalidades diseñadas para que la colaboración
            suceda de forma natural.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className="feature-card"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="feature-icon" aria-hidden="true">
                {ICON_MAP[feature.icon]}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
              {feature.badge && (
                <span className="badge badge-secondary feature-badge">
                  {feature.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}