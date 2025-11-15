"use client";

import { 
  PixelFaq,
  PixelFaqList,
  PixelFaqItem,
  PixelFaqQuestion,
  PixelFaqAnswer,
  PixelFaqHeader,
  PixelFaqSectionTitle,
  PixelFaqSectionDescription,
  PixelFaqCategory,
  PixelFaqCategoryTitle
} from "@/components/ui/pixel/pixel-faq";

export default function FaqExamples() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)]">
          FAQ Examples
        </h1>
        <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
          Frequently Asked Questions with accordion-style answers
        </p>
      </div>

      {/* Example 1: Basic FAQ */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            1. Basic FAQ Section
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Simple accordion-style questions and answers
          </p>
        </div>
        
        <PixelFaq variant="default">
          <PixelFaqHeader>
            <PixelFaqSectionTitle>Frequently Asked Questions</PixelFaqSectionTitle>
            <PixelFaqSectionDescription>
              Find answers to common questions about our pixel component library
            </PixelFaqSectionDescription>
          </PixelFaqHeader>
          
          <PixelFaqList>
            <PixelFaqItem defaultOpen>
              <PixelFaqQuestion>How do I install the components?</PixelFaqQuestion>
              <PixelFaqAnswer>
                You can install individual components by copying the code from our documentation, or install the entire library via npm. Each component includes installation instructions and lists all required dependencies. Simply run <code className="px-2 py-1 bg-black/10 dark:bg-white/10 border-2 border-black dark:border-white">npm install</code> with the packages mentioned in the component docs.
              </PixelFaqAnswer>
            </PixelFaqItem>
            
            <PixelFaqItem>
              <PixelFaqQuestion>Is this library free to use?</PixelFaqQuestion>
              <PixelFaqAnswer>
                Yes! All components are completely free and open source under the MIT License. You can use them in personal and commercial projects without any restrictions. We believe in making great design accessible to everyone.
              </PixelFaqAnswer>
            </PixelFaqItem>
            
            <PixelFaqItem>
              <PixelFaqQuestion>Can I customize the pixel borders and shadows?</PixelFaqQuestion>
              <PixelFaqAnswer>
                Absolutely! All components use Tailwind CSS classes and support the className prop for easy customization. You can modify borders, shadows, colors, spacing, and virtually any other styling property. The components are designed to be flexible while maintaining their signature pixel-art aesthetic.
              </PixelFaqAnswer>
            </PixelFaqItem>
            
            <PixelFaqItem>
              <PixelFaqQuestion>Do these components support dark mode?</PixelFaqQuestion>
              <PixelFaqAnswer>
                Yes, all components are built with dark mode support using Tailwind's dark: variant system. They automatically adapt to your system's color scheme or can be controlled manually. The pixel borders and shadows adjust appropriately for optimal visibility in both light and dark themes.
              </PixelFaqAnswer>
            </PixelFaqItem>
          </PixelFaqList>
        </PixelFaq>
      </section>

      {/* Example 2: With Categories */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            2. FAQ with Categories
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Organize questions into different categories
          </p>
        </div>
        
        <PixelFaq variant="default">
          <PixelFaqHeader>
            <PixelFaqSectionTitle>Help Center</PixelFaqSectionTitle>
            <PixelFaqSectionDescription>
              Browse questions by category to find what you're looking for
            </PixelFaqSectionDescription>
          </PixelFaqHeader>
          
          <PixelFaqCategory>
            <PixelFaqCategoryTitle>Getting Started</PixelFaqCategoryTitle>
            <PixelFaqList>
              <PixelFaqItem>
                <PixelFaqQuestion>What is Pixel UI?</PixelFaqQuestion>
                <PixelFaqAnswer>
                  Pixel UI is a comprehensive component library that brings the nostalgia of 8-bit and retro gaming aesthetics to modern web development. It features pixel-perfect borders, instant state changes, and a complete set of UI components built with React, TypeScript, and Tailwind CSS.
                </PixelFaqAnswer>
              </PixelFaqItem>
              
              <PixelFaqItem>
                <PixelFaqQuestion>What technologies does it use?</PixelFaqQuestion>
                <PixelFaqAnswer>
                  Pixel UI is built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4. It uses Radix UI for accessible primitives, CVA for component variants, and includes full TypeScript support with proper type definitions for all components.
                </PixelFaqAnswer>
              </PixelFaqItem>
            </PixelFaqList>
          </PixelFaqCategory>
          
          <PixelFaqCategory>
            <PixelFaqCategoryTitle>Customization</PixelFaqCategoryTitle>
            <PixelFaqList>
              <PixelFaqItem>
                <PixelFaqQuestion>How do I change component colors?</PixelFaqQuestion>
                <PixelFaqAnswer>
                  You can customize colors in several ways: use the built-in variant props (primary, secondary, etc.), add Tailwind classes via className prop, or modify the theme colors in your tailwind.config file. Each component accepts standard Tailwind color utilities.
                </PixelFaqAnswer>
              </PixelFaqItem>
              
              <PixelFaqItem>
                <PixelFaqQuestion>Can I change the border thickness?</PixelFaqQuestion>
                <PixelFaqAnswer>
                  Yes! While components default to 4px borders for the authentic pixel look, you can override this with Tailwind classes like border-2 or border-8. You can also customize the default border width globally in your Tailwind configuration.
                </PixelFaqAnswer>
              </PixelFaqItem>
            </PixelFaqList>
          </PixelFaqCategory>
          
          <PixelFaqCategory>
            <PixelFaqCategoryTitle>Support</PixelFaqCategoryTitle>
            <PixelFaqList>
              <PixelFaqItem>
                <PixelFaqQuestion>How do I report bugs?</PixelFaqQuestion>
                <PixelFaqAnswer>
                  Please report bugs through our GitHub repository's issue tracker. Provide a clear description, steps to reproduce, expected behavior, and your environment details (browser, OS, versions). We review all issues and prioritize fixes based on severity.
                </PixelFaqAnswer>
              </PixelFaqItem>
              
              <PixelFaqItem>
                <PixelFaqQuestion>Is there community support available?</PixelFaqQuestion>
                <PixelFaqAnswer>
                  Yes! Join our Discord server for community discussions, join our GitHub discussions for technical questions, or follow us on Twitter for updates. Our community is friendly and always happy to help fellow developers.
                </PixelFaqAnswer>
              </PixelFaqItem>
            </PixelFaqList>
          </PixelFaqCategory>
        </PixelFaq>
      </section>

      {/* Example 3: Dark Variant */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            3. Dark FAQ Section
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Dark background with orange accents
          </p>
        </div>
        
        <PixelFaq variant="dark">
          <PixelFaqHeader>
            <PixelFaqSectionTitle>Common Questions</PixelFaqSectionTitle>
            <PixelFaqSectionDescription>
              Quick answers to the most frequently asked questions
            </PixelFaqSectionDescription>
          </PixelFaqHeader>
          
          <PixelFaqList>
            <PixelFaqItem variant="dark">
              <PixelFaqQuestion>What makes Pixel UI different?</PixelFaqQuestion>
              <PixelFaqAnswer>
                Unlike other component libraries, Pixel UI embraces zero transitions and instant state changes for an authentic retro feel. We focus on pixel-perfect borders, hard shadows, and nostalgic design patterns that transport users back to the golden age of 8-bit computing.
              </PixelFaqAnswer>
            </PixelFaqItem>
            
            <PixelFaqItem variant="dark">
              <PixelFaqQuestion>Is it production-ready?</PixelFaqQuestion>
              <PixelFaqAnswer>
                Yes! All components are thoroughly tested, fully accessible, and battle-tested in real-world applications. We follow best practices for performance, accessibility (ARIA labels), and TypeScript safety. Hundreds of developers use Pixel UI in production.
              </PixelFaqAnswer>
            </PixelFaqItem>
            
            <PixelFaqItem variant="dark">
              <PixelFaqQuestion>Can I use it with other frameworks?</PixelFaqQuestion>
              <PixelFaqAnswer>
                While Pixel UI is built for React, the design principles and CSS can be adapted to other frameworks. The Tailwind classes are framework-agnostic, and you could recreate the components in Vue, Svelte, or vanilla JavaScript with some effort.
              </PixelFaqAnswer>
            </PixelFaqItem>
          </PixelFaqList>
        </PixelFaq>
      </section>

      {/* Example 4: Primary Variant */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            4. Primary Orange FAQ
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Orange background for branded sections
          </p>
        </div>
        
        <PixelFaq variant="primary">
          <PixelFaqHeader>
            <PixelFaqSectionTitle>Pricing & Licensing</PixelFaqSectionTitle>
            <PixelFaqSectionDescription>
              Everything you need to know about using Pixel UI commercially
            </PixelFaqSectionDescription>
          </PixelFaqHeader>
          
          <PixelFaqList>
            <PixelFaqItem variant="primary">
              <PixelFaqQuestion>Is there a premium version?</PixelFaqQuestion>
              <PixelFaqAnswer>
                Currently, all components are free and open source. We may introduce premium themes, templates, or advanced components in the future, but the core library will always remain free under the MIT License.
              </PixelFaqAnswer>
            </PixelFaqItem>
            
            <PixelFaqItem variant="primary">
              <PixelFaqQuestion>Can I use this for commercial projects?</PixelFaqQuestion>
              <PixelFaqAnswer>
                Yes! The MIT License allows commercial use without restrictions. You can use Pixel UI in client projects, SaaS applications, commercial products, and more. No attribution required, though it's always appreciated!
              </PixelFaqAnswer>
            </PixelFaqItem>
            
            <PixelFaqItem variant="primary">
              <PixelFaqQuestion>Do I need to credit Pixel UI?</PixelFaqQuestion>
              <PixelFaqAnswer>
                Attribution is not required by the license, but we'd love it if you mention Pixel UI in your project! It helps spread the word and supports the continued development of the library.
              </PixelFaqAnswer>
            </PixelFaqItem>
          </PixelFaqList>
        </PixelFaq>
      </section>

      {/* Example 5: Secondary Variant */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            5. Secondary Gold FAQ
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Gold background for premium content
          </p>
        </div>
        
        <PixelFaq variant="secondary">
          <PixelFaqHeader>
            <PixelFaqSectionTitle>Technical Details</PixelFaqSectionTitle>
            <PixelFaqSectionDescription>
              Deep dive into the technical aspects of Pixel UI
            </PixelFaqSectionDescription>
          </PixelFaqHeader>
          
          <PixelFaqList>
            <PixelFaqItem variant="secondary">
              <PixelFaqQuestion>What's the bundle size?</PixelFaqQuestion>
              <PixelFaqAnswer>
                Bundle size varies by component. Most components are under 5KB gzipped. We support tree-shaking, so you only bundle what you use. Import only the components you need to keep your bundle lean and optimized.
              </PixelFaqAnswer>
            </PixelFaqItem>
            
            <PixelFaqItem variant="secondary">
              <PixelFaqQuestion>Does it support SSR?</PixelFaqQuestion>
              <PixelFaqAnswer>
                Yes! Pixel UI is fully compatible with Next.js App Router and server-side rendering. Components are designed to work seamlessly with React Server Components, though some interactive components require 'use client' directive.
              </PixelFaqAnswer>
            </PixelFaqItem>
            
            <PixelFaqItem variant="secondary">
              <PixelFaqQuestion>What about accessibility?</PixelFaqQuestion>
              <PixelFaqAnswer>
                Accessibility is a priority. We use Radix UI primitives which provide excellent keyboard navigation, ARIA labels, focus management, and screen reader support. All interactive components meet WCAG 2.1 Level AA standards.
              </PixelFaqAnswer>
            </PixelFaqItem>
          </PixelFaqList>
        </PixelFaq>
      </section>

      {/* Example 6: Compact FAQ */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            6. Compact FAQ (No Header)
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Minimal FAQ without header section
          </p>
        </div>
        
        <PixelFaq variant="default" className="max-w-3xl mx-auto">
          <PixelFaqList>
            <PixelFaqItem>
              <PixelFaqQuestion>How often is the library updated?</PixelFaqQuestion>
              <PixelFaqAnswer>
                We release updates regularly with bug fixes, new components, and improvements. Follow our GitHub repository to get notified about new releases. Major versions are thoroughly tested before release.
              </PixelFaqAnswer>
            </PixelFaqItem>
            
            <PixelFaqItem>
              <PixelFaqQuestion>Can I contribute to the project?</PixelFaqQuestion>
              <PixelFaqAnswer>
                Absolutely! We welcome contributions from the community. Check our GitHub repository for contribution guidelines, open issues, and feature requests. Whether it's bug fixes, new components, or documentation improvements, we appreciate all help!
              </PixelFaqAnswer>
            </PixelFaqItem>
            
            <PixelFaqItem>
              <PixelFaqQuestion>What browsers are supported?</PixelFaqQuestion>
              <PixelFaqAnswer>
                Pixel UI supports all modern browsers including Chrome, Firefox, Safari, and Edge. We follow Next.js browser support recommendations and use standard CSS features with proper fallbacks for older browsers.
              </PixelFaqAnswer>
            </PixelFaqItem>
            
            <PixelFaqItem>
              <PixelFaqQuestion>Where can I see live examples?</PixelFaqQuestion>
              <PixelFaqAnswer>
                Visit our documentation site for interactive examples of every component. Each component page includes multiple examples, code snippets, and live previews you can interact with. You can also check out our examples directory on GitHub.
              </PixelFaqAnswer>
            </PixelFaqItem>
          </PixelFaqList>
        </PixelFaq>
      </section>
    </div>
  );
}
