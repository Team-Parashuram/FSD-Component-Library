"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const pixelGlitchTextVariants = cva(
  "font-bold uppercase tracking-wider pixel-font relative inline-block",
  {
    variants: {
      variant: {
        default: "text-black dark:text-[#ffd700]",
        primary: "text-[#ff8c00] dark:text-[#ff8c00]",
        secondary: "text-[#ffd700] dark:text-[#ffd700]",
        cyber: "text-[#00ff00] dark:text-[#00ff00]",
      },
      size: {
        sm: "text-sm",
        md: "text-2xl",
        lg: "text-4xl",
        xl: "text-6xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface PixelGlitchTextProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelGlitchTextVariants> {
  text: string;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
}

const PixelGlitchText = React.forwardRef<HTMLDivElement, PixelGlitchTextProps>(
  (
    {
      text,
      speed = 0.5,
      enableShadows = true,
      enableOnHover = false,
      variant,
      size,
      className,
      ...props
    },
    ref
  ) => {
    const [isGlitching, setIsGlitching] = React.useState(!enableOnHover);

    const glitchStyle: React.CSSProperties = {
      animation: isGlitching
        ? `pixel-glitch ${2 * speed}s infinite`
        : "none",
    };

    const shadowStyle = enableShadows
      ? {
          textShadow: isGlitching
            ? "2px 2px #ff0000, -2px -2px #00ffff"
            : "none",
        }
      : {};

    return (
      <div
        ref={ref}
        className={cn(
          pixelGlitchTextVariants({ variant, size }),
          "cursor-pointer select-none",
          className
        )}
        onMouseEnter={() => enableOnHover && setIsGlitching(true)}
        onMouseLeave={() => enableOnHover && setIsGlitching(false)}
        style={{ ...glitchStyle, ...shadowStyle }}
        {...props}
      >
        {text}
        {enableShadows && isGlitching && (
          <>
            <span
              className="absolute top-0 left-0 text-red-500 opacity-70 pointer-events-none"
              style={{
                animation: `pixel-glitch-shadow-1 ${speed}s infinite`,
                clipPath: "inset(20% 0 50% 0)",
              }}
              aria-hidden="true"
            >
              {text}
            </span>
            <span
              className="absolute top-0 left-0 text-cyan-500 opacity-70 pointer-events-none"
              style={{
                animation: `pixel-glitch-shadow-2 ${speed * 1.2}s infinite`,
                clipPath: "inset(60% 0 10% 0)",
              }}
              aria-hidden="true"
            >
              {text}
            </span>
          </>
        )}
      </div>
    );
  }
);

PixelGlitchText.displayName = "PixelGlitchText";

export { PixelGlitchText, pixelGlitchTextVariants };
