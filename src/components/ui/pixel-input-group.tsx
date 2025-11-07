"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

function PixelInputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group/input-group relative flex h-9 w-full items-center overflow-hidden border-4 border-black bg-[#fffacd] dark:bg-[#2a2a2a] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        "has-[:focus-visible]:border-[#ff6b6b] has-[:disabled]:opacity-50",
        "font-[family-name:var(--font-press-start)]",
        className
      )}
      {...props}
    />
  )
}

function PixelInputGroupAddon({
  className,
  align = "inline-start",
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "inline-start" | "inline-end" | "block-start" | "block-end"
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      className={cn(
        "flex items-center justify-center gap-2 px-3 text-xs font-bold text-[#555] dark:text-[#aaa] select-none [&>svg]:size-4",
        align === "inline-start" && "order-first pl-3",
        align === "inline-end" && "order-last pr-3",
        align === "block-start" && "order-first w-full justify-start px-3 pt-3",
        align === "block-end" && "order-last w-full justify-start px-3 pb-3",
        className
      )}
      {...props}
    />
  )
}

function PixelInputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "flex h-full min-w-0 flex-1 bg-transparent px-3 text-xs outline-none placeholder:text-[#555] dark:placeholder:text-[#aaa] disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  )
}

export { PixelInputGroup, PixelInputGroupAddon, PixelInputGroupInput }
