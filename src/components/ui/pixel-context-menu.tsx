"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { Check, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

function PixelContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root {...props} />
}

function PixelContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return <ContextMenuPrimitive.Trigger {...props} />
}

function PixelContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        className={cn(
          "z-50 min-w-[8rem] overflow-hidden border-4 border-black bg-[#fffacd] dark:bg-[#2a2a2a] p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
          "font-[family-name:var(--font-press-start)] text-xs duration-0",
          className
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
}

function PixelContextMenuItem({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.Item
      className={cn(
        "relative flex cursor-pointer select-none items-center px-2 py-1.5 text-xs outline-none transition-colors duration-0",
        "hover:bg-[#ff6b6b] hover:text-white focus:bg-[#ff6b6b] focus:text-white",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
}

function PixelContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      className={cn(
        "relative flex cursor-pointer select-none items-center py-1.5 pl-8 pr-2 text-xs outline-none transition-colors duration-0",
        "hover:bg-[#ff6b6b] hover:text-white focus:bg-[#ff6b6b] focus:text-white",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

function PixelContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      className={cn(
        "relative flex cursor-pointer select-none items-center py-1.5 pl-8 pr-2 text-xs outline-none transition-colors duration-0",
        "hover:bg-[#ff6b6b] hover:text-white focus:bg-[#ff6b6b] focus:text-white",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <div className="h-2 w-2 bg-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

function PixelContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.Label
      className={cn(
        "px-2 py-1.5 text-xs font-bold",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
}

function PixelContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      className={cn("my-1 h-px bg-black", className)}
      {...props}
    />
  )
}

function PixelContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub {...props} />
}

function PixelContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
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
    </ContextMenuPrimitive.SubTrigger>
  )
}

function PixelContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden border-4 border-black bg-[#fffacd] dark:bg-[#2a2a2a] p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        "font-[family-name:var(--font-press-start)] text-xs duration-0",
        className
      )}
      {...props}
    />
  )
}

function PixelContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return <ContextMenuPrimitive.Group {...props} />
}

function PixelContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return <ContextMenuPrimitive.RadioGroup {...props} />
}

export {
  PixelContextMenu,
  PixelContextMenuTrigger,
  PixelContextMenuContent,
  PixelContextMenuItem,
  PixelContextMenuCheckboxItem,
  PixelContextMenuRadioItem,
  PixelContextMenuLabel,
  PixelContextMenuSeparator,
  PixelContextMenuSub,
  PixelContextMenuSubTrigger,
  PixelContextMenuSubContent,
  PixelContextMenuGroup,
  PixelContextMenuRadioGroup,
}
