"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const timelineVariants = cva(
  "relative",
  {
    variants: {
      orientation: {
        vertical: "flex flex-col",
        horizontal: "flex flex-row overflow-x-auto pb-4",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
);

const timelineItemVariants = cva(
  "relative flex gap-4",
  {
    variants: {
      orientation: {
        vertical: "flex-row pb-8 last:pb-0",
        horizontal: "flex-col items-center min-w-[200px]",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
);

const timelineMarkerVariants = cva(
  "relative flex-shrink-0 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
  {
    variants: {
      variant: {
        default: "bg-pixel-secondary",
        success: "bg-pixel-success",
        warning: "bg-pixel-warning",
        error: "bg-pixel-error",
        primary: "bg-pixel-primary",
      },
      size: {
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-16 h-16",
      },
      shape: {
        square: "",
        circle: "rounded-full",
        diamond: "rotate-45",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      shape: "square",
    },
  }
);

const timelineConnectorVariants = cva(
  "border-4 border-black border-dashed",
  {
    variants: {
      orientation: {
        vertical: "absolute left-5 top-12 bottom-0 w-0",
        horizontal: "absolute top-5 left-12 right-0 h-0",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
);

export interface TimelineItemType {
  title: string;
  description?: string;
  date?: string;
  icon?: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "primary";
}

interface PixelTimelineProps extends VariantProps<typeof timelineVariants> {
  items: TimelineItemType[];
  markerSize?: "sm" | "md" | "lg";
  markerShape?: "square" | "circle" | "diamond";
  showConnector?: boolean;
  className?: string;
}

export function PixelTimeline({
  items,
  orientation = "vertical",
  markerSize = "md",
  markerShape = "square",
  showConnector = true,
  className,
}: PixelTimelineProps) {
  return (
    <div className={timelineVariants({ orientation, className })}>
      {items.map((item, index) => (
        <PixelTimelineItem
          key={index}
          {...item}
          orientation={orientation || undefined}
          markerSize={markerSize}
          markerShape={markerShape}
          showConnector={showConnector && index < items.length - 1}
        />
      ))}
    </div>
  );
}

interface PixelTimelineItemProps extends TimelineItemType {
  orientation?: "vertical" | "horizontal";
  markerSize?: "sm" | "md" | "lg";
  markerShape?: "square" | "circle" | "diamond";
  showConnector?: boolean;
}

export function PixelTimelineItem({
  title,
  description,
  date,
  icon,
  variant = "default",
  orientation = "vertical",
  markerSize = "md",
  markerShape = "square",
  showConnector = false,
}: PixelTimelineItemProps) {
  return (
    <div className={timelineItemVariants({ orientation })}>
      {/* Marker */}
      <div className="relative flex-shrink-0">
        <div className={timelineMarkerVariants({ variant, size: markerSize, shape: markerShape })}>
          {icon && (
            <div className={`flex items-center justify-center w-full h-full ${markerShape === "diamond" ? "-rotate-45" : ""}`}>
              {icon}
            </div>
          )}
        </div>
        
        {/* Connector Line */}
        {showConnector && (
          <div className={timelineConnectorVariants({ orientation })} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 border-4 border-black bg-white dark:bg-[#2a2a2a] p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        {date && (
          <div className="text-xs font-bold font-pixel text-pixel-dark-muted dark:text-pixel-light-muted mb-2">
            {date}
          </div>
        )}
        <h3 className="text-lg font-bold font-pixel mb-2">{title}</h3>
        {description && (
          <p className="text-sm text-pixel-dark-muted dark:text-pixel-light-muted">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

// Checkpoint variant with progress indicator
interface PixelTimelineCheckpointProps {
  checkpoints: Array<{
    label: string;
    completed?: boolean;
    active?: boolean;
  }>;
  orientation?: "vertical" | "horizontal";
  className?: string;
}

export function PixelTimelineCheckpoint({
  checkpoints,
  orientation = "horizontal",
  className,
}: PixelTimelineCheckpointProps) {
  return (
    <div className={timelineVariants({ orientation, className })}>
      {checkpoints.map((checkpoint, index) => (
        <div
          key={index}
          className={`relative flex ${orientation === "vertical" ? "flex-row items-start gap-4 pb-8 last:pb-0" : "flex-col items-center min-w-[120px]"}`}
        >
          {/* Checkpoint marker */}
          <div className="relative flex-shrink-0">
            <div
              className={`w-12 h-12 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-bold font-pixel text-lg ${
                checkpoint.completed
                  ? "bg-pixel-success"
                  : checkpoint.active
                    ? "bg-pixel-warning animate-pulse"
                    : "bg-pixel-dark-muted dark:bg-pixel-light-muted"
              }`}
            >
              {checkpoint.completed ? "✓" : index + 1}
            </div>

            {/* Connector */}
            {index < checkpoints.length - 1 && (
              <div
                className={`border-4 border-black ${
                  checkpoint.completed
                    ? "border-solid bg-pixel-success"
                    : "border-dashed"
                } ${
                  orientation === "vertical"
                    ? "absolute left-5 top-12 bottom-0 w-0"
                    : "absolute top-5 left-12 right-0 h-0"
                }`}
              />
            )}
          </div>

          {/* Label */}
          <div
            className={`font-pixel font-bold text-sm ${
              orientation === "vertical" ? "pt-2" : "text-center mt-4"
            }`}
          >
            {checkpoint.label}
          </div>
        </div>
      ))}
    </div>
  );
}
