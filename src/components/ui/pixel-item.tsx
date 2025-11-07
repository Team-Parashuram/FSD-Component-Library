import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { PixelSeparator } from "./pixel/pixel-separator"

function PixelItemGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col border-4 border-black bg-[#fffacd] dark:bg-[#2a2a2a] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        "font-[family-name:var(--font-press-start)]",
        className
      )}
      {...props}
    />
  )
}

function PixelItemSeparator({
  className,
  ...props
}: React.ComponentProps<typeof PixelSeparator>) {
  return (
    <PixelSeparator
      className={cn("my-0", className)}
      {...props}
    />
  )
}

const pixelItemVariants = cva(
  "group/item flex items-center border-2 border-transparent text-xs duration-0 outline-none [a]:duration-0",
  {
    variants: {
      variant: {
        default: "bg-transparent [a]:hover:bg-[#ffd700]",
        outline: "border-black",
        muted: "bg-[#e0e0e0] dark:bg-[#3a3a3a]",
      },
      size: {
        default: "p-4 gap-4",
        sm: "py-3 px-4 gap-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function PixelItem({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof pixelItemVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      className={cn(pixelItemVariants({ variant, size }), className)}
      {...props}
    />
  )
}

function PixelItemIcon({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      className={cn(
        "flex shrink-0 items-center justify-center [&>svg]:size-5",
        className
      )}
      {...props}
    />
  )
}

function PixelItemContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-1 flex-col gap-1 min-w-0", className)}
      {...props}
    />
  )
}

function PixelItemTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-xs font-bold leading-none", className)}
      {...props}
    />
  )
}

function PixelItemDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-xs text-[#555] dark:text-[#aaa] leading-snug", className)}
      {...props}
    />
  )
}

function PixelItemAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      className={cn(
        "flex shrink-0 items-center gap-2 [&>svg]:size-4",
        className
      )}
      {...props}
    />
  )
}

export {
  PixelItemGroup,
  PixelItemSeparator,
  PixelItem,
  PixelItemIcon,
  PixelItemContent,
  PixelItemTitle,
  PixelItemDescription,
  PixelItemAction,
  pixelItemVariants,
}
