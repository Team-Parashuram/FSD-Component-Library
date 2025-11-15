"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ========================================
// HEALTH BAR COMPONENT
// ========================================

const pixelHealthBarVariants = cva(
  "relative border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-[#2a2a2a]",
        outlined: "bg-transparent",
      },
      size: {
        sm: "h-6",
        md: "h-8",
        lg: "h-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface PixelHealthBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelHealthBarVariants> {
  current: number;
  max: number;
  showLabel?: boolean;
  label?: string;
  color?: string;
}

const PixelHealthBar = React.forwardRef<HTMLDivElement, PixelHealthBarProps>(
  (
    {
      className,
      variant,
      size,
      current,
      max,
      showLabel = true,
      label = "HP",
      color,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((current / max) * 100, 0), 100);
    
    // Auto color based on health percentage
    const barColor =
      color ||
      (percentage > 60
        ? "#10b981"
        : percentage > 30
        ? "#f59e0b"
        : "#ef4444");

    return (
      <div className="flex items-center gap-3">
        {showLabel && (
          <span className="text-sm font-bold font-pixel uppercase min-w-[40px]">
            {label}
          </span>
        )}
        <div
          ref={ref}
          className={cn(pixelHealthBarVariants({ variant, size }), "flex-1", className)}
          {...props}
        >
          <div
            className="h-full transition-all duration-300 relative border-r-4 border-black"
            style={{
              width: `${percentage}%`,
              backgroundColor: barColor,
            }}
          >
            {/* Pixel pattern overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(0,0,0,0.2) 4px, rgba(0,0,0,0.2) 8px)",
              }}
            />
          </div>
        </div>
        {showLabel && (
          <span className="text-sm font-bold font-pixel min-w-[60px] text-right">
            {current}/{max}
          </span>
        )}
      </div>
    );
  }
);
PixelHealthBar.displayName = "PixelHealthBar";

// ========================================
// MANA BAR COMPONENT
// ========================================

export interface PixelManaBarProps extends PixelHealthBarProps {}

const PixelManaBar = React.forwardRef<HTMLDivElement, PixelManaBarProps>(
  ({ label = "MP", color = "#3b82f6", ...props }, ref) => {
    return <PixelHealthBar ref={ref} label={label} color={color} {...props} />;
  }
);
PixelManaBar.displayName = "PixelManaBar";

// ========================================
// XP BAR COMPONENT
// ========================================

export interface PixelXPBarProps
  extends Omit<PixelHealthBarProps, "current" | "max"> {
  currentXP: number;
  requiredXP: number;
  level?: number;
  showLevel?: boolean;
}

const PixelXPBar = React.forwardRef<HTMLDivElement, PixelXPBarProps>(
  (
    {
      currentXP,
      requiredXP,
      level,
      showLevel = true,
      label = "XP",
      color = "#ffd700",
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex items-center gap-3">
        {showLevel && level !== undefined && (
          <span className="text-sm font-bold font-pixel px-3 py-1 border-4 border-black bg-[#ffd700] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Lv{level}
          </span>
        )}
        <PixelHealthBar
          ref={ref}
          current={currentXP}
          max={requiredXP}
          label={label}
          color={color}
          {...props}
        />
      </div>
    );
  }
);
PixelXPBar.displayName = "PixelXPBar";

// ========================================
// INVENTORY COMPONENT
// ========================================

const pixelInventoryVariants = cva(
  "relative border-4 border-black bg-white dark:bg-[#2a2a2a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4",
  {
    variants: {
      columns: {
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
      },
    },
    defaultVariants: {
      columns: 5,
    },
  }
);

export interface PixelInventoryProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelInventoryVariants> {
  slots?: number;
  title?: string;
}

const PixelInventory = React.forwardRef<HTMLDivElement, PixelInventoryProps>(
  ({ className, columns, slots = 20, title, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(pixelInventoryVariants({ columns }), className)} {...props}>
        {title && (
          <div className="col-span-full mb-4 pb-4 border-b-4 border-black">
            <h3 className="text-xl font-bold font-pixel uppercase">{title}</h3>
          </div>
        )}
        <div className={cn("grid gap-2", `grid-cols-${columns}`)}>
          {children}
        </div>
      </div>
    );
  }
);
PixelInventory.displayName = "PixelInventory";

export interface PixelInventorySlotProps extends React.HTMLAttributes<HTMLDivElement> {
  item?: React.ReactNode;
  count?: number;
  rarity?: "common" | "rare" | "epic" | "legendary";
  isEmpty?: boolean;
}

const PixelInventorySlot = React.forwardRef<HTMLDivElement, PixelInventorySlotProps>(
  ({ className, item, count, rarity = "common", isEmpty = false, ...props }, ref) => {
    const rarityColors = {
      common: "border-gray-400",
      rare: "border-blue-500",
      epic: "border-purple-500",
      legendary: "border-yellow-500",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative aspect-square border-4 border-black bg-white dark:bg-[#1a1a1a] flex items-center justify-center text-2xl cursor-pointer hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition-colors",
          !isEmpty && "shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
          !isEmpty && rarityColors[rarity],
          className
        )}
        {...props}
      >
        {item}
        {count && count > 1 && (
          <span className="absolute bottom-1 right-1 text-xs font-bold bg-black text-white px-1 font-pixel">
            {count}
          </span>
        )}
      </div>
    );
  }
);
PixelInventorySlot.displayName = "PixelInventorySlot";

// ========================================
// ACHIEVEMENT COMPONENT
// ========================================

const pixelAchievementVariants = cva(
  "relative border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-in slide-in-from-right-full duration-500",
  {
    variants: {
      variant: {
        default: "bg-[#ffd700] text-black",
        bronze: "bg-[#cd7f32] text-white",
        silver: "bg-[#c0c0c0] text-black",
        gold: "bg-[#ffd700] text-black",
        platinum: "bg-gradient-to-br from-[#e5e4e2] to-[#b4b4b4] text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface PixelAchievementProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelAchievementVariants> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  points?: number;
}

const PixelAchievement = React.forwardRef<HTMLDivElement, PixelAchievementProps>(
  ({ className, variant, title, description, icon, points, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(pixelAchievementVariants({ variant }), "max-w-sm", className)}
        {...props}
      >
        <div className="flex items-start gap-4">
          {icon && (
            <div className="text-4xl flex-shrink-0 w-12 h-12 flex items-center justify-center border-4 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <h4 className="font-bold font-pixel uppercase text-sm truncate">
                {title}
              </h4>
              {points !== undefined && (
                <span className="text-xs font-bold font-pixel flex-shrink-0">
                  +{points}
                </span>
              )}
            </div>
            {description && (
              <p className="text-xs opacity-90 line-clamp-2">{description}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
);
PixelAchievement.displayName = "PixelAchievement";

// ========================================
// DAMAGE NUMBER COMPONENT
// ========================================

export interface PixelDamageNumberProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  type?: "damage" | "heal" | "critical" | "miss";
  animate?: boolean;
}

const PixelDamageNumber = React.forwardRef<HTMLDivElement, PixelDamageNumberProps>(
  ({ className, value, type = "damage", animate = true, ...props }, ref) => {
    const typeStyles = {
      damage: "text-red-500",
      heal: "text-green-500",
      critical: "text-yellow-500 text-2xl",
      miss: "text-gray-400",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "font-bold font-pixel text-xl",
          typeStyles[type],
          animate && "animate-in fade-in slide-in-from-bottom-4 duration-700",
          className
        )}
        {...props}
      >
        {type === "miss" ? "MISS!" : type === "critical" ? `${value}!` : value}
      </div>
    );
  }
);
PixelDamageNumber.displayName = "PixelDamageNumber";

export {
  PixelHealthBar,
  PixelManaBar,
  PixelXPBar,
  PixelInventory,
  PixelInventorySlot,
  PixelAchievement,
  PixelDamageNumber,
};
