"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const PixelTooltipProvider = TooltipPrimitive.Provider;

const PixelTooltip = TooltipPrimitive.Root;

const PixelTooltipTrigger = TooltipPrimitive.Trigger;

const PixelTooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden pixel-borders border-2 border-black bg-[#ffd700] px-3 py-2 text-xs font-medium text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-[#ff8c00] dark:bg-[#1a1a1a] dark:text-[#ffd700]",
      className
    )}
    {...props}
  />
));
PixelTooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { PixelTooltip, PixelTooltipTrigger, PixelTooltipContent, PixelTooltipProvider };
