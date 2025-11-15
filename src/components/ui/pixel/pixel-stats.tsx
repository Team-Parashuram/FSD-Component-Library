import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelStatsVariants = cva(
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
      columns: 4,
      gap: "md",
    },
  }
);

export interface PixelStatsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelStatsVariants> {
  children?: React.ReactNode;
}

const PixelStats = React.forwardRef<HTMLDivElement, PixelStatsProps>(
  ({ className, variant, columns, gap, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(pixelStatsVariants({ variant }), "py-16 md:py-24", className)}
        {...props}
      >
        <div className="container mx-auto px-4">
          <div className={cn("grid", pixelStatsVariants({ columns, gap }))}>
            {children}
          </div>
        </div>
      </section>
    );
  }
);
PixelStats.displayName = "PixelStats";

const pixelStatItemVariants = cva(
  "relative border-4 border-black p-6 md:p-8 transition-none text-center group min-w-[200px]",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-[#2a2a2a] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
        primary: "bg-[#ff8c00] text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        secondary: "bg-[#ffd700] text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        dark: "bg-black text-white border-[#ff8c00] shadow-[8px_8px_0px_0px_rgba(255,140,0,0.5)]",
        gradient: "bg-gradient-to-br from-[#ff8c00] to-[#ffd700] text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
      },
      hover: {
        none: "",
        lift: "hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] cursor-pointer",
        glow: "hover:shadow-[0_0_20px_rgba(255,140,0,0.6)]",
      },
    },
    defaultVariants: {
      variant: "default",
      hover: "lift",
    },
  }
);

export interface PixelStatItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelStatItemVariants> {}

const PixelStatItem = React.forwardRef<HTMLDivElement, PixelStatItemProps>(
  ({ className, variant, hover, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(pixelStatItemVariants({ variant, hover }), className)}
        {...props}
      >
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-4 h-4 border-l-4 border-t-4 border-black/20 dark:border-white/20" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-4 h-4 border-r-4 border-t-4 border-black/20 dark:border-white/20" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-4 border-b-4 border-black/20 dark:border-white/20" aria-hidden="true" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-4 border-b-4 border-black/20 dark:border-white/20" aria-hidden="true" />
        
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }
);
PixelStatItem.displayName = "PixelStatItem";

const PixelStatIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center text-4xl md:text-5xl mb-4 w-20 h-20 mx-auto border-4 border-black bg-white dark:bg-[#1a1a1a] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
PixelStatIcon.displayName = "PixelStatIcon";

const PixelStatValue = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl md:text-4xl font-bold mb-2 font-pixel whitespace-nowrap text-left -ml-4",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
PixelStatValue.displayName = "PixelStatValue";

const PixelStatLabel = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-sm md:text-base uppercase tracking-wider font-bold opacity-80 break-words text-left -ml-4",
      className
    )}
    {...props}
  >
    {children}
  </p>
));
PixelStatLabel.displayName = "PixelStatLabel";

const PixelStatDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs md:text-sm mt-2 opacity-70", className)}
    {...props}
  >
    {children}
  </p>
));
PixelStatDescription.displayName = "PixelStatDescription";

const PixelStatTrend = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { trend?: "up" | "down" | "neutral" }
>(({ className, trend = "neutral", children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex items-center gap-1 mt-2 text-xs md:text-sm font-bold px-2 py-1 border-2 border-black",
      trend === "up" && "bg-[#50c878] text-white",
      trend === "down" && "bg-[#ff6b6b] text-white",
      trend === "neutral" && "bg-gray-200 dark:bg-gray-700",
      className
    )}
    {...props}
  >
    {trend === "up" && <span>↑</span>}
    {trend === "down" && <span>↓</span>}
    {trend === "neutral" && <span>→</span>}
    {children}
  </div>
));
PixelStatTrend.displayName = "PixelStatTrend";

const PixelStatsHeader = React.forwardRef<
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
PixelStatsHeader.displayName = "PixelStatsHeader";

const PixelStatsSectionTitle = React.forwardRef<
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
PixelStatsSectionTitle.displayName = "PixelStatsSectionTitle";

const PixelStatsSectionDescription = React.forwardRef<
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
PixelStatsSectionDescription.displayName = "PixelStatsSectionDescription";

export {
  PixelStats,
  PixelStatItem,
  PixelStatIcon,
  PixelStatValue,
  PixelStatLabel,
  PixelStatDescription,
  PixelStatTrend,
  PixelStatsHeader,
  PixelStatsSectionTitle,
  PixelStatsSectionDescription,
  pixelStatsVariants,
  pixelStatItemVariants,
};
