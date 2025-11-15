"use client";

import { useState } from "react";
import { PixelLoader } from "@/components/ui/pixel/pixel-loader";
import { PixelTerminal } from "@/components/ui/pixel/pixel-terminal";
import { PixelHealthBar, PixelManaBar, PixelXPBar, PixelInventory, PixelInventorySlot, PixelAchievement } from "@/components/ui/pixel/pixel-game-ui";
import { PixelWindow } from "@/components/ui/pixel/pixel-window";
import { PixelAudioVisualizer } from "@/components/ui/pixel/pixel-audio-visualizer";
import { PixelCodeBlock } from "@/components/ui/pixel/pixel-code-block";
import { PixelTimeline, PixelTimelineCheckpoint } from "@/components/ui/pixel/pixel-timeline";
import { PixelNotification } from "@/components/ui/pixel/pixel-notification";
import { PixelChat } from "@/components/ui/pixel/pixel-chat";
import { PixelCountdown, PixelTimer } from "@/components/ui/pixel/pixel-countdown";
import { PixelButton } from "@/components/ui/pixel/pixel-button";
import { PixelCard, PixelCardContent, PixelCardHeader, PixelCardTitle } from "@/components/ui/pixel/pixel-card";
import { PixelBadge } from "@/components/ui/pixel/pixel-badge";
import { PixelHero, PixelHeroContent, PixelHeroTitle, PixelHeroSubtitle, PixelHeroDescription, PixelHeroActions, PixelHeroBadge } from "@/components/ui/pixel/pixel-hero";
import { PixelStats, PixelStatItem, PixelStatValue, PixelStatLabel } from "@/components/ui/pixel/pixel-stats";

