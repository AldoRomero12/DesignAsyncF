"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { FC } from "react";
import { Sun, Moon, Monitor, type LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

/* Tipos */
type ToggleVariant = "icon" | "pill" | "menu";
type Theme = "light" | "dark" | "system";

interface ThemeToggleProps {
  variant?: ToggleVariant;
  className?: string;
}

/* Tipo del icono de Lucide */
type LucideIcon = FC<LucideProps>;

/* Configuración de temas */
type ThemeConfig = {
  icon: LucideIcon;
  label: string;
  next: Theme;
};

const THEME_CONFIG: Record<Theme, ThemeConfig> = {
  light:  { icon: Sun,     label: "Claro",   next: "dark" },
  dark:   { icon: Moon,    label: "Oscuro",  next: "system" },
  system: { icon: Monitor, label: "Sistema", next: "light" },
};

// Array de temas para iterar en MenuToggle - valores en runtime, no tipos
const THEME_KEYS: Theme[] = ["light", "dark", "system"];

/* Variante: icono circular (default, para navbar) */
function IconToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className={cn("theme-toggle", className)}
        aria-hidden="true"
        style={{ width: "2.5rem", height: "2.5rem" }}
      />
    );
  }

  // Fallback a "light" si theme es undefined (SSR)
  const currentTheme = (theme as Theme) ?? "light";
  const config = THEME_CONFIG[currentTheme];
  const Icon = config.icon;

  function handleToggle() {
    setIsAnimating(true);
    setTheme(config.next);
    setTimeout(() => setIsAnimating(false), 300);
  }

  return (
    <button
      className={cn("theme-toggle", className)}
      onClick={handleToggle}
      aria-label={`Cambiar a modo ${THEME_CONFIG[config.next].label}`}
      title={`Modo actual: ${config.label}`}
      type="button"
    >
      <Icon
        size={18}
        strokeWidth={2}
        className={cn(isAnimating && "icon-enter")}
        aria-hidden="true"
      />
    </button>
  );
}

/* Variante: pill con label (para settings, sidebar) */
function PillToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div style={{ width: "7rem", height: "2.25rem" }} />;
  }

  const currentTheme = (theme as Theme) ?? "light";
  const config = THEME_CONFIG[currentTheme];
  const Icon = config.icon;

  return (
    <button
      className={cn("theme-toggle theme-toggle-pill", className)}
      onClick={() => setTheme(config.next)}
      aria-label={`Cambiar a modo ${THEME_CONFIG[config.next].label}`}
      type="button"
    >
      <Icon size={15} strokeWidth={2} aria-hidden="true" />
      <span>{config.label}</span>
    </button>
  );
}

/* Variante: menú de tres opciones (para preferencias) */
function MenuToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div style={{ height: "2.5rem" }} />;
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 p-1 rounded-xl border",
        "bg-(--bg-secondary) border-(--border-default)",
        className
      )}
      role="group"
      aria-label="Seleccionar tema"
    >
      {THEME_KEYS.map((t) => {
        const { icon: Icon, label } = THEME_CONFIG[t];
        const isActive = theme === t;

        return (
          <button
            key={t}
            onClick={() => setTheme(t)}
            aria-label={`Modo ${label}`}
            aria-pressed={isActive}
            title={`Modo ${label}`}
            type="button"
            className={cn(
              "inline-flex items-center justify-center",
              "w-9 h-9 rounded-lg border transition-all duration-200",
              "focus-visible:outline-2 focus-visible:outline-(--color-primary) focus-visible:outline-offset-1",
              isActive
                ? "bg-(--bg) border-(--border-strong) text-(--text-default) shadow-sm"
                : "bg-transparent border-transparent text-(--text-muted) hover:text-(--text-default) hover:bg-(--bg-tertiary)"
            )}
          >
            <Icon
              size={16}
              strokeWidth={isActive ? 2.5 : 2}
              aria-hidden="true"
            />
          </button>
        );
      })}
    </div>
  );
}

/* Exportación principal */
export function ThemeToggle({ variant = "icon", className }: ThemeToggleProps) {
  if (variant === "pill") return <PillToggle className={className} />;
  if (variant === "menu") return <MenuToggle className={className} />;
  return <IconToggle className={className} />;
}