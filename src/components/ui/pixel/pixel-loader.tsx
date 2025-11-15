"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelLoaderVariants = cva(
  "relative flex flex-col items-center justify-center p-8 border-4 border-black bg-white dark:bg-[#1a1a1a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
  {
    variants: {
      variant: {
        cassette: "min-h-[300px]",
        floppy: "min-h-[300px]",
        crt: "min-h-[400px] bg-black text-[#00ff00]",
      },
      size: {
        sm: "w-[250px]",
        md: "w-[350px]",
        lg: "w-[450px]",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "cassette",
      size: "md",
    },
  }
);

export interface PixelLoaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelLoaderVariants> {
  progress?: number;
  text?: string;
  isLoading?: boolean;
}

const PixelLoader = React.forwardRef<HTMLDivElement, PixelLoaderProps>(
  ({ className, variant, size, progress = 0, text, isLoading = true, children, ...props }, ref) => {
    const [currentProgress, setCurrentProgress] = React.useState(0);

    React.useEffect(() => {
      if (isLoading) {
        const timer = setInterval(() => {
          setCurrentProgress((prev) => {
            if (prev >= 100) return 0;
            return prev + 1;
          });
        }, 50);
        return () => clearInterval(timer);
      }
    }, [isLoading]);

    const displayProgress = progress > 0 ? progress : currentProgress;

    return (
      <div
        ref={ref}
        className={cn(pixelLoaderVariants({ variant, size }), className)}
        {...props}
      >
        {variant === "cassette" && (
          <CassetteAnimation progress={displayProgress} text={text} />
        )}
        {variant === "floppy" && (
          <FloppyAnimation progress={displayProgress} text={text} />
        )}
        {variant === "crt" && (
          <CRTAnimation progress={displayProgress} text={text} />
        )}
        {children}
      </div>
    );
  }
);
PixelLoader.displayName = "PixelLoader";

// Cassette Tape Animation
const CassetteAnimation: React.FC<{ progress: number; text?: string }> = ({ progress, text }) => {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* Cassette Tape */}
      <div className="relative">
        {/* Cassette Body */}
        <div className="w-48 h-32 border-4 border-black bg-[#ff8c00] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
          {/* Label Area */}
          <div className="absolute top-2 left-2 right-2 h-16 border-2 border-black bg-white/90">
            <div className="text-[10px] font-bold text-center mt-1 font-pixel">
              LOADING
            </div>
          </div>
          
          {/* Tape Reels */}
          <div className="absolute bottom-4 left-4 w-10 h-10 border-4 border-black bg-[#2a2a2a] rounded-full flex items-center justify-center overflow-hidden">
            <div 
              className="w-6 h-6 border-2 border-white/50 rounded-full animate-spin"
              style={{ animationDuration: '2s' }}
            />
          </div>
          <div className="absolute bottom-4 right-4 w-10 h-10 border-4 border-black bg-[#2a2a2a] rounded-full flex items-center justify-center overflow-hidden">
            <div 
              className="w-6 h-6 border-2 border-white/50 rounded-full animate-spin"
              style={{ animationDuration: '2s' }}
            />
          </div>
          
          {/* Tape Line */}
          <div className="absolute bottom-8 left-16 right-16 h-0.5 bg-black/30" />
        </div>
        
        {/* Corner Screws */}
        <div className="absolute top-1 left-1 w-2 h-2 border-2 border-black bg-gray-400 rounded-full" />
        <div className="absolute top-1 right-1 w-2 h-2 border-2 border-black bg-gray-400 rounded-full" />
        <div className="absolute bottom-1 left-1 w-2 h-2 border-2 border-black bg-gray-400 rounded-full" />
        <div className="absolute bottom-1 right-1 w-2 h-2 border-2 border-black bg-gray-400 rounded-full" />
      </div>

      {/* Progress Bar */}
      <div className="w-full">
        <div className="w-full h-8 border-4 border-black bg-white dark:bg-[#2a2a2a] overflow-hidden">
          <div 
            className="h-full bg-[#ff8c00] transition-all duration-100 border-r-4 border-black"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-center mt-2 font-bold font-pixel text-sm">
          {text || "LOADING..."} {progress}%
        </div>
      </div>
    </div>
  );
};

