"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { ArrowRight, Users, Globe, Sparkles, Crown, ChevronsDown } from "lucide-react";

/* Fondo SVG geométrico */
function BlobCornersBackground() {
  return (
    <div className="hero-blob-wrap" aria-hidden="true">
 
      <svg className="hero-blob hero-blob-tl" viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg">
        <path className="blob-fill blob-fill-light" d="M0,0 H420 V10 C380,40 340,90 300,110 C250,135 230,80 190,90 C150,100 160,160 110,170 C50,182 30,120 0,140 Z" />
        <path className="blob-fill blob-fill-dark" d="M0,0 H300 C320,40 290,70 260,90 C220,115 210,60 170,75 C130,90 140,150 90,160 C40,172 20,110 0,125 Z" opacity="0.6" />
        <path className="blob-stroke" d="M -10,150 C 20,130 35,185 70,175 C 110,165 100,105 150,90 C 195,77 200,135 245,115 C 290,95 280,40 330,55 C 365,65 380,30 410,5"
          fill="none" />
      </svg>
 
      <svg className="hero-blob hero-blob-tr" viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg">
        <path className="blob-fill blob-fill-dark" d="M420,0 H140 C120,45 165,75 205,95 C250,118 255,65 300,80 C340,93 330,155 380,165 C400,170 410,150 420,155 Z" />
        <path className="blob-fill blob-fill-light" d="M420,0 H220 C205,35 240,60 270,78 C305,98 310,55 345,68 C375,80 368,130 405,140 C412,142 416,130 420,133 Z" opacity="0.65" />
        <path className="blob-stroke" d="M 430,160 C 400,145 390,195 350,180 C 315,167 320,110 275,95 C 235,82 225,135 185,115 C 150,98 155,45 115,55 C 90,62 75,30 60,7"
          fill="none" />
      </svg>
 
      <svg className="hero-blob hero-blob-bl" viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg">
        <path className="blob-fill blob-fill-light" d="M0,420 H420 V400 C380,380 340,330 300,310 C250,285 230,340 190,330 C150,320 160,260 110,250 C50,238 30,300 0,280 Z" />
        <path className="blob-fill blob-fill-dark" d="M0,420 H300 C320,380 290,350 260,330 C220,305 210,360 170,345 C130,330 140,270 90,260 C40,248 20,310 0,295 Z" opacity="0.6" />
        <path className="blob-stroke" d="M -10,270 C 20,290 35,235 70,245 C 110,255 100,315 150,330 C 195,343 200,285 245,305 C 290,325 280,380 330,365 C 365,355 380,390 410,415"
          fill="none" />
      </svg>
 
      <svg className="hero-blob hero-blob-br" viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg">
        <path className="blob-fill blob-fill-dark" d="M420,420 H140 C120,375 165,345 205,325 C250,302 255,355 300,340 C340,327 330,265 380,255 C400,250 410,270 420,265 Z" />
        <path className="blob-fill blob-fill-light" d="M420,420 H220 C205,385 240,360 270,342 C305,322 310,365 345,352 C375,340 368,290 405,280 C412,278 416,290 420,287 Z" opacity="0.65" />
        <path className="blob-stroke" d="M 430,260 C 400,275 390,225 350,240 C 315,253 320,310 275,325 C 235,338 225,285 185,305 C 150,322 155,375 115,365 C 90,358 75,390 50,450"
          fill="none" />
      </svg>
 
    </div>
  );
}

/* Indicador de scroll — solo mobile, vive dentro del Hero */
function HeroScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY < 120);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`hero-scroll-hint ${visible ? "hero-scroll-hint-visible" : ""}`}
      aria-hidden="true"
    >
      <ChevronsDown size={26} />
    </div>
  );
}

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero-section" aria-labelledby="hero-heading" id="inicio">
      
      <BlobCornersBackground />
      
      <div className="hero-fade-overlay" aria-hidden="true" />

      <div className={`hero-content ${visible ? "hero-content-visible" : ""}`}>

        <div className="hero-logo-wrap" aria-label="Design Async">
          <img
            src="/images/design.ico"
            alt="Design Async"
            className="hero-logo-img"
          />
        </div>

        <h1 className="hero-brand-name" id="hero-heading">
            La comunidad donde el talento
            <span className="hero-brand-accent"> diseña el futuro.</span>
        </h1>

        <div className="hero-cta-row">
          <a href="#acceso" className="btn hero-btn-primary">
            Unirse a la comunidad
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href="#about" className="btn hero-btn-outline">
            <Crown size={16} aria-hidden="true" /> Explorar beneficios
          </a>
        </div>

        <div className="hero-meta-row">
          <span className="hero-meta-item">
            <Users size={13} aria-hidden="true" />
            Comunidad activa
          </span>
          <span className="hero-meta-sep" aria-hidden="true">·</span>
          <span className="hero-meta-item">
            <Globe size={13} aria-hidden="true" />
            Hispanohablantes
          </span>
        </div>
      </div>

      <div className="hero-bottom-fade" aria-hidden="true" />
      <HeroScrollHint />
    </section>
  );
}