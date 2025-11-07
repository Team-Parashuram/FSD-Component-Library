import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { PixelSeparator } from "./pixel/pixel-separator"

const pixelButtonGroupVariants = cva(
  "flex w-fit items-stretch font-[family-name:var(--font-press-start)]",
  {
    variants: {
      orientation: {
        horizontal:
          "flex-row [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:border-r-0",
        vertical:
          "flex-col [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:border-b-0",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

function PixelButtonGroup({
  className,
  orientation,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof pixelButtonGroupVariants>) {
  return (
    <div
      role="group"
      data-orientation={orientation}
      className={cn(pixelButtonGroupVariants({ orientation }), className)}
      {...props}
    />
  )
}

function PixelButtonGroupText({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      className={cn(
        "flex items-center gap-2 border-4 border-black bg-[#e0e0e0] dark:bg-[#3a3a3a] px-4 py-2 text-xs font-bold",
        className
      )}
      {...props}
    />
  )
}

function PixelButtonGroupSeparator({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-black group-data-[orientation=horizontal]/button-group:w-px group-data-[orientation=vertical]/button-group:h-px",
        className
      )}
      {...props}
    />
  )
}

export { PixelButtonGroup, PixelButtonGroupText, PixelButtonGroupSeparator, pixelButtonGroupVariants }
