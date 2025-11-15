import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelFooterVariants = cva(
  "relative w-full border-t-4 border-black",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-[#2a2a2a]",
        primary: "bg-[#ff8c00] text-white",
        secondary: "bg-[#ffd700] text-black",
        dark: "bg-black text-white border-[#ff8c00]",
      },
      size: {
        sm: "py-8",
        md: "py-12",
        lg: "py-16",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface PixelFooterProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof pixelFooterVariants> {}

const PixelFooter = React.forwardRef<HTMLElement, PixelFooterProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn(pixelFooterVariants({ variant, size }), className)}
        {...props}
      >
        <div className="container mx-auto px-4">
          {children}
        </div>
      </footer>
    );
  }
);
PixelFooter.displayName = "PixelFooter";

const PixelFooterGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
PixelFooterGrid.displayName = "PixelFooterGrid";

const PixelFooterSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("space-y-4", className)}
    {...props}
  >
    {children}
  </div>
));
PixelFooterSection.displayName = "PixelFooterSection";

const PixelFooterTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg md:text-xl font-bold uppercase tracking-wider mb-4 font-[family-name:var(--font-pixel)]",
      "relative pb-2",
      "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-black dark:after:bg-white",
      className
    )}
    {...props}
  >
    {children}
  </h3>
));
PixelFooterTitle.displayName = "PixelFooterTitle";

const PixelFooterLinks = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, children, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("space-y-2", className)}
    {...props}
  >
    {children}
  </ul>
));
PixelFooterLinks.displayName = "PixelFooterLinks";

const PixelFooterLink = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, children, ...props }, ref) => (
  <li
    ref={ref}
    className={cn(
      "text-sm md:text-base opacity-80 hover:opacity-100 transition-opacity cursor-pointer",
      className
    )}
    {...props}
  >
    {children}
  </li>
));
PixelFooterLink.displayName = "PixelFooterLink";

const PixelFooterDivider = React.forwardRef<
  HTMLHRElement,
  React.HTMLAttributes<HTMLHRElement>
>(({ className, ...props }, ref) => (
  <hr
    ref={ref}
    className={cn(
      "border-t-2 border-black dark:border-white opacity-20 my-8",
      className
    )}
    {...props}
  />
));
PixelFooterDivider.displayName = "PixelFooterDivider";

const PixelFooterBottom = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
PixelFooterBottom.displayName = "PixelFooterBottom";

const PixelFooterCopyright = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-center md:text-left", className)}
    {...props}
  >
    {children}
  </p>
));
PixelFooterCopyright.displayName = "PixelFooterCopyright";

const PixelFooterSocial = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex gap-4", className)}
    {...props}
  >
    {children}
  </div>
));
PixelFooterSocial.displayName = "PixelFooterSocial";

const PixelFooterSocialLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, children, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "w-10 h-10 flex items-center justify-center border-2 border-black bg-white dark:bg-[#1a1a1a] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
      "hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
      "transition-all cursor-pointer",
      className
    )}
    {...props}
  >
    {children}
  </a>
));
PixelFooterSocialLink.displayName = "PixelFooterSocialLink";

const PixelFooterLogo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl md:text-3xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
PixelFooterLogo.displayName = "PixelFooterLogo";

const PixelFooterDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm md:text-base opacity-80 max-w-sm", className)}
    {...props}
  >
    {children}
  </p>
));
PixelFooterDescription.displayName = "PixelFooterDescription";

export {
  PixelFooter,
  PixelFooterGrid,
  PixelFooterSection,
  PixelFooterTitle,
  PixelFooterLinks,
  PixelFooterLink,
  PixelFooterDivider,
  PixelFooterBottom,
  PixelFooterCopyright,
  PixelFooterSocial,
  PixelFooterSocialLink,
  PixelFooterLogo,
  PixelFooterDescription,
  pixelFooterVariants,
};
