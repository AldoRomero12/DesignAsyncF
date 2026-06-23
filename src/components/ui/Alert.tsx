import type { FC, ReactNode } from "react";
import { Info, CheckCircle2, XCircle, AlertTriangle, type LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

type AlertVariant = "info" | "success" | "error" | "warning";

interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
  className?: string;
}

type LucideIcon = FC<LucideProps>;

type AlertConfig = {
  icon: LucideIcon;
  className: string;
};

const ALERT_CONFIG: Record<AlertVariant, AlertConfig> = {
  info:    { icon: Info,          className: "alert alert-info" },
  success: { icon: CheckCircle2,  className: "alert alert-success" },
  error:   { icon: XCircle,       className: "alert alert-error" },
  warning: { icon: AlertTriangle, className: "alert alert-warning" },
};

export function Alert({ variant = "info", title, children, className }: AlertProps) {
  const { icon: Icon, className: variantClass } = ALERT_CONFIG[variant];

  return (
    <div className={cn(variantClass, className)} role="alert">
      <Icon
        size={18}
        strokeWidth={2}
        aria-hidden="true"
        style={{ flexShrink: 0, marginTop: "2px" }}
      />
      <div>
        {title && <span className="alert-title">{title}</span>}
        <span>{children}</span>
      </div>
    </div>
  );
}