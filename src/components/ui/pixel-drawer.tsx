"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"
import { cn } from "@/lib/utils"

function PixelDrawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root {...props} />
}

function PixelDrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger {...props} />
}

function PixelDrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal {...props} />
}

function PixelDrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close {...props} />
}

function PixelDrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      className={cn("fixed inset-0 z-50 bg-black/80", className)}
      {...props}
    />
  )
}

function PixelDrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <PixelDrawerPortal>
      <PixelDrawerOverlay />
      <DrawerPrimitive.Content
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col border-t-4 border-black bg-[#fffacd] dark:bg-[#2a2a2a]",
          "font-[family-name:var(--font-press-start)]",
          className
        )}
        {...props}
      >
        <div className="mx-auto mt-4 h-2 w-[100px] bg-black" />
        {children}
      </DrawerPrimitive.Content>
    </PixelDrawerPortal>
  )
}

function PixelDrawerHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function PixelDrawerFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

function PixelDrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      className={cn("text-lg font-bold leading-none tracking-tight", className)}
      {...props}
    />
  )
}

function PixelDrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      className={cn("text-sm text-[#555] dark:text-[#aaa]", className)}
      {...props}
    />
  )
}

export {
  PixelDrawer,
  PixelDrawerTrigger,
  PixelDrawerPortal,
  PixelDrawerClose,
  PixelDrawerOverlay,
  PixelDrawerContent,
  PixelDrawerHeader,
  PixelDrawerFooter,
  PixelDrawerTitle,
  PixelDrawerDescription,
}
