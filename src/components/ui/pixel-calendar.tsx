"use client"

import * as React from "react"
import { DayPicker, type DayPickerProps } from "react-day-picker"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { pixelButtonVariants } from "./pixel-button"

function PixelCalendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: DayPickerProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "p-3 border-4 border-black bg-[#fffacd] dark:bg-[#2a2a2a] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        "font-[family-name:var(--font-press-start)] text-xs",
        className
      )}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        month_caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-bold",
        nav: "space-x-1 flex items-center",
        button_previous: cn(
          pixelButtonVariants({ variant: "ghost", size: "sm" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        button_next: cn(
          pixelButtonVariants({ variant: "ghost", size: "sm" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        month_grid: "w-full border-collapse space-y-1",
        weekdays: "flex",
        weekday:
          "text-[#555] dark:text-[#aaa] rounded-md w-8 font-normal text-[0.6rem]",
        week: "flex w-full mt-2",
        day: cn(
          "relative p-0 text-center text-xs font-normal",
          "focus-within:relative focus-within:z-20"
        ),
        day_button: cn(
          "h-8 w-8 p-0 font-normal border-2 border-black bg-transparent hover:bg-[#ff6b6b] hover:text-white duration-0",
          "aria-selected:bg-[#ff6b6b] aria-selected:text-white",
          "disabled:opacity-50"
        ),
        range_start: "day-range-start",
        range_end: "day-range-end",
        selected:
          "bg-[#ff6b6b] text-white hover:bg-[#ff6b6b] hover:text-white focus:bg-[#ff6b6b] focus:text-white",
        today: "bg-[#ffd700] text-black",
        outside:
          "day-outside text-[#888] aria-selected:bg-[#888]/50 aria-selected:text-[#888]",
        disabled: "text-[#888] opacity-50",
        range_middle:
          "aria-selected:bg-[#ff6b6b]/50 aria-selected:text-white",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          const Icon = orientation === "left" ? ChevronLeft : ChevronRight
          return <Icon className="h-4 w-4" />
        },
      }}
      {...props}
    />
  )
}

export { PixelCalendar }
