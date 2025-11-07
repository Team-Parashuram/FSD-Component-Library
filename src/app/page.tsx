"use client";

import Link from "next/link";
import { PixelButton } from "@/components/ui/pixel-button";
import { PixelCard, PixelCardContent, PixelCardDescription, PixelCardFooter, PixelCardHeader, PixelCardTitle } from "@/components/ui/pixel-card";
import { PixelBadge } from "@/components/ui/pixel-badge";
import { ArrowRight, Gamepad2, Sparkles, Code, Zap } from "lucide-react";
import { ModeToggle } from "@/components/theme/theme-button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f5dc] dark:bg-[#000000]">
                <ModeToggle />
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-6">
          <PixelBadge variant="warning">New Release v1.0</PixelBadge>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-6 leading-tight dark:text-[#ffd700]">
          Pixel UI
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto dark:text-white">
          8-Bit Retro Component Library
        </p>
        
        <p className="text-base mb-12 max-w-2xl mx-auto text-black/80 dark:text-white/80">
          Build nostalgic web experiences with our pixel-perfect component library. 
          Inspired by classic 8-bit games and retro computing aesthetics.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/docs/components/pixel-button">
            <PixelButton size="lg">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </PixelButton>
          </Link>
          <Link href="#components">
            <PixelButton size="lg" variant="secondary">
              Browse Components
            </PixelButton>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-12 text-center dark:text-[#ffd700]">
          Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PixelCard>
            <PixelCardHeader>
              <div className="mb-4">
                <Gamepad2 className="h-8 w-8" />
              </div>
              <PixelCardTitle>Retro Design</PixelCardTitle>
            </PixelCardHeader>
            <PixelCardContent>
              <PixelCardDescription>
                Authentic 8-bit styling with pixel-perfect borders and no smooth animations
              </PixelCardDescription>
            </PixelCardContent>
          </PixelCard>

          <PixelCard>
            <PixelCardHeader>
              <div className="mb-4">
                <Code className="h-8 w-8" />
              </div>
              <PixelCardTitle>TypeScript</PixelCardTitle>
            </PixelCardHeader>
            <PixelCardContent>
              <PixelCardDescription>
                Fully typed components with excellent IDE support and autocomplete
              </PixelCardDescription>
            </PixelCardContent>
          </PixelCard>

          <PixelCard>
            <PixelCardHeader>
              <div className="mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <PixelCardTitle>Instant Actions</PixelCardTitle>
            </PixelCardHeader>
            <PixelCardContent>
              <PixelCardDescription>
                Zero transition delays for authentic retro feel with instant state changes
              </PixelCardDescription>
            </PixelCardContent>
          </PixelCard>

          <PixelCard>
            <PixelCardHeader>
              <div className="mb-4">
                <Sparkles className="h-8 w-8" />
              </div>
              <PixelCardTitle>Accessible</PixelCardTitle>
            </PixelCardHeader>
            <PixelCardContent>
              <PixelCardDescription>
                Built on Radix UI primitives with proper ARIA attributes and keyboard support
              </PixelCardDescription>
            </PixelCardContent>
          </PixelCard>
        </div>
      </section>

      {/* Component Showcase */}
      <section id="components" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-12 text-center dark:text-[#ffd700]">
          Components
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Button", slug: "pixel-button", desc: "Interactive buttons with variants" },
            { name: "Card", slug: "pixel-card", desc: "Content containers" },
            { name: "Input", slug: "pixel-input", desc: "Text input fields" },
            { name: "Badge", slug: "pixel-badge", desc: "Status indicators" },
            { name: "Dialog", slug: "pixel-dialog", desc: "Modal dialogs" },
            { name: "Toast", slug: "pixel-toast", desc: "Notifications" },
            { name: "Select", slug: "pixel-select", desc: "Dropdown selections" },
            { name: "Checkbox", slug: "pixel-checkbox", desc: "Checkboxes" },
            { name: "Tabs", slug: "pixel-tabs", desc: "Tabbed content" },
            { name: "Accordion", slug: "pixel-accordion", desc: "Collapsible sections" },
            { name: "Progress", slug: "pixel-progress", desc: "Progress bars" },
            { name: "Slider", slug: "pixel-slider", desc: "Range sliders" },
            { name: "Switch", slug: "pixel-switch", desc: "Toggle switches" },
            { name: "Textarea", slug: "pixel-textarea", desc: "Multi-line text input" },
            { name: "Radio Group", slug: "pixel-radio-group", desc: "Radio buttons" },
            { name: "Alert", slug: "pixel-alert", desc: "Alert messages" },
            { name: "Tooltip", slug: "pixel-tooltip", desc: "Hover tooltips" },
            { name: "Popover", slug: "pixel-popover", desc: "Popover content" },
            { name: "Table", slug: "pixel-table", desc: "Data tables" },
            { name: "Breadcrumb", slug: "pixel-breadcrumb", desc: "Navigation breadcrumbs" },
            { name: "Separator", slug: "pixel-separator", desc: "Divider lines" },
            { name: "Spinner", slug: "pixel-spinner", desc: "Loading indicators" },
          ].map((component) => (
            <PixelCard key={component.slug}>
              <PixelCardHeader>
                <PixelCardTitle>{component.name}</PixelCardTitle>
                <PixelCardDescription>{component.desc}</PixelCardDescription>
              </PixelCardHeader>
              <PixelCardFooter>
                <Link href={`/docs/components/${component.slug}`} className="w-full">
                  <PixelButton className="w-full" size="sm">
                    View Docs
                  </PixelButton>
                </Link>
              </PixelCardFooter>
            </PixelCard>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <PixelCard className="max-w-3xl mx-auto">
          <PixelCardHeader>
            <PixelCardTitle className="text-2xl">Ready to Get Started?</PixelCardTitle>
            <PixelCardDescription className="text-base">
              Start building retro web experiences with Pixel UI today
            </PixelCardDescription>
          </PixelCardHeader>
          <PixelCardContent>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/docs/components/pixel-button">
                <PixelButton size="lg">
                  Browse Components
                </PixelButton>
              </Link>
              <PixelButton size="lg" variant="ghost">
                View on GitHub
              </PixelButton>
            </div>
          </PixelCardContent>
        </PixelCard>
      </section>
    </div>
  );
}
