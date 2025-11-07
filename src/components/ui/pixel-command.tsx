"use client"

import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { PixelDialog, PixelDialogContent } from "./pixel/pixel-dialog"

function PixelCommand({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      className={cn(
        "flex h-full w-full flex-col overflow-hidden border-4 border-black bg-[#fffacd] dark:bg-[#2a2a2a] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        "font-[family-name:var(--font-press-start)]",
        className
      )}
      {...props}
    />
  )
}

interface PixelCommandDialogProps extends DialogProps {}

function PixelCommandDialog({ children, ...props }: PixelCommandDialogProps) {
  return (
    <PixelDialog {...props}>
      <PixelDialogContent className="overflow-hidden p-0">
        <PixelCommand className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-[#555] dark:[&_[cmdk-group-heading]]:text-[#aaa] [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </PixelCommand>
      </PixelDialogContent>
    </PixelDialog>
  )
}

function PixelCommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div className="flex items-center border-b-4 border-black px-3" cmdk-input-wrapper="">
      <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        className={cn(
          "flex h-11 w-full bg-transparent py-3 text-xs outline-none placeholder:text-[#555] dark:placeholder:text-[#aaa] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  )
}

function PixelCommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
      {...props}
    />
  )
}

function PixelCommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      className="py-6 text-center text-xs"
      {...props}
    />
  )
}

function PixelCommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      className={cn(
        "overflow-hidden p-1 text-[#000] dark:text-[#fff] [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-[#555] dark:[&_[cmdk-group-heading]]:text-[#aaa]",
        className
      )}
      {...props}
    />
  )
}

function PixelCommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      className={cn("h-px bg-black", className)}
      {...props}
    />
  )
}

function PixelCommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      className={cn(
        "relative flex cursor-pointer select-none items-center px-2 py-1.5 text-xs outline-none duration-0",
        "hover:bg-[#ff6b6b] hover:text-white",
        "aria-selected:bg-[#ff6b6b] aria-selected:text-white",
        "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function PixelCommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-[#555] dark:text-[#aaa]",
        className
      )}
      {...props}
    />
  )
}

export {
  PixelCommand,
  PixelCommandDialog,
  PixelCommandInput,
  PixelCommandList,
  PixelCommandEmpty,
  PixelCommandGroup,
  PixelCommandItem,
  PixelCommandSeparator,
  PixelCommandShortcut,
}
