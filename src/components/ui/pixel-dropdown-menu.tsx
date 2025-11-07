"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Check, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

function PixelDropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root {...props} />
}

function PixelDropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return <DropdownMenuPrimitive.Trigger {...props} />
}

function PixelDropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[8rem] overflow-hidden border-4 border-black bg-[#fffacd] dark:bg-[#2a2a2a] p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
          "font-[family-name:var(--font-press-start)] text-xs duration-0",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function PixelDropdownMenuItem({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Item
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

function PixelDropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
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
        <DropdownMenuPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function PixelDropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      className={cn(
        "relative flex cursor-pointer select-none items-center py-1.5 pl-8 pr-2 text-xs outline-none transition-colors duration-0",
        "hover:bg-[#ff6b6b] hover:text-white focus:bg-[#ff6b6b] focus:text-white",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <div className="h-2 w-2 bg-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function PixelDropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      className={cn(
        "px-2 py-1.5 text-xs font-bold",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  )
}

function PixelDropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      className={cn("my-1 h-px bg-black", className)}
      {...props}
    />
  )
}

function PixelDropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return <DropdownMenuPrimitive.Group {...props} />
}

function PixelDropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub {...props} />
}

function PixelDropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
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
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function PixelDropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden border-4 border-black bg-[#fffacd] dark:bg-[#2a2a2a] p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        "font-[family-name:var(--font-press-start)] text-xs duration-0",
        className
      )}
      {...props}
    />
  )
}

function PixelDropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return <DropdownMenuPrimitive.RadioGroup {...props} />
}

export {
  PixelDropdownMenu,
  PixelDropdownMenuTrigger,
  PixelDropdownMenuContent,
  PixelDropdownMenuItem,
  PixelDropdownMenuCheckboxItem,
  PixelDropdownMenuRadioItem,
  PixelDropdownMenuLabel,
  PixelDropdownMenuSeparator,
  PixelDropdownMenuGroup,
  PixelDropdownMenuSub,
  PixelDropdownMenuSubTrigger,
  PixelDropdownMenuSubContent,
  PixelDropdownMenuRadioGroup,
}
