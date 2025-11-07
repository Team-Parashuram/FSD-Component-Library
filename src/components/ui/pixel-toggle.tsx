"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const pixelToggleVariants = cva(
  "inline-flex items-center justify-center gap-2 font-[family-name:var(--font-press-start)] text-xs border-4 border-black duration-0 transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-[#fffacd] dark:bg-[#2a2a2a] hover:bg-[#ffd700] data-[state=on]:bg-[#ff6b6b] data-[state=on]:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        outline:
          "border-4 border-black bg-transparent hover:bg-[#fffacd] dark:hover:bg-[#2a2a2a] data-[state=on]:bg-[#ff6b6b] data-[state=on]:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
      },
      size: {
        default: "h-10 px-3 min-w-10",
        sm: "h-8 px-2 min-w-8",
        lg: "h-12 px-4 min-w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const PixelToggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof pixelToggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(pixelToggleVariants({ variant, size, className }))}
    {...props}
  />
))

PixelToggle.displayName = TogglePrimitive.Root.displayName

export { PixelToggle, pixelToggleVariants }
