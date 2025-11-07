"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import { cn } from "@/lib/utils"

function PixelHoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root {...props} />
}

function PixelHoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return <HoverCardPrimitive.Trigger {...props} />
}

function PixelHoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Content
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-64 border-4 border-black bg-[#fffacd] dark:bg-[#2a2a2a] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        "font-[family-name:var(--font-press-start)] text-xs duration-0",
        className
      )}
      {...props}
    />
  )
}

export { PixelHoverCard, PixelHoverCardTrigger, PixelHoverCardContent }
