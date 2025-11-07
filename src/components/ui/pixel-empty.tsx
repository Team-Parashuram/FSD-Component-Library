import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

function PixelEmpty({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex min-h-[200px] flex-col items-center justify-center gap-2 border-4 border-black bg-[#fffacd] dark:bg-[#2a2a2a] p-8 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        "font-[family-name:var(--font-press-start)]",
        className
      )}
      {...props}
    />
  )
}

function PixelEmptyHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2",
        className
      )}
      {...props}
    />
  )
}

const pixelEmptyMediaVariants = cva(
  "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-[#e0e0e0] dark:bg-[#3a3a3a] text-black dark:text-white flex size-16 shrink-0 items-center justify-center border-4 border-black [&_svg:not([class*='size-'])]:size-8",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function PixelEmptyMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof pixelEmptyMediaVariants>) {
  return (
    <div
      className={cn(pixelEmptyMediaVariants({ variant }), className)}
      {...props}
    />
  )
}

function PixelEmptyTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-sm font-bold", className)}
      {...props}
    />
  )
}

function PixelEmptyDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-xs text-[#555] dark:text-[#aaa] max-w-sm",
        className
      )}
      {...props}
    />
  )
}

function PixelEmptyContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 mt-4",
        className
      )}
      {...props}
    />
  )
}

export {
  PixelEmpty,
  PixelEmptyHeader,
  PixelEmptyMedia,
  PixelEmptyTitle,
  PixelEmptyDescription,
  PixelEmptyContent,
}
