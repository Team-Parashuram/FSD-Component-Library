"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

const PixelPopover = PopoverPrimitive.Root;

const PixelPopoverTrigger = PopoverPrimitive.Trigger;

const PixelPopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 pixel-borders border-4 border-black bg-[#fffacd] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-[#ff8c00] dark:bg-[#1a1a1a] dark:shadow-[4px_4px_0px_0px_rgba(255,140,0,0.3)]",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PixelPopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { PixelPopover, PixelPopoverTrigger, PixelPopoverContent };
