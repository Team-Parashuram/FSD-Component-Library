"use client"

import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

function PixelNavigationMenu({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) {
  return (
    <NavigationMenuPrimitive.Root
      className={cn(
        "relative z-10 flex max-w-max flex-1 items-center justify-center font-[family-name:var(--font-press-start)]",
        className
      )}
      {...props}
    >
      {children}
      <PixelNavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  )
}

function PixelNavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      className={cn(
        "group flex flex-1 list-none items-center justify-center space-x-1",
        className
      )}
      {...props}
    />
  )
}

function PixelNavigationMenuItem({
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return <NavigationMenuPrimitive.Item {...props} />
}

const pixelNavigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-xs font-bold duration-0 border-2 border-black bg-[#fffacd] dark:bg-[#2a2a2a] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffd700] focus:bg-[#ffd700] disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-[#ff6b6b] data-[active]:text-white data-[state=open]:bg-[#ff6b6b] data-[state=open]:text-white"
)

function PixelNavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      className={cn(pixelNavigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDown
        className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function PixelNavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      className={cn(
        "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
        className
      )}
      {...props}
    />
  )
}

function PixelNavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      className={cn(pixelNavigationMenuTriggerStyle(), className)}
      {...props}
    />
  )
}

function PixelNavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div className={cn("absolute left-0 top-full flex justify-center")}>
      <NavigationMenuPrimitive.Viewport
        className={cn(
          "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden border-4 border-black bg-[#fffacd] dark:bg-[#2a2a2a] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        {...props}
      />
    </div>
  )
}

function PixelNavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      className={cn(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 bg-black shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  PixelNavigationMenu,
  PixelNavigationMenuList,
  PixelNavigationMenuItem,
  PixelNavigationMenuContent,
  PixelNavigationMenuTrigger,
  PixelNavigationMenuLink,
  PixelNavigationMenuIndicator,
  PixelNavigationMenuViewport,
  pixelNavigationMenuTriggerStyle,
}
