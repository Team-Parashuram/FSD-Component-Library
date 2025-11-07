"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { ChevronDown } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const pixelSeparatorVariants = cva(
  "shrink-0 bg-black dark:bg-[#ff8c00]",
  {
    variants: {
      orientation: {
        horizontal: "h-1 w-full",
        vertical: "h-full w-1",
      },
      variant: {
        solid: "",
        dashed: "bg-[linear-gradient(90deg,black_4px,transparent_4px)] dark:bg-[linear-gradient(90deg,#ff8c00_4px,transparent_4px)] bg-[length:8px_100%]",
        dotted: "bg-[radial-gradient(black_2px,transparent_2px)] dark:bg-[radial-gradient(#ff8c00_2px,transparent_2px)] bg-[length:8px_8px]",
        double: "relative before:absolute before:bg-black dark:before:bg-[#ff8c00] after:absolute after:bg-black dark:after:bg-[#ff8c00]",
        thick: "h-[4px]",
      },
    },
    compoundVariants: [
      {
        orientation: "horizontal",
        variant: "dashed",
        className: "bg-[linear-gradient(90deg,black_4px,transparent_4px)] dark:bg-[linear-gradient(90deg,#ff8c00_4px,transparent_4px)] bg-[length:8px_100%]",
      },
      {
        orientation: "vertical",
        variant: "dashed",
        className: "bg-[linear-gradient(0deg,black_4px,transparent_4px)] dark:bg-[linear-gradient(0deg,#ff8c00_4px,transparent_4px)] bg-[length:100%_8px]",
      },
      {
        orientation: "horizontal",
        variant: "double",
        className: "h-[3px] before:top-0 before:left-0 before:right-0 before:h-[1px] after:bottom-0 after:left-0 after:right-0 after:h-[1px]",
      },
      {
        orientation: "vertical",
        variant: "double",
        className: "w-[3px] before:top-0 before:left-0 before:bottom-0 before:w-[1px] after:top-0 after:right-0 after:bottom-0 after:w-[1px]",
      },
      {
        orientation: "vertical",
        variant: "thick",
        className: "h-full w-[4px]",
      },
    ],
    defaultVariants: {
      orientation: "horizontal",
      variant: "solid",
    },
  }
)

const PixelSeparator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> &
    VariantProps<typeof pixelSeparatorVariants>
>(
  (
    { className, orientation = "horizontal", variant = "solid", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        pixelSeparatorVariants({ orientation, variant }),
        className
      )}
      {...props}
    />
  )
)
PixelSeparator.displayName = SeparatorPrimitive.Root.displayName

// Expandable Separator Section Component
const PixelExpandableSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> & {
    title?: string
    icon?: React.ReactNode
    variant?: "solid" | "dashed" | "dotted" | "double" | "thick"
    separatorClassName?: string
  }
>(({ className, title, icon, variant = "solid", separatorClassName, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(props.defaultOpen ?? false)

  return (
    <CollapsiblePrimitive.Root
      ref={ref}
      open={isOpen}
      onOpenChange={setIsOpen}
      className={cn("w-full", className)}
      {...props}
    >
      <div className="flex items-center gap-2">
        <PixelSeparator className={cn("flex-1", separatorClassName)} variant={variant} />
        
        {(title || icon) && (
          <CollapsiblePrimitive.Trigger
            className={cn(
              "flex items-center gap-2 px-3 py-2",
              "border-4 border-black bg-[var(--color-pixel-light)] dark:bg-[var(--color-pixel-dark)]",
              "font-[family-name:var(--font-press-start)] text-xs",
              "transition-none duration-0",
              "hover:bg-[var(--color-pixel-primary)] hover:text-white",
              "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
              "active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px]"
            )}
          >
            {icon}
            {title && <span>{title}</span>}
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-none duration-0",
                isOpen && "rotate-180"
              )}
            />
          </CollapsiblePrimitive.Trigger>
        )}
        
        <PixelSeparator className={cn("flex-1", separatorClassName)} variant={variant} />
      </div>
      
      <CollapsiblePrimitive.Content className="mt-4 data-[state=closed]:animate-none data-[state=open]:animate-none">
        {children}
      </CollapsiblePrimitive.Content>
    </CollapsiblePrimitive.Root>
  )
})
PixelExpandableSeparator.displayName = "PixelExpandableSeparator"

// Section Divider with Label
const PixelSectionDivider = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    label?: string
    variant?: "solid" | "dashed" | "dotted" | "double" | "thick"
    separatorClassName?: string
  }
>(({ className, label, variant = "solid", separatorClassName, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex items-center gap-4 my-4", className)}
      {...props}
    >
      <PixelSeparator className={cn("flex-1", separatorClassName)} variant={variant} />
      {label && (
        <span className="font-[family-name:var(--font-press-start)] text-xs px-2 whitespace-nowrap">
          {label}
        </span>
      )}
      <PixelSeparator className={cn("flex-1", separatorClassName)} variant={variant} />
    </div>
  )
})
PixelSectionDivider.displayName = "PixelSectionDivider"

export {
  PixelSeparator,
  PixelExpandableSeparator,
  PixelSectionDivider,
  pixelSeparatorVariants,
}
