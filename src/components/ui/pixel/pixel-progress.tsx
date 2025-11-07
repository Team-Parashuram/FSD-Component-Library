"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface PixelProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  showLabel?: boolean;
}

const PixelProgress = React.forwardRef<HTMLDivElement, PixelProgressProps>(
  ({ className, value = 0, max = 100, showLabel = false, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <div className="pixel-borders border-4 border-black bg-white dark:border-[#ff8c00] dark:bg-[#1a1a1a] h-8 relative overflow-hidden">
          <div
            className="h-full bg-[#ff8c00] transition-none duration-0 flex items-center justify-center"
            style={{ width: `${percentage}%` }}
          >
            {showLabel && percentage > 0 && (
              <span className="text-xs font-bold text-white px-2 whitespace-nowrap">
                {Math.round(percentage)}%
              </span>
            )}
          </div>
          {showLabel && percentage === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold">0%</span>
            </div>
          )}
        </div>
      </div>
    );
  }
);
PixelProgress.displayName = "PixelProgress";

export { PixelProgress };