// Floppy Disk Animation
const FloppyAnimation: React.FC<{ progress: number; text?: string }> = ({ progress, text }) => {
  const [isInserting, setIsInserting] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsInserting(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* Floppy Drive */}
      <div className="relative w-56 h-20 border-4 border-black bg-[#d3d3d3] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {/* Drive Slot */}
        <div className="absolute top-8 left-4 right-4 h-10 border-4 border-black bg-[#1a1a1a]">
          {/* Floppy Disk */}
          <div 
            className={cn(
              "absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 border-4 border-black bg-[#3b82f6] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-1000",
              isInserting && "translate-y-20"
            )}
          >
            {/* Label */}
            <div className="absolute top-4 left-4 right-4 h-12 border-2 border-black bg-white">
              <div className="text-[8px] font-bold text-center mt-1 font-pixel">
                SYSTEM DISK
              </div>
            </div>
            
            {/* Metal Shutter */}
            <div className="absolute bottom-2 left-2 right-2 h-4 border-2 border-black bg-gray-400" />
            
            {/* Write Protect Notch */}
            <div className="absolute top-2 right-2 w-3 h-3 border-2 border-black bg-black" />
          </div>
        </div>
        
        {/* LED Light */}
        <div className={cn(
          "absolute top-2 right-2 w-3 h-3 border-2 border-black rounded-full",
          isInserting ? "bg-green-500 animate-pulse" : "bg-gray-400"
        )} />
      </div>

      {/* Progress Bar */}
      <div className="w-full">
        <div className="w-full h-8 border-4 border-black bg-white dark:bg-[#2a2a2a] overflow-hidden">
          <div 
            className="h-full bg-[#3b82f6] transition-all duration-100 border-r-4 border-black"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-center mt-2 font-bold font-pixel text-sm">
          {text || "READING DISK..."} {progress}%
        </div>
      </div>
    </div>
  );
};

// CRT Boot Sequence Animation
const CRTAnimation: React.FC<{ progress: number; text?: string }> = ({ progress, text }) => {
  const [bootStage, setBootStage] = React.useState(0);
  const [visibleLines, setVisibleLines] = React.useState(0);

  const bootSequence = [
    "PIXEL BIOS v8.01",
    "Copyright (C) 2025 Pixel Corp.",
    "",
    "Detecting Hardware...",
    "CPU: Pixel-8086 @ 8MHz",
    "RAM: 640KB OK",
    "VIDEO: VGA Compatible",
    "KEYBOARD: Detected",
    "",
    "Loading Operating System...",
    ".",
    "..",
    "...",
  ];

  React.useEffect(() => {
    if (visibleLines < bootSequence.length) {
      const timer = setTimeout(() => {
        setVisibleLines(prev => prev + 1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, bootSequence.length]);

  React.useEffect(() => {
    const stageTimer = setInterval(() => {
      setBootStage(prev => (prev + 1) % 4);
    }, 500);
    return () => clearInterval(stageTimer);
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      {/* CRT Screen Effect */}
      <div className="relative flex-1 bg-black overflow-hidden">
        {/* Scanlines */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.03) 2px, rgba(0,255,0,0.03) 4px)'
          }}
        />
        
        {/* Screen Curvature Effect */}
        <div className="absolute inset-2 border-2 border-[#00ff00]/20 rounded-sm" />
        
        {/* Boot Text */}
        <div className="relative p-4 font-mono text-xs text-[#00ff00] space-y-1">
          {bootSequence.slice(0, visibleLines).map((line, index) => (
            <div key={index} className="flex items-center">
              {line === "..." ? (
                <span className="animate-pulse">{".".repeat(bootStage + 1)}</span>
              ) : (
                <span>{line}</span>
              )}
              {index === visibleLines - 1 && (
                <span className="ml-1 animate-pulse">_</span>
              )}
            </div>
          ))}
        </div>
        
        {/* Screen Flicker */}
        <div 
          className="absolute inset-0 bg-[#00ff00] opacity-0 pointer-events-none animate-pulse"
          style={{ animationDuration: '3s' }}
        />
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="w-full h-6 border-2 border-[#00ff00] bg-black overflow-hidden">
          <div 
            className="h-full bg-[#00ff00] transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-center mt-2 font-bold font-mono text-xs text-[#00ff00]">
          {text || "BOOTING SYSTEM..."} [{progress}%]
        </div>
      </div>
    </div>
  );
};

export { PixelLoader };
