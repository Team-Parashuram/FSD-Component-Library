"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelHeroVariants = cva(
  "relative w-full pixel-borders transition-none duration-0 overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-[#fffacd] border-black dark:bg-[#1a1a1a] dark:border-[#ff8c00]",
        primary:
          "bg-[#ff8c00] border-black text-white dark:bg-[#ff8c00] dark:border-[#ffd700] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,215,0,0.3)]",
        secondary:
          "bg-[#ffd700] border-black text-black dark:bg-[#ffd700] dark:border-[#ff8c00] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,140,0,0.3)]",
        dark:
          "bg-black border-[#ff8c00] text-white dark:bg-[#000000] dark:border-[#ffd700] shadow-[8px_8px_0px_0px_rgba(255,140,0,0.5)] dark:shadow-[8px_8px_0px_0px_rgba(255,215,0,0.5)]",
        gradient:
          "bg-gradient-to-br from-[#ff8c00] via-[#ffd700] to-[#ff6b00] border-black text-white dark:border-[#ffd700] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        arcade:
          "bg-[#1a1a2e] border-[#ff8c00] text-white dark:bg-[#0f0f1e] dark:border-[#ffd700] shadow-[0_0_20px_rgba(255,140,0,0.5)] dark:shadow-[0_0_20px_rgba(255,215,0,0.5)]",
        neon:
          "bg-black border-[#00ff00] text-[#00ff00] shadow-[0_0_20px_rgba(0,255,0,0.5),inset_0_0_20px_rgba(0,255,0,0.1)]",
        retro:
          "bg-[#e6d5ac] border-[#8b4513] text-[#4a2c2a] dark:bg-[#2a1810] dark:border-[#d4a574] dark:text-[#f5e6d3] shadow-[6px_6px_0px_0px_rgba(139,69,19,0.5)]",
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

const pixelHeroBadgeVariants = cva(
  "inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider pixel-borders border-2 transition-none duration-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#ffd700] border-black text-black dark:bg-[#ff8c00] dark:text-white dark:border-[#ffd700] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,215,0,0.5)]",
        primary:
          "bg-[#ff8c00] border-black text-white dark:bg-[#ff8c00] dark:border-[#ffd700] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        success:
          "bg-[#00ff00] border-black text-black dark:bg-[#00cc00] dark:border-[#00ff00] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        warning:
          "bg-[#ff0000] border-black text-white dark:bg-[#cc0000] dark:border-[#ff0000] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        neon:
          "bg-black border-[#00ff00] text-[#00ff00] shadow-[0_0_10px_rgba(0,255,0,0.5)]",
        pulse:
          "bg-[#ffd700] border-black text-black dark:bg-[#ff8c00] dark:text-white animate-pulse shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface PixelHeroBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof pixelHeroBadgeVariants> {}

const PixelHeroBadge = React.forwardRef<HTMLSpanElement, PixelHeroBadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(pixelHeroBadgeVariants({ variant }), className)}
      {...props}
    />
  )
);
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
    pattern?: "dots" | "grid" | "checkerboard" | "scanlines" | "diagonal" | "cross" | "waves";
    animate?: boolean;
  }
