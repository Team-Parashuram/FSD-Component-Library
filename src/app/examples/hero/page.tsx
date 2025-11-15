"use client";

import Link from "next/link";
import { Home, Sparkles, Zap, Award, ArrowRight, Gamepad2, Star, Trophy, Users, Rocket, Code, Heart } from "lucide-react";
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
  PixelHeroFloatingElement,
  PixelHeroCornerDecor,
  PixelHeroStats,
  PixelHeroStat,
  PixelHeroGlowText,
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
        {/* Example 1: Arcade Style Hero */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Arcade Style Hero</PixelCardTitle>
                <PixelCardDescription>Retro arcade aesthetic with glowing neon effects and floating elements</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelHero variant="arcade" size="lg" className="relative">
            <PixelHeroPattern pattern="scanlines" />
            <PixelHeroCornerDecor position="top-left" />
            <PixelHeroCornerDecor position="top-right" />
            <PixelHeroCornerDecor position="bottom-left" />
            <PixelHeroCornerDecor position="bottom-right" />
            
            {/* Floating game elements */}
            <PixelHeroFloatingElement className="top-20 left-10 text-6xl" delay={0}>
              🎮
            </PixelHeroFloatingElement>
            <PixelHeroFloatingElement className="top-32 right-20 text-5xl" delay={1}>
              ⭐
            </PixelHeroFloatingElement>
            <PixelHeroFloatingElement className="bottom-40 left-1/4 text-4xl" delay={2}>
              👾
            </PixelHeroFloatingElement>
            
            <PixelHeroContent>
              <PixelHeroBadge variant="neon">🕹️ INSERT COIN</PixelHeroBadge>
              <PixelHeroTitle size="xl" className="mt-4">
                <PixelHeroGlowText color="#ffd700">LEVEL UP</PixelHeroGlowText>
              </PixelHeroTitle>
              <PixelHeroSubtitle size="lg" className="text-[#ffd700]">
                YOUR DESIGN GAME
              </PixelHeroSubtitle>
              <PixelHeroDescription className="text-white/80 mt-4">
                Build legendary web experiences with pixel-perfect 8-bit components.
                High score guaranteed! 🏆
              </PixelHeroDescription>
              <PixelHeroStats className="max-w-3xl mx-auto">
                <PixelHeroStat className="text-[#ffd700]">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-xs uppercase">Components</div>
                </PixelHeroStat>
                <PixelHeroStat className="text-[#ffd700]">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-xs uppercase">Retro</div>
                </PixelHeroStat>
                <PixelHeroStat className="text-[#ffd700]">
                  <div className="text-3xl font-bold">0ms</div>
                  <div className="text-xs uppercase">Transitions</div>
                </PixelHeroStat>
                <PixelHeroStat className="text-[#ffd700]">
                  <div className="text-3xl font-bold">∞</div>
                  <div className="text-xs uppercase">Fun</div>
                </PixelHeroStat>
              </PixelHeroStats>
              <PixelHeroActions className="mt-8">
                <PixelButton size="lg" className="bg-[#ffd700] hover:bg-[#ffe44d] text-black">
                  <Gamepad2 className="mr-2 h-5 w-5" />
                  START GAME
                </PixelButton>
                <PixelButton size="lg" variant="ghost" className="text-white border-white hover:bg-white/10">
                  VIEW HIGH SCORES
                </PixelButton>
              </PixelHeroActions>
            </PixelHeroContent>
          </PixelHero>
        </section>

        {/* Example 2: Product Launch Hero */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Product Launch Hero</PixelCardTitle>
                <PixelCardDescription>Bold primary colors with animated badge and strong CTA</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelHero variant="primary" size="xl" className="relative overflow-hidden">
            <PixelHeroPattern pattern="diagonal" />
            
            {/* Animated elements */}
            <PixelHeroFloatingElement className="top-10 right-10 text-7xl" delay={0.5}>
              🚀
            </PixelHeroFloatingElement>
            <PixelHeroFloatingElement className="bottom-20 left-10 text-6xl" delay={1.5}>
              ✨
            </PixelHeroFloatingElement>
            
            <PixelHeroContent>
              <PixelHeroBadge variant="pulse" className="mb-4">
                <Star className="w-4 h-4" />
                NEW RELEASE v2.0
              </PixelHeroBadge>
              <PixelHeroTitle size="xl">
                THE FUTURE OF
                <br />
                <span className="text-[#ffd700]">RETRO DESIGN</span>
              </PixelHeroTitle>
              <PixelHeroSubtitle size="lg" className="mt-4">
                50+ Components • 100% Pixel Perfect • Zero Compromises
              </PixelHeroSubtitle>
              <PixelHeroDescription className="mt-6 text-lg max-w-2xl">
                The most comprehensive 8-bit component library ever created. 
                Built for developers who refuse to sacrifice style for functionality.
              </PixelHeroDescription>
              
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-10">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#ffd700]">50+</div>
                  <div className="text-sm mt-2 uppercase">Components</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#ffd700]">10K+</div>
                  <div className="text-sm mt-2 uppercase">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#ffd700]">100%</div>
                  <div className="text-sm mt-2 uppercase">Satisfaction</div>
                </div>
              </div>
              
              <PixelHeroActions className="mt-10">
                <PixelButton size="lg" variant="secondary" className="text-lg px-8">
                  <Rocket className="mr-2 h-5 w-5" />
                  GET STARTED FREE
                </PixelButton>
                <PixelButton size="lg" variant="ghost" className="text-lg px-8 text-white border-white">
                  LIVE DEMO <ArrowRight className="ml-2 h-5 w-5" />
                </PixelButton>
              </PixelHeroActions>
            </PixelHeroContent>
          </PixelHero>
        </section>

        {/* Example 3: Ocean Wave Hero */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Ocean Wave Hero</PixelCardTitle>
                <PixelCardDescription>Gradient background with flowing wave pattern</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelHero variant="gradient" size="xl" className="relative overflow-hidden">
            <PixelHeroPattern pattern="waves" animate />
            
            {/* Floating decorative elements */}
            <PixelHeroFloatingElement className="top-20 right-20 text-6xl" delay={0}>
              💎
            </PixelHeroFloatingElement>
            <PixelHeroFloatingElement className="top-40 left-20 text-5xl" delay={1}>
              ✨
            </PixelHeroFloatingElement>
            <PixelHeroFloatingElement className="bottom-32 right-40 text-5xl" delay={2}>
              🌟
            </PixelHeroFloatingElement>
            
            <PixelHeroCornerDecor position="top-right" />
            <PixelHeroCornerDecor position="bottom-left" />
            
            <PixelHeroContent>
              <PixelHeroBadge variant="primary" className="mb-4">
                ✨ PREMIUM EXPERIENCE
              </PixelHeroBadge>
              <PixelHeroTitle size="xl">
                <PixelHeroGlowText color="#00ff88">
                  DIVE INTO THE
                </PixelHeroGlowText>
                <br />
                PIXEL OCEAN
              </PixelHeroTitle>
              <PixelHeroSubtitle size="lg" className="mt-6 max-w-3xl">
                Where waves of creativity meet shores of innovation
              </PixelHeroSubtitle>
              <PixelHeroDescription className="mt-6 text-lg max-w-2xl leading-relaxed">
                Immerse yourself in a sea of possibilities. Our premium components 
                flow seamlessly together, creating experiences that ripple across your entire application.
              </PixelHeroDescription>
              
              <PixelHeroStats className="mt-12 max-w-3xl">
                <PixelHeroStat>
                  <div className="text-4xl mb-2">👥</div>
                  <div className="text-3xl font-bold">25K+</div>
                  <div className="text-xs uppercase mt-1">Active Users</div>
                </PixelHeroStat>
                <PixelHeroStat>
                  <div className="text-4xl mb-2">🎨</div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-xs uppercase mt-1">Components</div>
                </PixelHeroStat>
                <PixelHeroStat>
                  <div className="text-4xl mb-2">⭐</div>
                  <div className="text-3xl font-bold">99%</div>
                  <div className="text-xs uppercase mt-1">Satisfaction</div>
                </PixelHeroStat>
                <PixelHeroStat>
                  <div className="text-4xl mb-2">💬</div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-xs uppercase mt-1">Support</div>
                </PixelHeroStat>
              </PixelHeroStats>
              
              <PixelHeroActions className="mt-10">
                <PixelButton size="lg" className="bg-[#00ff88] text-black hover:bg-[#00dd77] border-4 border-black">
                  <Code className="mr-2 h-5 w-5" />
                  Explore Components
                </PixelButton>
                <PixelButton size="lg" variant="ghost" className="border-white text-white">
                  View Pricing
                </PixelButton>
              </PixelHeroActions>
            </PixelHeroContent>
          </PixelHero>
        </section>

        {/* Example 4: Cyberpunk Neon Hero */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Cyberpunk Neon Hero</PixelCardTitle>
                <PixelCardDescription>Dark theme with electric green neon accents</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelHero variant="neon" size="xl" className="relative overflow-hidden">
            <PixelHeroPattern pattern="grid" />
            <PixelHeroPattern pattern="scanlines" animate />
            
            {/* Corner decorations */}
            <PixelHeroCornerDecor position="top-left" className="text-[#00ff88]" />
            <PixelHeroCornerDecor position="top-right" className="text-[#00ff88]" />
            <PixelHeroCornerDecor position="bottom-left" className="text-[#00ff88]" />
            <PixelHeroCornerDecor position="bottom-right" className="text-[#00ff88]" />
            
            {/* Floating cyber elements */}
            <PixelHeroFloatingElement className="top-16 right-24 text-7xl" delay={0}>
              ⚡
            </PixelHeroFloatingElement>
            <PixelHeroFloatingElement className="bottom-20 left-24 text-6xl" delay={1.5}>
              🔋
            </PixelHeroFloatingElement>
            
            <PixelHeroContent>
              <PixelHeroBadge variant="neon" className="mb-4">
                ⚡ CYBER EDITION
              </PixelHeroBadge>
              <PixelHeroTitle size="xl">
                <PixelHeroGlowText color="#00ff88">
                  FUTURE IS NOW
                </PixelHeroGlowText>
              </PixelHeroTitle>
              <PixelHeroSubtitle size="lg" className="mt-6 text-[#00ff88]">
                &gt; INITIALIZING_CYBERPUNK_PROTOCOL.EXE
              </PixelHeroSubtitle>
              <PixelHeroDescription className="mt-6 text-lg max-w-2xl font-mono">
                <PixelHeroGlowText color="#00ff88">
                  [SYSTEM ONLINE]
                </PixelHeroGlowText>
                {" "}Welcome to the grid. Where neon pixels meet cutting-edge technology. 
                Jack in and experience the most electrifying component library in the metaverse.
              </PixelHeroDescription>
              
              <div className="mt-12 space-y-3 max-w-xl">
                <div className="flex items-center justify-between border-4 border-[#00ff88] p-4 bg-black/50">
                  <span className="font-mono text-[#00ff88]">&gt; SYSTEM_STATUS:</span>
                  <span className="font-bold text-[#00ff88]">OPERATIONAL</span>
                </div>
                <div className="flex items-center justify-between border-4 border-[#00ff88] p-4 bg-black/50">
                  <span className="font-mono text-[#00ff88]">&gt; COMPONENTS:</span>
                  <span className="font-bold text-[#00ff88]">50+ LOADED</span>
                </div>
                <div className="flex items-center justify-between border-4 border-[#00ff88] p-4 bg-black/50">
                  <span className="font-mono text-[#00ff88]">&gt; SECURITY:</span>
                  <span className="font-bold text-[#00ff88]">MAXIMUM</span>
                </div>
              </div>
              
              <PixelHeroActions className="mt-10">
                <PixelButton size="lg" className="bg-[#00ff88] text-black hover:bg-[#00dd77] border-4 border-[#00ff88]">
                  <Trophy className="mr-2 h-5 w-5" />
                  JACK IN
                </PixelButton>
                <PixelButton size="lg" variant="ghost" className="border-[#00ff88] text-[#00ff88]">
                  EXPLORE GRID
                </PixelButton>
              </PixelHeroActions>
            </PixelHeroContent>
          </PixelHero>
        </section>

        {/* Example 5: Split Layout Hero */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Split Layout Hero</PixelCardTitle>
                <PixelCardDescription>Content-image split with asymmetric design</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelHero variant="default" size="xl" align="left" className="relative overflow-hidden">
            <PixelHeroPattern pattern="checkerboard" />
            
            <PixelHeroGrid>
              <PixelHeroContent className="mx-0 relative z-10">
                <PixelHeroBadge variant="success" className="mb-4">
                  <Star className="w-4 h-4" />
                  FEATURED BUILD
                </PixelHeroBadge>
                <PixelHeroTitle size="xl">
                  BUILD
                  <br />
                  <span className="text-[#ff8c00]">LIGHTNING</span>
                  <br />
                  FAST UIs
                </PixelHeroTitle>
                <PixelHeroDescription className="mt-6 text-lg">
                  No animations. No transitions. No delays. Just instant, 
                  crisp interactions that feel like native desktop apps from the golden age of computing.
                </PixelHeroDescription>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4 border-l-4 border-[#ff8c00] pl-4">
                    <div className="text-3xl">⚡</div>
                    <div>
                      <div className="font-bold text-lg">Zero Latency</div>
                      <div className="text-sm opacity-70">Instant state changes, no waiting</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 border-l-4 border-[#ff8c00] pl-4">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <div className="font-bold text-lg">Pixel Perfect</div>
                      <div className="text-sm opacity-70">Every pixel in its right place</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 border-l-4 border-[#ff8c00] pl-4">
                    <div className="text-3xl">🚀</div>
                    <div>
                      <div className="font-bold text-lg">Production Ready</div>
                      <div className="text-sm opacity-70">Used by thousands worldwide</div>
                    </div>
                  </div>
                </div>
                
                <PixelHeroActions className="justify-start mt-10">
                  <PixelButton size="lg" className="bg-[#ff8c00] hover:bg-[#ff9f2e] text-white border-4 border-black">
                    <Rocket className="mr-2 h-5 w-5" />
                    START BUILDING
                  </PixelButton>
                  <PixelButton size="lg" variant="ghost">
                    View Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </PixelButton>
                </PixelHeroActions>
              </PixelHeroContent>
              
              <PixelHeroImage className="relative">
                <div className="aspect-square bg-gradient-to-br from-[#ff8c00] via-[#ffa500] to-[#ffd700] flex items-center justify-center border-8 border-black relative overflow-hidden">
                  <PixelHeroPattern pattern="grid" />
                  <div className="text-9xl relative z-10 animate-pulse">🎮</div>
                  <div className="absolute top-4 left-4 text-4xl">⭐</div>
                  <div className="absolute bottom-4 right-4 text-4xl">�</div>
                  <div className="absolute top-4 right-4 text-3xl">💎</div>
                  <div className="absolute bottom-4 left-4 text-3xl">🔥</div>
                </div>
              </PixelHeroImage>
            </PixelHeroGrid>
          </PixelHero>
        </section>

        {/* Example 6: Retro Feature Grid Hero */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Retro Feature Grid Hero</PixelCardTitle>
                <PixelCardDescription>Vintage aesthetic with feature showcase grid</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelHero variant="retro" size="xl" className="relative overflow-hidden">
            <PixelHeroPattern pattern="cross" />
            
            <PixelHeroCornerDecor position="top-left" className="text-[#8b4513]" />
            <PixelHeroCornerDecor position="bottom-right" className="text-[#8b4513]" />
            
            <PixelHeroContent>
              <PixelHeroBadge variant="warning" className="mb-4">
                📜 CLASSIC EDITION
              </PixelHeroBadge>
              <PixelHeroTitle size="xl" className="text-[#8b4513]">
                BACK TO BASICS
              </PixelHeroTitle>
              <PixelHeroSubtitle size="lg" className="mt-4 text-[#d2691e]">
                The Original. The Authentic. The Timeless.
              </PixelHeroSubtitle>
              <PixelHeroDescription className="mt-6 text-lg max-w-3xl">
                Remember when software came in beige boxes? When pixels were visible and proud? 
                We do. Experience computing the way it was meant to be.
              </PixelHeroDescription>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl">
                <PixelHeroFeature className="border-4 border-[#8b4513] p-6 bg-[#f5deb3]/20">
                  <span className="text-4xl mb-3 block">📼</span>
                  <div>
                    <h3 className="font-bold text-lg uppercase text-[#8b4513]">Timeless Design</h3>
                    <p className="text-sm mt-2 opacity-80">
                      Styles that never go out of fashion, just like your favorite cassette tape
                    </p>
                  </div>
                </PixelHeroFeature>
                
                <PixelHeroFeature className="border-4 border-[#8b4513] p-6 bg-[#f5deb3]/20">
                  <span className="text-4xl mb-3 block">🖥️</span>
                  <div>
                    <h3 className="font-bold text-lg uppercase text-[#8b4513]">Desktop Feel</h3>
                    <p className="text-sm mt-2 opacity-80">
                      Snappy, responsive, like your old DOS machine (but better)
                    </p>
                  </div>
                </PixelHeroFeature>
                
                <PixelHeroFeature className="border-4 border-[#8b4513] p-6 bg-[#f5deb3]/20">
                  <span className="text-4xl mb-3 block">📚</span>
                  <div>
                    <h3 className="font-bold text-lg uppercase text-[#8b4513]">Well Documented</h3>
                    <p className="text-sm mt-2 opacity-80">
                      300+ pages of docs, like those manuals you actually wanted to read
                    </p>
                  </div>
                </PixelHeroFeature>
                
                <PixelHeroFeature className="border-4 border-[#8b4513] p-6 bg-[#f5deb3]/20">
                  <span className="text-4xl mb-3 block">🎯</span>
                  <div>
                    <h3 className="font-bold text-lg uppercase text-[#8b4513]">Precision Built</h3>
                    <p className="text-sm mt-2 opacity-80">
                      Every component crafted with care, not AI-generated slop
                    </p>
                  </div>
                </PixelHeroFeature>
                
                <PixelHeroFeature className="border-4 border-[#8b4513] p-6 bg-[#f5deb3]/20">
                  <span className="text-4xl mb-3 block">♿</span>
                  <div>
                    <h3 className="font-bold text-lg uppercase text-[#8b4513]">Accessible</h3>
                    <p className="text-sm mt-2 opacity-80">
                      WCAG 2.1 AA compliant, because everyone deserves good UX
                    </p>
                  </div>
                </PixelHeroFeature>
                
                <PixelHeroFeature className="border-4 border-[#8b4513] p-6 bg-[#f5deb3]/20">
                  <span className="text-4xl mb-3 block">❤️</span>
                  <div>
                    <h3 className="font-bold text-lg uppercase text-[#8b4513]">Community</h3>
                    <p className="text-sm mt-2 opacity-80">
                      Join thousands of developers who refuse to accept boring design
                    </p>
                  </div>
                </PixelHeroFeature>
              </div>
              
              <PixelHeroActions className="mt-10">
                <PixelButton size="lg" className="bg-[#8b4513] hover:bg-[#a0522d] text-white border-4 border-[#654321]">
                  <Heart className="mr-2 h-5 w-5" />
                  JOIN THE COMMUNITY
                </PixelButton>
                <PixelButton size="lg" variant="ghost" className="border-[#8b4513] text-[#8b4513]">
                  READ THE MANUAL
                </PixelButton>
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
          
          <PixelHero variant="gradient" size="full" className="relative overflow-hidden">
            <PixelHeroPattern pattern="grid" />
            <PixelHeroPattern pattern="dots" animate />
            
            {/* Multiple floating elements for dramatic effect */}
            <PixelHeroFloatingElement className="top-10 left-10 text-7xl" delay={0}>
              🚀
            </PixelHeroFloatingElement>
            <PixelHeroFloatingElement className="top-20 right-20 text-6xl" delay={0.5}>
              ⭐
            </PixelHeroFloatingElement>
            <PixelHeroFloatingElement className="bottom-32 left-32 text-6xl" delay={1}>
              💎
            </PixelHeroFloatingElement>
            <PixelHeroFloatingElement className="bottom-20 right-32 text-7xl" delay={1.5}>
              ✨
            </PixelHeroFloatingElement>
            <PixelHeroFloatingElement className="top-1/2 left-20 text-5xl" delay={2}>
              🎮
            </PixelHeroFloatingElement>
            <PixelHeroFloatingElement className="top-1/3 right-24 text-5xl" delay={2.5}>
              🏆
            </PixelHeroFloatingElement>
            
            <PixelHeroContent className="relative z-10">
              <PixelHeroBadge variant="pulse" className="mb-6">
                <Rocket className="w-4 h-4" />
                YOUR JOURNEY STARTS HERE
              </PixelHeroBadge>
              <PixelHeroTitle size="xl">
                <PixelHeroGlowText color="#ffd700">
                  ARE YOU
                </PixelHeroGlowText>
                <br />
                <span className="text-7xl">READY?</span>
              </PixelHeroTitle>
              <PixelHeroSubtitle size="lg" className="mt-8 max-w-3xl">
                50+ Components • Complete Documentation • Lifetime Updates
              </PixelHeroSubtitle>
              <PixelHeroDescription className="mt-8 text-xl max-w-2xl leading-relaxed">
                Join thousands of developers building the web's most memorable experiences. 
                Your next legendary project starts with a single click.
              </PixelHeroDescription>
              
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 max-w-3xl">
                <div className="text-center">
                  <div className="text-6xl mb-2">🎨</div>
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm uppercase opacity-70">Components</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-2">⚡</div>
                  <div className="text-2xl font-bold">0ms</div>
                  <div className="text-sm uppercase opacity-70">Load Time</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-2">🏆</div>
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm uppercase opacity-70">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl mb-2">💎</div>
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm uppercase opacity-70">Satisfaction</div>
                </div>
              </div>
              
              <PixelHeroActions className="mt-12">
                <PixelButton size="lg" className="text-xl px-10 py-6 bg-[#ffd700] text-black hover:bg-[#ffe44d] border-4 border-black">
                  <Star className="mr-2 h-6 w-6" />
                  START BUILDING NOW
                </PixelButton>
                <PixelButton size="lg" variant="ghost" className="text-xl px-10 py-6 border-white text-white">
                  EXPLORE DOCS <ArrowRight className="ml-2 h-6 w-6" />
                </PixelButton>
              </PixelHeroActions>
              
              <div className="mt-12 text-sm opacity-60">
                ⭐ Trusted by developers at Microsoft, Google, and Amazon
              </div>
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
          
          <PixelHero variant="secondary" size="md" className="relative overflow-hidden">
            <PixelHeroPattern pattern="checkerboard" />
            
            <PixelHeroContent>
              <PixelHeroBadge variant="default" className="mb-3">
                <Code className="w-3 h-3" />
                Documentation
              </PixelHeroBadge>
              <PixelHeroTitle size="lg">Quick Start Guide</PixelHeroTitle>
              <PixelHeroDescription className="mt-3 max-w-xl">
                Get up and running in minutes. Perfect for internal pages, documentation sections, 
                and anywhere you need a clean, professional header without overwhelming the content.
              </PixelHeroDescription>
              <PixelHeroActions className="mt-6">
                <PixelButton size="md">
                  Read Docs <ArrowRight className="ml-2 h-4 w-4" />
                </PixelButton>
                <PixelButton size="md" variant="ghost">
                  View Examples
                </PixelButton>
              </PixelHeroActions>
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
