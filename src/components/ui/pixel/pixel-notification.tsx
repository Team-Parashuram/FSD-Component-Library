"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const notificationVariants = cva(
  "relative border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-pixel flex items-start gap-3 min-w-[280px] max-w-[420px]",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-[#2a2a2a]",
        success: "bg-pixel-success border-black",
        warning: "bg-pixel-warning border-black",
        error: "bg-pixel-error border-black",
        info: "bg-pixel-primary border-black",
      },
      position: {
        "top-left": "animate-slide-in-left",
        "top-right": "animate-slide-in-right",
        "bottom-left": "animate-slide-in-left",
        "bottom-right": "animate-slide-in-right",
      },
    },
    defaultVariants: {
      variant: "default",
      position: "top-right",
    },
  }
);

export interface NotificationType {
  id: string;
  title: string;
  description?: string;
  variant?: "default" | "success" | "warning" | "error" | "info";
  icon?: React.ReactNode;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface PixelNotificationProps extends VariantProps<typeof notificationVariants> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export function PixelNotification({
  title,
  description,
  variant = "default",
  position = "top-right",
  icon,
  onClose,
  action,
  className,
}: PixelNotificationProps) {
  return (
    <div className={notificationVariants({ variant, position, className })}>
      {/* Icon */}
      {icon && (
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center border-2 border-black bg-white dark:bg-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          {icon}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-base mb-1">{title}</h4>
        {description && (
          <p className="text-sm text-pixel-dark-muted dark:text-pixel-light-muted">
            {description}
          </p>
        )}
        
        {/* Action Button */}
        {action && (
          <button
            onClick={action.onClick}
            className="mt-3 px-3 py-1 text-sm font-bold border-2 border-black bg-pixel-secondary hover:bg-pixel-dark-secondary shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px]"
          >
            {action.label}
          </button>
        )}
      </div>

      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center border-2 border-black bg-white dark:bg-black hover:bg-pixel-error shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] font-bold text-xs"
          aria-label="Close notification"
        >
          ✕
        </button>
      )}
    </div>
  );
}

// Toast Container for managing multiple notifications
interface PixelToastContainerProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  children: React.ReactNode;
}

export function PixelToastContainer({
  position = "top-right",
  className,
  children,
}: PixelToastContainerProps) {
  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  };

  return (
    <div
      className={`fixed ${positionClasses[position]} z-50 flex flex-col gap-3 ${className || ""}`}
    >
      {children}
    </div>
  );
}

// Hook for managing toasts
interface ToastOptions {
  title: string;
  description?: string;
  variant?: "default" | "success" | "warning" | "error" | "info";
  icon?: React.ReactNode;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

let toastId = 0;

export function usePixelToast() {
  const [toasts, setToasts] = React.useState<(NotificationType & { timestamp: number })[]>([]);

  const addToast = React.useCallback((options: ToastOptions) => {
    const id = `toast-${++toastId}`;
    const duration = options.duration ?? 5000;
    
    const newToast = {
      id,
      ...options,
      timestamp: Date.now(),
    };

    setToasts((prev) => [...prev, newToast]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }

    return id;
  }, []);

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const removeAllToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  return {
    toasts,
    addToast,
    removeToast,
    removeAllToasts,
  };
}

// Toast Provider Component
interface PixelToastProviderProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  children: React.ReactNode;
}

export function PixelToastProvider({
  position = "top-right",
  children,
}: PixelToastProviderProps) {
  const { toasts, removeToast } = usePixelToast();

  return (
    <>
      {children}
      <PixelToastContainer position={position}>
        {toasts.map((toast) => (
          <PixelNotification
            key={toast.id}
            title={toast.title}
            description={toast.description}
            variant={toast.variant}
            icon={toast.icon}
            action={toast.action}
            position={position}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </PixelToastContainer>
    </>
  );
}
