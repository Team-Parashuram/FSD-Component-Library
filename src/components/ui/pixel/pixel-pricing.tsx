import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelPricingVariants = cva(
  "relative w-full",
  {
    variants: {
      variant: {
        default: "bg-[#f5f5dc] dark:bg-[#1a1a1a]",
        primary: "bg-[#ff8c00] text-white",
        secondary: "bg-[#ffd700] text-black",
        dark: "bg-black text-white",
      },
      columns: {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
      },
      gap: {
        none: "gap-0",
        sm: "gap-4",
        md: "gap-8",
        lg: "gap-12",
        xl: "gap-16",
      },
    },
    defaultVariants: {
      variant: "default",
      columns: 3,
      gap: "lg",
    },
  }
);

export interface PixelPricingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelPricingVariants> {
  children?: React.ReactNode;
}

const PixelPricing = React.forwardRef<HTMLDivElement, PixelPricingProps>(
  ({ className, variant, columns, gap, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(pixelPricingVariants({ variant }), "py-16 md:py-24", className)}
        {...props}
      >
        <div className="container mx-auto px-4">
          <div className={cn("grid", pixelPricingVariants({ columns, gap }))}>
            {children}
          </div>
        </div>
      </section>
    );
  }
);
PixelPricing.displayName = "PixelPricing";

const pixelPricingCardVariants = cva(
  "relative border-4 border-black p-8 transition-none group overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-[#2a2a2a] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
        primary: "bg-[#ff8c00] text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        secondary: "bg-[#ffd700] text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        dark: "bg-black text-white border-[#ff8c00] shadow-[8px_8px_0px_0px_rgba(255,140,0,0.5)]",
        featured: "bg-gradient-to-br from-[#ff8c00] to-[#ffd700] text-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] scale-105 border-4",
      },
      hover: {
        none: "",
        lift: "hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] cursor-pointer",
      },
    },
    defaultVariants: {
      variant: "default",
      hover: "none",
    },
  }
);

export interface PixelPricingCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelPricingCardVariants> {}

const PixelPricingCard = React.forwardRef<HTMLDivElement, PixelPricingCardProps>(
  ({ className, variant, hover, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(pixelPricingCardVariants({ variant, hover }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
PixelPricingCard.displayName = "PixelPricingCard";

const PixelPricingBadge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider border-2 border-black bg-[#ffd700] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
PixelPricingBadge.displayName = "PixelPricingBadge";

const PixelPricingTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl md:text-2xl font-bold uppercase tracking-wide mb-4 font-pixel wrap-break-word text-left -ml-5",
      className
    )}
    {...props}
  >
    {children}
  </h3>
));
PixelPricingTitle.displayName = "PixelPricingTitle";

const PixelPricingPrice = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-4xl md:text-5xl font-bold mb-2 font-pixel text-left -ml-4",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
PixelPricingPrice.displayName = "PixelPricingPrice";

const PixelPricingPeriod = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm opacity-80 mb-6 text-left -ml-4", className)}
    {...props}
  >
    {children}
  </p>
));
PixelPricingPeriod.displayName = "PixelPricingPeriod";

const PixelPricingDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm md:text-base mb-6 opacity-90 text-left -ml-4", className)}
    {...props}
  >
    {children}
  </p>
));
PixelPricingDescription.displayName = "PixelPricingDescription";

const PixelPricingFeatures = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, children, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("space-y-3 mb-8", className)}
    {...props}
  >
    {children}
  </ul>
));
PixelPricingFeatures.displayName = "PixelPricingFeatures";

const PixelPricingFeature = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, children, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("flex items-start text-sm md:text-base", className)}
    {...props}
  >
    <span className="mr-2 text-lg">✓</span>
    <span>{children}</span>
  </li>
));
PixelPricingFeature.displayName = "PixelPricingFeature";

const PixelPricingActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-auto", className)}
    {...props}
  >
    {children}
  </div>
));
PixelPricingActions.displayName = "PixelPricingActions";

const PixelPricingHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-center mb-12", className)}
    {...props}
  >
    {children}
  </div>
));
PixelPricingHeader.displayName = "PixelPricingHeader";

const PixelPricingSectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-3xl md:text-5xl font-bold uppercase tracking-wider mb-4 font-[family-name:var(--font-pixel)]",
      className
    )}
    {...props}
  >
    {children}
  </h2>
));
PixelPricingSectionTitle.displayName = "PixelPricingSectionTitle";

const PixelPricingSectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-base md:text-xl opacity-80 max-w-3xl mx-auto", className)}
    {...props}
  >
    {children}
  </p>
));
PixelPricingSectionDescription.displayName = "PixelPricingSectionDescription";

export {
  PixelPricing,
  PixelPricingCard,
  PixelPricingBadge,
  PixelPricingTitle,
  PixelPricingPrice,
  PixelPricingPeriod,
  PixelPricingDescription,
  PixelPricingFeatures,
  PixelPricingFeature,
  PixelPricingActions,
  PixelPricingHeader,
  PixelPricingSectionTitle,
  PixelPricingSectionDescription,
  pixelPricingVariants,
  pixelPricingCardVariants,
};
