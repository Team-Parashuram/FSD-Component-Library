"use client";

import { 
  PixelTestimonials,
  PixelTestimonialCard,
  PixelTestimonialQuote,
  PixelTestimonialAuthor,
  PixelTestimonialAvatar,
  PixelTestimonialInfo,
  PixelTestimonialName,
  PixelTestimonialRole,
  PixelTestimonialRating,
  PixelTestimonialsHeader,
  PixelTestimonialsSectionTitle,
  PixelTestimonialsSectionDescription
} from "@/components/ui/pixel/pixel-testimonials";

export default function TestimonialsExamples() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider font-pixel">
          Testimonials Examples
        </h1>
        <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
          Showcase customer reviews with pixel-perfect styling
        </p>
      </div>

      {/* Example 1: Basic 3-Column */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-pixel">
            1. Basic 3-Column Testimonials
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Simple testimonial grid with ratings and avatars
          </p>
        </div>
        
        <PixelTestimonials columns={3} gap="md">
          <PixelTestimonialCard variant="default">
            <PixelTestimonialRating>⭐⭐⭐⭐⭐</PixelTestimonialRating>
            <PixelTestimonialQuote>
              "This component library completely transformed our design workflow. The pixel-art aesthetic is absolutely perfect for our retro gaming platform!"
            </PixelTestimonialQuote>
            <PixelTestimonialAuthor>
              <PixelTestimonialAvatar>SM</PixelTestimonialAvatar>
              <PixelTestimonialInfo>
                <PixelTestimonialName>Sarah Miller</PixelTestimonialName>
                <PixelTestimonialRole>Lead Designer, GameDev Studios</PixelTestimonialRole>
              </PixelTestimonialInfo>
            </PixelTestimonialAuthor>
          </PixelTestimonialCard>
          
          <PixelTestimonialCard variant="primary">
            <PixelTestimonialRating>⭐⭐⭐⭐⭐</PixelTestimonialRating>
            <PixelTestimonialQuote>
              "Easy to use, highly customizable, and the documentation is excellent. Our team shipped features faster than ever before."
            </PixelTestimonialQuote>
            <PixelTestimonialAuthor>
              <PixelTestimonialAvatar>MJ</PixelTestimonialAvatar>
              <PixelTestimonialInfo>
                <PixelTestimonialName>Mike Johnson</PixelTestimonialName>
                <PixelTestimonialRole>CTO, StartupXYZ</PixelTestimonialRole>
              </PixelTestimonialInfo>
            </PixelTestimonialAuthor>
          </PixelTestimonialCard>
          
          <PixelTestimonialCard variant="default">
            <PixelTestimonialRating>⭐⭐⭐⭐</PixelTestimonialRating>
            <PixelTestimonialQuote>
              "The attention to detail is remarkable. Every component feels thoughtfully crafted and production-ready out of the box."
            </PixelTestimonialQuote>
            <PixelTestimonialAuthor>
              <PixelTestimonialAvatar>EK</PixelTestimonialAvatar>
              <PixelTestimonialInfo>
                <PixelTestimonialName>Emma Kim</PixelTestimonialName>
                <PixelTestimonialRole>Product Manager, TechCorp</PixelTestimonialRole>
              </PixelTestimonialInfo>
            </PixelTestimonialAuthor>
          </PixelTestimonialCard>
        </PixelTestimonials>
      </section>

      {/* Example 2: With Header */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-pixel">
            2. Testimonials with Header
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Add section title and description above testimonials
          </p>
        </div>
        
        <PixelTestimonials columns={3} gap="md">
          <PixelTestimonialsHeader>
            <PixelTestimonialsSectionTitle>What Our Users Say</PixelTestimonialsSectionTitle>
            <PixelTestimonialsSectionDescription>
              Don't just take our word for it - hear from developers and designers who love Pixel UI
            </PixelTestimonialsSectionDescription>
          </PixelTestimonialsHeader>
          
          <PixelTestimonialCard variant="default">
            <PixelTestimonialRating>⭐⭐⭐⭐⭐</PixelTestimonialRating>
            <PixelTestimonialQuote>
              "The best pixel-art component library I've ever used. Makes building retro interfaces a breeze!"
            </PixelTestimonialQuote>
            <PixelTestimonialAuthor>
              <PixelTestimonialAvatar>🎮</PixelTestimonialAvatar>
              <PixelTestimonialInfo>
                <PixelTestimonialName>Alex Chen</PixelTestimonialName>
                <PixelTestimonialRole>Indie Game Developer</PixelTestimonialRole>
              </PixelTestimonialInfo>
            </PixelTestimonialAuthor>
          </PixelTestimonialCard>
          
          <PixelTestimonialCard variant="secondary">
            <PixelTestimonialRating>⭐⭐⭐⭐⭐</PixelTestimonialRating>
            <PixelTestimonialQuote>
              "Saved us months of development time. The components are well-documented and easy to customize."
            </PixelTestimonialQuote>
            <PixelTestimonialAuthor>
              <PixelTestimonialAvatar>⚡</PixelTestimonialAvatar>
              <PixelTestimonialInfo>
                <PixelTestimonialName>Rachel Torres</PixelTestimonialName>
                <PixelTestimonialRole>Frontend Lead, RetroWeb</PixelTestimonialRole>
              </PixelTestimonialInfo>
            </PixelTestimonialAuthor>
          </PixelTestimonialCard>
          
          <PixelTestimonialCard variant="default">
            <PixelTestimonialRating>⭐⭐⭐⭐⭐</PixelTestimonialRating>
            <PixelTestimonialQuote>
              "Finally, a component library that perfectly captures the retro aesthetic we were looking for!"
            </PixelTestimonialQuote>
            <PixelTestimonialAuthor>
              <PixelTestimonialAvatar>🎨</PixelTestimonialAvatar>
              <PixelTestimonialInfo>
                <PixelTestimonialName>David Park</PixelTestimonialName>
                <PixelTestimonialRole>Creative Director, PixelForce</PixelTestimonialRole>
              </PixelTestimonialInfo>
            </PixelTestimonialAuthor>
          </PixelTestimonialCard>
        </PixelTestimonials>
      </section>

      {/* Example 3: 2-Column Layout */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-pixel">
            3. Two-Column Layout
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Larger cards with more detailed testimonials
          </p>
        </div>
        
        <PixelTestimonials columns={2} gap="lg">
          <PixelTestimonialCard variant="default">
            <PixelTestimonialRating>⭐⭐⭐⭐⭐</PixelTestimonialRating>
            <PixelTestimonialQuote>
              "We've been using Pixel UI for our retro gaming marketplace and it's been incredible. The components are not only beautiful but also incredibly functional. Our users love the nostalgic feel, and we love how easy it is to maintain."
            </PixelTestimonialQuote>
            <PixelTestimonialAuthor>
              <PixelTestimonialAvatar>JW</PixelTestimonialAvatar>
              <PixelTestimonialInfo>
                <PixelTestimonialName>Jessica Williams</PixelTestimonialName>
                <PixelTestimonialRole>Founder & CEO, RetroMarket</PixelTestimonialRole>
              </PixelTestimonialInfo>
            </PixelTestimonialAuthor>
          </PixelTestimonialCard>
          
          <PixelTestimonialCard variant="primary">
            <PixelTestimonialRating>⭐⭐⭐⭐⭐</PixelTestimonialRating>
            <PixelTestimonialQuote>
              "The pixel-perfect borders and instant state changes give our app the authentic retro feel we wanted. Plus, the TypeScript support and accessibility features are top-notch. Highly recommended for any retro-themed project!"
            </PixelTestimonialQuote>
            <PixelTestimonialAuthor>
              <PixelTestimonialAvatar>TL</PixelTestimonialAvatar>
              <PixelTestimonialInfo>
                <PixelTestimonialName>Thomas Lee</PixelTestimonialName>
                <PixelTestimonialRole>Senior Developer, NostalgiaTech</PixelTestimonialRole>
              </PixelTestimonialInfo>
            </PixelTestimonialAuthor>
          </PixelTestimonialCard>
        </PixelTestimonials>
      </section>

      {/* Example 4: Single Column */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-pixel">
            4. Featured Single Column
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Highlight a single testimonial with full width
          </p>
        </div>
        
        <PixelTestimonials columns={1} gap="none" className="max-w-3xl mx-auto">
          <PixelTestimonialCard variant="dark">
            <PixelTestimonialRating>⭐⭐⭐⭐⭐</PixelTestimonialRating>
            <PixelTestimonialQuote>
              "Pixel UI has become an essential part of our design system. The components are not only visually stunning with their retro aesthetic, but they're also incredibly well-built under the hood. The attention to accessibility, TypeScript support, and comprehensive documentation makes this the gold standard for pixel-art UI libraries. Our entire team is in love with it, and our users can't stop complimenting the design!"
            </PixelTestimonialQuote>
            <PixelTestimonialAuthor>
              <PixelTestimonialAvatar>👨‍💻</PixelTestimonialAvatar>
              <PixelTestimonialInfo>
                <PixelTestimonialName>Marcus Rodriguez</PixelTestimonialName>
                <PixelTestimonialRole>VP of Engineering, PixelCraft Industries</PixelTestimonialRole>
              </PixelTestimonialInfo>
            </PixelTestimonialAuthor>
          </PixelTestimonialCard>
        </PixelTestimonials>
      </section>

      {/* Example 5: Dark Section */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-pixel">
            5. Dark Section with Testimonials
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Dark background for dramatic presentation
          </p>
        </div>
        
        <PixelTestimonials columns={3} gap="md" variant="dark">
          <PixelTestimonialsHeader>
            <PixelTestimonialsSectionTitle>Trusted by Developers</PixelTestimonialsSectionTitle>
            <PixelTestimonialsSectionDescription>
              Join thousands of developers building amazing retro interfaces
            </PixelTestimonialsSectionDescription>
          </PixelTestimonialsHeader>
          
          <PixelTestimonialCard variant="dark">
            <PixelTestimonialRating>⭐⭐⭐⭐⭐</PixelTestimonialRating>
            <PixelTestimonialQuote>
              "The best investment we made for our project. Clean, professional, and perfectly retro."
            </PixelTestimonialQuote>
            <PixelTestimonialAuthor>
              <PixelTestimonialAvatar>🚀</PixelTestimonialAvatar>
              <PixelTestimonialInfo>
                <PixelTestimonialName>Nina Patel</PixelTestimonialName>
                <PixelTestimonialRole>Founder, SpaceRetro</PixelTestimonialRole>
              </PixelTestimonialInfo>
            </PixelTestimonialAuthor>
          </PixelTestimonialCard>
          
          <PixelTestimonialCard variant="dark">
            <PixelTestimonialRating>⭐⭐⭐⭐⭐</PixelTestimonialRating>
            <PixelTestimonialQuote>
              "Outstanding quality and support. Made our retro app look professional from day one."
            </PixelTestimonialQuote>
            <PixelTestimonialAuthor>
              <PixelTestimonialAvatar>💎</PixelTestimonialAvatar>
              <PixelTestimonialInfo>
                <PixelTestimonialName>Oliver Zhang</PixelTestimonialName>
                <PixelTestimonialRole>Lead Dev, DiamondPixel</PixelTestimonialRole>
              </PixelTestimonialInfo>
            </PixelTestimonialAuthor>
          </PixelTestimonialCard>
          
          <PixelTestimonialCard variant="dark">
            <PixelTestimonialRating>⭐⭐⭐⭐</PixelTestimonialRating>
            <PixelTestimonialQuote>
              "Great components with excellent documentation. Helped us ship our MVP in record time."
            </PixelTestimonialQuote>
            <PixelTestimonialAuthor>
              <PixelTestimonialAvatar>⭐</PixelTestimonialAvatar>
              <PixelTestimonialInfo>
                <PixelTestimonialName>Lisa Anderson</PixelTestimonialName>
                <PixelTestimonialRole>Product Lead, StarBits</PixelTestimonialRole>
              </PixelTestimonialInfo>
            </PixelTestimonialAuthor>
          </PixelTestimonialCard>
        </PixelTestimonials>
      </section>

      {/* Example 6: Mixed Variants */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-pixel">
            6. Mixed Card Variants
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Use different card styles for visual variety
          </p>
        </div>
        
        <PixelTestimonials columns={3} gap="md">
          <PixelTestimonialCard variant="default">
            <PixelTestimonialRating>⭐⭐⭐⭐⭐</PixelTestimonialRating>
            <PixelTestimonialQuote>
              "Clean, simple, and effective. Perfect for our minimalist design approach."
            </PixelTestimonialQuote>
            <PixelTestimonialAuthor>
              <PixelTestimonialAvatar>KM</PixelTestimonialAvatar>
              <PixelTestimonialInfo>
                <PixelTestimonialName>Kevin Martinez</PixelTestimonialName>
                <PixelTestimonialRole>UI Designer, MinimalCo</PixelTestimonialRole>
              </PixelTestimonialInfo>
            </PixelTestimonialAuthor>
          </PixelTestimonialCard>
          
          <PixelTestimonialCard variant="primary">
            <PixelTestimonialRating>⭐⭐⭐⭐⭐</PixelTestimonialRating>
            <PixelTestimonialQuote>
              "The orange accents add just the right amount of energy to our design system!"
            </PixelTestimonialQuote>
            <PixelTestimonialAuthor>
              <PixelTestimonialAvatar>🔥</PixelTestimonialAvatar>
              <PixelTestimonialInfo>
                <PixelTestimonialName>Sophie Turner</PixelTestimonialName>
                <PixelTestimonialRole>Brand Designer, FireStudio</PixelTestimonialRole>
              </PixelTestimonialInfo>
            </PixelTestimonialAuthor>
          </PixelTestimonialCard>
          
          <PixelTestimonialCard variant="secondary">
            <PixelTestimonialRating>⭐⭐⭐⭐</PixelTestimonialRating>
            <PixelTestimonialQuote>
              "The gold variant is perfect for our premium tier features. Love the flexibility!"
            </PixelTestimonialQuote>
            <PixelTestimonialAuthor>
              <PixelTestimonialAvatar>👑</PixelTestimonialAvatar>
              <PixelTestimonialInfo>
                <PixelTestimonialName>James Wilson</PixelTestimonialName>
                <PixelTestimonialRole>Director, GoldRush Games</PixelTestimonialRole>
              </PixelTestimonialInfo>
            </PixelTestimonialAuthor>
          </PixelTestimonialCard>
        </PixelTestimonials>
      </section>
    </div>
  );
}
