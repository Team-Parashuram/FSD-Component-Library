"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

function PixelMenubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      className={cn(
        "flex h-10 items-center space-x-1 border-4 border-black bg-[#fffacd] dark:bg-[#2a2a2a] p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        "font-[family-name:var(--font-press-start)] text-xs",
        className
      )}
      {...props}
    />
  )
}

function PixelMenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu {...props} />
}

function PixelMenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      className={cn(
        "flex cursor-pointer select-none items-center px-3 py-1.5 text-xs font-bold outline-none duration-0",
        "hover:bg-[#ff6b6b] hover:text-white",
        "focus:bg-[#ff6b6b] focus:text-white",
        "data-[state=open]:bg-[#ff6b6b] data-[state=open]:text-white",
        className
      )}
      {...props}
    />
  )
}

function PixelMenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[12rem] overflow-hidden border-4 border-black bg-[#fffacd] dark:bg-[#2a2a2a] p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
          "font-[family-name:var(--font-press-start)] text-xs duration-0",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
}

function PixelMenubarItem({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.Item
      className={cn(
        "relative flex cursor-pointer select-none items-center px-2 py-1.5 text-xs outline-none duration-0",
        "hover:bg-[#ff6b6b] hover:text-white focus:bg-[#ff6b6b] focus:text-white",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
}

function PixelMenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  return (
    <MenubarPrimitive.CheckboxItem
      className={cn(
        "relative flex cursor-pointer select-none items-center py-1.5 pl-8 pr-2 text-xs outline-none duration-0",
        "hover:bg-[#ff6b6b] hover:text-white focus:bg-[#ff6b6b] focus:text-white",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
}

function PixelMenubarRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
  return (
    <MenubarPrimitive.RadioItem
      className={cn(
        "relative flex cursor-pointer select-none items-center py-1.5 pl-8 pr-2 text-xs outline-none duration-0",
        "hover:bg-[#ff6b6b] hover:text-white focus:bg-[#ff6b6b] focus:text-white",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <div className="h-2 w-2 bg-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
}

function PixelMenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.Label
      className={cn(
        "px-2 py-1.5 text-xs font-bold",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
}

function PixelMenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      className={cn("my-1 h-px bg-black", className)}
      {...props}
    />
  )
}

function PixelMenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub {...props} />
}

function PixelMenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.SubTrigger
      className={cn(
        "flex cursor-pointer select-none items-center px-2 py-1.5 text-xs outline-none duration-0",
        "hover:bg-[#ff6b6b] hover:text-white focus:bg-[#ff6b6b] focus:text-white",
        "data-[state=open]:bg-[#ff6b6b] data-[state=open]:text-white",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  )
}

function PixelMenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.SubContent
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden border-4 border-black bg-[#fffacd] dark:bg-[#2a2a2a] p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        "font-[family-name:var(--font-press-start)] text-xs duration-0",
        className
      )}
      {...props}
    />
  )
}

function PixelMenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group {...props} />
}

function PixelMenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal {...props} />
}

function PixelMenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup {...props} />
}

export {
  PixelMenubar,
  PixelMenubarMenu,
  PixelMenubarTrigger,
  PixelMenubarContent,
  PixelMenubarItem,
  PixelMenubarCheckboxItem,
  PixelMenubarRadioItem,
  PixelMenubarLabel,
  PixelMenubarSeparator,
  PixelMenubarSub,
  PixelMenubarSubTrigger,
  PixelMenubarSubContent,
  PixelMenubarGroup,
  PixelMenubarPortal,
  PixelMenubarRadioGroup,
}
