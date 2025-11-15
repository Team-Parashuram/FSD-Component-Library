import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelTestimonialsVariants = cva(
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

export interface PixelTestimonialsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelTestimonialsVariants> {
  children?: React.ReactNode;
}

const PixelTestimonials = React.forwardRef<HTMLDivElement, PixelTestimonialsProps>(
  ({ className, variant, columns, gap, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(pixelTestimonialsVariants({ variant }), "py-16 md:py-24", className)}
        {...props}
      >
        <div className="container mx-auto px-4">
          <div className={cn("grid", pixelTestimonialsVariants({ columns, gap }))}>
            {children}
          </div>
        </div>
      </section>
    );
  }
);
PixelTestimonials.displayName = "PixelTestimonials";

const pixelTestimonialCardVariants = cva(
  "relative border-4 border-black p-8 transition-none group",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-[#2a2a2a] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
        primary: "bg-[#ff8c00] text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        secondary: "bg-[#ffd700] text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        dark: "bg-black text-white border-[#ff8c00] shadow-[8px_8px_0px_0px_rgba(255,140,0,0.5)]",
      },
      hover: {
        none: "",
        lift: "hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] cursor-pointer",
      },
    },
    defaultVariants: {
      variant: "default",
      hover: "lift",
    },
  }
);

export interface PixelTestimonialCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelTestimonialCardVariants> {}

const PixelTestimonialCard = React.forwardRef<HTMLDivElement, PixelTestimonialCardProps>(
  ({ className, variant, hover, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(pixelTestimonialCardVariants({ variant, hover }), className)}
        {...props}
      >
        {/* Quote marks decoration */}
        <div className="absolute top-4 left-4 text-6xl opacity-10 font-[family-name:var(--font-pixel)]" aria-hidden="true">"</div>
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }
);
PixelTestimonialCard.displayName = "PixelTestimonialCard";

const PixelTestimonialQuote = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-base md:text-lg leading-relaxed mb-6 italic", className)}
    {...props}
  >
    {children}
  </p>
));
PixelTestimonialQuote.displayName = "PixelTestimonialQuote";

const PixelTestimonialAuthor = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-4", className)}
    {...props}
  >
    {children}
  </div>
));
PixelTestimonialAuthor.displayName = "PixelTestimonialAuthor";

const PixelTestimonialAvatar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-12 h-12 md:w-16 md:h-16 border-4 border-black bg-white dark:bg-[#1a1a1a] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-2xl",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
PixelTestimonialAvatar.displayName = "PixelTestimonialAvatar";

const PixelTestimonialInfo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex-1", className)}
    {...props}
  >
    {children}
  </div>
));
PixelTestimonialInfo.displayName = "PixelTestimonialInfo";

const PixelTestimonialName = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("font-bold text-lg uppercase font-[family-name:var(--font-pixel)]", className)}
    {...props}
  >
    {children}
  </p>
));
PixelTestimonialName.displayName = "PixelTestimonialName";

const PixelTestimonialRole = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm opacity-80", className)}
    {...props}
  >
    {children}
  </p>
));
PixelTestimonialRole.displayName = "PixelTestimonialRole";

const PixelTestimonialRating = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex gap-1 mb-4 text-xl", className)}
    {...props}
  >
    {children}
  </div>
));
PixelTestimonialRating.displayName = "PixelTestimonialRating";

const PixelTestimonialsHeader = React.forwardRef<
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
PixelTestimonialsHeader.displayName = "PixelTestimonialsHeader";

const PixelTestimonialsSectionTitle = React.forwardRef<
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
PixelTestimonialsSectionTitle.displayName = "PixelTestimonialsSectionTitle";

const PixelTestimonialsSectionDescription = React.forwardRef<
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
PixelTestimonialsSectionDescription.displayName = "PixelTestimonialsSectionDescription";

export {
  PixelTestimonials,
  PixelTestimonialCard,
  PixelTestimonialQuote,
  PixelTestimonialAuthor,
  PixelTestimonialAvatar,
  PixelTestimonialInfo,
  PixelTestimonialName,
  PixelTestimonialRole,
  PixelTestimonialRating,
  PixelTestimonialsHeader,
  PixelTestimonialsSectionTitle,
  PixelTestimonialsSectionDescription,
  pixelTestimonialsVariants,
  pixelTestimonialCardVariants,
};
