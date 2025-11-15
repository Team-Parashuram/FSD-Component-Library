"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelCodeBlockVariants = cva(
  "relative border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-mono overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-[#1a1a1a] text-[#00ff00]",
        terminal: "bg-black text-[#00ff00]",
        dark: "bg-[#0d1117] text-[#c9d1d9]",
        light: "bg-white text-black dark:bg-[#1a1a1a] dark:text-white",
        matrix: "bg-black text-[#00ff00]",
        amber: "bg-black text-[#ffb000]",
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface PixelCodeBlockProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelCodeBlockVariants> {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  showCopyButton?: boolean;
  title?: string;
  highlightLines?: number[];
}

const PixelCodeBlock = React.forwardRef<HTMLDivElement, PixelCodeBlockProps>(
  (
    {
      className,
      variant,
      size,
      code,
      language = "javascript",
      showLineNumbers = true,
      showCopyButton = true,
      title,
      highlightLines = [],
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = React.useState(false);
    const lines = code.split("\n");

    const handleCopy = async () => {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div
        ref={ref}
        className={cn(pixelCodeBlockVariants({ variant, size }), className)}
        {...props}
      >
        {/* Header */}
        {(title || showCopyButton) && (
          <div className="flex items-center justify-between px-4 py-2 border-b-4 border-black bg-black/30">
            <div className="flex items-center gap-2">
              {title && (
                <span className="font-bold font-pixel text-xs uppercase">{title}</span>
              )}
              {language && !title && (
                <span className="font-bold font-pixel text-xs uppercase opacity-70">
                  {language}
                </span>
              )}
            </div>
            {showCopyButton && (
              <button
                onClick={handleCopy}
                className="px-3 py-1 text-xs font-bold border-2 border-current hover:bg-current hover:text-black transition-colors"
                type="button"
              >
                {copied ? "✓ Copied" : "Copy"}
              </button>
            )}
          </div>
        )}

        {/* Code Content */}
        <div className="overflow-x-auto">
          <pre className="p-4">
            <code className="block">
              {lines.map((line, index) => {
                const lineNumber = index + 1;
                const isHighlighted = highlightLines.includes(lineNumber);

                return (
                  <div
                    key={index}
                    className={cn(
                      "flex",
                      isHighlighted && "bg-yellow-500/20 -mx-4 px-4"
                    )}
                  >
                    {showLineNumbers && (
                      <span className="inline-block w-12 text-right mr-4 opacity-50 select-none flex-shrink-0">
                        {lineNumber}
                      </span>
                    )}
                    <span className="flex-1">{line || " "}</span>
                  </div>
                );
              })}
            </code>
          </pre>
        </div>

        {/* Scanlines effect */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)",
          }}
        />
      </div>
    );
  }
);
PixelCodeBlock.displayName = "PixelCodeBlock";

// Inline code component
const PixelCode = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => (
  <code
    ref={ref}
    className={cn(
      "px-2 py-1 font-mono text-sm border-2 border-black bg-[#f5f5dc] dark:bg-[#1a1a1a] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
      className
    )}
    {...props}
  >
    {children}
  </code>
));
PixelCode.displayName = "PixelCode";

export { PixelCodeBlock, PixelCode };
