"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const PixelCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "pixel-borders border-4 p-6 bg-[#fffacd] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:border-[#ff8c00] dark:shadow-[6px_6px_0px_0px_rgba(255,140,0,0.3)]",
      className
    )}
    {...props}
  />
));
PixelCard.displayName = "PixelCard";

const PixelCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 pb-4", className)}
    {...props}
  />
));
PixelCardHeader.displayName = "PixelCardHeader";

const PixelCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-base font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] leading-relaxed dark:text-[#ffd700]",
      className
    )}
    {...props}
  />
));
PixelCardTitle.displayName = "PixelCardTitle";

const PixelCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-sm text-black/80 dark:text-white/80 leading-relaxed",
      className
    )}
    {...props}
  />
));
PixelCardDescription.displayName = "PixelCardDescription";

const PixelCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("py-4", className)} {...props} />
));
PixelCardContent.displayName = "PixelCardContent";

const PixelCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4", className)}
    {...props}
  />
));
PixelCardFooter.displayName = "PixelCardFooter";

export {
  PixelCard,
  PixelCardHeader,
  PixelCardTitle,
  PixelCardDescription,
  PixelCardContent,
  PixelCardFooter,
};
