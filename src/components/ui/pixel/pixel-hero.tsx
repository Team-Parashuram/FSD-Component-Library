"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelHeroVariants = cva(
  "relative w-full pixel-borders transition-none duration-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#fffacd] border-black dark:bg-[#1a1a1a] dark:border-[#ff8c00]",
        primary:
          "bg-[#ff8c00] border-black text-white dark:bg-[#ff8c00] dark:border-[#ffd700]",
        secondary:
          "bg-[#ffd700] border-black text-black dark:bg-[#ffd700] dark:border-[#ff8c00]",
        dark:
          "bg-black border-[#ff8c00] text-white dark:bg-[#000000] dark:border-[#ffd700]",
        gradient:
          "bg-gradient-to-br from-[#ff8c00] via-[#ffd700] to-[#ff6b00] border-black text-white dark:border-[#ffd700]",
      },
      size: {
        sm: "py-12 md:py-16",
        md: "py-16 md:py-24",
        lg: "py-24 md:py-32",
        xl: "py-32 md:py-48",
        full: "min-h-screen flex items-center",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
      align: "center",
    },
  }
);

export interface PixelHeroProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelHeroVariants> {
  container?: boolean;
}

const PixelHero = React.forwardRef<HTMLDivElement, PixelHeroProps>(
  ({ className, variant, size, align, container = true, children, ...props }, ref) => {
    return (
      <section
        className={cn(pixelHeroVariants({ variant, size, align }), className)}
        ref={ref}
        {...props}
      >
        {container ? (
          <div className="container mx-auto px-4">{children}</div>
        ) : (
          children
        )}
      </section>
    );
  }
);
PixelHero.displayName = "PixelHero";

const PixelHeroContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("max-w-5xl mx-auto space-y-6", className)}
    {...props}
  />
));
PixelHeroContent.displayName = "PixelHeroContent";

const pixelHeroTitleVariants = cva(
  "font-bold uppercase tracking-wider font-[family-name:var(--font-press-start)] leading-tight transition-none duration-0",
  {
    variants: {
      size: {
        sm: "text-2xl md:text-3xl",
        md: "text-3xl md:text-4xl lg:text-5xl",
        lg: "text-4xl md:text-5xl lg:text-6xl",
        xl: "text-5xl md:text-6xl lg:text-7xl",
      },
      animated: {
        true: "hover:scale-105 cursor-default",
        false: "",
      },
    },
    defaultVariants: {
      size: "lg",
      animated: false,
    },
  }
);

export interface PixelHeroTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof pixelHeroTitleVariants> {
  as?: "h1" | "h2" | "h3";
}

const PixelHeroTitle = React.forwardRef<HTMLHeadingElement, PixelHeroTitleProps>(
  ({ className, size, animated, as: Comp = "h1", ...props }, ref) => (
    <Comp
      ref={ref}
      className={cn(pixelHeroTitleVariants({ size, animated }), className)}
      {...props}
    />
  )
);
PixelHeroTitle.displayName = "PixelHeroTitle";

const pixelHeroSubtitleVariants = cva(
  "font-bold uppercase tracking-wide transition-none duration-0",
  {
    variants: {
      size: {
        sm: "text-sm md:text-base",
        md: "text-base md:text-lg lg:text-xl",
        lg: "text-lg md:text-xl lg:text-2xl",
        xl: "text-xl md:text-2xl lg:text-3xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface PixelHeroSubtitleProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof pixelHeroSubtitleVariants> {}

const PixelHeroSubtitle = React.forwardRef<
  HTMLParagraphElement,
  PixelHeroSubtitleProps
>(({ className, size, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(pixelHeroSubtitleVariants({ size }), className)}
    {...props}
  />
));
PixelHeroSubtitle.displayName = "PixelHeroSubtitle";

const PixelHeroDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-sm md:text-base lg:text-lg max-w-3xl mx-auto opacity-90 leading-relaxed",
      className
    )}
    {...props}
  />
));
PixelHeroDescription.displayName = "PixelHeroDescription";

const PixelHeroActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-wrap gap-4 justify-center items-center", className)}
    {...props}
  />
));
PixelHeroActions.displayName = "PixelHeroActions";

const PixelHeroBadge = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-flex items-center px-4 py-2 text-xs font-bold uppercase tracking-wider pixel-borders border-2 bg-[#ffd700] border-black text-black dark:bg-[#ff8c00] dark:text-white dark:border-[#ffd700] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,215,0,0.5)]",
      className
    )}
    {...props}
  />
));
PixelHeroBadge.displayName = "PixelHeroBadge";

const PixelHeroImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative w-full max-w-4xl mx-auto mt-8 pixel-borders border-4 border-black overflow-hidden bg-black/5 dark:bg-white/5 dark:border-[#ff8c00] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,140,0,0.5)]",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
PixelHeroImage.displayName = "PixelHeroImage";

const PixelHeroGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center", className)}
    {...props}
  />
));
PixelHeroGrid.displayName = "PixelHeroGrid";

const PixelHeroFeature = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-start gap-3 p-4 pixel-borders border-2 border-black bg-white/50 dark:bg-white/5 dark:border-[#ff8c00]",
      className
    )}
    {...props}
  />
));
PixelHeroFeature.displayName = "PixelHeroFeature";

const PixelHeroPattern = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    pattern?: "dots" | "grid" | "checkerboard" | "scanlines";
  }
>(({ className, pattern = "dots", ...props }, ref) => {
  const patternClasses = {
    dots: "bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_1px,_transparent_1px)] bg-[size:20px_20px] dark:bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)]",
    grid: "bg-[linear-gradient(rgba(0,0,0,0.05)_1px,_transparent_1px),linear-gradient(90deg,_rgba(0,0,0,0.05)_1px,_transparent_1px)] bg-[size:20px_20px] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,_transparent_1px),linear-gradient(90deg,_rgba(255,255,255,0.03)_1px,_transparent_1px)]",
    checkerboard: "bg-[linear-gradient(45deg,_rgba(0,0,0,0.05)_25%,_transparent_25%,_transparent_75%,_rgba(0,0,0,0.05)_75%),linear-gradient(45deg,_rgba(0,0,0,0.05)_25%,_transparent_25%,_transparent_75%,_rgba(0,0,0,0.05)_75%)] bg-[size:40px_40px] bg-[position:0_0,20px_20px] dark:bg-[linear-gradient(45deg,_rgba(255,255,255,0.03)_25%,_transparent_25%,_transparent_75%,_rgba(255,255,255,0.03)_75%),linear-gradient(45deg,_rgba(255,255,255,0.03)_25%,_transparent_25%,_transparent_75%,_rgba(255,255,255,0.03)_75%)]",
    scanlines: "bg-[linear-gradient(0deg,_rgba(0,0,0,0.05)_50%,_transparent_50%)] bg-[size:100%_4px] dark:bg-[linear-gradient(0deg,_rgba(255,255,255,0.03)_50%,_transparent_50%)]",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 pointer-events-none",
        patternClasses[pattern],
        className
      )}
      {...props}
    />
  );
});
PixelHeroPattern.displayName = "PixelHeroPattern";

export {
  PixelHero,
  PixelHeroContent,
  PixelHeroTitle,
  PixelHeroSubtitle,
  PixelHeroDescription,
  PixelHeroActions,
  PixelHeroBadge,
  PixelHeroImage,
  PixelHeroGrid,
  PixelHeroFeature,
  PixelHeroPattern,
  pixelHeroVariants,
};
