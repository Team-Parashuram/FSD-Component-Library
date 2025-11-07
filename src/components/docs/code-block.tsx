"use client";

import * as React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({
  code,
  language = "tsx",
  showLineNumbers = false,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("relative pixel-borders border-2 my-4 overflow-hidden bg-[#1a1a1a]", className)}>
      <button
        onClick={copyToClipboard}
        className="absolute right-2 top-2 z-10 pixel-borders border-2 border-[#ff8c00] bg-[#1a1a1a] p-2 text-white hover:bg-[#ff8c00] transition-none duration-0"
        aria-label="Copy code"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </button>
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          padding: "1.5rem",
          background: "#1a1a1a",
          fontSize: "14px",
          fontFamily: "monospace",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
