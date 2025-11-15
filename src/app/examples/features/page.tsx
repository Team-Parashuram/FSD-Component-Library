"use client";

import Link from "next/link";
import { Home, Zap, Shield, Star, Rocket, Heart } from "lucide-react";
import { PixelButton } from "@/components/ui/pixel/pixel-button";
import {
  PixelFeatures,
  PixelFeatureItem,
  PixelFeatureIcon,
  PixelFeatureTitle,
  PixelFeatureDescription,
  PixelFeatureHeader,
  PixelFeatureSectionTitle,
  PixelFeatureSectionDescription,
} from "@/components/ui/pixel/pixel-features";
import { PixelCard, PixelCardContent, PixelCardDescription, PixelCardHeader, PixelCardTitle } from "@/components/ui/pixel/pixel-card";

export default function FeaturesExamplesPage() {
  return (
    <div className="min-h-screen bg-[#f5f5dc] dark:bg-[#000000]">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] dark:text-[#ffd700] mb-2">
              Features Section Examples
            </h1>
            <p className="text-lg dark:text-white/80">
              Showcase features in responsive grid layouts
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/docs/components/pixel-features">
              <PixelButton variant="secondary">
                📖 Documentation
              </PixelButton>
            </Link>
            <Link href="/">
              <PixelButton>
                <Home className="mr-2 h-4 w-4" />
                Home
              </PixelButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className="space-y-12">
        {/* Example 1: Basic Features */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Basic 3-Column Features</PixelCardTitle>
                <PixelCardDescription>Simple features grid with icons and descriptions</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelFeatures columns={3} gap="lg">
            <PixelFeatureItem hover="lift">
              <PixelFeatureIcon>🚀</PixelFeatureIcon>
              <PixelFeatureTitle>Lightning Fast</PixelFeatureTitle>
              <PixelFeatureDescription>
                Optimized for speed with zero transitions and instant interactions
              </PixelFeatureDescription>
            </PixelFeatureItem>
            <PixelFeatureItem hover="lift">
              <PixelFeatureIcon>🎨</PixelFeatureIcon>
              <PixelFeatureTitle>Modern Design</PixelFeatureTitle>
              <PixelFeatureDescription>
                Retro 8-bit aesthetic with modern design principles
              </PixelFeatureDescription>
            </PixelFeatureItem>
            <PixelFeatureItem hover="lift">
              <PixelFeatureIcon>🔧</PixelFeatureIcon>
              <PixelFeatureTitle>Flexible</PixelFeatureTitle>
              <PixelFeatureDescription>
                Fully themeable components with variant support
              </PixelFeatureDescription>
            </PixelFeatureItem>
          </PixelFeatures>
        </section>

        {/* Example 2: With Header */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Features with Section Header</PixelCardTitle>
                <PixelCardDescription>Add context with title and description</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelFeatures columns={3} gap="lg">
            <PixelFeatureHeader>
              <PixelFeatureSectionTitle>Why Choose Pixel UI?</PixelFeatureSectionTitle>
              <PixelFeatureSectionDescription>
                Everything you need to build amazing retro-inspired applications
              </PixelFeatureSectionDescription>
            </PixelFeatureHeader>
            <PixelFeatureItem variant="primary" hover="lift">
              <PixelFeatureIcon><Zap className="h-12 w-12" /></PixelFeatureIcon>
              <PixelFeatureTitle>Blazing Fast</PixelFeatureTitle>
              <PixelFeatureDescription>
                Built with performance in mind. No unnecessary animations or transitions.
              </PixelFeatureDescription>
            </PixelFeatureItem>
            <PixelFeatureItem variant="secondary" hover="lift">
              <PixelFeatureIcon><Shield className="h-12 w-12" /></PixelFeatureIcon>
              <PixelFeatureTitle>Type Safe</PixelFeatureTitle>
              <PixelFeatureDescription>
                Built with TypeScript for maximum type safety and developer experience.
              </PixelFeatureDescription>
            </PixelFeatureItem>
            <PixelFeatureItem variant="dark" hover="glow">
              <PixelFeatureIcon><Star className="h-12 w-12" /></PixelFeatureIcon>
              <PixelFeatureTitle>Premium Quality</PixelFeatureTitle>
              <PixelFeatureDescription>
                Carefully crafted components with attention to detail.
              </PixelFeatureDescription>
            </PixelFeatureItem>
          </PixelFeatures>
        </section>

        {/* Example 3: 4-Column Layout */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>4-Column Wide Layout</PixelCardTitle>
                <PixelCardDescription>More features in a wider grid</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelFeatures columns={4} gap="md">
            <PixelFeatureItem hover="lift">
              <PixelFeatureIcon>🎮</PixelFeatureIcon>
              <PixelFeatureTitle>Gaming Ready</PixelFeatureTitle>
              <PixelFeatureDescription>
                Perfect for retro gaming interfaces
              </PixelFeatureDescription>
            </PixelFeatureItem>
            <PixelFeatureItem hover="lift">
              <PixelFeatureIcon>📱</PixelFeatureIcon>
              <PixelFeatureTitle>Responsive</PixelFeatureTitle>
              <PixelFeatureDescription>
                Works beautifully on all devices
              </PixelFeatureDescription>
            </PixelFeatureItem>
            <PixelFeatureItem hover="lift">
              <PixelFeatureIcon>🌙</PixelFeatureIcon>
              <PixelFeatureTitle>Dark Mode</PixelFeatureTitle>
              <PixelFeatureDescription>
                Built-in dark mode support
              </PixelFeatureDescription>
            </PixelFeatureItem>
            <PixelFeatureItem hover="lift">
              <PixelFeatureIcon>♿</PixelFeatureIcon>
              <PixelFeatureTitle>Accessible</PixelFeatureTitle>
              <PixelFeatureDescription>
                WCAG compliant components
              </PixelFeatureDescription>
            </PixelFeatureItem>
            <PixelFeatureItem hover="lift">
              <PixelFeatureIcon>🔒</PixelFeatureIcon>
              <PixelFeatureTitle>Secure</PixelFeatureTitle>
              <PixelFeatureDescription>
                Security best practices
              </PixelFeatureDescription>
            </PixelFeatureItem>
            <PixelFeatureItem hover="lift">
              <PixelFeatureIcon>⚡</PixelFeatureIcon>
              <PixelFeatureTitle>Lightweight</PixelFeatureTitle>
              <PixelFeatureDescription>
                Minimal bundle size
              </PixelFeatureDescription>
            </PixelFeatureItem>
            <PixelFeatureItem hover="lift">
              <PixelFeatureIcon>📦</PixelFeatureIcon>
              <PixelFeatureTitle>Modular</PixelFeatureTitle>
              <PixelFeatureDescription>
                Import only what you need
              </PixelFeatureDescription>
            </PixelFeatureItem>
            <PixelFeatureItem hover="lift">
              <PixelFeatureIcon>🎯</PixelFeatureIcon>
              <PixelFeatureTitle>Focused</PixelFeatureTitle>
              <PixelFeatureDescription>
                Purpose-built for pixel art
              </PixelFeatureDescription>
            </PixelFeatureItem>
          </PixelFeatures>
        </section>

        {/* Example 4: Dark Variant */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Dark Background Variant</PixelCardTitle>
                <PixelCardDescription>Features on dark background with glow effects</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelFeatures variant="dark" columns={3} gap="lg">
            <PixelFeatureHeader>
              <PixelFeatureSectionTitle>Premium Features</PixelFeatureSectionTitle>
              <PixelFeatureSectionDescription>
                Enterprise-grade capabilities for serious projects
              </PixelFeatureSectionDescription>
            </PixelFeatureHeader>
            <PixelFeatureItem variant="primary" hover="glow">
              <PixelFeatureIcon><Rocket className="h-12 w-12" /></PixelFeatureIcon>
              <PixelFeatureTitle>Advanced Tools</PixelFeatureTitle>
              <PixelFeatureDescription>
                Professional-grade tools for complex applications
              </PixelFeatureDescription>
            </PixelFeatureItem>
            <PixelFeatureItem hover="glow">
              <PixelFeatureIcon>🔥</PixelFeatureIcon>
              <PixelFeatureTitle>Hot Features</PixelFeatureTitle>
              <PixelFeatureDescription>
                Latest capabilities and cutting-edge technology
              </PixelFeatureDescription>
            </PixelFeatureItem>
            <PixelFeatureItem variant="gradient" hover="glow">
              <PixelFeatureIcon>✨</PixelFeatureIcon>
              <PixelFeatureTitle>Magic Touch</PixelFeatureTitle>
              <PixelFeatureDescription>
                Delightful user experiences that feel magical
              </PixelFeatureDescription>
            </PixelFeatureItem>
          </PixelFeatures>
        </section>

        {/* Example 5: 2-Column Layout */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>2-Column Layout</PixelCardTitle>
                <PixelCardDescription>Larger feature cards with more space</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelFeatures columns={2} gap="xl">
            <PixelFeatureItem variant="secondary" hover="lift">
              <PixelFeatureIcon><Heart className="h-16 w-16" /></PixelFeatureIcon>
              <PixelFeatureTitle>Made with Love</PixelFeatureTitle>
              <PixelFeatureDescription>
                Every component is carefully crafted with attention to detail and passion for great design. 
                We believe in quality over quantity and it shows in every pixel.
              </PixelFeatureDescription>
            </PixelFeatureItem>
            <PixelFeatureItem variant="primary" hover="lift">
              <PixelFeatureIcon>🎯</PixelFeatureIcon>
              <PixelFeatureTitle>Laser Focused</PixelFeatureTitle>
              <PixelFeatureDescription>
                Built specifically for retro and pixel-art aesthetics. No bloat, no unnecessary features. 
                Just what you need to create amazing nostalgic experiences.
              </PixelFeatureDescription>
            </PixelFeatureItem>
          </PixelFeatures>
        </section>

        {/* Example 6: Mixed Variants */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Mixed Variants</PixelCardTitle>
                <PixelCardDescription>Combine different variants for visual interest</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelFeatures columns={3} gap="lg" variant="primary">
            <PixelFeatureItem variant="default" hover="lift">
              <PixelFeatureIcon>🎨</PixelFeatureIcon>
              <PixelFeatureTitle>Design System</PixelFeatureTitle>
              <PixelFeatureDescription>
                Complete design system with consistent styling
              </PixelFeatureDescription>
            </PixelFeatureItem>
            <PixelFeatureItem variant="dark" hover="glow">
              <PixelFeatureIcon>💻</PixelFeatureIcon>
              <PixelFeatureTitle>Developer First</PixelFeatureTitle>
              <PixelFeatureDescription>
                Built by developers, for developers
              </PixelFeatureDescription>
            </PixelFeatureItem>
            <PixelFeatureItem variant="gradient" hover="lift">
              <PixelFeatureIcon>🌟</PixelFeatureIcon>
              <PixelFeatureTitle>Stand Out</PixelFeatureTitle>
              <PixelFeatureDescription>
                Make your project memorable and unique
              </PixelFeatureDescription>
            </PixelFeatureItem>
          </PixelFeatures>
        </section>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 py-12">
        <PixelCard>
          <PixelCardContent className="text-center">
            <p className="text-sm dark:text-white/70">
              Ready to showcase your features? Check out the full documentation for all customization options.
            </p>
            <div className="mt-4 flex gap-4 justify-center">
              <Link href="/docs/components/pixel-features">
                <PixelButton>View Documentation</PixelButton>
              </Link>
              <Link href="/docs/components">
                <PixelButton variant="ghost">All Components</PixelButton>
              </Link>
            </div>
          </PixelCardContent>
        </PixelCard>
      </div>
    </div>
  );
}
