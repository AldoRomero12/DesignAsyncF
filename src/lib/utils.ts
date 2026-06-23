import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/* Combina clases de Tailwind sin conflictos.
   Uso: cn("btn btn-publish", isLarge && "text-lg", className) */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}