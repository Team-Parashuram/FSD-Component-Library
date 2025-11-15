"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelBentoGridVariants = cva(
  "grid gap-4 w-full pixel-borders transition-none duration-0",
  {
    variants: {
      variant: {
        default: "bg-[#fffacd] dark:bg-[#1a1a1a]",
        primary: "bg-[#ff8c00] dark:bg-[#ff8c00]",
        secondary: "bg-[#ffd700] dark:bg-[#ffd700]",
        dark: "bg-black dark:bg-[#000000]",
      },
      columns: {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        auto: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      },
      gap: {
        none: "gap-0",
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-6",
        xl: "gap-8",
      },
    },
    defaultVariants: {
      variant: "default",
      columns: "auto",
      gap: "none",
    },
  }
);

const pixelBentoItemVariants = cva(
  "pixel-borders border-4 border-black dark:border-[#ff8c00] p-6 transition-none duration-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-white dark:bg-[#2a2a2a] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,140,0,0.3)]",
        primary:
          "bg-[#ff8c00] text-white border-black dark:bg-[#ff8c00] dark:border-[#ffd700] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,215,0,0.3)]",
        secondary:
          "bg-[#ffd700] text-black border-black dark:bg-[#ffd700] dark:border-[#ff8c00] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
        dark:
          "bg-[#1a1a1a] text-white border-[#ff8c00] dark:bg-[#000000] dark:border-[#ffd700] shadow-[6px_6px_0px_0px_rgba(255,140,0,0.5)]",
        gradient:
          "bg-gradient-to-br from-[#ff8c00] to-[#ffd700] text-white border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
        ghost:
          "bg-transparent border-2 border-dashed border-black dark:border-[#ff8c00] shadow-none",
      },
      span: {
        1: "col-span-1",
        2: "md:col-span-2",
        3: "lg:col-span-3",
        4: "lg:col-span-4",
        full: "col-span-full",
      },
      rowSpan: {
        1: "row-span-1",
        2: "md:row-span-2",
        3: "lg:row-span-3",
        full: "row-span-full",
      },
      hover: {
        none: "",
        lift: "hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,140,0,0.5)]",
        glow: "hover:shadow-[0_0_20px_rgba(255,140,0,0.5)] dark:hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]",
      },
    },
    defaultVariants: {
      variant: "default",
      span: 1,
      rowSpan: 1,
      hover: "none",
    },
  }
);

export interface PixelBentoGridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelBentoGridVariants> {}

const PixelBentoGrid = React.forwardRef<HTMLDivElement, PixelBentoGridProps>(
  ({ className, variant, columns, gap, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(pixelBentoGridVariants({ variant, columns, gap }), className)}
      {...props}
    />
  )
);
PixelBentoGrid.displayName = "PixelBentoGrid";

export interface PixelBentoItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelBentoItemVariants> {}

const PixelBentoItem = React.forwardRef<HTMLDivElement, PixelBentoItemProps>(
  ({ className, variant, span, rowSpan, hover, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        pixelBentoItemVariants({ variant, span, rowSpan, hover }),
        className
      )}
      {...props}
    />
  )
);
PixelBentoItem.displayName = "PixelBentoItem";

const PixelBentoHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mb-4 space-y-2", className)}
    {...props}
  />
));
PixelBentoHeader.displayName = "PixelBentoHeader";

const PixelBentoTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]",
      className
    )}
    {...props}
  />
));
PixelBentoTitle.displayName = "PixelBentoTitle";

const PixelBentoDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm opacity-80", className)}
    {...props}
  />
));
PixelBentoDescription.displayName = "PixelBentoDescription";

const PixelBentoContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
PixelBentoContent.displayName = "PixelBentoContent";

const PixelBentoIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-4xl mb-4", className)}
    {...props}
  />
));
PixelBentoIcon.displayName = "PixelBentoIcon";

const PixelBentoFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-4 pt-4 border-t-4 border-black/10 dark:border-white/10", className)}
    {...props}
  />
));
PixelBentoFooter.displayName = "PixelBentoFooter";

const PixelBentoPattern = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    pattern?: "dots" | "grid" | "checkerboard" | "scanlines";
  }
>(({ className, pattern = "dots", ...props }, ref) => {
  const patternClasses = {
    dots: "bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_1px,_transparent_1px)] bg-[size:16px_16px] dark:bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)]",
    grid: "bg-[linear-gradient(rgba(0,0,0,0.05)_1px,_transparent_1px),linear-gradient(90deg,_rgba(0,0,0,0.05)_1px,_transparent_1px)] bg-[size:16px_16px] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,_transparent_1px),linear-gradient(90deg,_rgba(255,255,255,0.03)_1px,_transparent_1px)]",
    checkerboard: "bg-[linear-gradient(45deg,_rgba(0,0,0,0.05)_25%,_transparent_25%,_transparent_75%,_rgba(0,0,0,0.05)_75%),linear-gradient(45deg,_rgba(0,0,0,0.05)_25%,_transparent_25%,_transparent_75%,_rgba(0,0,0,0.05)_75%)] bg-[size:32px_32px] bg-[position:0_0,16px_16px]",
    scanlines: "bg-[linear-gradient(0deg,_rgba(0,0,0,0.05)_50%,_transparent_50%)] bg-[size:100%_4px] dark:bg-[linear-gradient(0deg,_rgba(255,255,255,0.03)_50%,_transparent_50%)]",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 pointer-events-none opacity-50",
        patternClasses[pattern],
        className
      )}
      {...props}
    />
  );
});
PixelBentoPattern.displayName = "PixelBentoPattern";

export {
  PixelBentoGrid,
  PixelBentoItem,
  PixelBentoHeader,
  PixelBentoTitle,
  PixelBentoDescription,
  PixelBentoContent,
  PixelBentoIcon,
  PixelBentoFooter,
  PixelBentoPattern,
  pixelBentoGridVariants,
  pixelBentoItemVariants,
};
