"use client";

import * as React from "react";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const PixelBreadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
PixelBreadcrumb.displayName = "PixelBreadcrumb";

const PixelBreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-2 break-words text-sm text-black dark:text-white",
      className
    )}
    {...props}
  />
));
PixelBreadcrumbList.displayName = "PixelBreadcrumbList";

const PixelBreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-2", className)}
    {...props}
  />
));
PixelBreadcrumbItem.displayName = "PixelBreadcrumbItem";

const PixelBreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "pixel-borders border-2 border-black px-2 py-1 text-xs font-medium uppercase transition-none duration-0 hover:bg-black/10 dark:border-[#ff8c00] dark:hover:bg-white/10",
        className
      )}
      {...props}
    />
  );
});
PixelBreadcrumbLink.displayName = "PixelBreadcrumbLink";

const PixelBreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn(
      "pixel-borders border-2 border-black bg-[#ff8c00] px-2 py-1 text-xs font-bold uppercase text-white dark:border-[#ff8c00]",
      className
    )}
    {...props}
  />
));
PixelBreadcrumbPage.displayName = "PixelBreadcrumbPage";

const PixelBreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);
PixelBreadcrumbSeparator.displayName = "PixelBreadcrumbSeparator";

const PixelBreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
PixelBreadcrumbEllipsis.displayName = "PixelBreadcrumbEllipsis";

export {
  PixelBreadcrumb,
  PixelBreadcrumbList,
  PixelBreadcrumbItem,
  PixelBreadcrumbLink,
  PixelBreadcrumbPage,
  PixelBreadcrumbSeparator,
  PixelBreadcrumbEllipsis,
};
