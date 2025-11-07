"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

const PixelSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-4 w-full grow overflow-hidden pixel-borders border-[3px] border-black bg-white dark:border-[#ff8c00] dark:bg-[#1a1a1a]">
      <SliderPrimitive.Range className="absolute h-full bg-[#ff8c00]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-6 w-6 pixel-borders border-[3px] border-black bg-[#ffd700] transition-none duration-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8c00] disabled:pointer-events-none disabled:opacity-50 dark:border-[#ff8c00] dark:bg-[#ffd700] cursor-pointer hover:scale-110 active:scale-95" />
  </SliderPrimitive.Root>
));
PixelSlider.displayName = SliderPrimitive.Root.displayName;

export { PixelSlider };
