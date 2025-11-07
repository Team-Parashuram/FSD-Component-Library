"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-xs font-bold uppercase tracking-wider transition-none duration-0 disabled:pointer-events-none disabled:opacity-50 pixel-borders active:translate-x-[2px] active:translate-y-[2px]",
  {
    variants: {
      variant: {
        default:
          "bg-[#ff8c00] text-white border-black hover:bg-[#ff9f1a] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none dark:bg-[#ff8c00] dark:border-[#ff8c00] dark:shadow-[4px_4px_0px_0px_rgba(255,140,0,0.5)]",
        secondary:
          "bg-[#ffd700] text-black border-black hover:bg-[#ffe44d] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none dark:bg-[#ffd700] dark:border-[#ffd700] dark:text-black",
        ghost:
          "bg-transparent border-black text-black hover:bg-black/10 dark:border-white dark:text-white dark:hover:bg-white/10",
        destructive:
          "bg-[#ff0000] text-white border-black hover:bg-[#ff3333] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none dark:bg-[#cc0000] dark:border-[#ff0000]",
      },
      size: {
        sm: "h-8 px-3 text-[10px]",
        md: "h-12 px-6 text-xs",
        lg: "h-16 px-8 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface PixelButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pixelButtonVariants> {
  asChild?: boolean;
}

const PixelButton = React.forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(pixelButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
PixelButton.displayName = "PixelButton";

export { PixelButton, pixelButtonVariants };
