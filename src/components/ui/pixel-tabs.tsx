"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const PixelTabs = TabsPrimitive.Root;

const PixelTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex items-center gap-2 p-1 text-black dark:text-white",
      className
    )}
    {...props}
  />
));
PixelTabsList.displayName = TabsPrimitive.List.displayName;

const PixelTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-bold uppercase tracking-wider transition-none duration-0 pixel-borders border-[3px] border-black bg-white hover:bg-black/5 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[#ff8c00] data-[state=active]:text-white data-[state=active]:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:border-[#ff8c00] dark:bg-[#1a1a1a] dark:hover:bg-white/5 dark:data-[state=active]:bg-[#ff8c00] dark:data-[state=active]:border-[#ff8c00]",
      className
    )}
    {...props}
  />
));
PixelTabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const PixelTabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8c00] focus-visible:ring-offset-2 dark:ring-offset-black",
      className
    )}
    {...props}
  />
));
PixelTabsContent.displayName = TabsPrimitive.Content.displayName;

export { PixelTabs, PixelTabsList, PixelTabsTrigger, PixelTabsContent };
