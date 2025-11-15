"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const chatContainerVariants = cva(
  "border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-pixel flex flex-col",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-[#2a2a2a]",
        retro: "bg-[#c0c0c0] dark:bg-[#1a1a1a]",
        terminal: "bg-black text-pixel-terminal",
      },
      size: {
        sm: "h-[300px] w-full max-w-[400px]",
        md: "h-[500px] w-full max-w-[600px]",
        lg: "h-[700px] w-full max-w-[800px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const messageVariants = cva(
  "inline-block max-w-[80%] p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] break-words",
  {
    variants: {
      sender: {
        user: "bg-pixel-primary ml-auto",
        other: "bg-white dark:bg-[#3a3a3a] mr-auto",
        system: "bg-pixel-secondary mx-auto text-center",
      },
    },
    defaultVariants: {
      sender: "other",
    },
  }
);

export interface MessageType {
  id: string;
  text: string;
  sender: "user" | "other";
  username?: string;
  timestamp?: string;
  avatar?: string;
}

interface PixelChatProps extends VariantProps<typeof chatContainerVariants> {
  messages: MessageType[];
  onSendMessage?: (message: string) => void;
  currentUser?: string;
  placeholder?: string;
  showTypingIndicator?: boolean;
  typingUser?: string;
  className?: string;
}

export function PixelChat({
  messages,
  onSendMessage,
  currentUser = "You",
  placeholder = "Type a message...",
  showTypingIndicator = false,
  typingUser,
  variant = "default",
  size = "md",
  className,
}: PixelChatProps) {
  const [inputValue, setInputValue] = React.useState("");
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, showTypingIndicator]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && onSendMessage) {
      onSendMessage(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className={chatContainerVariants({ variant, size, className })}>
      {/* Chat Header */}
      <div className="border-b-4 border-black p-4 bg-pixel-secondary flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-black bg-pixel-primary shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
          <span className="font-bold">Pixel Chat</span>
        </div>
        <div className="flex gap-2">
          <button className="w-6 h-6 border-2 border-black bg-white hover:bg-pixel-dark-muted shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold text-xs">
            _
          </button>
          <button className="w-6 h-6 border-2 border-black bg-white hover:bg-pixel-error shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold text-xs">
            ✕
          </button>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <PixelMessage
            key={message.id}
            message={message}
            isCurrentUser={message.sender === "user"}
          />
        ))}

        {/* Typing Indicator */}
        {showTypingIndicator && (
          <div className="flex items-center gap-2 text-pixel-dark-muted dark:text-pixel-light-muted text-sm">
            <span className="font-bold">{typingUser || "Someone"}</span>
            <span>is typing</span>
            <PixelTypingDots />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form
        onSubmit={handleSubmit}
        className="border-t-4 border-black p-4 bg-pixel-secondary flex gap-2"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-3 py-2 border-4 border-black focus:outline-none focus:ring-4 focus:ring-pixel-primary bg-white dark:bg-black text-pixel-dark-foreground dark:text-pixel-light-foreground font-pixel"
        />
        <button
          type="submit"
          disabled={!inputValue.trim()}
          className="px-4 py-2 border-4 border-black bg-pixel-primary hover:bg-pixel-dark-primary disabled:bg-pixel-dark-muted disabled:cursor-not-allowed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] font-bold"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

interface PixelMessageProps {
  message: MessageType;
  isCurrentUser: boolean;
}

export function PixelMessage({ message, isCurrentUser }: PixelMessageProps) {
  return (
    <div className={`flex gap-3 ${isCurrentUser ? "flex-row-reverse" : "flex-row"}`}>
      {/* Avatar */}
      <div className="flex-shrink-0 w-10 h-10 border-2 border-black bg-pixel-secondary shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-bold">
        {message.avatar || (isCurrentUser ? "U" : "O")}
      </div>

      {/* Message Content */}
      <div className={`flex flex-col gap-1 ${isCurrentUser ? "items-end" : "items-start"}`}>
        <div className="flex items-center gap-2 text-xs text-pixel-dark-muted dark:text-pixel-light-muted">
          {!isCurrentUser && message.username && (
            <span className="font-bold">{message.username}</span>
          )}
          {message.timestamp && <span>{message.timestamp}</span>}
        </div>
        <div className={messageVariants({ sender: message.sender })}>
          {message.text}
        </div>
      </div>
    </div>
  );
}

// Typing indicator animation
export function PixelTypingDots() {
  return (
    <div className="flex gap-1">
      <div className="w-2 h-2 bg-black dark:bg-white animate-bounce" style={{ animationDelay: "0ms" }} />
      <div className="w-2 h-2 bg-black dark:bg-white animate-bounce" style={{ animationDelay: "150ms" }} />
      <div className="w-2 h-2 bg-black dark:bg-white animate-bounce" style={{ animationDelay: "300ms" }} />
    </div>
  );
}

// Simple message bubble (standalone component)
interface PixelMessageBubbleProps {
  text: string;
  sender?: "user" | "other" | "system";
  username?: string;
  timestamp?: string;
  className?: string;
}

export function PixelMessageBubble({
  text,
  sender = "other",
  username,
  timestamp,
  className,
}: PixelMessageBubbleProps) {
  return (
    <div className={`flex flex-col gap-1 ${sender === "user" ? "items-end" : sender === "system" ? "items-center" : "items-start"} ${className || ""}`}>
      {(username || timestamp) && (
        <div className="flex items-center gap-2 text-xs text-pixel-dark-muted dark:text-pixel-light-muted font-pixel">
          {username && <span className="font-bold">{username}</span>}
          {timestamp && <span>{timestamp}</span>}
        </div>
      )}
      <div className={messageVariants({ sender })}>
        {text}
      </div>
    </div>
  );
}