>(({ className, pattern = "dots", animate = false, ...props }, ref) => {
  const patternClasses = {
    dots: "bg-[radial-gradient(circle,_rgba(0,0,0,0.15)_1px,_transparent_1px)] bg-[size:20px_20px] dark:bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)]",
    grid: "bg-[linear-gradient(rgba(0,0,0,0.1)_1px,_transparent_1px),linear-gradient(90deg,_rgba(0,0,0,0.1)_1px,_transparent_1px)] bg-[size:20px_20px] dark:bg-[linear-gradient(rgba(255,255,255,0.08)_1px,_transparent_1px),linear-gradient(90deg,_rgba(255,255,255,0.08)_1px,_transparent_1px)]",
    checkerboard: "bg-[linear-gradient(45deg,_rgba(0,0,0,0.1)_25%,_transparent_25%,_transparent_75%,_rgba(0,0,0,0.1)_75%),linear-gradient(45deg,_rgba(0,0,0,0.1)_25%,_transparent_25%,_transparent_75%,_rgba(0,0,0,0.1)_75%)] bg-[size:40px_40px] bg-[position:0_0,20px_20px] dark:bg-[linear-gradient(45deg,_rgba(255,255,255,0.08)_25%,_transparent_25%,_transparent_75%,_rgba(255,255,255,0.08)_75%),linear-gradient(45deg,_rgba(255,255,255,0.08)_25%,_transparent_25%,_transparent_75%,_rgba(255,255,255,0.08)_75%)]",
    scanlines: "bg-[linear-gradient(0deg,_rgba(0,0,0,0.1)_50%,_transparent_50%)] bg-[size:100%_4px] dark:bg-[linear-gradient(0deg,_rgba(255,255,255,0.08)_50%,_transparent_50%)]",
    diagonal: "bg-[repeating-linear-gradient(45deg,_rgba(0,0,0,0.08),_rgba(0,0,0,0.08)_10px,_transparent_10px,_transparent_20px)] dark:bg-[repeating-linear-gradient(45deg,_rgba(255,255,255,0.06),_rgba(255,255,255,0.06)_10px,_transparent_10px,_transparent_20px)]",
    cross: "bg-[linear-gradient(rgba(0,0,0,0.1)_2px,_transparent_2px),linear-gradient(90deg,_rgba(0,0,0,0.1)_2px,_transparent_2px)] bg-[size:20px_20px] dark:bg-[linear-gradient(rgba(255,255,255,0.08)_2px,_transparent_2px),linear-gradient(90deg,_rgba(255,255,255,0.08)_2px,_transparent_2px)]",
    waves: "bg-[repeating-radial-gradient(circle_at_0_0,_transparent_0,_rgba(0,0,0,0.08)_10px,_transparent_20px)] dark:bg-[repeating-radial-gradient(circle_at_0_0,_transparent_0,_rgba(255,255,255,0.06)_10px,_transparent_20px)]",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 pointer-events-none",
        patternClasses[pattern],
        animate && "animate-pulse",
        className
      )}
      {...props}
    />
  );
});
PixelHeroPattern.displayName = "PixelHeroPattern";

const PixelHeroFloatingElement = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    delay?: number;
  }
>(({ className, delay = 0, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute opacity-40 dark:opacity-30 pointer-events-none",
      className
    )}
    style={{
      animation: `pixel-float 3s ease-in-out ${delay}s infinite`,
    }}
    {...props}
  >
    {children}
  </div>
));
PixelHeroFloatingElement.displayName = "PixelHeroFloatingElement";

const PixelHeroCornerDecor = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  }
>(({ className, position = "top-left", ...props }, ref) => {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "absolute w-12 h-12 pixel-borders border-4 border-current opacity-50 dark:opacity-40",
        positionClasses[position],
        className
      )}
      {...props}
    />
  );
});
PixelHeroCornerDecor.displayName = "PixelHeroCornerDecor";

const PixelHeroStats = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid grid-cols-2 md:grid-cols-4 gap-4 mt-8",
      className
    )}
    {...props}
  />
));
PixelHeroStats.displayName = "PixelHeroStats";

const PixelHeroStat = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col items-center justify-center p-4 pixel-borders border-2 border-current bg-black/5 dark:bg-white/5",
      className
    )}
    {...props}
  />
));
PixelHeroStat.displayName = "PixelHeroStat";

const PixelHeroGlowText = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    color?: string;
  }
>(({ className, color = "#ff8c00", children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("relative inline-block", className)}
    style={{
      textShadow: `0 0 10px ${color}, 0 0 20px ${color}, 0 0 40px ${color}, 0 0 60px ${color}`,
    }}
    {...props}
  >
    {children}
  </span>
));
PixelHeroGlowText.displayName = "PixelHeroGlowText";

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
  PixelHeroFloatingElement,
  PixelHeroCornerDecor,
  PixelHeroStats,
  PixelHeroStat,
  PixelHeroGlowText,
  pixelHeroVariants,
  pixelHeroBadgeVariants,
};
