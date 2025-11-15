"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const countdownVariants = cva(
  "flex items-center gap-2 font-pixel font-bold",
  {
    variants: {
      variant: {
        default: "",
        retro: "",
        digital: "",
        flip: "",
      },
      size: {
        sm: "text-2xl",
        md: "text-4xl",
        lg: "text-6xl",
        xl: "text-8xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const digitVariants = cva(
  "border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-[#2a2a2a]",
        retro: "bg-pixel-secondary",
        digital: "bg-black text-pixel-error",
        flip: "bg-pixel-primary",
      },
      size: {
        sm: "w-12 h-16 text-2xl",
        md: "w-16 h-20 text-4xl",
        lg: "w-24 h-32 text-6xl",
        xl: "w-32 h-40 text-8xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface PixelCountdownProps extends VariantProps<typeof countdownVariants> {
  targetDate?: Date;
  initialSeconds?: number;
  onComplete?: () => void;
  showDays?: boolean;
  showHours?: boolean;
  showMinutes?: boolean;
  showSeconds?: boolean;
  labels?: boolean;
  className?: string;
}

export function PixelCountdown({
  targetDate,
  initialSeconds,
  onComplete,
  showDays = true,
  showHours = true,
  showMinutes = true,
  showSeconds = true,
  labels = true,
  variant = "default",
  size = "md",
  className,
}: PixelCountdownProps) {
  const [timeLeft, setTimeLeft] = React.useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      if (targetDate) {
        const difference = targetDate.getTime() - new Date().getTime();
        
        if (difference <= 0) {
          onComplete?.();
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else if (initialSeconds !== undefined) {
        const total = Math.max(0, initialSeconds);
        
        if (total <= 0) {
          onComplete?.();
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          days: Math.floor(total / (60 * 60 * 24)),
          hours: Math.floor((total / (60 * 60)) % 24),
          minutes: Math.floor((total / 60) % 60),
          seconds: Math.floor(total % 60),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      if (initialSeconds !== undefined && initialSeconds > 0) {
        initialSeconds--;
      }
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, initialSeconds, onComplete]);

    return (
    <div className={countdownVariants({ variant, size, className })}>
      {showDays && (
        <PixelCountdownUnit
          value={timeLeft.days}
          label={labels ? "DAYS" : undefined}
          variant={variant || undefined}
          size={size || undefined}
        />
      )}
      {showDays && showHours && <PixelColon size={size || undefined} />}
      
      {showHours && (
        <PixelCountdownUnit
          value={timeLeft.hours}
          label={labels ? "HOURS" : undefined}
          variant={variant || undefined}
          size={size || undefined}
        />
      )}
      {showHours && showMinutes && <PixelColon size={size || undefined} />}
      
      {showMinutes && (
        <PixelCountdownUnit
          value={timeLeft.minutes}
          label={labels ? "MINS" : undefined}
          variant={variant || undefined}
          size={size || undefined}
        />
      )}
      {showMinutes && showSeconds && <PixelColon size={size || undefined} />}
      
      {showSeconds && (
        <PixelCountdownUnit
          value={timeLeft.seconds}
          label={labels ? "SECS" : undefined}
          variant={variant || undefined}
          size={size || undefined}
        />
      )}
    </div>
  );
}interface PixelCountdownUnitProps {
  value: number;
  label?: string;
  variant?: "default" | "retro" | "digital" | "flip";
  size?: "sm" | "md" | "lg" | "xl";
}

export function PixelCountdownUnit({
  value,
  label,
  variant = "default",
  size = "md",
}: PixelCountdownUnitProps) {
  const digits = String(value).padStart(2, "0").split("");

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1">
        {digits.map((digit, index) => (
          <div key={index} className={digitVariants({ variant, size })}>
            {digit}
          </div>
        ))}
      </div>
      {label && (
        <div className={`font-bold ${size === "sm" ? "text-xs" : size === "md" ? "text-sm" : size === "lg" ? "text-base" : "text-lg"}`}>
          {label}
        </div>
      )}
    </div>
  );
}

function PixelColon({ size = "md" }: { size?: "sm" | "md" | "lg" | "xl" }) {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-3xl",
    lg: "text-5xl",
    xl: "text-7xl",
  };

  return <span className={`${sizeClasses[size]} mx-1`}>:</span>;
}

// Timer variant with controls
interface PixelTimerProps {
  initialMinutes?: number;
  initialSeconds?: number;
  onComplete?: () => void;
  showControls?: boolean;
  variant?: "default" | "retro" | "digital" | "flip";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function PixelTimer({
  initialMinutes = 5,
  initialSeconds = 0,
  onComplete,
  showControls = true,
  variant = "default",
  size = "md",
  className,
}: PixelTimerProps) {
  const [totalSeconds, setTotalSeconds] = React.useState(
    initialMinutes * 60 + initialSeconds
  );
  const [isRunning, setIsRunning] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (!isRunning || isPaused) return;

    const timer = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          onComplete?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, isPaused, onComplete]);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTotalSeconds(initialMinutes * 60 + initialSeconds);
  };

  return (
    <div className={`flex flex-col items-center gap-6 ${className || ""}`}>
      <div className={countdownVariants({ variant, size })}>
        <PixelCountdownUnit
          value={minutes}
          label="MIN"
          variant={variant}
          size={size}
        />
        <PixelColon size={size} />
        <PixelCountdownUnit
          value={seconds}
          label="SEC"
          variant={variant}
          size={size}
        />
      </div>

      {showControls && (
        <div className="flex gap-3">
          {!isRunning && (
            <button
              onClick={handleStart}
              className="px-6 py-3 border-4 border-black bg-pixel-success hover:bg-pixel-dark-secondary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] font-bold font-pixel"
            >
              START
            </button>
          )}
          
          {isRunning && !isPaused && (
            <button
              onClick={handlePause}
              className="px-6 py-3 border-4 border-black bg-pixel-warning hover:bg-pixel-dark-secondary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] font-bold font-pixel"
            >
              PAUSE
            </button>
          )}
          
          {isPaused && (
            <button
              onClick={handleResume}
              className="px-6 py-3 border-4 border-black bg-pixel-success hover:bg-pixel-dark-secondary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] font-bold font-pixel"
            >
              RESUME
            </button>
          )}
          
          <button
            onClick={handleReset}
            className="px-6 py-3 border-4 border-black bg-pixel-error hover:bg-pixel-dark-secondary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] font-bold font-pixel"
          >
            RESET
          </button>
        </div>
      )}
    </div>
  );
}
