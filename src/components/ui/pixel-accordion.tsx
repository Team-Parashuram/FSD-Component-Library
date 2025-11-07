"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const PixelAccordion = AccordionPrimitive.Root;

const PixelAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("pixel-borders border-4 border-black mb-2 dark:border-[#ff8c00]", className)}
    {...props}
  />
));
PixelAccordionItem.displayName = "PixelAccordionItem";

const PixelAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between p-4 text-sm font-bold uppercase tracking-wider transition-none duration-0 hover:bg-black/5 dark:hover:bg-white/5 [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
PixelAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const PixelAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("p-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
PixelAccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  PixelAccordion,
  PixelAccordionItem,
  PixelAccordionTrigger,
  PixelAccordionContent,
};
