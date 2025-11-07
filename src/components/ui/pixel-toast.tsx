"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type ToastPosition = "top-right" | "bottom-right" | "top-left" | "bottom-left";

interface Toast {
  id: string;
  message: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface PixelToastContextValue {
  toasts: Toast[];
  addToast: (message: string, action?: Toast["action"]) => void;
  removeToast: (id: string) => void;
}

const PixelToastContext = React.createContext<PixelToastContextValue | undefined>(
  undefined
);

export function PixelToastProvider({
  children,
  position = "bottom-right",
  duration = 3000,
}: {
  children: React.ReactNode;
  position?: ToastPosition;
  duration?: number;
}) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const addToast = React.useCallback(
    (message: string, action?: Toast["action"]) => {
      const id = Math.random().toString(36).substr(2, 9);
      setToasts((prev) => [...prev, { id, message, action }]);

      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }
    },
    [duration]
  );

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const positionClasses = {
    "top-right": "top-4 right-4",
    "bottom-right": "bottom-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-left": "bottom-4 left-4",
  };

  return (
    <PixelToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className={cn("fixed z-50 flex flex-col gap-2", positionClasses[position])}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pixel-borders border-4 border-black bg-[#fffacd] p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] min-w-[300px] dark:border-[#ff8c00] dark:bg-[#1a1a1a] dark:shadow-[6px_6px_0px_0px_rgba(255,140,0,0.3)] animate-in slide-in-from-right-full duration-0"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-medium flex-1">{toast.message}</p>
              <button
                onClick={() => removeToast(toast.id)}
                className="pixel-borders border-2 border-black p-1 hover:bg-black/10 dark:border-[#ff8c00] dark:hover:bg-white/10 transition-none duration-0"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
            {toast.action && (
              <button
                onClick={() => {
                  toast.action?.onClick();
                  removeToast(toast.id);
                }}
                className="mt-2 pixel-borders border-2 border-black bg-[#ff8c00] px-3 py-1 text-xs font-bold uppercase text-white hover:bg-[#ff9f1a] transition-none duration-0"
              >
                {toast.action.label}
              </button>
            )}
          </div>
        ))}
      </div>
    </PixelToastContext.Provider>
  );
}

export function usePixelToast() {
  const context = React.useContext(PixelToastContext);
  if (!context) {
    throw new Error("usePixelToast must be used within PixelToastProvider");
  }
  return context;
}
