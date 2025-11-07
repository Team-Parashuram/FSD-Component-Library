"use client"

import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { pixelToggleVariants } from "./pixel/pixel-toggle"
import { cn } from "@/lib/utils"
import { type VariantProps } from "class-variance-authority"

const PixelToggleGroupContext = React.createContext<
  VariantProps<typeof pixelToggleVariants>
>({
  size: "default",
  variant: "default",
})

function PixelToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof pixelToggleVariants>) {
  return (
    <ToggleGroupPrimitive.Root
      className={cn("flex items-center justify-center gap-1", className)}
      {...props}
    >
      <PixelToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </PixelToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function PixelToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof pixelToggleVariants>) {
  const context = React.useContext(PixelToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      className={cn(
        pixelToggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

export { PixelToggleGroup, PixelToggleGroupItem }
