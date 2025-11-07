"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface PixelTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const PixelTextarea = React.forwardRef<HTMLTextAreaElement, PixelTextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full pixel-borders border-[3px] border-black bg-white px-4 py-3 text-sm transition-none duration-0 placeholder:text-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8c00] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:border-[#ff8c00] dark:bg-[#1a1a1a] dark:text-white dark:placeholder:text-white/50 dark:focus-visible:ring-[#ffd700] resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
PixelTextarea.displayName = "PixelTextarea";

export { PixelTextarea };
