"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const PixelTable = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="w-full overflow-auto pixel-borders border-4 border-black dark:border-[#ff8c00]">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
));
PixelTable.displayName = "PixelTable";

const PixelTableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("bg-[#ff8c00] text-white", className)} {...props} />
));
PixelTableHeader.displayName = "PixelTableHeader";

const PixelTableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("bg-white dark:bg-[#1a1a1a]", className)}
    {...props}
  />
));
PixelTableBody.displayName = "PixelTableBody";

const PixelTableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t-4 border-black bg-[#ffd700] font-medium text-black dark:border-[#ff8c00]",
      className
    )}
    {...props}
  />
));
PixelTableFooter.displayName = "PixelTableFooter";

const PixelTableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b-2 border-black transition-none duration-0 hover:bg-black/5 dark:border-[#ff8c00] dark:hover:bg-white/5",
      className
    )}
    {...props}
  />
));
PixelTableRow.displayName = "PixelTableRow";

const PixelTableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-bold uppercase text-xs tracking-wider [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
));
PixelTableHead.displayName = "PixelTableHead";

const PixelTableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
));
PixelTableCell.displayName = "PixelTableCell";

const PixelTableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-black/80 dark:text-white/80", className)}
    {...props}
  />
));
PixelTableCaption.displayName = "PixelTableCaption";

export {
  PixelTable,
  PixelTableHeader,
  PixelTableBody,
  PixelTableFooter,
  PixelTableHead,
  PixelTableRow,
  PixelTableCell,
  PixelTableCaption,
};
