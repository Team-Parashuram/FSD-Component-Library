"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const pixelAlertVariants = cva(
  "relative w-full pixel-borders border-4 p-4 transition-none duration-0",
  {
    variants: {
      variant: {
        default: "bg-white border-black text-black dark:bg-[#1a1a1a] dark:border-[#ff8c00] dark:text-white",
        info: "bg-[#add8e6] border-[#0000ff] text-black",
        success: "bg-[#90ee90] border-[#00ff00] text-black",
        warning: "bg-[#ffd700] border-[#ffa500] text-black",
        error: "bg-[#ffcccb] border-[#ff0000] text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const iconMap = {
  default: AlertCircle,
  info: AlertCircle,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
};

export interface PixelAlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelAlertVariants> {
  showIcon?: boolean;
}

const PixelAlert = React.forwardRef<HTMLDivElement, PixelAlertProps>(
  ({ className, variant = "default", showIcon = true, children, ...props }, ref) => {
    const Icon = iconMap[variant || "default"];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(pixelAlertVariants({ variant }), className)}
        {...props}
      >
        <div className="flex gap-3">
          {showIcon && <Icon className="h-5 w-5 shrink-0 mt-0.5" />}
          <div className="flex-1">{children}</div>
        </div>
      </div>
    );
  }
);
PixelAlert.displayName = "PixelAlert";

const PixelAlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-bold uppercase text-sm tracking-wider", className)}
    {...props}
  />
));
PixelAlertTitle.displayName = "PixelAlertTitle";

const PixelAlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm leading-relaxed", className)}
    {...props}
  />
));
PixelAlertDescription.displayName = "PixelAlertDescription";

export { PixelAlert, PixelAlertTitle, PixelAlertDescription };
