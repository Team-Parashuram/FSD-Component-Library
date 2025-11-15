"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelFaqVariants = cva(
  "relative w-full",
  {
    variants: {
      variant: {
        default: "bg-[#f5f5dc] dark:bg-[#1a1a1a]",
        primary: "bg-[#ff8c00] text-white",
        secondary: "bg-[#ffd700] text-black",
        dark: "bg-black text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface PixelFaqProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelFaqVariants> {
  children?: React.ReactNode;
}

const PixelFaq = React.forwardRef<HTMLDivElement, PixelFaqProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(pixelFaqVariants({ variant }), "py-16 md:py-24", className)}
        {...props}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          {children}
        </div>
      </section>
    );
  }
);
PixelFaq.displayName = "PixelFaq";

const PixelFaqList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("space-y-4", className)}
    {...props}
  >
    {children}
  </div>
));
PixelFaqList.displayName = "PixelFaqList";

const pixelFaqItemVariants = cva(
  "relative border-4 border-black overflow-hidden transition-none",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-[#2a2a2a]",
        primary: "bg-[#ff8c00] text-white",
        secondary: "bg-[#ffd700] text-black",
        dark: "bg-black text-white border-[#ff8c00]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface PixelFaqItemContextValue {
  isOpen: boolean;
  toggle: () => void;
}

const PixelFaqItemContext = React.createContext<PixelFaqItemContextValue | undefined>(undefined);

const usePixelFaqItem = () => {
  const context = React.useContext(PixelFaqItemContext);
  if (!context) {
    throw new Error("PixelFaqItem sub-components must be used within PixelFaqItem");
  }
  return context;
};

export interface PixelFaqItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelFaqItemVariants> {
  defaultOpen?: boolean;
}

const PixelFaqItem = React.forwardRef<HTMLDivElement, PixelFaqItemProps>(
  ({ className, variant, defaultOpen = false, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);
    
    const toggle = React.useCallback(() => {
      setIsOpen((prev) => !prev);
    }, []);

    return (
      <PixelFaqItemContext.Provider value={{ isOpen, toggle }}>
        <div
          ref={ref}
          className={cn(
            pixelFaqItemVariants({ variant }),
            isOpen ? "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" : "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </PixelFaqItemContext.Provider>
    );
  }
);
PixelFaqItem.displayName = "PixelFaqItem";

const PixelFaqQuestion = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { isOpen, toggle } = usePixelFaqItem();
  
  return (
    <button
      ref={ref}
      type="button"
      onClick={toggle}
      className={cn(
        "w-full text-left p-6 font-bold text-base md:text-lg flex items-center justify-between gap-4 uppercase tracking-wide hover:opacity-80 transition-opacity",
        className
      )}
      aria-expanded={isOpen}
      {...props}
    >
      <span>{children}</span>
      <span
        className={cn(
          "flex-shrink-0 w-8 h-8 flex items-center justify-center border-2 border-current font-[family-name:var(--font-pixel)] text-2xl transition-transform",
          isOpen && "rotate-45"
        )}
        aria-hidden="true"
      >
        +
      </span>
    </button>
  );
});
PixelFaqQuestion.displayName = "PixelFaqQuestion";

const PixelFaqAnswer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { isOpen } = usePixelFaqItem();
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      ref={ref}
      style={{ height: `${height}px` }}
      className={cn(
        "overflow-hidden transition-none border-t-4 border-black/20 dark:border-white/20",
        !isOpen && "border-t-0",
        className
      )}
      {...props}
    >
      <div ref={contentRef} className="p-6 pt-4 text-sm md:text-base opacity-80 leading-relaxed">
        {children}
      </div>
    </div>
  );
});
PixelFaqAnswer.displayName = "PixelFaqAnswer";

const PixelFaqHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-center mb-12", className)}
    {...props}
  >
    {children}
  </div>
));
PixelFaqHeader.displayName = "PixelFaqHeader";

const PixelFaqSectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-3xl md:text-5xl font-bold uppercase tracking-wider mb-4 font-[family-name:var(--font-pixel)]",
      className
    )}
    {...props}
  >
    {children}
  </h2>
));
PixelFaqSectionTitle.displayName = "PixelFaqSectionTitle";

const PixelFaqSectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-base md:text-xl opacity-80 max-w-3xl mx-auto", className)}
    {...props}
  >
    {children}
  </p>
));
PixelFaqSectionDescription.displayName = "PixelFaqSectionDescription";

const PixelFaqCategory = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mb-8", className)}
    {...props}
  >
    {children}
  </div>
));
PixelFaqCategory.displayName = "PixelFaqCategory";

const PixelFaqCategoryTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl md:text-2xl font-bold uppercase tracking-wide mb-4 pb-2 border-b-4 border-black dark:border-white font-[family-name:var(--font-pixel)]",
      className
    )}
    {...props}
  >
    {children}
  </h3>
));
PixelFaqCategoryTitle.displayName = "PixelFaqCategoryTitle";

export {
  PixelFaq,
  PixelFaqList,
  PixelFaqItem,
  PixelFaqQuestion,
  PixelFaqAnswer,
  PixelFaqHeader,
  PixelFaqSectionTitle,
  PixelFaqSectionDescription,
  PixelFaqCategory,
  PixelFaqCategoryTitle,
  pixelFaqVariants,
  pixelFaqItemVariants,
};
