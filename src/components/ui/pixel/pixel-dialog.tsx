"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const PixelDialog = DialogPrimitive.Root;

const PixelDialogTrigger = DialogPrimitive.Trigger;

const PixelDialogPortal = DialogPrimitive.Portal;

const PixelDialogClose = DialogPrimitive.Close;

const PixelDialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-0",
      className
    )}
    {...props}
  />
));
PixelDialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const PixelDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <PixelDialogPortal>
    <PixelDialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] pixel-borders border-4 border-black bg-[#fffacd] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] duration-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] dark:border-[#ff8c00] dark:bg-[#1a1a1a] dark:shadow-[8px_8px_0px_0px_rgba(255,140,0,0.3)]",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 pixel-borders border-2 border-black p-1 transition-none duration-0 hover:bg-black/10 disabled:pointer-events-none dark:border-[#ff8c00] dark:hover:bg-white/10">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </PixelDialogPortal>
));
PixelDialogContent.displayName = DialogPrimitive.Content.displayName;

const PixelDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left pb-4",
      className
    )}
    {...props}
  />
);
PixelDialogHeader.displayName = "PixelDialogHeader";

const PixelDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-4",
      className
    )}
    {...props}
  />
);
PixelDialogFooter.displayName = "PixelDialogFooter";

const PixelDialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-base font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] leading-relaxed dark:text-[#ffd700]",
      className
    )}
    {...props}
  />
));
PixelDialogTitle.displayName = DialogPrimitive.Title.displayName;

const PixelDialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-black/80 dark:text-white/80", className)}
    {...props}
  />
));
PixelDialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  PixelDialog,
  PixelDialogPortal,
  PixelDialogOverlay,
  PixelDialogClose,
  PixelDialogTrigger,
  PixelDialogContent,
  PixelDialogHeader,
  PixelDialogFooter,
  PixelDialogTitle,
  PixelDialogDescription,
};