export default function PatternsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showAchievement, setShowAchievement] = useState(false);
  
  // Simulate initial loading
  if (isLoading) {
    setTimeout(() => setIsLoading(false), 3000);
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <PixelLoader variant="crt" size="lg" text="LOADING RETRO GAME..." />
      </div>
    );
  }

  const chatMessages = [
    {
      id: "1",
      text: "Welcome to Retro Game Central! 👾",
      sender: "other" as const,
      username: "GameMaster",
      timestamp: "10:00 AM",
      avatar: "🎮",
    },
    {
      id: "2",
      text: "Ready to explore the ultimate retro experience?",
      sender: "other" as const,
      username: "GameMaster",
      timestamp: "10:01 AM",
      avatar: "🎮",
    },
  ];

  const timelineEvents = [
    {
      title: "Account Created",
      description: "Welcome to the retro gaming community!",
      date: "Today",
      variant: "success" as const,
      icon: "🎮",
    },
    {
      title: "First Achievement",
      description: "Unlocked 'Retro Explorer' badge",
      date: "5 mins ago",
      variant: "success" as const,
      icon: "🏆",
    },
    {
      title: "Level Up!",
      description: "Reached level 5",
      date: "10 mins ago",
      variant: "warning" as const,
      icon: "⚡",
    },
  ];

  const checkpoints = [
    { label: "Tutorial", completed: true },
    { label: "First Quest", completed: true },
    { label: "Boss Battle", active: true },
    { label: "Hidden Level", completed: false },
    { label: "Final Boss", completed: false },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Hero Section - Clean & Aesthetic */}
      <section className="border-b-4 border-[#ff8c00] bg-[#000000] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="flex justify-center">
              <PixelHeroBadge className="text-lg px-6 py-2">🎮 LIVE NOW</PixelHeroBadge>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold font-pixel text-pixel-dark-secondary leading-tight">
                RETRO GAME CENTRAL
              </h1>
              <p className="text-xl md:text-2xl text-[#ff8c00] font-pixel">
                Built with Special Components
              </p>
              <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                Experience the ultimate 8-bit gaming platform powered by cutting-edge retro UI components
              </p>
            </div>

            {/* Countdown */}
            <div className="pt-8">
              <h3 className="text-xl font-bold font-pixel mb-6 text-center text-white">⏰ NEXT EVENT STARTS IN:</h3>
              <PixelCountdown
                targetDate={new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)}
                variant="digital"
                size="lg"
              />
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <PixelButton size="lg" onClick={() => setShowAchievement(true)}>START PLAYING</PixelButton>
              <PixelButton size="lg" variant="secondary">VIEW LEADERBOARD</PixelButton>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Notification */}
      {showAchievement && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
          <PixelAchievement
            variant="gold"
            title="Welcome Bonus!"
            description="You've unlocked the Retro Explorer achievement"
            icon="🏆"
            points={100}
          />
        </div>
      )}

      {/* Stats Section */}
      <section className="border-b-4 border-[#ff8c00] bg-pixel-dark-surface py-12">
        <div className="container mx-auto px-4">
          <PixelStats columns={4} className="gap-6">
            <PixelStatItem variant="primary">
              <PixelStatValue>1,337</PixelStatValue>
              <PixelStatLabel>Active Players</PixelStatLabel>
            </PixelStatItem>
            <PixelStatItem variant="secondary">
              <PixelStatValue>420+</PixelStatValue>
              <PixelStatLabel>Games Available</PixelStatLabel>
            </PixelStatItem>
            <PixelStatItem variant="gradient">
              <PixelStatValue>99.9%</PixelStatValue>
              <PixelStatLabel>Uptime</PixelStatLabel>
            </PixelStatItem>
            <PixelStatItem variant="dark">
              <PixelStatValue>24/7</PixelStatValue>
              <PixelStatLabel>Support</PixelStatLabel>
            </PixelStatItem>
          </PixelStats>
        </div>
      </section>

      {/* Player Dashboard - Game UI Components */}
      <section className="border-b-4 border-[#ff8c00] py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-pixel mb-12 text-center text-pixel-dark-secondary">
            🎮 PLAYER DASHBOARD
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Character Stats */}
            <PixelCard className="lg:col-span-2">
              <PixelCardHeader>
                <PixelCardTitle className="flex items-center gap-3">
                  <span className="text-3xl">🧙‍♂️</span>
                  <div>
                    <div className="text-2xl">PIXEL WIZARD</div>
                    <div className="text-sm text-pixel-dark-secondary">Level 42 • Archmage</div>
                  </div>
                </PixelCardTitle>
              </PixelCardHeader>
              <PixelCardContent className="space-y-6">
                <div className="space-y-4">
                  <PixelHealthBar current={850} max={1000} label="HP" />
                  <PixelManaBar current={650} max={800} label="MP" />
                  <PixelXPBar currentXP={15750} requiredXP={20000} level={42} />
                </div>

                <div>
                  <h3 className="font-bold font-pixel mb-3 text-lg">📦 INVENTORY</h3>
                  <PixelInventory columns={5} title="">
                    <PixelInventorySlot item="⚔️" rarity="legendary" count={1} />
                    <PixelInventorySlot item="🛡️" rarity="epic" count={1} />
                    <PixelInventorySlot item="💊" rarity="common" count={99} />
                    <PixelInventorySlot item="🔮" rarity="rare" count={5} />
                    <PixelInventorySlot item="👑" rarity="legendary" count={1} />
                    <PixelInventorySlot item="🗝️" rarity="rare" count={3} />
                    <PixelInventorySlot item="💎" rarity="epic" count={42} />
                    <PixelInventorySlot item="🧪" rarity="common" count={15} />
                    <PixelInventorySlot isEmpty />
                    <PixelInventorySlot isEmpty />
                  </PixelInventory>
                </div>
              </PixelCardContent>
            </PixelCard>

            {/* Quest Progress */}
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>⭐ QUEST LOG</PixelCardTitle>
              </PixelCardHeader>
              <PixelCardContent>
                <PixelTimelineCheckpoint checkpoints={checkpoints} orientation="vertical" />
              </PixelCardContent>
            </PixelCard>
          </div>
        </div>
      </section>

      {/* Terminal & Code Section */}
      <section className="border-b-4 border-[#ff8c00] py-16 bg-[#000000]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-pixel mb-12 text-center text-[#00ff00]">
            💻 DEVELOPER TERMINAL
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <PixelTerminal
                variant="matrix"
                size="md"
                prompt="player@retro:~$"
                welcomeMessage="Welcome to Retro Game Terminal v1.0\nType 'help' for available commands"
                commands={{
                  stats: () => "HP: 850/1000 | MP: 650/800 | Level: 42",
                  inventory: () => "You have 8 items in your inventory",
                  quest: () => "Active Quest: Defeat the Boss (50% complete)",
                  arcade: () => "🎮 Loading arcade games...",
                }}
              />
            </div>

            <div>
              <PixelCodeBlock
                code={`// Unlock Achievement
function unlockAchievement(id) {
  const achievement = {
    id: id,
    title: "Retro Master",
    points: 500,
    icon: "🏆"
  };
  
  player.achievements.push(achievement);
  showNotification(achievement);
  playSound("achievement.wav");
  
  return achievement;
}`}
                language="javascript"
                title="achievement.js"
                variant="matrix"
                highlightLines={[8, 9]}
                size="sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Audio Visualizer Section */}
      <section className="border-b-4 border-[#ff8c00] py-16 bg-[#000000]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-pixel mb-12 text-center text-[#00ff00]">
            🎵 AUDIO VISUALIZER
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Bars Mode</PixelCardTitle>
              </PixelCardHeader>
              <PixelCardContent>
                <div className="h-64 flex items-center justify-center bg-black/50 rounded">
                  <PixelAudioVisualizer variant="bars" animate={true} />
                </div>
              </PixelCardContent>
            </PixelCard>

            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Wave Mode</PixelCardTitle>
              </PixelCardHeader>
              <PixelCardContent>
                <div className="h-64 flex items-center justify-center bg-black/50 rounded">
                  <PixelAudioVisualizer variant="wave" animate={true} />
                </div>
              </PixelCardContent>
            </PixelCard>
          </div>
        </div>
      </section>

      {/* Activity Timeline */}
      <section className="border-b-4 border-[#ff8c00] py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-pixel mb-12 text-center text-[#ff8c00]">
            📜 RECENT ACTIVITY
          </h2>

          <div className="max-w-4xl mx-auto">
            <PixelTimeline
              items={timelineEvents}
              orientation="vertical"
              markerSize="lg"
              markerShape="circle"
            />
          </div>
        </div>
      </section>

      {/* Live Chat */}
      <section className="border-b-4 border-[#ff8c00] py-16 bg-[#000000]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-pixel mb-12 text-center text-pixel-dark-secondary">
            💬 LIVE GAME CHAT
          </h2>

          <div className="max-w-3xl mx-auto">
            <PixelChat
              messages={chatMessages}
              variant="retro"
              size="md"
              placeholder="Type your message..."
              onSendMessage={(msg) => console.log("Sent:", msg)}
            />
          </div>
        </div>
      </section>

      {/* Retro Windows */}
      <section className="border-b-4 border-[#ff8c00] py-16 bg-pixel-dark-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-pixel mb-12 text-center text-[#00ffff]">
            🪟 CLASSIC WINDOWS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PixelWindow title="Game Settings" icon="⚙️">
              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-pixel text-sm">Sound Effects</span>
                  <PixelBadge variant="success">ON</PixelBadge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-pixel text-sm">Music</span>
                  <PixelBadge variant="success">ON</PixelBadge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-pixel text-sm">Difficulty</span>
                  <PixelBadge variant="warning">HARD</PixelBadge>
                </div>
                <PixelButton size="sm" className="w-full mt-4">SAVE SETTINGS</PixelButton>
              </div>
            </PixelWindow>

            <PixelWindow title="Achievements" icon="🏆">
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-3 p-2 border-2 border-pixel-dark-secondary bg-pixel-dark-secondary/10">
                  <span className="text-2xl">🏆</span>
                  <div className="flex-1">
                    <div className="font-pixel text-sm">Retro Master</div>
                    <div className="text-xs text-pixel-dark-secondary">500 points</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 border-2 border-gray-500 bg-gray-500/10">
                  <span className="text-2xl">🥇</span>
                  <div className="flex-1">
                    <div className="font-pixel text-sm">Speed Runner</div>
                    <div className="text-xs text-gray-400">250 points</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 border-2 border-orange-500 bg-orange-500/10">
                  <span className="text-2xl">🥉</span>
                  <div className="flex-1">
                    <div className="font-pixel text-sm">Explorer</div>
                    <div className="text-xs text-orange-400">100 points</div>
                  </div>
                </div>
              </div>
            </PixelWindow>
          </div>
        </div>
      </section>

      {/* Timer/Countdown Section */}
      <section className="border-b-4 border-[#ff8c00] py-16 bg-[#000000]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-pixel mb-12 text-center text-[#ff0000]">
            ⏱️ GAME TIMERS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold font-pixel mb-6 text-pixel-dark-secondary">SPEED RUN TIMER</h3>
              <PixelTimer
                initialMinutes={5}
                initialSeconds={0}
                variant="digital"
                size="lg"
                showControls={true}
              />
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold font-pixel mb-6 text-[#00ff00]">BOSS BATTLE COUNTDOWN</h3>
              <PixelCountdown
                initialSeconds={300}
                variant="flip"
                size="lg"
                showDays={false}
                showHours={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notifications Bar */}
      <section className="py-8 bg-pixel-dark-surface">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <PixelNotification
              title="Quest Complete!"
              description="You've earned 500 XP"
              variant="success"
              icon="✓"
            />
            <PixelNotification
              title="Level Up!"
              description="You've reached Level 43"
              variant="info"
              icon="⚡"
            />
            <PixelNotification
              title="Achievement Unlocked"
              description="Retro Master badge earned"
              variant="warning"
              icon="🏆"
            />
          </div>
        </div>
      </section>

     
    </div>
  );
}
