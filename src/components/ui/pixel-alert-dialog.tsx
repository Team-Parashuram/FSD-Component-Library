"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
import { cn } from "@/lib/utils"
import { pixelButtonVariants } from "./pixel/pixel-button"

function PixelAlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root {...props} />
}

function PixelAlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return <AlertDialogPrimitive.Trigger {...props} />
}

function PixelAlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return <AlertDialogPrimitive.Portal {...props} />
}

function PixelAlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/80 duration-0",
        className
      )}
      {...props}
    />
  )
}

function PixelAlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <PixelAlertDialogPortal>
      <PixelAlertDialogOverlay />
      <AlertDialogPrimitive.Content
        className={cn(
          "fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border-4 border-black bg-[#fffacd] dark:bg-[#2a2a2a] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] duration-0 sm:rounded-none",
          "font-[family-name:var(--font-press-start)]",
          className
        )}
        {...props}
      />
    </PixelAlertDialogPortal>
  )
}

function PixelAlertDialogHeader({
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

function PixelAlertDialogFooter({
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

function PixelAlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      className={cn(
        "text-lg font-bold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function PixelAlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      className={cn("text-sm text-[#555] dark:text-[#aaa]", className)}
      {...props}
    />
  )
}

function PixelAlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(pixelButtonVariants(), className)}
      {...props}
    />
  )
}

function PixelAlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(pixelButtonVariants({ variant: "secondary" }), className)}
      {...props}
    />
  )
}

export {
  PixelAlertDialog,
  PixelAlertDialogTrigger,
  PixelAlertDialogPortal,
  PixelAlertDialogOverlay,
  PixelAlertDialogContent,
  PixelAlertDialogHeader,
  PixelAlertDialogFooter,
  PixelAlertDialogTitle,
  PixelAlertDialogDescription,
  PixelAlertDialogAction,
  PixelAlertDialogCancel,
}
