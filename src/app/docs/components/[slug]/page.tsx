"use client";

import { notFound } from "next/navigation";
import { DocsSidebar } from "@/components/docs/sidebar";
import { CodeBlock } from "@/components/docs/code-block";
import { PixelButton } from "@/components/ui/pixel/pixel-button";
import { PixelCard, PixelCardContent, PixelCardDescription, PixelCardHeader, PixelCardTitle } from "@/components/ui/pixel/pixel-card";
import { PixelInput } from "@/components/ui/pixel/pixel-input";
import { PixelBadge } from "@/components/ui/pixel/pixel-badge";
import { PixelCheckbox } from "@/components/ui/pixel/pixel-checkbox";
import { PixelTabs, PixelTabsContent, PixelTabsList, PixelTabsTrigger } from "@/components/ui/pixel/pixel-tabs";
import { PixelAccordion, PixelAccordionContent, PixelAccordionItem, PixelAccordionTrigger } from "@/components/ui/pixel/pixel-accordion";
import { PixelSelect, PixelSelectContent, PixelSelectItem, PixelSelectTrigger, PixelSelectValue } from "@/components/ui/pixel/pixel-select";
import { useState } from "react";

const componentDocs: Record<string, any> = {
  "pixel-button": {
    title: "Pixel Button",
    description: "A retro 8-bit styled button component with pixel-perfect borders and instant state changes.",
    installation: `npx shadcn@latest add button
# Then copy the pixel-button.tsx component`,
    importCode: `import { PixelButton } from "@/components/ui/pixel/pixel-button";`,
    usageCode: `<PixelButton>Click Me</PixelButton>
<PixelButton variant="secondary">Secondary</PixelButton>
<PixelButton variant="ghost">Ghost</PixelButton>
<PixelButton variant="destructive">Delete</PixelButton>
<PixelButton size="sm">Small</PixelButton>
<PixelButton size="lg">Large</PixelButton>`,
    props: [
      { name: "variant", type: '"default" | "secondary" | "ghost" | "destructive"', default: '"default"' },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"' },
      { name: "asChild", type: "boolean", default: "false" },
    ],
    examples: [
      {
        title: "All Variants",
        code: `<div className="flex gap-4">
  <PixelButton variant="default">Default</PixelButton>
  <PixelButton variant="secondary">Secondary</PixelButton>
  <PixelButton variant="ghost">Ghost</PixelButton>
  <PixelButton variant="destructive">Destructive</PixelButton>
</div>`,
      },
      {
        title: "All Sizes",
        code: `<div className="flex gap-4 items-center">
  <PixelButton size="sm">Small</PixelButton>
  <PixelButton size="md">Medium</PixelButton>
  <PixelButton size="lg">Large</PixelButton>
</div>`,
      },
    ],
  },
  "pixel-card": {
    title: "Pixel Card",
    description: "A container component with pixel-art styling for displaying content.",
    installation: `# Copy the pixel-card.tsx component to your project`,
    importCode: `import { 
  PixelCard, 
  PixelCardHeader, 
  PixelCardTitle, 
  PixelCardDescription,
  PixelCardContent,
  PixelCardFooter 
} from "@/components/ui/pixel/pixel-card";`,
    usageCode: `<PixelCard>
  <PixelCardHeader>
    <PixelCardTitle>Card Title</PixelCardTitle>
    <PixelCardDescription>Card description goes here</PixelCardDescription>
  </PixelCardHeader>
  <PixelCardContent>
    <p>Card content</p>
  </PixelCardContent>
  <PixelCardFooter>
    <PixelButton>Action</PixelButton>
  </PixelCardFooter>
</PixelCard>`,
    props: [
      { name: "className", type: "string", default: "-" },
    ],
    examples: [
      {
        title: "Basic Card",
        code: `<PixelCard>
  <PixelCardHeader>
    <PixelCardTitle>Retro Gaming</PixelCardTitle>
    <PixelCardDescription>
      Experience the nostalgia of 8-bit era
    </PixelCardDescription>
  </PixelCardHeader>
  <PixelCardContent>
    <p>This card uses pixel-perfect borders and retro styling.</p>
  </PixelCardContent>
</PixelCard>`,
      },
    ],
  },
  "pixel-input": {
    title: "Pixel Input",
    description: "A text input field with retro pixel borders and styling.",
    installation: `# Copy the pixel-input.tsx component`,
    importCode: `import { PixelInput } from "@/components/ui/pixel/pixel-input";`,
    usageCode: `<PixelInput type="text" placeholder="Enter text..." />
<PixelInput type="email" placeholder="Email address" />
<PixelInput type="password" placeholder="Password" />`,
    props: [
      { name: "type", type: "string", default: '"text"' },
      { name: "placeholder", type: "string", default: "-" },
      { name: "disabled", type: "boolean", default: "false" },
    ],
    examples: [
      {
        title: "Input Types",
        code: `<div className="space-y-4">
  <PixelInput type="text" placeholder="Text input" />
  <PixelInput type="email" placeholder="email@example.com" />
  <PixelInput type="password" placeholder="Password" />
</div>`,
      },
    ],
  },
  "pixel-badge": {
    title: "Pixel Badge",
    description: "Small status indicators with pixel-art styling and color variants.",
    installation: `# Copy the pixel-badge.tsx component`,
    importCode: `import { PixelBadge } from "@/components/ui/pixel/pixel-badge";`,
    usageCode: `<PixelBadge>Default</PixelBadge>
<PixelBadge variant="success">Success</PixelBadge>
<PixelBadge variant="warning">Warning</PixelBadge>
<PixelBadge variant="error">Error</PixelBadge>`,
    props: [
      { name: "variant", type: '"default" | "success" | "warning" | "error"', default: '"default"' },
    ],
    examples: [
      {
        title: "All Variants",
        code: `<div className="flex gap-2">
  <PixelBadge variant="default">Default</PixelBadge>
  <PixelBadge variant="success">Success</PixelBadge>
  <PixelBadge variant="warning">Warning</PixelBadge>
  <PixelBadge variant="error">Error</PixelBadge>
</div>`,
      },
    ],
  },
  "pixel-checkbox": {
    title: "Pixel Checkbox",
    description: "A checkbox component with pixel-perfect square borders.",
    installation: `npx shadcn@latest add checkbox
# Then copy the pixel-checkbox.tsx component`,
    importCode: `import { PixelCheckbox } from "@/components/ui/pixel/pixel-checkbox";`,
    usageCode: `<div className="flex items-center space-x-2">
  <PixelCheckbox id="terms" />
  <label htmlFor="terms">Accept terms and conditions</label>
</div>`,
    props: [
      { name: "checked", type: "boolean", default: "false" },
      { name: "disabled", type: "boolean", default: "false" },
    ],
    examples: [
      {
        title: "Basic Usage",
        code: `<div className="space-y-2">
  <div className="flex items-center space-x-2">
    <PixelCheckbox id="option1" />
    <label htmlFor="option1">Option 1</label>
  </div>
  <div className="flex items-center space-x-2">
    <PixelCheckbox id="option2" />
    <label htmlFor="option2">Option 2</label>
  </div>
</div>`,
      },
    ],
  },
  "pixel-select": {
    title: "Pixel Select",
    description: "A dropdown select component with pixel-art styling.",
    installation: `npx shadcn@latest add select
# Then copy the pixel-select.tsx component`,
    importCode: `import { 
  PixelSelect, 
  PixelSelectContent, 
  PixelSelectItem, 
  PixelSelectTrigger, 
  PixelSelectValue 
} from "@/components/ui/pixel/pixel-select";`,
    usageCode: `<PixelSelect>
  <PixelSelectTrigger>
    <PixelSelectValue placeholder="Select option" />
  </PixelSelectTrigger>
  <PixelSelectContent>
    <PixelSelectItem value="1">Option 1</PixelSelectItem>
    <PixelSelectItem value="2">Option 2</PixelSelectItem>
  </PixelSelectContent>
</PixelSelect>`,
    props: [
      { name: "value", type: "string", default: "-" },
      { name: "onValueChange", type: "(value: string) => void", default: "-" },
    ],
    examples: [
      {
        title: "Basic Select",
        code: `<PixelSelect>
  <PixelSelectTrigger className="w-[200px]">
    <PixelSelectValue placeholder="Choose console" />
  </PixelSelectTrigger>
  <PixelSelectContent>
    <PixelSelectItem value="nes">NES</PixelSelectItem>
    <PixelSelectItem value="snes">SNES</PixelSelectItem>
    <PixelSelectItem value="gameboy">Game Boy</PixelSelectItem>
  </PixelSelectContent>
</PixelSelect>`,
      },
    ],
  },
  "pixel-tabs": {
    title: "Pixel Tabs",
    description: "Tabbed navigation with retro pixel styling.",
    installation: `npx shadcn@latest add tabs
# Then copy the pixel-tabs.tsx component`,
    importCode: `import { PixelTabs, PixelTabsContent, PixelTabsList, PixelTabsTrigger } from "@/components/ui/pixel/pixel-tabs";`,
    usageCode: `<PixelTabs defaultValue="tab1">
  <PixelTabsList>
    <PixelTabsTrigger value="tab1">Tab 1</PixelTabsTrigger>
    <PixelTabsTrigger value="tab2">Tab 2</PixelTabsTrigger>
  </PixelTabsList>
  <PixelTabsContent value="tab1">Content 1</PixelTabsContent>
  <PixelTabsContent value="tab2">Content 2</PixelTabsContent>
</PixelTabs>`,
    props: [
      { name: "defaultValue", type: "string", default: "-" },
      { name: "value", type: "string", default: "-" },
    ],
    examples: [
      {
        title: "Basic Tabs",
        code: `<PixelTabs defaultValue="account">
  <PixelTabsList>
    <PixelTabsTrigger value="account">Account</PixelTabsTrigger>
    <PixelTabsTrigger value="password">Password</PixelTabsTrigger>
  </PixelTabsList>
  <PixelTabsContent value="account">
    <p>Manage your account settings</p>
  </PixelTabsContent>
  <PixelTabsContent value="password">
    <p>Change your password</p>
  </PixelTabsContent>
</PixelTabs>`,
      },
    ],
  },
  "pixel-accordion": {
    title: "Pixel Accordion",
    description: "Collapsible content sections with pixel-art borders.",
    installation: `npx shadcn@latest add accordion
# Then copy the pixel-accordion.tsx component`,
    importCode: `import { PixelAccordion, PixelAccordionContent, PixelAccordionItem, PixelAccordionTrigger } from "@/components/ui/pixel/pixel-accordion";`,
    usageCode: `<PixelAccordion type="single" collapsible>
  <PixelAccordionItem value="item-1">
    <PixelAccordionTrigger>Question 1</PixelAccordionTrigger>
    <PixelAccordionContent>Answer 1</PixelAccordionContent>
  </PixelAccordionItem>
</PixelAccordion>`,
    props: [
      { name: "type", type: '"single" | "multiple"', default: '-' },
      { name: "collapsible", type: "boolean", default: "false" },
    ],
    examples: [
      {
        title: "FAQ Accordion",
        code: `<PixelAccordion type="single" collapsible>
  <PixelAccordionItem value="item-1">
    <PixelAccordionTrigger>What is Pixel UI?</PixelAccordionTrigger>
    <PixelAccordionContent>
      A retro 8-bit component library for React
    </PixelAccordionContent>
  </PixelAccordionItem>
  <PixelAccordionItem value="item-2">
    <PixelAccordionTrigger>How do I install it?</PixelAccordionTrigger>
    <PixelAccordionContent>
      Copy the components to your project
    </PixelAccordionContent>
  </PixelAccordionItem>
</PixelAccordion>`,
      },
    ],
  },
  "pixel-dialog": {
    title: "Pixel Dialog",
    description: "A modal dialog component with pixel-art borders and retro styling.",
    installation: `npx shadcn@latest add dialog
# Then copy the pixel-dialog.tsx component`,
    importCode: `import { 
  PixelDialog, 
  PixelDialogContent, 
  PixelDialogDescription,
  PixelDialogHeader,
  PixelDialogTitle,
  PixelDialogTrigger 
} from "@/components/ui/pixel/pixel-dialog";`,
    usageCode: `<PixelDialog>
  <PixelDialogTrigger>Open</PixelDialogTrigger>
  <PixelDialogContent>
    <PixelDialogHeader>
      <PixelDialogTitle>Title</PixelDialogTitle>
      <PixelDialogDescription>Description</PixelDialogDescription>
    </PixelDialogHeader>
  </PixelDialogContent>
</PixelDialog>`,
    props: [
      { name: "open", type: "boolean", default: "-" },
      { name: "onOpenChange", type: "(open: boolean) => void", default: "-" },
    ],
    examples: [
      {
        title: "Basic Dialog",
        code: `<PixelDialog>
  <PixelDialogTrigger asChild>
    <PixelButton>Open Dialog</PixelButton>
  </PixelDialogTrigger>
  <PixelDialogContent>
    <PixelDialogHeader>
      <PixelDialogTitle>Retro Dialog</PixelDialogTitle>
      <PixelDialogDescription>
        This is a pixel-styled dialog component
      </PixelDialogDescription>
    </PixelDialogHeader>
  </PixelDialogContent>
</PixelDialog>`,
      },
    ],
  },
  "pixel-toast": {
    title: "Pixel Toast",
    description: "Notification component with pixel styling and customizable positions.",
    installation: `# Copy the pixel-toast.tsx component`,
    importCode: `import { PixelToastProvider, usePixelToast } from "@/components/ui/pixel/pixel-toast";`,
    usageCode: `// Wrap your app with PixelToastProvider
<PixelToastProvider position="bottom-right" duration={3000}>
  {children}
</PixelToastProvider>

// Use in component
const { addToast } = usePixelToast();
addToast("Hello World!");`,
    props: [
      { name: "position", type: '"top-right" | "bottom-right" | "top-left" | "bottom-left"', default: '"bottom-right"' },
      { name: "duration", type: "number", default: "3000" },
    ],
    examples: [
      {
        title: "Toast with Action",
        code: `const { addToast } = usePixelToast();

addToast("File deleted", {
  label: "Undo",
  onClick: () => console.log("Undo clicked")
});`,
      },
    ],
  },
};

