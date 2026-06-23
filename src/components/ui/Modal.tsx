"use client";

import { useEffect } from "react";
import type { FC } from "react";
import {
  X,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  type LucideProps,
} from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

type ModalVariant = "confirm" | "error" | "success" | "warning";

interface ModalProps {
  variant: ModalVariant;
  title: string;
  message: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  className?: string;
}

type LucideIcon = FC<LucideProps>;

type ModalConfig = {
  icon: LucideIcon;
  iconColor: string;
  modalClass: string;
};

const VARIANT_CONFIG: Record<ModalVariant, ModalConfig> = {
  confirm: {
    icon: HelpCircle,
    iconColor: "var(--color-primary)",
    modalClass: "modal modal-confirm",
  },
  error: {
    icon: AlertCircle,
    iconColor: "var(--color-error)",
    modalClass: "modal modal-error",
  },
  success: {
    icon: CheckCircle2,
    iconColor: "var(--color-success)",
    modalClass: "modal modal-success",
  },
  warning: {
    icon: AlertTriangle,
    iconColor: "var(--color-warning)",
    modalClass: "modal modal-warning",
  },
};

export function Modal({
  variant,
  title,
  message,
  isOpen,
  onClose,
  onConfirm,
  confirmLabel = "Aceptar",
  cancelLabel = "Cancelar",
  className,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const { icon: Icon, iconColor, modalClass } = VARIANT_CONFIG[variant];

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={cn(modalClass, className)}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Cerrar modal"
          type="button"
        >
          <X size={16} strokeWidth={2.5} aria-hidden="true" />
        </button>

        <div className="modal-icon">
          <Icon
            size={40}
            strokeWidth={1.5}
            color={iconColor}
            aria-hidden="true"
          />
        </div>

        <h3 className="modal-title" id="modal-title">
          {title}
        </h3>
        <p className="modal-message">{message}</p>

        <div className="modal-actions">
          {onConfirm && (
            <Button variant="save" onClick={onConfirm}>
              {confirmLabel}
            </Button>
          )}
          <Button variant="cancel" onClick={onClose}>
            {cancelLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}