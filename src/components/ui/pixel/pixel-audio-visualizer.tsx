"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelAudioVisualizerVariants = cva(
  "relative border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden",
  {
    variants: {
      variant: {
        bars: "bg-black",
        equalizer: "bg-[#1a1a1a]",
        wave: "bg-gradient-to-b from-black to-[#1a1a1a]",
        spectrum: "bg-black",
      },
      size: {
        sm: "h-32",
        md: "h-48",
        lg: "h-64",
        xl: "h-96",
      },
    },
    defaultVariants: {
      variant: "bars",
      size: "md",
    },
  }
);

export interface PixelAudioVisualizerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelAudioVisualizerVariants> {
  barCount?: number;
  color?: string;
  animate?: boolean;
  audioData?: number[];
  showGrid?: boolean;
}

const PixelAudioVisualizer = React.forwardRef<
  HTMLDivElement,
  PixelAudioVisualizerProps
>(
  (
    {
      className,
      variant,
      size,
      barCount = 32,
      color = "#00ff00",
      animate = true,
      audioData,
      showGrid = false,
      ...props
    },
    ref
  ) => {
    const [bars, setBars] = React.useState<number[]>([]);

    // Generate random bars for demo when no audio data provided
    React.useEffect(() => {
      if (!animate) return;

      const interval = setInterval(() => {
        const newBars = audioData || Array.from({ length: barCount }, () => Math.random());
        setBars(newBars);
      }, 100);

      return () => clearInterval(interval);
    }, [animate, barCount, audioData]);

    React.useEffect(() => {
      if (audioData) {
        setBars(audioData);
      }
    }, [audioData]);

    return (
      <div
        ref={ref}
        className={cn(pixelAudioVisualizerVariants({ variant, size }), className)}
        {...props}
      >
        {/* Grid overlay */}
        {showGrid && (
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="w-full h-full opacity-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 8px, currentColor 8px, currentColor 10px), repeating-linear-gradient(90deg, transparent, transparent 8px, currentColor 8px, currentColor 10px)",
              }}
            />
          </div>
        )}

        {/* Visualizers */}
        {variant === "bars" && (
          <BarsVisualizer bars={bars} barCount={barCount} color={color} />
        )}
        {variant === "equalizer" && (
          <EqualizerVisualizer bars={bars} barCount={barCount} color={color} />
        )}
        {variant === "wave" && (
          <WaveVisualizer bars={bars} barCount={barCount} color={color} />
        )}
        {variant === "spectrum" && (
          <SpectrumVisualizer bars={bars} barCount={barCount} color={color} />
        )}
      </div>
    );
  }
);
PixelAudioVisualizer.displayName = "PixelAudioVisualizer";

// Bars Visualizer
const BarsVisualizer: React.FC<{
  bars: number[];
  barCount: number;
  color: string;
}> = ({ bars, barCount, color }) => {
  return (
    <div className="flex items-end justify-center gap-1 h-full p-4">
      {Array.from({ length: barCount }).map((_, i) => {
        const height = bars[i] ? bars[i] * 100 : Math.random() * 100;
        return (
          <div
            key={i}
            className="flex-1 max-w-4 transition-all duration-100 border-2 border-black"
            style={{
              height: `${height}%`,
              backgroundColor: color,
              boxShadow: `0 0 8px ${color}`,
            }}
          />
        );
      })}
    </div>
  );
};

// Equalizer Visualizer
const EqualizerVisualizer: React.FC<{
  bars: number[];
  barCount: number;
  color: string;
}> = ({ bars, barCount, color }) => {
  return (
    <div className="flex items-center justify-center gap-2 h-full p-4">
      {Array.from({ length: barCount }).map((_, i) => {
        const height = bars[i] ? bars[i] * 100 : Math.random() * 100;
        const segments = 10;
        const activeSegments = Math.ceil((height / 100) * segments);

        return (
          <div key={i} className="flex flex-col-reverse gap-1 h-full flex-1 max-w-3">
            {Array.from({ length: segments }).map((_, j) => (
              <div
                key={j}
                className={cn(
                  "h-full border-2 border-black transition-all duration-100",
                  j < activeSegments ? "opacity-100" : "opacity-20"
                )}
                style={{
                  backgroundColor: j < activeSegments ? color : "#333",
                }}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

// Wave Visualizer
const WaveVisualizer: React.FC<{
  bars: number[];
  barCount: number;
  color: string;
}> = ({ bars, barCount, color }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw wave
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.beginPath();

    const sliceWidth = width / barCount;
    let x = 0;

    for (let i = 0; i < barCount; i++) {
      const value = bars[i] !== undefined ? bars[i] : Math.random();
      const y = ((1 - value) * height) / 2;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    ctx.stroke();

    // Draw glow effect
    ctx.shadowBlur = 10;
    ctx.shadowColor = color;
    ctx.stroke();
  }, [bars, barCount, color]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={200}
      className="w-full h-full"
    />
  );
};

// Spectrum Visualizer
const SpectrumVisualizer: React.FC<{
  bars: number[];
  barCount: number;
  color: string;
}> = ({ bars, barCount, color }) => {
  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="absolute inset-0 flex items-end justify-center gap-0.5 p-4">
        {Array.from({ length: barCount }).map((_, i) => {
          const height = bars[i] ? bars[i] * 100 : Math.random() * 100;
          const hue = (i / barCount) * 360;

          return (
            <div
              key={i}
              className="flex-1 max-w-4 transition-all duration-75 border-2 border-black"
              style={{
                height: `${height}%`,
                backgroundColor: `hsl(${hue}, 100%, 50%)`,
                boxShadow: `0 0 8px hsl(${hue}, 100%, 50%)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

// Audio Player Component
const PixelAudioPlayer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    title?: string;
    artist?: string;
    onPlayPause?: () => void;
    playing?: boolean;
  }
>(({ className, title, artist, onPlayPause, playing = false, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "border-4 border-black bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        className
      )}
      {...props}
    >
      {/* Display */}
      <div className="border-4 border-black bg-[#00ff00]/10 p-3 mb-4">
        <div className="text-[#00ff00] font-pixel text-sm">
          <div className="flex items-center justify-between mb-2">
            <span>♪ NOW PLAYING</span>
            <span className="animate-pulse">●</span>
          </div>
          <div className="text-lg font-bold truncate">{title || "Track Title"}</div>
          <div className="text-xs opacity-70">{artist || "Artist Name"}</div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-2">
        <button className="w-10 h-10 border-4 border-black bg-[#c0c0c0] hover:bg-[#d0d0d0] flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
          ⏮
        </button>
        <button
          onClick={onPlayPause}
          className="w-12 h-12 border-4 border-black bg-[#00ff00] hover:bg-[#00ff00]/80 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] font-bold text-xl"
        >
          {playing ? "⏸" : "▶"}
        </button>
        <button className="w-10 h-10 border-4 border-black bg-[#c0c0c0] hover:bg-[#d0d0d0] flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
          ⏭
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="w-full h-2 border-2 border-black bg-[#1a1a1a]">
          <div className="h-full w-1/3 bg-[#00ff00]" />
        </div>
        <div className="flex justify-between text-[#00ff00] text-xs font-pixel mt-1">
          <span>1:23</span>
          <span>3:45</span>
        </div>
      </div>
    </div>
  );
});
PixelAudioPlayer.displayName = "PixelAudioPlayer";

export { PixelAudioVisualizer, PixelAudioPlayer };
