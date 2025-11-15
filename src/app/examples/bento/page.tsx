"use client";

import Link from "next/link";
import { Home, Star, Trophy, Heart, Rocket, Code, Zap, Award, Users, Target } from "lucide-react";
import { PixelButton } from "@/components/ui/pixel/pixel-button";
import {
  PixelBentoGrid,
  PixelBentoItem,
  PixelBentoHeader,
  PixelBentoTitle,
  PixelBentoDescription,
  PixelBentoContent,
  PixelBentoIcon,
  PixelBentoFooter,
  PixelBentoPattern,
} from "@/components/ui/pixel/pixel-bento";
import { PixelCard, PixelCardContent, PixelCardDescription, PixelCardHeader, PixelCardTitle } from "@/components/ui/pixel/pixel-card";

export default function BentoExamplesPage() {
  return (
    <div className="min-h-screen bg-[#f5f5dc] dark:bg-[#000000]">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] dark:text-[#ffd700] mb-2">
              Bento Grid Examples
            </h1>
            <p className="text-lg dark:text-white/80">
              Modern grid layouts with pixel-perfect styling
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/docs/components/pixel-bento">
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
        {/* Example 1: Simple Grid */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Simple 3-Column Grid</PixelCardTitle>
                <PixelCardDescription>Basic bento grid with equal-sized items</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <div className="container mx-auto px-4">
            <PixelBentoGrid columns={3}>
              <PixelBentoItem hover="lift">
                <PixelBentoHeader>
                  <PixelBentoIcon>🎮</PixelBentoIcon>
                  <PixelBentoTitle>Gaming</PixelBentoTitle>
                  <PixelBentoDescription>Retro gaming components</PixelBentoDescription>
                </PixelBentoHeader>
              </PixelBentoItem>
              <PixelBentoItem hover="lift">
                <PixelBentoHeader>
                  <PixelBentoIcon>🎨</PixelBentoIcon>
                  <PixelBentoTitle>Design</PixelBentoTitle>
                  <PixelBentoDescription>Pixel-perfect styling</PixelBentoDescription>
                </PixelBentoHeader>
              </PixelBentoItem>
              <PixelBentoItem hover="lift">
                <PixelBentoHeader>
                  <PixelBentoIcon>⚡</PixelBentoIcon>
                  <PixelBentoTitle>Fast</PixelBentoTitle>
                  <PixelBentoDescription>Zero transitions</PixelBentoDescription>
                </PixelBentoHeader>
              </PixelBentoItem>
            </PixelBentoGrid>
          </div>
        </section>

        {/* Example 2: Featured Layout */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Featured Layout</PixelCardTitle>
                <PixelCardDescription>Large featured item with smaller cards</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <div className="container mx-auto px-4">
            <PixelBentoGrid columns={3}>
              <PixelBentoItem span={2} rowSpan={2} variant="primary" hover="lift">
                <PixelBentoPattern pattern="dots" />
                <PixelBentoHeader>
                  <PixelBentoIcon>🚀</PixelBentoIcon>
                  <PixelBentoTitle>Featured Project</PixelBentoTitle>
                  <PixelBentoDescription>
                    Main showcase area with extra space
                  </PixelBentoDescription>
                </PixelBentoHeader>
                <PixelBentoContent>
                  <p className="mt-4">Large content area for featured items, projects, or announcements. This spans 2 columns and 2 rows.</p>
                </PixelBentoContent>
                <PixelBentoFooter>
                  <button className="text-sm font-bold hover:underline">Learn More →</button>
                </PixelBentoFooter>
              </PixelBentoItem>
              <PixelBentoItem variant="secondary" hover="glow">
                <PixelBentoIcon>📊</PixelBentoIcon>
                <PixelBentoTitle>Stats</PixelBentoTitle>
                <div className="text-3xl font-bold mt-4">1,234</div>
              </PixelBentoItem>
              <PixelBentoItem variant="dark" hover="glow">
                <PixelBentoIcon>💎</PixelBentoIcon>
                <PixelBentoTitle>Premium</PixelBentoTitle>
                <div className="text-3xl font-bold mt-4">99%</div>
              </PixelBentoItem>
            </PixelBentoGrid>
          </div>
        </section>

        {/* Example 3: Pattern Backgrounds */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Pattern Backgrounds</PixelCardTitle>
                <PixelCardDescription>Items with decorative patterns</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <div className="container mx-auto px-4">
            <PixelBentoGrid columns={2}>
              <PixelBentoItem variant="gradient" hover="lift">
                <PixelBentoPattern pattern="dots" />
                <PixelBentoHeader>
                  <PixelBentoTitle>Dots Pattern</PixelBentoTitle>
                  <PixelBentoDescription>Subtle dot background</PixelBentoDescription>
                </PixelBentoHeader>
              </PixelBentoItem>
              <PixelBentoItem variant="dark" hover="lift">
                <PixelBentoPattern pattern="grid" />
                <PixelBentoHeader>
                  <PixelBentoTitle>Grid Pattern</PixelBentoTitle>
                  <PixelBentoDescription>Grid line background</PixelBentoDescription>
                </PixelBentoHeader>
              </PixelBentoItem>
              <PixelBentoItem variant="primary" hover="lift">
                <PixelBentoPattern pattern="checkerboard" />
                <PixelBentoHeader>
                  <PixelBentoTitle>Checkerboard</PixelBentoTitle>
                  <PixelBentoDescription>Classic checkerboard</PixelBentoDescription>
                </PixelBentoHeader>
              </PixelBentoItem>
              <PixelBentoItem variant="secondary" hover="lift">
                <PixelBentoPattern pattern="scanlines" />
                <PixelBentoHeader>
                  <PixelBentoTitle>Scanlines</PixelBentoTitle>
                  <PixelBentoDescription>Retro scanline effect</PixelBentoDescription>
                </PixelBentoHeader>
              </PixelBentoItem>
            </PixelBentoGrid>
          </div>
        </section>

        {/* Example 4: Dashboard Layout */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Dashboard Layout</PixelCardTitle>
                <PixelCardDescription>Complex dashboard-style grid with stats</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <div className="container mx-auto px-4">
            <PixelBentoGrid columns={4}>
              <PixelBentoItem span={2} variant="primary" hover="glow">
                <PixelBentoHeader>
                  <PixelBentoIcon>📈</PixelBentoIcon>
                  <PixelBentoTitle>Analytics</PixelBentoTitle>
                  <PixelBentoDescription>Real-time data</PixelBentoDescription>
                </PixelBentoHeader>
                <PixelBentoContent>
                  <div className="text-4xl font-bold mt-4">1,234</div>
                  <div className="text-sm mt-2 opacity-80">Active Users</div>
                </PixelBentoContent>
              </PixelBentoItem>
              <PixelBentoItem variant="secondary" hover="lift">
                <PixelBentoIcon>⭐</PixelBentoIcon>
                <PixelBentoTitle>Rating</PixelBentoTitle>
                <div className="text-3xl font-bold mt-4">4.9</div>
              </PixelBentoItem>
              <PixelBentoItem variant="dark" hover="lift">
                <PixelBentoIcon>🔥</PixelBentoIcon>
                <PixelBentoTitle>Streak</PixelBentoTitle>
                <div className="text-3xl font-bold mt-4">42</div>
              </PixelBentoItem>
              <PixelBentoItem hover="lift">
                <PixelBentoIcon><Users className="h-8 w-8" /></PixelBentoIcon>
                <PixelBentoTitle>Users</PixelBentoTitle>
                <div className="text-2xl font-bold mt-4">10K+</div>
              </PixelBentoItem>
              <PixelBentoItem hover="lift">
                <PixelBentoIcon><Target className="h-8 w-8" /></PixelBentoIcon>
                <PixelBentoTitle>Goals</PixelBentoTitle>
                <div className="text-2xl font-bold mt-4">95%</div>
              </PixelBentoItem>
              <PixelBentoItem hover="lift">
                <PixelBentoIcon><Zap className="h-8 w-8" /></PixelBentoIcon>
                <PixelBentoTitle>Speed</PixelBentoTitle>
                <div className="text-2xl font-bold mt-4">Fast</div>
              </PixelBentoItem>
              <PixelBentoItem hover="lift">
                <PixelBentoIcon><Award className="h-8 w-8" /></PixelBentoIcon>
                <PixelBentoTitle>Awards</PixelBentoTitle>
                <div className="text-2xl font-bold mt-4">12</div>
              </PixelBentoItem>
            </PixelBentoGrid>
          </div>
        </section>

        {/* Example 5: Portfolio Grid */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Portfolio Grid</PixelCardTitle>
                <PixelCardDescription>Showcase projects with varying spans</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <div className="container mx-auto px-4">
            <PixelBentoGrid columns={3}>
              <PixelBentoItem span={2} variant="gradient" hover="lift">
                <PixelBentoPattern pattern="dots" />
                <PixelBentoHeader>
                  <PixelBentoIcon><Rocket className="h-10 w-10" /></PixelBentoIcon>
                  <PixelBentoTitle>Project Alpha</PixelBentoTitle>
                  <PixelBentoDescription>Featured project showcase</PixelBentoDescription>
                </PixelBentoHeader>
                <PixelBentoContent>
                  <p className="text-sm mt-4">A revolutionary approach to retro design in modern web applications.</p>
                </PixelBentoContent>
              </PixelBentoItem>
              <PixelBentoItem variant="primary" hover="lift">
                <PixelBentoIcon><Code className="h-10 w-10" /></PixelBentoIcon>
                <PixelBentoTitle>Project Beta</PixelBentoTitle>
              </PixelBentoItem>
              <PixelBentoItem variant="secondary" hover="lift">
                <PixelBentoIcon><Star className="h-10 w-10" /></PixelBentoIcon>
                <PixelBentoTitle>Project Gamma</PixelBentoTitle>
              </PixelBentoItem>
              <PixelBentoItem span={2} variant="dark" hover="lift">
                <PixelBentoIcon><Trophy className="h-10 w-10" /></PixelBentoIcon>
                <PixelBentoTitle>Project Delta</PixelBentoTitle>
                <PixelBentoDescription>Award-winning design</PixelBentoDescription>
              </PixelBentoItem>
            </PixelBentoGrid>
          </div>
        </section>

        {/* Example 6: Ghost Items */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Ghost Items</PixelCardTitle>
                <PixelCardDescription>Dashed border placeholder items for coming soon features</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <div className="container mx-auto px-4">
            <PixelBentoGrid columns={3}>
              <PixelBentoItem variant="primary" hover="lift">
                <PixelBentoIcon>✅</PixelBentoIcon>
                <PixelBentoTitle>Active Feature</PixelBentoTitle>
                <PixelBentoDescription>Currently available</PixelBentoDescription>
              </PixelBentoItem>
              <PixelBentoItem variant="ghost">
                <PixelBentoIcon>🚧</PixelBentoIcon>
                <PixelBentoTitle>Coming Soon</PixelBentoTitle>
                <PixelBentoDescription>Feature in development</PixelBentoDescription>
              </PixelBentoItem>
              <PixelBentoItem variant="ghost">
                <PixelBentoIcon>💡</PixelBentoIcon>
                <PixelBentoTitle>Planned</PixelBentoTitle>
                <PixelBentoDescription>Future release</PixelBentoDescription>
              </PixelBentoItem>
              <PixelBentoItem variant="secondary" hover="lift">
                <PixelBentoIcon>🎯</PixelBentoIcon>
                <PixelBentoTitle>Beta</PixelBentoTitle>
                <PixelBentoDescription>Testing phase</PixelBentoDescription>
              </PixelBentoItem>
              <PixelBentoItem variant="ghost">
                <PixelBentoIcon>📦</PixelBentoIcon>
                <PixelBentoTitle>Backlog</PixelBentoTitle>
                <PixelBentoDescription>In queue</PixelBentoDescription>
              </PixelBentoItem>
              <PixelBentoItem variant="dark" hover="lift">
                <PixelBentoIcon>🎉</PixelBentoIcon>
                <PixelBentoTitle>Released</PixelBentoTitle>
                <PixelBentoDescription>Now available</PixelBentoDescription>
              </PixelBentoItem>
            </PixelBentoGrid>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 py-12">
        <PixelCard>
          <PixelCardContent className="text-center">
            <p className="text-sm dark:text-white/70">
              Want to see more examples? Check out the full documentation for all bento variants and customization options.
            </p>
            <div className="mt-4 flex gap-4 justify-center">
              <Link href="/docs/components/pixel-bento">
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
