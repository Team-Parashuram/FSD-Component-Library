"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelTerminalVariants = cva(
  "relative w-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-mono overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-black text-[#00ff00]",
        amber: "bg-black text-[#ffb000]",
        white: "bg-black text-white",
        matrix: "bg-black text-[#00ff00]",
        retro: "bg-[#000080] text-white",
      },
      size: {
        sm: "min-h-[200px] text-xs",
        md: "min-h-[300px] text-sm",
        lg: "min-h-[400px] text-base",
        xl: "min-h-[500px] text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface Command {
  command: string;
  output?: string | React.ReactNode;
  error?: boolean;
}

export interface PixelTerminalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelTerminalVariants> {
  prompt?: string;
  welcomeMessage?: string | React.ReactNode;
  commands?: Record<string, (args: string[]) => string | React.ReactNode>;
  history?: Command[];
  onCommand?: (command: string, args: string[]) => void;
  showCursor?: boolean;
  typingSpeed?: number;
}

const PixelTerminal = React.forwardRef<HTMLDivElement, PixelTerminalProps>(
  (
    {
      className,
      variant,
      size,
      prompt = "user@pixel:~$",
      welcomeMessage = "Welcome to Pixel Terminal v1.0\nType 'help' for available commands.\n",
      commands: customCommands = {},
      history: externalHistory,
      onCommand,
      showCursor = true,
      typingSpeed = 50,
      ...props
    },
    ref
  ) => {
    const [history, setHistory] = React.useState<Command[]>([]);
    const [currentInput, setCurrentInput] = React.useState("");
    const [commandHistory, setCommandHistory] = React.useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = React.useState(-1);
    const [isTyping, setIsTyping] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const terminalRef = React.useRef<HTMLDivElement>(null);

    // Default built-in commands
    const builtInCommands: Record<string, (args: string[]) => string | React.ReactNode> = {
      help: () => {
        const availableCommands = Object.keys({ ...builtInCommands, ...customCommands });
        return `Available commands:\n${availableCommands.map(cmd => `  ${cmd}`).join('\n')}`;
      },
      clear: () => {
        setHistory([]);
        return null;
      },
      echo: (args) => args.join(' '),
      date: () => new Date().toLocaleString(),
      whoami: () => prompt.split('@')[0] || 'user',
      pwd: () => '/home/user',
      ls: () => 'Documents  Downloads  Pictures  Desktop',
      about: () => 'Pixel Terminal - A retro-style terminal emulator\nBuilt with React and TypeScript',
    };

    const allCommands = { ...builtInCommands, ...customCommands };

    // Handle command execution
    const executeCommand = React.useCallback(
      (input: string) => {
        const trimmedInput = input.trim();
        if (!trimmedInput) {
          setHistory((prev) => [...prev, { command: trimmedInput }]);
          return;
        }

        const [commandName, ...args] = trimmedInput.split(' ');
        const command = allCommands[commandName];

        if (command) {
          const output = command(args);
          if (output !== null) {
            setHistory((prev) => [...prev, { command: trimmedInput, output }]);
          }
        } else {
          setHistory((prev) => [
            ...prev,
            {
              command: trimmedInput,
              output: `Command not found: ${commandName}`,
              error: true,
            },
          ]);
        }

        setCommandHistory((prev) => [...prev, trimmedInput]);
        setHistoryIndex(-1);
        setCurrentInput("");

        if (onCommand) {
          onCommand(commandName, args);
        }
      },
      [allCommands, onCommand]
    );

    // Handle key events
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        executeCommand(currentInput);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (commandHistory.length > 0) {
          const newIndex =
            historyIndex === -1
              ? commandHistory.length - 1
              : Math.max(0, historyIndex - 1);
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIndex !== -1) {
          const newIndex = historyIndex + 1;
          if (newIndex >= commandHistory.length) {
            setHistoryIndex(-1);
            setCurrentInput("");
          } else {
            setHistoryIndex(newIndex);
            setCurrentInput(commandHistory[newIndex]);
          }
        }
      } else if (e.key === "Tab") {
        e.preventDefault();
        // Simple autocomplete
        const availableCommands = Object.keys(allCommands);
        const matches = availableCommands.filter((cmd) =>
          cmd.startsWith(currentInput)
        );
        if (matches.length === 1) {
          setCurrentInput(matches[0]);
        }
      }
    };

    // Focus input when clicking terminal
    const handleTerminalClick = () => {
      inputRef.current?.focus();
    };

    // Auto-scroll to bottom
    React.useEffect(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, [history, currentInput]);

    // Use external history if provided
    React.useEffect(() => {
      if (externalHistory) {
        setHistory(externalHistory);
      }
    }, [externalHistory]);

    return (
      <div
        ref={ref}
        className={cn(pixelTerminalVariants({ variant, size }), className)}
        onClick={handleTerminalClick}
        {...props}
      >
        {/* Scanlines effect */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)",
          }}
        />

        {/* Terminal content */}
        <div
          ref={terminalRef}
          className="relative p-4 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-current scrollbar-track-transparent"
        >
          {/* Welcome message */}
          {welcomeMessage && (
            <div className="mb-4 whitespace-pre-wrap opacity-80">
              {welcomeMessage}
            </div>
          )}

          {/* Command history */}
          {history.map((item, index) => (
            <div key={index} className="mb-2">
              <div className="flex items-center gap-2">
                <span className="opacity-70">{prompt}</span>
                <span>{item.command}</span>
              </div>
              {item.output && (
                <div
                  className={cn(
                    "mt-1 whitespace-pre-wrap",
                    item.error && "text-red-500"
                  )}
                >
                  {item.output}
                </div>
              )}
            </div>
          ))}

          {/* Current input line */}
          <div className="flex items-center gap-2">
            <span className="opacity-70">{prompt}</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none font-mono caret-current"
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
            {showCursor && (
              <span className="animate-pulse">_</span>
            )}
          </div>
        </div>
      </div>
    );
  }
);
PixelTerminal.displayName = "PixelTerminal";

// Export sub-components for advanced usage
const PixelTerminalOutput = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("whitespace-pre-wrap font-mono", className)}
    {...props}
  >
    {children}
  </div>
));
PixelTerminalOutput.displayName = "PixelTerminalOutput";

const PixelTerminalPrompt = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("opacity-70 font-mono", className)}
    {...props}
  >
    {children}
  </span>
));
PixelTerminalPrompt.displayName = "PixelTerminalPrompt";

export { PixelTerminal, PixelTerminalOutput, PixelTerminalPrompt };
