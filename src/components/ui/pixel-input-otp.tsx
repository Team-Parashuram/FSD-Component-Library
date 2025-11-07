"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { cn } from "@/lib/utils"

function PixelInputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  )
}

function PixelInputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center", className)}
      {...props}
    />
  )
}

function PixelInputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      className={cn(
        "relative flex h-12 w-12 items-center justify-center border-4 border-black bg-[#fffacd] dark:bg-[#2a2a2a] text-sm font-[family-name:var(--font-press-start)] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] duration-0",
        isActive && "z-10 border-[#ff6b6b]",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-black duration-1000" />
        </div>
      )}
    </div>
  )
}

function PixelInputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div role="separator" {...props}>
      <span className="font-[family-name:var(--font-press-start)]">-</span>
    </div>
  )
}

export { PixelInputOTP, PixelInputOTPGroup, PixelInputOTPSlot, PixelInputOTPSeparator }
