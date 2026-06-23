type BadgeVariant = "primary" | "secondary" | "success" | "error" | "warning";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

export function Badge({ variant = "primary", children }: BadgeProps) {
  return (
    <span className={`badge badge-${variant}`}>
      {children}
    </span>
  );
}