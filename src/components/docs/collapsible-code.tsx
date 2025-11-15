"use client";

import { useState } from "react";
import { CodeBlock } from "./code-block";
import { PixelButton } from "@/components/ui/pixel/pixel-button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleCodeProps {
  code: string;
  language?: string;
  previewLines?: number;
}

export function CollapsibleCode({ 
  code, 
  language = "tsx",
  previewLines = 50 
}: CollapsibleCodeProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const lines = code.split('\n');
  const totalLines = lines.length;
  const shouldCollapse = totalLines > previewLines;
  
  const displayCode = shouldCollapse && !isExpanded 
    ? lines.slice(0, previewLines).join('\n') + '\n\n// ... (more code below)'
    : code;

  if (!shouldCollapse) {
    return <CodeBlock code={code} language={language} />;
  }

  return (
    <div className="relative">
      <CodeBlock code={displayCode} language={language} />
      
      <div className="mt-4 flex items-center justify-center">
        <PixelButton
          onClick={() => setIsExpanded(!isExpanded)}
          variant="secondary"
          size="sm"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="mr-2 h-4 w-4" />
              SHOW LESS
            </>
          ) : (
            <>
              <ChevronDown className="mr-2 h-4 w-4" />
              VIEW FULL CODE ({totalLines} LINES)
            </>
          )}
        </PixelButton>
      </div>
    </div>
  );
}
