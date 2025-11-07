"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface PixelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PixelInput = React.forwardRef<HTMLInputElement, PixelInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full pixel-borders border-[3px] border-black bg-white px-4 py-3 text-sm transition-none duration-0 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8c00] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:border-[#ff8c00] dark:bg-[#1a1a1a] dark:text-white dark:placeholder:text-white/50 dark:focus-visible:ring-[#ffd700]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
PixelInput.displayName = "PixelInput";

export { PixelInput };
