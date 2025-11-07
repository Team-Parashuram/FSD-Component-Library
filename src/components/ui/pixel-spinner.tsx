"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelSpinnerVariants = cva(
  "inline-block pixel-borders border-4 border-black animate-spin",
  {
    variants: {
      size: {
        sm: "h-4 w-4 border-2",
        md: "h-8 w-8 border-4",
        lg: "h-12 w-12 border-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface PixelSpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelSpinnerVariants> {}

const PixelSpinner = React.forwardRef<HTMLDivElement, PixelSpinnerProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(pixelSpinnerVariants({ size }), className)}
        role="status"
        aria-label="Loading"
        {...props}
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
);
PixelSpinner.displayName = "PixelSpinner";

// Alternative: Static loading indicator with pixel blocks
const PixelLoadingDots = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex gap-2", className)} role="status" aria-label="Loading">
      <div className="h-3 w-3 pixel-borders border-2 border-black bg-[#ff8c00] animate-bounce" style={{ animationDelay: "0ms" }} />
      <div className="h-3 w-3 pixel-borders border-2 border-black bg-[#ff8c00] animate-bounce" style={{ animationDelay: "150ms" }} />
      <div className="h-3 w-3 pixel-borders border-2 border-black bg-[#ff8c00] animate-bounce" style={{ animationDelay: "300ms" }} />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export { PixelSpinner, PixelLoadingDots };
