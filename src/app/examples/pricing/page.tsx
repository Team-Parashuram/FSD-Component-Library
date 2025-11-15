"use client";

import { PixelButton } from "@/components/ui/pixel/pixel-button";
import { 
  PixelPricing,
  PixelPricingCard,
  PixelPricingBadge,
  PixelPricingTitle,
  PixelPricingPrice,
  PixelPricingPeriod,
  PixelPricingDescription,
  PixelPricingFeatures,
  PixelPricingFeature,
  PixelPricingActions,
  PixelPricingHeader,
  PixelPricingSectionTitle,
  PixelPricingSectionDescription
} from "@/components/ui/pixel/pixel-pricing";

export default function PricingExamples() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)]">
          Pricing Examples
        </h1>
        <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
          Showcase pricing plans with retro pixel-perfect styling
        </p>
      </div>

      {/* Example 1: Basic 3-Column */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            1. Basic 3-Column Pricing
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Simple three-tier pricing layout with featured card
          </p>
        </div>
        
        <PixelPricing columns={3} gap="md">
          <PixelPricingCard variant="default">
            <PixelPricingTitle>Starter</PixelPricingTitle>
            <PixelPricingPrice>$9</PixelPricingPrice>
            <PixelPricingPeriod>per month</PixelPricingPeriod>
            <PixelPricingDescription>Perfect for individuals starting out</PixelPricingDescription>
            <PixelPricingFeatures>
              <PixelPricingFeature>10 Projects</PixelPricingFeature>
              <PixelPricingFeature>5GB Storage</PixelPricingFeature>
              <PixelPricingFeature>Email Support</PixelPricingFeature>
              <PixelPricingFeature>Basic Analytics</PixelPricingFeature>
            </PixelPricingFeatures>
            <PixelPricingActions>
              <PixelButton variant="secondary" className="w-full">Choose Plan</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>
          
          <PixelPricingCard variant="featured">
            <PixelPricingBadge>Most Popular</PixelPricingBadge>
            <PixelPricingTitle>Professional</PixelPricingTitle>
            <PixelPricingPrice>$29</PixelPricingPrice>
            <PixelPricingPeriod>per month</PixelPricingPeriod>
            <PixelPricingDescription>Perfect for growing teams</PixelPricingDescription>
            <PixelPricingFeatures>
              <PixelPricingFeature>Unlimited Projects</PixelPricingFeature>
              <PixelPricingFeature>50GB Storage</PixelPricingFeature>
              <PixelPricingFeature>Priority Support</PixelPricingFeature>
              <PixelPricingFeature>Advanced Analytics</PixelPricingFeature>
              <PixelPricingFeature>Team Collaboration</PixelPricingFeature>
            </PixelPricingFeatures>
            <PixelPricingActions>
              <PixelButton className="w-full">Choose Plan</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>
          
          <PixelPricingCard variant="default">
            <PixelPricingTitle>Firm</PixelPricingTitle>
            <PixelPricingPrice>$99</PixelPricingPrice>
            <PixelPricingPeriod>per month</PixelPricingPeriod>
            <PixelPricingDescription>For large organizations</PixelPricingDescription>
            <PixelPricingFeatures>
              <PixelPricingFeature>Unlimited Everything</PixelPricingFeature>
              <PixelPricingFeature>500GB Storage</PixelPricingFeature>
              <PixelPricingFeature>24/7 Dedicated Support</PixelPricingFeature>
              <PixelPricingFeature>Custom Analytics</PixelPricingFeature>
              <PixelPricingFeature>SSO & Advanced Security</PixelPricingFeature>
            </PixelPricingFeatures>
            <PixelPricingActions>
              <PixelButton variant="secondary" className="w-full">Contact Sales</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>
        </PixelPricing>
      </section>

      {/* Example 2: With Header */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            2. Pricing with Header Section
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Add a title and description above the pricing cards
          </p>
        </div>
        
        <PixelPricing columns={3} gap="md">
          <PixelPricingHeader>
            <PixelPricingSectionTitle>Choose Your Plan</PixelPricingSectionTitle>
            <PixelPricingSectionDescription>
              Select the perfect pricing tier for your needs. Upgrade or downgrade anytime.
            </PixelPricingSectionDescription>
          </PixelPricingHeader>
          
          <PixelPricingCard variant="default">
            <PixelPricingTitle>Basic</PixelPricingTitle>
            <PixelPricingPrice>$0</PixelPricingPrice>
            <PixelPricingPeriod>forever</PixelPricingPeriod>
            <PixelPricingDescription>Get started for free</PixelPricingDescription>
            <PixelPricingFeatures>
              <PixelPricingFeature>3 Projects</PixelPricingFeature>
              <PixelPricingFeature>1GB Storage</PixelPricingFeature>
              <PixelPricingFeature>Community Support</PixelPricingFeature>
            </PixelPricingFeatures>
            <PixelPricingActions>
              <PixelButton variant="ghost" className="w-full">Get Started</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>
          
          <PixelPricingCard variant="primary">
            <PixelPricingTitle>Pro</PixelPricingTitle>
            <PixelPricingPrice>$19</PixelPricingPrice>
            <PixelPricingPeriod>per month</PixelPricingPeriod>
            <PixelPricingDescription>For professionals</PixelPricingDescription>
            <PixelPricingFeatures>
              <PixelPricingFeature>50 Projects</PixelPricingFeature>
              <PixelPricingFeature>25GB Storage</PixelPricingFeature>
              <PixelPricingFeature>Email Support</PixelPricingFeature>
              <PixelPricingFeature>Priority Processing</PixelPricingFeature>
            </PixelPricingFeatures>
            <PixelPricingActions>
              <PixelButton className="w-full">Upgrade Now</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>
          
          <PixelPricingCard variant="secondary">
            <PixelPricingTitle>Team</PixelPricingTitle>
            <PixelPricingPrice>$49</PixelPricingPrice>
            <PixelPricingPeriod>per month</PixelPricingPeriod>
            <PixelPricingDescription>For small teams</PixelPricingDescription>
            <PixelPricingFeatures>
              <PixelPricingFeature>Unlimited Projects</PixelPricingFeature>
              <PixelPricingFeature>100GB Storage</PixelPricingFeature>
              <PixelPricingFeature>Priority Support</PixelPricingFeature>
              <PixelPricingFeature>5 Team Members</PixelPricingFeature>
            </PixelPricingFeatures>
            <PixelPricingActions>
              <PixelButton className="w-full">Start Trial</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>
        </PixelPricing>
      </section>

      {/* Example 3: 2-Column Layout */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            3. Two-Column Pricing
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Simpler layout with just two options
          </p>
        </div>
        
        <PixelPricing columns={2} gap="lg" className="max-w-4xl mx-auto">
          <PixelPricingCard variant="default">
            <PixelPricingTitle>Monthly</PixelPricingTitle>
            <PixelPricingPrice>$15</PixelPricingPrice>
            <PixelPricingPeriod>per month</PixelPricingPeriod>
            <PixelPricingDescription>Pay as you go, cancel anytime</PixelPricingDescription>
            <PixelPricingFeatures>
              <PixelPricingFeature>Full Access</PixelPricingFeature>
              <PixelPricingFeature>20GB Storage</PixelPricingFeature>
              <PixelPricingFeature>Email Support</PixelPricingFeature>
              <PixelPricingFeature>Regular Updates</PixelPricingFeature>
            </PixelPricingFeatures>
            <PixelPricingActions>
              <PixelButton variant="secondary" className="w-full">Choose Monthly</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>
          
          <PixelPricingCard variant="featured">
            <PixelPricingBadge>Save 30%</PixelPricingBadge>
            <PixelPricingTitle>Yearly</PixelPricingTitle>
            <PixelPricingPrice>$126</PixelPricingPrice>
            <PixelPricingPeriod>per year</PixelPricingPeriod>
            <PixelPricingDescription>Best value for long-term users</PixelPricingDescription>
            <PixelPricingFeatures>
              <PixelPricingFeature>Full Access</PixelPricingFeature>
              <PixelPricingFeature>50GB Storage</PixelPricingFeature>
              <PixelPricingFeature>Priority Support</PixelPricingFeature>
              <PixelPricingFeature>Early Access Features</PixelPricingFeature>
            </PixelPricingFeatures>
            <PixelPricingActions>
              <PixelButton className="w-full">Choose Yearly</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>
        </PixelPricing>
      </section>

      {/* Example 4: 4-Column Grid */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            4. Four-Column Grid
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Maximum columns with compact pricing tiers
          </p>
        </div>
        
        <PixelPricing columns={4} gap="sm">
          <PixelPricingCard variant="default">
            <PixelPricingTitle>Free</PixelPricingTitle>
            <PixelPricingPrice>$0</PixelPricingPrice>
            <PixelPricingPeriod>forever</PixelPricingPeriod>
            <PixelPricingFeatures>
              <PixelPricingFeature>3 Projects</PixelPricingFeature>
              <PixelPricingFeature>1GB Storage</PixelPricingFeature>
            </PixelPricingFeatures>
            <PixelPricingActions>
              <PixelButton variant="ghost" className="w-full">Start Free</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>
          
          <PixelPricingCard variant="primary">
            <PixelPricingTitle>Starter</PixelPricingTitle>
            <PixelPricingPrice>$9</PixelPricingPrice>
            <PixelPricingPeriod>/mo</PixelPricingPeriod>
            <PixelPricingFeatures>
              <PixelPricingFeature>10 Projects</PixelPricingFeature>
              <PixelPricingFeature>5GB Storage</PixelPricingFeature>
            </PixelPricingFeatures>
            <PixelPricingActions>
              <PixelButton className="w-full">Get Started</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>
          
          <PixelPricingCard variant="secondary">
            <PixelPricingTitle>Pro</PixelPricingTitle>
            <PixelPricingPrice>$29</PixelPricingPrice>
            <PixelPricingPeriod>/mo</PixelPricingPeriod>
            <PixelPricingFeatures>
              <PixelPricingFeature>50 Projects</PixelPricingFeature>
              <PixelPricingFeature>25GB Storage</PixelPricingFeature>
            </PixelPricingFeatures>
            <PixelPricingActions>
              <PixelButton className="w-full">Upgrade</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>
          
          <PixelPricingCard variant="dark">
            <PixelPricingTitle>Firm</PixelPricingTitle>
            <PixelPricingPrice>Custom</PixelPricingPrice>
            <PixelPricingPeriod>pricing</PixelPricingPeriod>
            <PixelPricingFeatures>
              <PixelPricingFeature>Unlimited</PixelPricingFeature>
              <PixelPricingFeature>Custom Storage</PixelPricingFeature>
            </PixelPricingFeatures>
            <PixelPricingActions>
              <PixelButton variant="secondary" className="w-full">Contact Us</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>
        </PixelPricing>
      </section>

      {/* Example 5: Dark Variant */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            5. Dark Pricing Section
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Dark background with orange borders
          </p>
        </div>
        
        <PixelPricing columns={3} gap="md" variant="dark">
          <PixelPricingHeader>
            <PixelPricingSectionTitle>Premium Plans</PixelPricingSectionTitle>
            <PixelPricingSectionDescription>
              Unlock the full potential with our premium pricing options
            </PixelPricingSectionDescription>
          </PixelPricingHeader>
          
          <PixelPricingCard variant="dark">
            <PixelPricingTitle>Silver</PixelPricingTitle>
            <PixelPricingPrice>$49</PixelPricingPrice>
            <PixelPricingPeriod>per month</PixelPricingPeriod>
            <PixelPricingDescription>Enhanced features</PixelPricingDescription>
            <PixelPricingFeatures>
              <PixelPricingFeature>100 Projects</PixelPricingFeature>
              <PixelPricingFeature>50GB Storage</PixelPricingFeature>
              <PixelPricingFeature>Premium Support</PixelPricingFeature>
            </PixelPricingFeatures>
            <PixelPricingActions>
              <PixelButton variant="secondary" className="w-full">Choose Silver</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>
          
          <PixelPricingCard variant="dark">
            <PixelPricingBadge>Popular</PixelPricingBadge>
            <PixelPricingTitle>Gold</PixelPricingTitle>
            <PixelPricingPrice>$99</PixelPricingPrice>
            <PixelPricingPeriod>per month</PixelPricingPeriod>
            <PixelPricingDescription>Professional tier</PixelPricingDescription>
            <PixelPricingFeatures>
              <PixelPricingFeature>Unlimited Projects</PixelPricingFeature>
              <PixelPricingFeature>200GB Storage</PixelPricingFeature>
              <PixelPricingFeature>VIP Support</PixelPricingFeature>
              <PixelPricingFeature>Custom Integrations</PixelPricingFeature>
            </PixelPricingFeatures>
            <PixelPricingActions>
              <PixelButton className="w-full">Choose Gold</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>
          
          <PixelPricingCard variant="dark">
            <PixelPricingTitle>Platinum</PixelPricingTitle>
            <PixelPricingPrice>$199</PixelPricingPrice>
            <PixelPricingPeriod>per month</PixelPricingPeriod>
            <PixelPricingDescription>Ultimate package</PixelPricingDescription>
            <PixelPricingFeatures>
              <PixelPricingFeature>Unlimited Everything</PixelPricingFeature>
              <PixelPricingFeature>1TB Storage</PixelPricingFeature>
              <PixelPricingFeature>Dedicated Account Manager</PixelPricingFeature>
              <PixelPricingFeature>White Label Options</PixelPricingFeature>
            </PixelPricingFeatures>
            <PixelPricingActions>
              <PixelButton variant="secondary" className="w-full">Choose Platinum</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>
        </PixelPricing>
      </section>

      {/* Example 6: Compact Pricing */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            6. Compact with Minimal Features
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Simplified pricing cards for quick comparisons
          </p>
        </div>
        
        <PixelPricing columns={3} gap="md" className="max-w-4xl mx-auto">
          <PixelPricingCard variant="default">
            <PixelPricingTitle>Basic</PixelPricingTitle>
            <PixelPricingPrice>$5</PixelPricingPrice>
            <PixelPricingPeriod>/month</PixelPricingPeriod>
            <PixelPricingActions>
              <PixelButton variant="secondary" className="w-full">Select</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>
          
          <PixelPricingCard variant="featured">
            <PixelPricingBadge>Best Value</PixelPricingBadge>
            <PixelPricingTitle>Standard</PixelPricingTitle>
            <PixelPricingPrice>$15</PixelPricingPrice>
            <PixelPricingPeriod>/month</PixelPricingPeriod>
            <PixelPricingActions>
              <PixelButton className="w-full">Select</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>
          
          <PixelPricingCard variant="default">
            <PixelPricingTitle>Premium</PixelPricingTitle>
            <PixelPricingPrice>$35</PixelPricingPrice>
            <PixelPricingPeriod>/month</PixelPricingPeriod>
            <PixelPricingActions>
              <PixelButton variant="secondary" className="w-full">Select</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>
        </PixelPricing>
      </section>
    </div>
  );
}
