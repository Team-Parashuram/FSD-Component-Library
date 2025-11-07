"use client"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { PixelLabel } from "./pixel/pixel-label"
import { PixelSeparator } from "./pixel/pixel-separator"

function PixelFieldSet({ className, ...props }: React.ComponentProps<"fieldset">) {
  return (
    <fieldset
      className={cn(
        "flex flex-col gap-6 font-[family-name:var(--font-press-start)]",
        className
      )}
      {...props}
    />
  )
}

function PixelFieldLegend({
  className,
  variant = "legend",
  ...props
}: React.ComponentProps<"legend"> & { variant?: "legend" | "label" }) {
  return (
    <legend
      data-variant={variant}
      className={cn(
        "mb-3 font-bold",
        variant === "legend" ? "text-sm" : "text-xs",
        className
      )}
      {...props}
    />
  )
}

function PixelFieldGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-4",
        className
      )}
      {...props}
    />
  )
}

const pixelFieldVariants = cva(
  "flex w-full gap-3",
  {
    variants: {
      orientation: {
        horizontal: "flex-row items-center",
        vertical: "flex-col",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
)

function PixelField({
  className,
  orientation,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof pixelFieldVariants>) {
  return (
    <div
      className={cn(pixelFieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function PixelFieldLabel({
  className,
  required,
  ...props
}: React.ComponentProps<typeof PixelLabel> & { required?: boolean }) {
  return (
    <PixelLabel
      className={cn(
        "text-xs font-bold",
        required && "after:content-['*'] after:ml-0.5 after:text-[#ff0000]",
        className
      )}
      {...props}
    />
  )
}

function PixelFieldDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-xs text-[#555] dark:text-[#aaa]", className)}
      {...props}
    />
  )
}

function PixelFieldError({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-xs font-bold text-[#ff0000]", className)}
      {...props}
    />
  )
}

export {
  PixelFieldSet,
  PixelFieldLegend,
  PixelFieldGroup,
  PixelField,
  PixelFieldLabel,
  PixelFieldDescription,
  PixelFieldError,
  pixelFieldVariants,
}
