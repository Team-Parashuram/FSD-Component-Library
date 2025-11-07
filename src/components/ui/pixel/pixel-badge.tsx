"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelBadgeVariants = cva(
  "inline-flex items-center pixel-borders border-2 px-3 py-1 text-xs font-bold uppercase tracking-wider transition-none duration-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#ff8c00] text-white border-black dark:bg-[#ff8c00] dark:border-[#ff8c00]",
        success:
          "bg-[#00ff00] text-black border-black dark:bg-[#00cc00] dark:border-[#00ff00]",
        warning:
          "bg-[#ffd700] text-black border-black dark:bg-[#ffd700] dark:border-[#ffd700]",
        error:
          "bg-[#ff0000] text-white border-black dark:bg-[#cc0000] dark:border-[#ff0000]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface PixelBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelBadgeVariants> {}

function PixelBadge({ className, variant, ...props }: PixelBadgeProps) {
  return (
    <div className={cn(pixelBadgeVariants({ variant }), className)} {...props} />
  );
}

export { PixelBadge, pixelBadgeVariants };
