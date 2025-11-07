"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

function PixelSheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root {...props} />
}

function PixelSheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger {...props} />
}

function PixelSheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close {...props} />
}

function PixelSheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal {...props} />
}

function PixelSheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/80 duration-0",
        className
      )}
      {...props}
    />
  )
}

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-[#fffacd] dark:bg-[#2a2a2a] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] duration-0 font-[family-name:var(--font-press-start)]",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b-4 border-black",
        bottom: "inset-x-0 bottom-0 border-t-4 border-black",
        left: "inset-y-0 left-0 h-full w-3/4 border-r-4 border-black sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l-4 border-black sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

interface PixelSheetContentProps
  extends React.ComponentProps<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

function PixelSheetContent({
  side = "right",
  className,
  children,
  ...props
}: PixelSheetContentProps) {
  return (
    <PixelSheetPortal>
      <PixelSheetOverlay />
      <SheetPrimitive.Content
        className={cn(sheetVariants({ side }), className)}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="absolute right-4 top-4 opacity-70 transition-opacity hover:opacity-100 duration-0">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </PixelSheetPortal>
  )
}

function PixelSheetHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-2 text-center sm:text-left",
        className
      )}
      {...props}
    />
  )
}

function PixelSheetFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      {...props}
    />
  )
}

function PixelSheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      className={cn("text-lg font-bold", className)}
      {...props}
    />
  )
}

function PixelSheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      className={cn("text-sm text-[#555] dark:text-[#aaa]", className)}
      {...props}
    />
  )
}

export {
  PixelSheet,
  PixelSheetTrigger,
  PixelSheetClose,
  PixelSheetPortal,
  PixelSheetOverlay,
  PixelSheetContent,
  PixelSheetHeader,
  PixelSheetFooter,
  PixelSheetTitle,
  PixelSheetDescription,
}