export default function ComponentPage({ params }: { params: { slug: string } }) {
  const doc = componentDocs[params.slug];

  if (!doc) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f5f5dc] dark:bg-[#000000]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <DocsSidebar />
          
          <main className="flex-1 max-w-4xl">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                {doc.title}
              </h1>
              <p className="text-lg text-black/80 dark:text-white/80">
                {doc.description}
              </p>
            </div>

            {/* Installation */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                Installation
              </h2>
              <CodeBlock code={doc.installation} language="bash" />
            </section>

            {/* Import */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                Import
              </h2>
              <CodeBlock code={doc.importCode} />
            </section>

            {/* Usage */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                Usage
              </h2>
              <PixelTabs defaultValue="preview">
                <PixelTabsList>
                  <PixelTabsTrigger value="preview">Preview</PixelTabsTrigger>
                  <PixelTabsTrigger value="code">Code</PixelTabsTrigger>
                </PixelTabsList>
                <PixelTabsContent value="preview">
                  <div className="pixel-borders border-4 border-black p-8 bg-white dark:border-[#ff8c00] dark:bg-[#1a1a1a] min-h-[200px] flex items-center justify-center">
                    <ComponentPreview slug={params.slug} />
                  </div>
                </PixelTabsContent>
                <PixelTabsContent value="code">
                  <CodeBlock code={doc.usageCode} />
                </PixelTabsContent>
              </PixelTabs>
            </section>

            {/* Props Table */}
            {doc.props && doc.props.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                  Props
                </h2>
                <div className="pixel-borders border-4 border-black overflow-hidden dark:border-[#ff8c00]">
                  <table className="w-full">
                    <thead className="bg-[#ff8c00] text-white">
                      <tr>
                        <th className="text-left p-3 font-bold uppercase text-xs">Prop</th>
                        <th className="text-left p-3 font-bold uppercase text-xs">Type</th>
                        <th className="text-left p-3 font-bold uppercase text-xs">Default</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-[#1a1a1a]">
                      {doc.props.map((prop: any, index: number) => (
                        <tr key={index} className="border-t-2 border-black dark:border-[#ff8c00]">
                          <td className="p-3 font-mono text-sm">{prop.name}</td>
                          <td className="p-3 font-mono text-sm text-black/70 dark:text-white/70">{prop.type}</td>
                          <td className="p-3 font-mono text-sm text-black/70 dark:text-white/70">{prop.default}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Examples */}
            {doc.examples && doc.examples.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                  Examples
                </h2>
                {doc.examples.map((example: any, index: number) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-lg font-bold mb-2">{example.title}</h3>
                    <CodeBlock code={example.code} />
                  </div>
                ))}
              </section>
            )}

            {/* Accessibility */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                Accessibility
              </h2>
              <PixelCard>
                <PixelCardContent className="pt-6">
                  <p className="text-sm">
                    This component is built on Radix UI primitives and includes proper ARIA attributes, 
                    keyboard navigation, and focus management for accessibility.
                  </p>
                </PixelCardContent>
              </PixelCard>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

// Component preview helper
function ComponentPreview({ slug }: { slug: string }) {
  const [checked, setChecked] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  
  switch (slug) {
    case "pixel-button":
      return (
        <div className="flex gap-4 flex-wrap">
          <PixelButton>Default</PixelButton>
          <PixelButton variant="secondary">Secondary</PixelButton>
          <PixelButton variant="ghost">Ghost</PixelButton>
          <PixelButton variant="destructive">Destructive</PixelButton>
        </div>
      );
    case "pixel-card":
      return (
        <PixelCard>
          <PixelCardHeader>
            <PixelCardTitle>Card Title</PixelCardTitle>
            <PixelCardDescription>Card description</PixelCardDescription>
          </PixelCardHeader>
          <PixelCardContent>
            <p>This is the card content area.</p>
          </PixelCardContent>
        </PixelCard>
      );
    case "pixel-input":
      return <PixelInput placeholder="Enter text..." />;
    case "pixel-badge":
      return (
        <div className="flex gap-2 flex-wrap">
          <PixelBadge>Default</PixelBadge>
          <PixelBadge variant="success">Success</PixelBadge>
          <PixelBadge variant="warning">Warning</PixelBadge>
          <PixelBadge variant="error">Error</PixelBadge>
        </div>
      );
    case "pixel-checkbox":
      return (
        <div className="flex items-center space-x-2">
          <PixelCheckbox id="preview" checked={checked} onCheckedChange={(c) => setChecked(c as boolean)} />
          <label htmlFor="preview">Accept terms</label>
        </div>
      );
    case "pixel-select":
      return (
        <PixelSelect value={selectValue} onValueChange={setSelectValue}>
          <PixelSelectTrigger className="w-[200px]">
            <PixelSelectValue placeholder="Choose option" />
          </PixelSelectTrigger>
          <PixelSelectContent>
            <PixelSelectItem value="1">Option 1</PixelSelectItem>
            <PixelSelectItem value="2">Option 2</PixelSelectItem>
            <PixelSelectItem value="3">Option 3</PixelSelectItem>
          </PixelSelectContent>
        </PixelSelect>
      );
    case "pixel-tabs":
      return (
        <PixelTabs defaultValue="tab1" className="w-[400px]">
          <PixelTabsList>
            <PixelTabsTrigger value="tab1">Tab 1</PixelTabsTrigger>
            <PixelTabsTrigger value="tab2">Tab 2</PixelTabsTrigger>
          </PixelTabsList>
          <PixelTabsContent value="tab1">Content for tab 1</PixelTabsContent>
          <PixelTabsContent value="tab2">Content for tab 2</PixelTabsContent>
        </PixelTabs>
      );
    case "pixel-accordion":
      return (
        <PixelAccordion type="single" collapsible className="w-full">
          <PixelAccordionItem value="item-1">
            <PixelAccordionTrigger>Question 1</PixelAccordionTrigger>
            <PixelAccordionContent>Answer to question 1</PixelAccordionContent>
          </PixelAccordionItem>
          <PixelAccordionItem value="item-2">
            <PixelAccordionTrigger>Question 2</PixelAccordionTrigger>
            <PixelAccordionContent>Answer to question 2</PixelAccordionContent>
          </PixelAccordionItem>
        </PixelAccordion>
      );
    default:
      return <p>Component preview not available</p>;
  }
}
