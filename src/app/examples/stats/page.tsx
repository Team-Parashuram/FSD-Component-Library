"use client";

import { 
  PixelStats,
  PixelStatItem,
  PixelStatIcon,
  PixelStatValue,
  PixelStatLabel,
  PixelStatDescription,
  PixelStatTrend,
  PixelStatsHeader,
  PixelStatsSectionTitle,
  PixelStatsSectionDescription
} from "@/components/ui/pixel/pixel-stats";

export default function StatsExamples() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)]">
          Stats Examples
        </h1>
        <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
          Display key metrics and statistics with pixel-perfect styling
        </p>
      </div>

      {/* Example 1: Basic 4-Column Stats */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            1. Basic 4-Column Stats Grid
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Simple stats display with icons, values, and labels
          </p>
        </div>
        
        <PixelStats columns={4} gap="md">
          <PixelStatItem variant="default">
            <PixelStatIcon>👥</PixelStatIcon>
            <PixelStatValue>10,000+</PixelStatValue>
            <PixelStatLabel>Active Users</PixelStatLabel>
            <PixelStatTrend trend="up">+12% this month</PixelStatTrend>
          </PixelStatItem>
          
          <PixelStatItem variant="primary">
            <PixelStatIcon>⭐</PixelStatIcon>
            <PixelStatValue>4.9/5</PixelStatValue>
            <PixelStatLabel>User Rating</PixelStatLabel>
            <PixelStatDescription>Based on 2,500+ reviews</PixelStatDescription>
          </PixelStatItem>
          
          <PixelStatItem variant="secondary">
            <PixelStatIcon>🚀</PixelStatIcon>
            <PixelStatValue>99.9%</PixelStatValue>
            <PixelStatLabel>Uptime</PixelStatLabel>
            <PixelStatTrend trend="neutral">Last 12 months</PixelStatTrend>
          </PixelStatItem>
          
          <PixelStatItem variant="gradient">
            <PixelStatIcon>💰</PixelStatIcon>
            <PixelStatValue>$2M+</PixelStatValue>
            <PixelStatLabel>Revenue</PixelStatLabel>
            <PixelStatTrend trend="up">+25% YoY</PixelStatTrend>
          </PixelStatItem>
        </PixelStats>
      </section>

      {/* Example 2: With Header Section */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            2. Stats with Header
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Add context with a title and description
          </p>
        </div>
        
        <PixelStats columns={4} gap="md">
          <PixelStatsHeader>
            <PixelStatsSectionTitle>Our Impact</PixelStatsSectionTitle>
            <PixelStatsSectionDescription>
              Real numbers that showcase our growth and success over the past year
            </PixelStatsSectionDescription>
          </PixelStatsHeader>
          
          <PixelStatItem variant="default">
            <PixelStatIcon>🌍</PixelStatIcon>
            <PixelStatValue>150+</PixelStatValue>
            <PixelStatLabel>Countries</PixelStatLabel>
            <PixelStatDescription>Worldwide reach</PixelStatDescription>
          </PixelStatItem>
          
          <PixelStatItem variant="primary">
            <PixelStatIcon>📦</PixelStatIcon>
            <PixelStatValue>1M+</PixelStatValue>
            <PixelStatLabel>Downloads</PixelStatLabel>
            <PixelStatTrend trend="up">+40% this quarter</PixelStatTrend>
          </PixelStatItem>
          
          <PixelStatItem variant="secondary">
            <PixelStatIcon>⚡</PixelStatIcon>
            <PixelStatValue>50ms</PixelStatValue>
            <PixelStatLabel>Avg Response</PixelStatLabel>
            <PixelStatDescription>Lightning fast</PixelStatDescription>
          </PixelStatItem>
          
          <PixelStatItem variant="dark">
            <PixelStatIcon>🎯</PixelStatIcon>
            <PixelStatValue>95%</PixelStatValue>
            <PixelStatLabel>Success Rate</PixelStatLabel>
            <PixelStatTrend trend="up">+5% improvement</PixelStatTrend>
          </PixelStatItem>
        </PixelStats>
      </section>

      {/* Example 3: 3-Column Layout */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            3. Three-Column Stats
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Balanced layout for key metrics
          </p>
        </div>
        
        <PixelStats columns={3} gap="lg">
          <PixelStatItem variant="default" hover="lift">
            <PixelStatIcon>💻</PixelStatIcon>
            <PixelStatValue>500+</PixelStatValue>
            <PixelStatLabel>Projects Built</PixelStatLabel>
            <PixelStatDescription>Using our components</PixelStatDescription>
          </PixelStatItem>
          
          <PixelStatItem variant="primary" hover="lift">
            <PixelStatIcon>🎨</PixelStatIcon>
            <PixelStatValue>100+</PixelStatValue>
            <PixelStatLabel>Components</PixelStatLabel>
            <PixelStatDescription>Ready to use</PixelStatDescription>
          </PixelStatItem>
          
          <PixelStatItem variant="secondary" hover="lift">
            <PixelStatIcon>🔥</PixelStatIcon>
            <PixelStatValue>24/7</PixelStatValue>
            <PixelStatLabel>Support</PixelStatLabel>
            <PixelStatDescription>Always here for you</PixelStatDescription>
          </PixelStatItem>
        </PixelStats>
      </section>

      {/* Example 4: 2-Column Large Stats */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            4. Large Two-Column Stats
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Prominent display for key performance indicators
          </p>
        </div>
        
        <PixelStats columns={2} gap="xl" className="max-w-4xl mx-auto">
          <PixelStatItem variant="gradient" hover="glow">
            <PixelStatIcon>📈</PixelStatIcon>
            <PixelStatValue>320%</PixelStatValue>
            <PixelStatLabel>Growth Rate</PixelStatLabel>
            <PixelStatDescription>Year over year increase</PixelStatDescription>
            <PixelStatTrend trend="up">+120% from last year</PixelStatTrend>
          </PixelStatItem>
          
          <PixelStatItem variant="dark" hover="glow">
            <PixelStatIcon>🏆</PixelStatIcon>
            <PixelStatValue>#1</PixelStatValue>
            <PixelStatLabel>Market Leader</PixelStatLabel>
            <PixelStatDescription>In pixel UI libraries</PixelStatDescription>
            <PixelStatTrend trend="neutral">Maintained position</PixelStatTrend>
          </PixelStatItem>
        </PixelStats>
      </section>

      {/* Example 5: Dark Stats Section */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            5. Dark Stats Section
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Dark background with orange accents
          </p>
        </div>
        
        <PixelStats columns={4} gap="md" variant="dark">
          <PixelStatsHeader>
            <PixelStatsSectionTitle>Platform Statistics</PixelStatsSectionTitle>
            <PixelStatsSectionDescription>
              Real-time metrics from our growing community
            </PixelStatsSectionDescription>
          </PixelStatsHeader>
          
          <PixelStatItem variant="dark">
            <PixelStatIcon>👨‍💻</PixelStatIcon>
            <PixelStatValue>15K+</PixelStatValue>
            <PixelStatLabel>Developers</PixelStatLabel>
            <PixelStatTrend trend="up">+18% growth</PixelStatTrend>
          </PixelStatItem>
          
          <PixelStatItem variant="dark">
            <PixelStatIcon>🌟</PixelStatIcon>
            <PixelStatValue>8.5K</PixelStatValue>
            <PixelStatLabel>GitHub Stars</PixelStatLabel>
            <PixelStatTrend trend="up">+2K this month</PixelStatTrend>
          </PixelStatItem>
          
          <PixelStatItem variant="dark">
            <PixelStatIcon>📚</PixelStatIcon>
            <PixelStatValue>300+</PixelStatValue>
            <PixelStatLabel>Tutorials</PixelStatLabel>
            <PixelStatDescription>Free resources</PixelStatDescription>
          </PixelStatItem>
          
          <PixelStatItem variant="dark">
            <PixelStatIcon>💬</PixelStatIcon>
            <PixelStatValue>5K+</PixelStatValue>
            <PixelStatLabel>Community</PixelStatLabel>
            <PixelStatDescription>Discord members</PixelStatDescription>
          </PixelStatItem>
        </PixelStats>
      </section>

      {/* Example 6: Performance Metrics */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            6. Performance Metrics with Trends
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Showcase positive and negative trends
          </p>
        </div>
        
        <PixelStats columns={4} gap="md">
          <PixelStatItem variant="default">
            <PixelStatIcon>⏱️</PixelStatIcon>
            <PixelStatValue>1.2s</PixelStatValue>
            <PixelStatLabel>Load Time</PixelStatLabel>
            <PixelStatTrend trend="down">-0.3s faster</PixelStatTrend>
          </PixelStatItem>
          
          <PixelStatItem variant="primary">
            <PixelStatIcon>📊</PixelStatIcon>
            <PixelStatValue>85%</PixelStatValue>
            <PixelStatLabel>Conversion</PixelStatLabel>
            <PixelStatTrend trend="up">+15% increase</PixelStatTrend>
          </PixelStatItem>
          
          <PixelStatItem variant="secondary">
            <PixelStatIcon>🎯</PixelStatIcon>
            <PixelStatValue>92%</PixelStatValue>
            <PixelStatLabel>Accuracy</PixelStatLabel>
            <PixelStatTrend trend="up">+7% improvement</PixelStatTrend>
          </PixelStatItem>
          
          <PixelStatItem variant="gradient">
            <PixelStatIcon>💾</PixelStatIcon>
            <PixelStatValue>45KB</PixelStatValue>
            <PixelStatLabel>Bundle Size</PixelStatLabel>
            <PixelStatTrend trend="down">-10KB optimized</PixelStatTrend>
          </PixelStatItem>
        </PixelStats>
      </section>

      {/* Example 7: Business Metrics */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            7. Business Growth Metrics
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Highlight business achievements and growth
          </p>
        </div>
        
        <PixelStats columns={3} gap="md" className="max-w-4xl mx-auto">
          <PixelStatItem variant="primary" hover="lift">
            <PixelStatIcon>💵</PixelStatIcon>
            <PixelStatValue>$5.2M</PixelStatValue>
            <PixelStatLabel>Annual Revenue</PixelStatLabel>
            <PixelStatDescription>Fiscal year 2024</PixelStatDescription>
            <PixelStatTrend trend="up">+35% YoY</PixelStatTrend>
          </PixelStatItem>
          
          <PixelStatItem variant="secondary" hover="lift">
            <PixelStatIcon>🏢</PixelStatIcon>
            <PixelStatValue>250+</PixelStatValue>
            <PixelStatLabel>Enterprise Clients</PixelStatLabel>
            <PixelStatDescription>Fortune 500 companies</PixelStatDescription>
            <PixelStatTrend trend="up">+50 new clients</PixelStatTrend>
          </PixelStatItem>
          
          <PixelStatItem variant="gradient" hover="lift">
            <PixelStatIcon>🌐</PixelStatIcon>
            <PixelStatValue>40+</PixelStatValue>
            <PixelStatLabel>Global Offices</PixelStatLabel>
            <PixelStatDescription>Across 6 continents</PixelStatDescription>
            <PixelStatTrend trend="up">+8 new locations</PixelStatTrend>
          </PixelStatItem>
        </PixelStats>
      </section>

      {/* Example 8: Compact Stats */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            8. Compact Stats Display
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Minimal spacing for inline stat displays
          </p>
        </div>
        
        <PixelStats columns={4} gap="sm">
          <PixelStatItem variant="default" hover="none">
            <PixelStatValue>500K</PixelStatValue>
            <PixelStatLabel>API Calls</PixelStatLabel>
          </PixelStatItem>
          
          <PixelStatItem variant="primary" hover="none">
            <PixelStatValue>12ms</PixelStatValue>
            <PixelStatLabel>Response</PixelStatLabel>
          </PixelStatItem>
          
          <PixelStatItem variant="secondary" hover="none">
            <PixelStatValue>99.99%</PixelStatValue>
            <PixelStatLabel>Uptime</PixelStatLabel>
          </PixelStatItem>
          
          <PixelStatItem variant="dark" hover="none">
            <PixelStatValue>24/7</PixelStatValue>
            <PixelStatLabel>Available</PixelStatLabel>
          </PixelStatItem>
        </PixelStats>
      </section>
    </div>
  );
}
