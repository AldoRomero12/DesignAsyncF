import { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  error?: string;
  hint?: string;
}

export function Input({
  label,
  id,
  icon,
  error,
  hint,
  className,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          htmlFor={id}
          className="font-sans-heading text-small) font-semibold text-(--text-muted)"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {icon && (
          <span
            className="absolute left-4 text-(--text-subtle) pointer-events-none"
            aria-hidden="true"
          >
            {icon}
          </span>
        )}
        <input
          id={id}
          className={cn(
            "input",
            icon && "pl-11",
            error && "border-(--color-error) focus:border-(--color-error)",
            className
          )}
          aria-describedby={
            error ? `${id}-error` : hint ? `${id}-hint` : undefined
          }
          aria-invalid={error ? "true" : undefined}
          {...props}
        />
      </div>

      {error && (
        <span id={`${id}-error`} className="text-small text-(--color-error)" role="alert">
          {error}
        </span>
      )}
      {hint && !error && (
        <span id={`${id}-hint`} className="text-small text-(--text-subtle)">
          {hint}
        </span>
      )}
    </div>
  );
}