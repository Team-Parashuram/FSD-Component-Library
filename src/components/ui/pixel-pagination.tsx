"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface PixelPaginationProps extends React.ComponentProps<"nav"> {}

function PixelPagination({ className, ...props }: PixelPaginationProps) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
}

function PixelPaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}

function PixelPaginationItem(props: React.ComponentProps<"li">) {
  return <li {...props} />
}

interface PixelPaginationLinkProps
  extends React.ComponentProps<"button"> {
  isActive?: boolean
}

function PixelPaginationLink({
  className,
  isActive,
  ...props
}: PixelPaginationLinkProps) {
  return (
    <button
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "inline-flex h-8 min-w-8 items-center justify-center border-2 border-black bg-[#fffacd] dark:bg-[#2a2a2a] px-3 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] duration-0",
        "hover:bg-[#ffd700] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        "font-[family-name:var(--font-press-start)]",
        isActive && "bg-[#ff6b6b] text-white hover:bg-[#ff6b6b]",
        className
      )}
      {...props}
    />
  )
}

function PixelPaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PixelPaginationLink>) {
  return (
    <PixelPaginationLink
      aria-label="Go to previous page"
      className={cn("gap-1", className)}
      {...props}
    >
      <span>←</span>
      <span>Prev</span>
    </PixelPaginationLink>
  )
}

function PixelPaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PixelPaginationLink>) {
  return (
    <PixelPaginationLink
      aria-label="Go to next page"
      className={cn("gap-1", className)}
      {...props}
    >
      <span>Next</span>
      <span>→</span>
    </PixelPaginationLink>
  )
}

function PixelPaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex h-8 w-8 items-center justify-center font-[family-name:var(--font-press-start)]",
        className
      )}
      {...props}
    >
      <span className="sr-only">More pages</span>
      <span>...</span>
    </span>
  )
}

export {
  PixelPagination,
  PixelPaginationContent,
  PixelPaginationLink,
  PixelPaginationItem,
  PixelPaginationPrevious,
  PixelPaginationNext,
  PixelPaginationEllipsis,
}
