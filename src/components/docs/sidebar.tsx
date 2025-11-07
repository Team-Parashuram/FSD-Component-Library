"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const componentsData = {
  "pixel-button": { name: "Pixel Button" },
  "pixel-card": { name: "Pixel Card" },
  "pixel-input": { name: "Pixel Input" },
  "pixel-badge": { name: "Pixel Badge" },
  "pixel-dialog": { name: "Pixel Dialog" },
  "pixel-toast": { name: "Pixel Toast" },
  "pixel-select": { name: "Pixel Select" },
  "pixel-checkbox": { name: "Pixel Checkbox" },
  "pixel-tabs": { name: "Pixel Tabs" },
  "pixel-accordion": { name: "Pixel Accordion" },
  "pixel-progress": { name: "Pixel Progress" },
  "pixel-slider": { name: "Pixel Slider" },
  "pixel-switch": { name: "Pixel Switch" },
  "pixel-textarea": { name: "Pixel Textarea" },
  "pixel-radio-group": { name: "Pixel Radio Group" },
  "pixel-alert": { name: "Pixel Alert" },
  "pixel-tooltip": { name: "Pixel Tooltip" },
  "pixel-popover": { name: "Pixel Popover" },
  "pixel-table": { name: "Pixel Table" },
  "pixel-breadcrumb": { name: "Pixel Breadcrumb" },
  "pixel-separator": { name: "Pixel Separator" },
  "pixel-spinner": { name: "Pixel Spinner" },
};

export function DocsSidebar() {
  const pathname = usePathname();

  const components = Object.entries(componentsData).map(([slug, data]) => ({
    slug,
    name: data.name,
  }));

  return (
    <aside className="w-64 pixel-borders border-4 border-black bg-[#fffacd] p-6 dark:border-[#ff8c00] dark:bg-[#1a1a1a] h-fit sticky top-4">
      <h2 className="text-base font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
        Components
      </h2>
      <nav className="space-y-2">
        {components.map((component) => {
          const href = `/docs/components/${component.slug}`;
          const isActive = pathname === href;
          
          return (
            <Link
              key={component.slug}
              href={href}
              className={cn(
                "block px-3 py-2 text-sm font-medium transition-none duration-0 pixel-borders border-2",
                isActive
                  ? "bg-[#ff8c00] text-white border-black dark:border-[#ff8c00]"
                  : "bg-white border-black hover:bg-black/5 dark:bg-[#1a1a1a] dark:border-[#ff8c00] dark:hover:bg-white/5"
              )}
            >
              {component.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
