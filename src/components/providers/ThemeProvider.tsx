"use client";

/* Wrapper de next-themes.
   Debe ser "use client" porque usa contexto de React, pero lo envolvemos para que layout.tsx pueda ser un Server Component.
 
 - attribute="data-theme" → inyecta [data-theme="dark"] en <html>
 - defaultTheme="system"  → detecta el tema del SO al inicio
 - enableSystem           → permite la detección automática
 - disableTransitionOnChange → (false) para mantener nuestras transiciones CSS */
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}