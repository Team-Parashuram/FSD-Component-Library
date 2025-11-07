"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const PixelRadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
PixelRadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const PixelRadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-6 w-6 pixel-borders border-[3px] border-black bg-white text-[#ff8c00] transition-none duration-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8c00] disabled:cursor-not-allowed disabled:opacity-50 dark:border-[#ff8c00] dark:bg-[#1a1a1a] dark:text-[#ffd700] dark:focus-visible:ring-[#ffd700]",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-3 w-3 fill-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
PixelRadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { PixelRadioGroup, PixelRadioGroupItem };
