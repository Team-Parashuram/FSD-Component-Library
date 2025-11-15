"use client";

import Link from "next/link";
import { Home, ArrowRight, Github, Twitter, Mail } from "lucide-react";
import { PixelButton } from "@/components/ui/pixel/pixel-button";
import {
  PixelCta,
  PixelCtaContent,
  PixelCtaTitle,
  PixelCtaDescription,
  PixelCtaActions,
  PixelCtaPattern,
  PixelCtaBadge,
  PixelCtaHighlight,
} from "@/components/ui/pixel/pixel-cta";
import { PixelCard, PixelCardContent, PixelCardDescription, PixelCardHeader, PixelCardTitle } from "@/components/ui/pixel/pixel-card";
import { PixelInput } from "@/components/ui/pixel/pixel-input";

export default function CtaExamplesPage() {
  return (
    <div className="min-h-screen bg-[#f5f5dc] dark:bg-[#000000]">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] dark:text-[#ffd700] mb-2">
              CTA Section Examples
            </h1>
            <p className="text-lg dark:text-white/80">
              Call-to-action sections for conversions
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/docs/components/pixel-cta">
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
        {/* Example 1: Basic CTA */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Basic Call-to-Action</PixelCardTitle>
                <PixelCardDescription>Simple CTA with title, description, and buttons</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelCta variant="primary" size="md">
            <PixelCtaContent>
              <PixelCtaTitle>Ready to Get Started?</PixelCtaTitle>
              <PixelCtaDescription>
                Join thousands of developers building pixel-perfect applications with our component library
              </PixelCtaDescription>
              <PixelCtaActions>
                <PixelButton size="lg" variant="default">
                  Get Started Free
                </PixelButton>
                <PixelButton size="lg" variant="ghost">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </PixelButton>
              </PixelCtaActions>
            </PixelCtaContent>
          </PixelCta>
        </section>

        {/* Example 2: With Pattern Background */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>CTA with Pattern & Badge</PixelCardTitle>
                <PixelCardDescription>Add visual interest with patterns and badges</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelCta variant="success" size="lg">
            <PixelCtaPattern pattern="dots" />
            <PixelCtaContent>
              <PixelCtaBadge>✨ Limited Time Offer</PixelCtaBadge>
              <PixelCtaTitle>Build Something Amazing</PixelCtaTitle>
              <PixelCtaDescription>
                Create stunning retro interfaces with our comprehensive collection of pixel-perfect components. 
                No credit card required to start.
              </PixelCtaDescription>
              <PixelCtaActions>
                <PixelButton size="lg" variant="default">
                  Start Free Trial
                </PixelButton>
                <PixelButton size="lg" variant="ghost">
                  View Pricing
                </PixelButton>
              </PixelCtaActions>
            </PixelCtaContent>
          </PixelCta>
        </section>

        {/* Example 3: Dark CTA */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Dark Theme CTA</PixelCardTitle>
                <PixelCardDescription>Perfect for dark sections or full-page CTAs</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelCta variant="purple" size="md">
            <PixelCtaPattern pattern="grid" />
            <PixelCtaContent>
              <PixelCtaTitle>Join the Community</PixelCtaTitle>
              <PixelCtaDescription>
                Connect with <PixelCtaHighlight>1000+</PixelCtaHighlight> developers, share your creations, and get help from the community
              </PixelCtaDescription>
              <PixelCtaActions>
                <PixelButton variant="default" size="lg">
                  <Github className="mr-2 h-5 w-5" />
                  Join Discord
                </PixelButton>
                <PixelButton variant="ghost" size="lg">
                  View GitHub
                </PixelButton>
              </PixelCtaActions>
            </PixelCtaContent>
          </PixelCta>
        </section>

        {/* Example 4: Left Aligned */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Left-Aligned CTA</PixelCardTitle>
                <PixelCardDescription>For more editorial or blog-style layouts</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelCta variant="secondary" size="md" align="left">
            <PixelCtaContent>
              <PixelCtaBadge>🎮 New Release</PixelCtaBadge>
              <PixelCtaTitle>Version 2.0 is Here</PixelCtaTitle>
              <PixelCtaDescription>
                Check out the latest features and improvements in our biggest update yet. 
                More components, better performance, and enhanced customization options.
              </PixelCtaDescription>
              <PixelCtaActions className="justify-start">
                <PixelButton size="lg">
                  What's New
                </PixelButton>
                <PixelButton variant="ghost" size="lg">
                  Documentation
                </PixelButton>
              </PixelCtaActions>
            </PixelCtaContent>
          </PixelCta>
        </section>

        {/* Example 5: Newsletter Signup */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Newsletter Signup</PixelCardTitle>
                <PixelCardDescription>Compact CTA with inline input form</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelCta variant="default" size="sm" align="center">
            <PixelCtaContent>
              <PixelCtaTitle>Stay in the Loop</PixelCtaTitle>
              <PixelCtaDescription>
                Get weekly updates, exclusive content, and early access to new features
              </PixelCtaDescription>
              <PixelCtaActions>
                <PixelInput 
                  type="email" 
                  placeholder="your@email.com"
                  className="max-w-xs"
                />
                <PixelButton>
                  Subscribe
                </PixelButton>
              </PixelCtaActions>
            </PixelCtaContent>
          </PixelCta>
        </section>

        {/* Example 6: Large Hero CTA */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Extra Large Hero CTA</PixelCardTitle>
                <PixelCardDescription>Perfect for landing pages and hero sections</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelCta variant="accent" size="xl">
            <PixelCtaPattern pattern="checkerboard" />
            <PixelCtaContent>
              <PixelCtaBadge>🚀 Open Source</PixelCtaBadge>
              <PixelCtaTitle>Pixel Perfect Design</PixelCtaTitle>
              <PixelCtaDescription>
                A complete component library for building <PixelCtaHighlight>retro-inspired</PixelCtaHighlight> web applications. 
                Free and open source forever.
              </PixelCtaDescription>
              <PixelCtaActions>
                <PixelButton size="lg" variant="default">
                  Get Started
                </PixelButton>
                <PixelButton size="lg" variant="ghost">
                  <Github className="mr-2 h-5 w-5" />
                  Star on GitHub
                </PixelButton>
              </PixelCtaActions>
            </PixelCtaContent>
          </PixelCta>
        </section>

        {/* Example 7: Social CTA */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Social Media CTA</PixelCardTitle>
                <PixelCardDescription>Encourage social engagement</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelCta variant="gradient" size="md">
            <PixelCtaPattern pattern="scanlines" />
            <PixelCtaContent>
              <PixelCtaTitle>Follow Us</PixelCtaTitle>
              <PixelCtaDescription>
                Stay connected and never miss an update
              </PixelCtaDescription>
              <PixelCtaActions>
                <PixelButton size="lg" variant="default">
                  <Twitter className="mr-2 h-5 w-5" />
                  Twitter
                </PixelButton>
                <PixelButton size="lg" variant="default">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </PixelButton>
                <PixelButton size="lg" variant="default">
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </PixelButton>
              </PixelCtaActions>
            </PixelCtaContent>
          </PixelCta>
        </section>

        {/* Example 8: Minimal CTA */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Minimal CTA</PixelCardTitle>
                <PixelCardDescription>Clean and simple design</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <PixelCta variant="default" size="sm">
            <PixelCtaContent>
              <PixelCtaTitle>Questions?</PixelCtaTitle>
              <PixelCtaDescription>
                We're here to help. Get in touch with our support team.
              </PixelCtaDescription>
              <PixelCtaActions>
                <PixelButton>
                  Contact Support
                </PixelButton>
              </PixelCtaActions>
            </PixelCtaContent>
          </PixelCta>
        </section>

        {/* Example 9: Color Variants Showcase */}
        <section>
          <div className="container mx-auto px-4 mb-4">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>All Color Variants</PixelCardTitle>
                <PixelCardDescription>Explore the full color palette - now less orange-heavy!</PixelCardDescription>
              </PixelCardHeader>
            </PixelCard>
          </div>
          
          <div className="space-y-8">
            <PixelCta variant="primary" size="sm">
              <PixelCtaContent>
                <PixelCtaTitle>Blue Primary</PixelCtaTitle>
                <PixelCtaDescription>
                  Modern blue color for professional look
                </PixelCtaDescription>
                <PixelCtaActions>
                  <PixelButton size="lg">Try Blue</PixelButton>
                </PixelCtaActions>
              </PixelCtaContent>
            </PixelCta>

            <PixelCta variant="success" size="sm">
              <PixelCtaContent>
                <PixelCtaTitle>Success Green</PixelCtaTitle>
                <PixelCtaDescription>
                  Perfect for positive actions and confirmations
                </PixelCtaDescription>
                <PixelCtaActions>
                  <PixelButton size="lg">Go Green</PixelButton>
                </PixelCtaActions>
              </PixelCtaContent>
            </PixelCta>

            <PixelCta variant="accent" size="sm">
              <PixelCtaContent>
                <PixelCtaTitle>Pink Accent</PixelCtaTitle>
                <PixelCtaDescription>
                  Eye-catching and playful for creative projects
                </PixelCtaDescription>
                <PixelCtaActions>
                  <PixelButton size="lg">Get Creative</PixelButton>
                </PixelCtaActions>
              </PixelCtaContent>
            </PixelCta>

            <PixelCta variant="purple" size="sm">
              <PixelCtaContent>
                <PixelCtaTitle>Royal Purple</PixelCtaTitle>
                <PixelCtaDescription>
                  Elegant and premium feel for special offers
                </PixelCtaDescription>
                <PixelCtaActions>
                  <PixelButton size="lg">Explore Premium</PixelButton>
                </PixelCtaActions>
              </PixelCtaContent>
            </PixelCta>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 py-12">
        <PixelCard>
          <PixelCardContent className="text-center">
            <p className="text-sm dark:text-white/70">
              Need more inspiration? Check out the full documentation for all CTA variants and customization options.
            </p>
            <div className="mt-4 flex gap-4 justify-center">
              <Link href="/docs/components/pixel-cta">
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
