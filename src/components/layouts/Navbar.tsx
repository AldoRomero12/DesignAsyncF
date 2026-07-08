"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { NAV_ITEMS } from "@/constants/landing";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menú al presionar "Escape"
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
        <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`} role="banner">
            <div className="navbar-inner">
                {/* Logo - solo visible en móvil*/}
                <a href="#" className="navbar-logo navbar-logo-mobile" aria-label="DesignAsync - Ir al inicio">
                    <img
                        src="/images/design.ico"
                        alt="DesignAsync"
                        className="navbar-logo-img"
                        width={28}
                        height={28}
                    />
                </a>

                <nav className="navbar-nav" aria-label="Navegación principal">
                    {NAV_ITEMS.map((item) => (
                        <a key={item.href} href={item.href} className="navbar-link">
                            {item.icon && <item.icon size={14} aria-hidden="true" />}
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="navbar-actions">
                    <ThemeToggle variant="icon" />
                    <a href="#" className="btn btn-publish navbar-cta">
                        Empezar ahora
                    </a>
                    <button
                        className="navbar-menu-btn"
                        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((p) => !p)}
                        >
                        {menuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>
        </header>

        {/* Menú móvil */}
        <div className={`navbar-mobile-wrapper ${menuOpen ? "navbar-mobile-open" : ""}`} aria-hidden={!menuOpen}>
            <nav className="navbar-mobile" aria-label="Menú móvil">
                {NAV_ITEMS.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="navbar-mobile-link"
                        onClick={() => setMenuOpen(false)}
                    >
                        {item.icon && <item.icon size={15} aria-hidden="true" />}
                        {item.label}
                    </a>
                ))}
                <hr className="navbar-mobile-divider" />
                <a
                    href="#"
                    className="btn btn-publish"
                    style={{ justifyContent: "center", marginTop: "0.25rem" }}
                    onClick={() => setMenuOpen(false)}
                >
                    Empezar ahora
                </a>
            </nav>
        </div>

        {menuOpen && (
            <div style={{ position: "fixed", inset: 0, zIndex: 38,}} aria-hidden="true" onClick={() => setMenuOpen(false)} />
        )}
    </>
  );
}