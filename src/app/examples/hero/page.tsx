"use client";

import Link from "next/link";
import { Home, Sparkles, Zap, Award, ArrowRight } from "lucide-react";
import { PixelButton } from "@/components/ui/pixel/pixel-button";
import {
  PixelHero,
  PixelHeroContent,
  PixelHeroTitle,
  PixelHeroSubtitle,
  PixelHeroDescription,
  PixelHeroActions,
  PixelHeroBadge,
  PixelHeroImage,
  PixelHeroGrid,
  PixelHeroFeature,
  PixelHeroPattern,
} from "@/components/ui/pixel/pixel-hero";
import { PixelCard, PixelCardContent, PixelCardDescription, PixelCardHeader, PixelCardTitle } from "@/components/ui/pixel/pixel-card";
import { PixelBadge } from "@/components/ui/pixel/pixel-badge";

export default function HeroExamplesPage() {
  return (
    <div className="min-h-screen bg-[#f5f5dc] dark:bg-[#000000]">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] dark:text-[#ffd700] mb-2">
              Hero Examples
            </h1>
            <p className="text-lg dark:text-white/80">
              Explore different hero section layouts
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/docs/components/pixel-hero">
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
        {/* Example 1: Simple Hero */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Simple Hero</PixelCardTitle>
                <PixelCardDescription>Basic hero with title, description, and actions</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelHero variant="default" size="lg">
            <PixelHeroContent>
              <PixelHeroTitle>Pixel UI</PixelHeroTitle>
              <PixelHeroDescription>
                8-bit retro components for modern web development
              </PixelHeroDescription>
              <PixelHeroActions>
                <PixelButton size="lg">Get Started</PixelButton>
                <PixelButton size="lg" variant="ghost">Documentation</PixelButton>
              </PixelHeroActions>
            </PixelHeroContent>
          </PixelHero>
        </section>

        {/* Example 2: Hero with Badge */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Hero with Badge</PixelCardTitle>
                <PixelCardDescription>Announcement badge for new releases or features</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelHero variant="primary" size="lg">
            <PixelHeroContent>
              <PixelHeroBadge>🎮 New Release v1.0</PixelHeroBadge>
              <PixelHeroTitle size="xl">Level Up Your UI</PixelHeroTitle>
              <PixelHeroSubtitle size="lg">
                Nostalgic Design, Modern Code
              </PixelHeroSubtitle>
              <PixelHeroDescription>
                Build beautiful retro interfaces with our comprehensive component library
              </PixelHeroDescription>
              <PixelHeroActions>
                <PixelButton size="lg">Start Building</PixelButton>
                <PixelButton size="lg" variant="ghost">View Examples</PixelButton>
              </PixelHeroActions>
            </PixelHeroContent>
          </PixelHero>
        </section>

        {/* Example 3: Gradient Hero */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Gradient Hero</PixelCardTitle>
                <PixelCardDescription>Eye-catching gradient background variant</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelHero variant="gradient" size="lg">
            <PixelHeroContent>
              <PixelHeroBadge>⭐ Featured</PixelHeroBadge>
              <PixelHeroTitle size="xl">Build Retro Experiences</PixelHeroTitle>
              <PixelHeroSubtitle>Complete Component Library</PixelHeroSubtitle>
              <PixelHeroDescription>
                50+ pixel-perfect components ready to use in your next project
              </PixelHeroDescription>
              <PixelHeroActions>
                <PixelButton size="lg">Explore Components</PixelButton>
                <PixelButton size="lg" variant="secondary">View Pricing</PixelButton>
              </PixelHeroActions>
            </PixelHeroContent>
          </PixelHero>
        </section>

        {/* Example 4: Dark Hero with Pattern */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Dark Hero with Pattern</PixelCardTitle>
                <PixelCardDescription>Dark background with decorative dot pattern</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelHero variant="dark" size="lg" className="relative">
            <PixelHeroPattern pattern="dots" />
            <PixelHeroContent>
              <PixelHeroTitle>Pixel Perfect Design</PixelHeroTitle>
              <PixelHeroSubtitle>With Background Patterns</PixelHeroSubtitle>
              <PixelHeroDescription>
                Choose from dots, grid, checkerboard, or scanlines patterns
              </PixelHeroDescription>
              <PixelHeroActions>
                <PixelButton size="lg">Get Started</PixelButton>
                <PixelButton size="lg" variant="secondary">Learn More</PixelButton>
              </PixelHeroActions>
            </PixelHeroContent>
          </PixelHero>
        </section>

        {/* Example 5: Split Hero with Grid */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Split Hero with Image</PixelCardTitle>
                <PixelCardDescription>Two-column layout with content and image</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelHero variant="default" size="lg" align="left">
            <PixelHeroGrid>
              <PixelHeroContent className="mx-0">
                <PixelHeroBadge>⚡ Fast</PixelHeroBadge>
                <PixelHeroTitle size="lg">Next-Gen Components</PixelHeroTitle>
                <PixelHeroDescription>
                  Build faster with our pixel-art component library. Zero transitions, instant state changes.
                </PixelHeroDescription>
                <PixelHeroActions className="justify-start">
                  <PixelButton size="lg">Get Started</PixelButton>
                  <PixelButton size="lg" variant="ghost">Learn More</PixelButton>
                </PixelHeroActions>
              </PixelHeroContent>
              <PixelHeroImage>
                <div className="aspect-video bg-gradient-to-br from-[#ff8c00] to-[#ffd700] flex items-center justify-center">
                  <span className="text-6xl">🎮</span>
                </div>
              </PixelHeroImage>
            </PixelHeroGrid>
          </PixelHero>
        </section>

        {/* Example 6: Hero with Features */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Hero with Features</PixelCardTitle>
                <PixelCardDescription>Highlight key features in the hero section</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelHero variant="secondary" size="lg">
            <PixelHeroContent>
              <PixelHeroTitle>Why Choose Pixel UI?</PixelHeroTitle>
              <PixelHeroDescription>
                Everything you need for retro web design in one place
              </PixelHeroDescription>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <PixelHeroFeature>
                  <span className="text-2xl">🎮</span>
                  <div>
                    <h3 className="font-bold text-sm uppercase">Retro Design</h3>
                    <p className="text-xs opacity-80">Authentic 8-bit styling</p>
                  </div>
                </PixelHeroFeature>
                <PixelHeroFeature>
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h3 className="font-bold text-sm uppercase">Fast</h3>
                    <p className="text-xs opacity-80">Zero transitions</p>
                  </div>
                </PixelHeroFeature>
                <PixelHeroFeature>
                  <span className="text-2xl">♿</span>
                  <div>
                    <h3 className="font-bold text-sm uppercase">Accessible</h3>
                    <p className="text-xs opacity-80">ARIA compliant</p>
                  </div>
                </PixelHeroFeature>
              </div>
              <PixelHeroActions className="mt-8">
                <PixelButton size="lg">Explore Features</PixelButton>
              </PixelHeroActions>
            </PixelHeroContent>
          </PixelHero>
        </section>

        {/* Example 7: Full Screen Hero */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Full Screen Hero</PixelCardTitle>
                <PixelCardDescription>Takes full viewport height for maximum impact</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelHero variant="gradient" size="full" className="relative">
            <PixelHeroPattern pattern="grid" className="opacity-30" />
            <PixelHeroContent>
              <PixelHeroBadge>🚀 Launch Ready</PixelHeroBadge>
              <PixelHeroTitle size="xl">Ready to Build?</PixelHeroTitle>
              <PixelHeroSubtitle size="lg">
                Start Your Retro Journey Today
              </PixelHeroSubtitle>
              <PixelHeroDescription>
                Get access to 50+ components, complete documentation, and examples to kickstart your project
              </PixelHeroDescription>
              <PixelHeroActions>
                <PixelButton size="lg">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </PixelButton>
                <PixelButton size="lg" variant="secondary">
                  View Docs
                </PixelButton>
              </PixelHeroActions>
            </PixelHeroContent>
          </PixelHero>
        </section>

        {/* Example 8: Compact Hero */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Compact Hero</PixelCardTitle>
                <PixelCardDescription>Smaller size variant for secondary pages</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelHero variant="default" size="sm">
            <PixelHeroContent>
              <PixelHeroTitle size="md">Documentation</PixelHeroTitle>
              <PixelHeroDescription>
                Everything you need to know about Pixel UI
              </PixelHeroDescription>
            </PixelHeroContent>
          </PixelHero>
        </section>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 py-12">
        <PixelCard>
          <PixelCardContent className="text-center">
            <p className="text-sm dark:text-white/70">
              Want to see more examples? Check out the full documentation for all hero variants and customization options.
            </p>
            <div className="mt-4 flex gap-4 justify-center">
              <Link href="/docs/components/pixel-hero">
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
