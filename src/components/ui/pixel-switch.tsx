"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const PixelSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-8 w-16 shrink-0 cursor-pointer items-center pixel-borders border-[3px] border-black transition-none duration-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8c00] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#ff8c00] data-[state=unchecked]:bg-white dark:border-[#ff8c00] dark:data-[state=unchecked]:bg-[#1a1a1a] dark:focus-visible:ring-offset-black",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-6 w-6 pixel-borders border-2 border-black bg-[#ffd700] transition-transform duration-0 data-[state=checked]:translate-x-8 data-[state=unchecked]:translate-x-0 dark:border-[#ff8c00]"
      )}
    />
  </SwitchPrimitives.Root>
));
PixelSwitch.displayName = SwitchPrimitives.Root.displayName;

export { PixelSwitch };
