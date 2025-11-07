import { cn } from "@/lib/utils"

function PixelSkeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "bg-[#e0e0e0] dark:bg-[#3a3a3a] border-2 border-black animate-pulse",
        className
      )}
      {...props}
    />
  )
}

export { PixelSkeleton }
