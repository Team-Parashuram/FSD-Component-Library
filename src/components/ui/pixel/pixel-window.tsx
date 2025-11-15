"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelWindowVariants = cva(
  "relative border-4 border-black bg-[#c0c0c0] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
  {
    variants: {
      variant: {
        default: "bg-[#c0c0c0]",
        blue: "bg-[#0000a8]",
        teal: "bg-[#008080]",
        dark: "bg-[#2a2a2a]",
      },
      size: {
        sm: "min-w-[300px]",
        md: "min-w-[400px]",
        lg: "min-w-[600px]",
        xl: "min-w-[800px]",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface PixelWindowProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelWindowVariants> {
  title?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  closable?: boolean;
  minimizable?: boolean;
  maximizable?: boolean;
  draggable?: boolean;
  isMaximized?: boolean;
  isMinimized?: boolean;
}

const PixelWindow = React.forwardRef<HTMLDivElement, PixelWindowProps>(
  (
    {
      className,
      variant,
      size,
      title = "Untitled Window",
      icon,
      onClose,
      onMinimize,
      onMaximize,
      closable = true,
      minimizable = true,
      maximizable = true,
      draggable = false,
      isMaximized = false,
      isMinimized = false,
      children,
      ...props
    },
    ref
  ) => {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = React.useState(false);
    const [dragStart, setDragStart] = React.useState({ x: 0, y: 0 });
    const windowRef = React.useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
      if (!draggable || e.button !== 0) return;
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    };

    React.useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      };

      const handleMouseUp = () => {
        setIsDragging(false);
      };

      if (isDragging) {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      }

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }, [isDragging, dragStart]);

    const windowStyle = draggable && !isMaximized
      ? {
          position: "absolute" as const,
          left: `${position.x}px`,
          top: `${position.y}px`,
        }
      : {};

    if (isMinimized) {
      return (
        <div
          className="inline-flex items-center gap-2 px-3 py-2 border-4 border-black bg-[#c0c0c0] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer hover:bg-[#d0d0d0]"
          onClick={onMaximize}
        >
          {icon && <span className="text-sm">{icon}</span>}
          <span className="text-sm font-bold font-pixel">{title}</span>
        </div>
      );
    }

    return (
      <div
        ref={windowRef}
        className={cn(
          pixelWindowVariants({ variant, size }),
          isMaximized && "w-full h-full",
          className
        )}
        style={windowStyle}
        {...props}
      >
        {/* Title Bar */}
        <div
          className={cn(
            "flex items-center justify-between px-2 py-1 border-b-4 border-black",
            variant === "default" && "bg-gradient-to-r from-[#000080] to-[#1084d0] text-white",
            variant === "blue" && "bg-[#000080] text-white",
            variant === "teal" && "bg-[#008080] text-white",
            variant === "dark" && "bg-black text-white",
            draggable && "cursor-move select-none"
          )}
          onMouseDown={handleMouseDown}
        >
          <div className="flex items-center gap-2 flex-1 min-w-0">
            {icon && <span className="text-base flex-shrink-0">{icon}</span>}
            <span className="text-sm font-bold font-pixel truncate">{title}</span>
          </div>

          {/* Window Controls */}
          <div className="flex items-center gap-1 flex-shrink-0">
            {minimizable && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMinimize?.();
                }}
                className="w-6 h-6 border-2 border-black bg-[#c0c0c0] hover:bg-[#d0d0d0] flex items-center justify-center text-black font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
                aria-label="Minimize"
              >
                _
              </button>
            )}
            {maximizable && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMaximize?.();
                }}
                className="w-6 h-6 border-2 border-black bg-[#c0c0c0] hover:bg-[#d0d0d0] flex items-center justify-center text-black font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
                aria-label="Maximize"
              >
                {isMaximized ? "🗗" : "□"}
              </button>
            )}
            {closable && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose?.();
                }}
                className="w-6 h-6 border-2 border-black bg-[#c0c0c0] hover:bg-[#d0d0d0] flex items-center justify-center text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
                aria-label="Close"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Window Content */}
        <div className="bg-white dark:bg-[#1a1a1a]">{children}</div>
      </div>
    );
  }
);
PixelWindow.displayName = "PixelWindow";

// Window Content Components
const PixelWindowContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("p-4", className)} {...props}>
    {children}
  </div>
));
PixelWindowContent.displayName = "PixelWindowContent";

const PixelWindowFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-between px-4 py-2 border-t-4 border-black bg-[#c0c0c0]",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
PixelWindowFooter.displayName = "PixelWindowFooter";

const PixelWindowMenuBar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center gap-1 px-2 py-1 border-b-2 border-black bg-[#c0c0c0]",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
PixelWindowMenuBar.displayName = "PixelWindowMenuBar";

const PixelWindowMenuItem = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "px-3 py-1 text-sm font-pixel hover:bg-[#000080] hover:text-white border-2 border-transparent hover:border-black transition-colors",
      className
    )}
    {...props}
  >
    {children}
  </button>
));
PixelWindowMenuItem.displayName = "PixelWindowMenuItem";

// Taskbar Component
const PixelTaskbar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "fixed bottom-0 left-0 right-0 h-12 border-t-4 border-black bg-[#c0c0c0] flex items-center px-2 gap-2 shadow-[0_-4px_0px_0px_rgba(0,0,0,1)] z-50",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
PixelTaskbar.displayName = "PixelTaskbar";

const PixelStartButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "flex items-center gap-2 px-4 py-2 border-4 border-black bg-[#c0c0c0] hover:bg-[#d0d0d0] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] font-bold font-pixel",
      className
    )}
    {...props}
  >
    <span className="text-lg">⊞</span>
    {children || "Start"}
  </button>
));
PixelStartButton.displayName = "PixelStartButton";

const PixelTaskbarItem = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }
>(({ className, active, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "flex items-center gap-2 px-3 py-2 border-2 border-black bg-[#c0c0c0] hover:bg-[#d0d0d0] font-pixel text-sm",
      active && "shadow-[inset_2px_2px_0px_0px_rgba(0,0,0,0.3)]",
      !active && "shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
      className
    )}
    {...props}
  >
    {children}
  </button>
));
PixelTaskbarItem.displayName = "PixelTaskbarItem";

export {
  PixelWindow,
  PixelWindowContent,
  PixelWindowFooter,
  PixelWindowMenuBar,
  PixelWindowMenuItem,
  PixelTaskbar,
  PixelStartButton,
  PixelTaskbarItem,
};
