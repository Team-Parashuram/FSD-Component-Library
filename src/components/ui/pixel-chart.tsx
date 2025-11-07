"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

// Simple pixel chart wrapper - for full chart functionality, use regular Chart component
// This provides pixel styling for basic chart containers

function PixelChartContainer({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "border-4 border-black bg-[#fffacd] dark:bg-[#2a2a2a] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        "font-[family-name:var(--font-press-start)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function PixelChartTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-xs font-bold mb-4", className)}
      {...props}
    />
  )
}

function PixelChartDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-xs text-[#555] dark:text-[#aaa] mb-4", className)}
      {...props}
    />
  )
}

// Note: For actual chart rendering with Recharts, use the standard Chart component
// This pixel variant is primarily for styling containers

export {
  PixelChartContainer,
  PixelChartTitle,
  PixelChartDescription,
}
