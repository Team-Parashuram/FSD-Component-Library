"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

const PixelSeparator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-black dark:bg-[#ff8c00]",
        orientation === "horizontal" ? "h-[4px] w-full" : "h-full w-[4px]",
        className
      )}
      {...props}
    />
  )
);
PixelSeparator.displayName = SeparatorPrimitive.Root.displayName;

export { PixelSeparator };
