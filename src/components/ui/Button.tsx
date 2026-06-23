import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "publish" | "save" | "edit" | "cancel" | "outline-publish" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  icon?: ReactNode;       // Acepta cualquier icono de Lucide
  iconPosition?: "left" | "right";
}

const variantMap: Record<ButtonVariant, string> = {
  publish:         "btn btn-publish",
  save:            "btn btn-save",
  edit:            "btn btn-edit",
  cancel:          "btn btn-cancel",
  "outline-publish": "btn btn-outline-publish",
  ghost:           "btn btn-ghost",
};

export function Button({ variant = "publish", children, icon, iconPosition = "left", className = "", ...props }: ButtonProps) {
  return (
    <button className={cn(variantMap[variant], className)} {...props} >
      {icon && iconPosition === "left" && (
        <span aria-hidden="true">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span aria-hidden="true">{icon}</span>
      )}
    </button>
  );
}