"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const PixelCheckbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-6 w-6 shrink-0 pixel-borders border-[3px] border-black bg-white transition-none duration-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8c00] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#ff8c00] data-[state=checked]:text-white dark:border-[#ff8c00] dark:bg-[#1a1a1a] dark:data-[state=checked]:bg-[#ff8c00]",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4 font-bold" strokeWidth={4} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
PixelCheckbox.displayName = CheckboxPrimitive.Root.displayName;

export { PixelCheckbox };
