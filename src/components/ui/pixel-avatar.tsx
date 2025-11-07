"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"

function PixelAvatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        "relative flex h-16 w-16 shrink-0 overflow-hidden border-4 border-black bg-[#fffacd] dark:bg-[#2a2a2a] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] duration-0",
        className
      )}
      {...props}
    />
  )
}

function PixelAvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      className={cn("aspect-square h-full w-full", className)}
      style={{ imageRendering: "pixelated" }}
      {...props}
    />
  )
}

function PixelAvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        "flex h-full w-full items-center justify-center bg-[#ff6b6b] text-white font-[family-name:var(--font-press-start)] text-xs",
        className
      )}
      {...props}
    />
  )
}

export { PixelAvatar, PixelAvatarImage, PixelAvatarFallback }
