import { cn } from "@/lib/utils"

function PixelKbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      className={cn(
        "inline-flex h-5 min-w-5 items-center justify-center gap-1 border-2 border-black bg-[#e0e0e0] dark:bg-[#3a3a3a] px-1 font-[family-name:var(--font-press-start)] text-xs select-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        className
      )}
      {...props}
    />
  )
}

function PixelKbdGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <kbd
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  )
}

export { PixelKbd, PixelKbdGroup }
