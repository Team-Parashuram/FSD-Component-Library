import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelCtaVariants = cva(
  "relative w-full border-4 border-black overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-[#2a2a2a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        primary: "bg-[#4a90e2] text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        secondary: "bg-[#ffd700] text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        dark: "bg-black text-white border-[#4a90e2] shadow-[8px_8px_0px_0px_rgba(74,144,226,0.5)]",
        gradient: "bg-gradient-to-br from-[#4a90e2] to-[#7b68ee] text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        success: "bg-[#50c878] text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        accent: "bg-[#ff6b9d] text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        purple: "bg-[#9b59b6] text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
      },
      size: {
        sm: "py-12 md:py-16",
        md: "py-16 md:py-24",
        lg: "py-24 md:py-32",
        xl: "py-32 md:py-40",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      align: "center",
    },
  }
);

export interface PixelCtaProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelCtaVariants> {}

const PixelCta = React.forwardRef<HTMLDivElement, PixelCtaProps>(
  ({ className, variant, size, align, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(pixelCtaVariants({ variant, size, align }), className)}
        {...props}
      >
        <div className="container mx-auto px-4">
          {children}
        </div>
      </section>
    );
  }
);
PixelCta.displayName = "PixelCta";

const PixelCtaContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("max-w-4xl mx-auto", className)}
    {...props}
  >
    {children}
  </div>
));
PixelCtaContent.displayName = "PixelCtaContent";

const PixelCtaTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-6 font-[family-name:var(--font-pixel)]",
      className
    )}
    {...props}
  >
    {children}
  </h2>
));
PixelCtaTitle.displayName = "PixelCtaTitle";

const PixelCtaDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-base md:text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed", className)}
    {...props}
  >
    {children}
  </p>
));
PixelCtaDescription.displayName = "PixelCtaDescription";

const PixelCtaActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-wrap gap-4 justify-center items-center", className)}
    {...props}
  >
    {children}
  </div>
));
PixelCtaActions.displayName = "PixelCtaActions";

const pixelCtaPatternVariants = cva(
  "absolute inset-0 pointer-events-none opacity-10",
  {
    variants: {
      pattern: {
        dots: "bg-[radial-gradient(circle,_currentColor_1px,_transparent_1px)] bg-[length:24px_24px]",
        grid: "bg-[linear-gradient(currentColor_1px,_transparent_1px),_linear-gradient(90deg,_currentColor_1px,_transparent_1px)] bg-[length:24px_24px]",
        checkerboard: "bg-[linear-gradient(45deg,_currentColor_25%,_transparent_25%,_transparent_75%,_currentColor_75%,_currentColor),_linear-gradient(45deg,_currentColor_25%,_transparent_25%,_transparent_75%,_currentColor_75%,_currentColor)] bg-[length:24px_24px] bg-[position:0_0,_12px_12px]",
        scanlines: "bg-[repeating-linear-gradient(0deg,_currentColor,_currentColor_1px,_transparent_1px,_transparent_4px)]",
      },
    },
    defaultVariants: {
      pattern: "dots",
    },
  }
);

export interface PixelCtaPatternProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelCtaPatternVariants> {}

const PixelCtaPattern = React.forwardRef<HTMLDivElement, PixelCtaPatternProps>(
  ({ className, pattern, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(pixelCtaPatternVariants({ pattern }), className)}
        aria-hidden="true"
        {...props}
      />
    );
  }
);
PixelCtaPattern.displayName = "PixelCtaPattern";

const PixelCtaBadge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-block px-4 py-2 mb-6 text-xs md:text-sm font-bold uppercase tracking-wider border-2 border-black bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-[family-name:var(--font-pixel)]",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
PixelCtaBadge.displayName = "PixelCtaBadge";

const PixelCtaHighlight = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      "inline-block px-2 py-1 mx-1 bg-white text-black border-2 border-black",
      className
    )}
    {...props}
  >
    {children}
  </span>
));
PixelCtaHighlight.displayName = "PixelCtaHighlight";

export {
  PixelCta,
  PixelCtaContent,
  PixelCtaTitle,
  PixelCtaDescription,
  PixelCtaActions,
  PixelCtaPattern,
  PixelCtaBadge,
  PixelCtaHighlight,
  pixelCtaVariants,
  pixelCtaPatternVariants,
};
