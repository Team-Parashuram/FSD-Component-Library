"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/lib/component-registry";
import { PixelBadge } from "@/components/ui/pixel/pixel-badge";
import { PixelButton } from "@/components/ui/pixel/pixel-button";
import { ArrowRight, Gamepad2, Sparkles, Code, Zap, Copy, Palette, Layers } from "lucide-react";
import { PixelCard, PixelCardContent, PixelCardDescription, PixelCardFooter, PixelCardHeader, PixelCardTitle } from "@/components/ui/pixel/pixel-card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f5f5dc] dark:bg-[#000000]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center" itemScope itemType="https://schema.org/SoftwareApplication">
        <div className="flex justify-center mb-6">
          <PixelBadge variant="warning">New Release v1.0</PixelBadge>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-6 leading-tight dark:text-[#ffd700]" itemProp="name">
          Pixel UI
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto dark:text-white" itemProp="applicationCategory">
          8-Bit Retro Component Library
        </p>
        
        <p className="text-base mb-12 max-w-2xl mx-auto text-black/80 dark:text-white/80" itemProp="description">
          Build nostalgic web experiences with our pixel-perfect component library. 
          Inspired by classic 8-bit games and retro computing aesthetics.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
                      <Link href="/shop" aria-label="Browse all Pixel UI components">
                <PixelButton size="lg">
                  Example Shop
                </PixelButton>
              </Link>
          <Link href="/docs/components/pixel-button" aria-label="Get started with Pixel UI components">
            <PixelButton size="lg">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </PixelButton>
          </Link>
          <Link href="#components" aria-label="Browse all component categories">
            <PixelButton size="lg" variant="secondary">
              Browse Components
            </PixelButton>
          </Link>
        </div>
      </section>

      {/* Featured Patterns Section */}
      <section className="container mx-auto px-4 py-12 mb-8">
        <div className="max-w-5xl mx-auto">
          <PixelCard className="border-4 border-[#ff8c00] dark:border-[#ffd700] bg-gradient-to-r from-[#ffd700]/10 to-[#ff8c00]/10">
            <PixelCardHeader className="text-center pb-4">
              <div className="flex justify-center mb-3">
                <PixelBadge variant="warning" className="text-lg px-4 py-2">
                   FEATURED
                </PixelBadge>
              </div>
              <PixelCardTitle className="text-3xl md:text-4xl mb-3">
                🎮 Retro Game Pattern
              </PixelCardTitle>
              <PixelCardDescription className="text-base md:text-lg">
                See all 10 special components in action! A complete gaming platform showcasing PixelLoader, PixelTerminal, PixelGameUI, PixelChat, and more.
              </PixelCardDescription>
            </PixelCardHeader>
            <PixelCardFooter className="flex justify-center pt-2">
              <Link href="/patterns" aria-label="View the complete Retro Game Pattern demo">
                <PixelButton size="lg" className="group">
                  View Live Demo <Gamepad2 className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </PixelButton>
              </Link>
            </PixelCardFooter>
          </PixelCard>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20" aria-labelledby="features-heading">
        <h2 id="features-heading" className="text-3xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-12 text-center dark:text-[#ffd700]">
          Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PixelCard>
            <PixelCardHeader>
              <div className="mb-4" aria-hidden="true">
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
              <div className="mb-4" aria-hidden="true">
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
              <div className="mb-4" aria-hidden="true">
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
              <div className="mb-4" aria-hidden="true">
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

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20" aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">Library Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <PixelCard>
            <PixelCardHeader className="text-center">
              <div className="flex justify-center mb-2" aria-hidden="true">
                <Layers className="h-12 w-12" />
              </div>
              <PixelCardTitle className="text-4xl">50+</PixelCardTitle>
              <PixelCardDescription>Components</PixelCardDescription>
            </PixelCardHeader>
          </PixelCard>
          
          <PixelCard>
            <PixelCardHeader className="text-center">
              <div className="flex justify-center mb-2" aria-hidden="true">
                <Palette className="h-12 w-12" />
              </div>
              <PixelCardTitle className="text-4xl">6</PixelCardTitle>
              <PixelCardDescription>Categories</PixelCardDescription>
            </PixelCardHeader>
          </PixelCard>
          
          <PixelCard>
            <PixelCardHeader className="text-center">
              <div className="flex justify-center mb-2" aria-hidden="true">
                <Copy className="h-12 w-12" />
              </div>
              <PixelCardTitle className="text-4xl">100%</PixelCardTitle>
              <PixelCardDescription>Copy-Paste Ready</PixelCardDescription>
            </PixelCardHeader>
          </PixelCard>
        </div>
      </section>

      {/* Components Section */}
      <section id="components" className="container mx-auto px-4 py-20" aria-labelledby="components-heading">
        <h2 id="components-heading" className="text-3xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-12 text-center dark:text-[#ffd700]">
          Component Categories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category) => (
            <Link key={category} href={`/docs/components?category=${category.toLowerCase()}`} aria-label={`Browse ${category} components`}>
              <PixelCard className="hover:scale-105 transition-transform duration-0 cursor-pointer">
                <PixelCardHeader>
                  <PixelCardTitle className="text-xl">{category}</PixelCardTitle>
                  <PixelCardDescription>
                    {category === "Forms" && "Input, Button, Select, and more"}
                     {category === "Animations" && "Gradient, Glitch Text, Shuffle, and more"}
                    {category === "Display" && "Card, Badge, Table, Avatar and more"}
                    {category === "Feedback" && "Alert, Toast, Progress and more"}
                    {category === "Navigation" && "Tabs, Breadcrumb, Menu and more"}
                    {category === "Overlays" && "Dialog, Popover, Tooltip and more"}
                    {category === "Layout" && "Hero Section, Bento Grid, Pricing Section and more"}
                    {category === "Special" && "Game UI, Retro Window, Terminal UI and more"}
                  </PixelCardDescription>
                </PixelCardHeader>
                <PixelCardFooter>
                  <PixelButton className="w-full" size="sm">
                    Browse {category} <ArrowRight className="ml-2 h-3 w-3" aria-hidden="true" />
                  </PixelButton>
                </PixelCardFooter>
              </PixelCard>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center" aria-labelledby="cta-heading">
        <PixelCard className="max-w-3xl mx-auto">
          <PixelCardHeader>
            <PixelCardTitle id="cta-heading" className="text-2xl">Ready to Get Started?</PixelCardTitle>
            <PixelCardDescription className="text-base">
              Start building retro web experiences with Pixel UI today
            </PixelCardDescription>
          </PixelCardHeader>
          <PixelCardContent>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/docs/components/pixel-button" aria-label="Browse all Pixel UI components">
                <PixelButton size="lg">
                  Browse Components
                </PixelButton>
              </Link>
              <Link href="/shop" aria-label="Browse all Pixel UI components">
                <PixelButton size="lg">
                  Example Shop
                </PixelButton>
              </Link>
              <a href="https://github.com/Team-Parashuram/Pixel-art-8-bit" target="_blank" rel="noopener noreferrer" aria-label="View Pixel UI source code on GitHub">
                <PixelButton size="lg" variant="ghost">
                  View on GitHub
                </PixelButton>
              </a>
            </div>
          </PixelCardContent>
        </PixelCard>
      </section>
    </div>
  );
}
