"use client";

import { useState } from "react";
import Link from "next/link";
import { PixelButton } from "@/components/ui/pixel/pixel-button";
import { PixelCard, PixelCardContent, PixelCardDescription, PixelCardFooter, PixelCardHeader, PixelCardTitle } from "@/components/ui/pixel/pixel-card";
import { PixelInput } from "@/components/ui/pixel/pixel-input";
import { PixelBadge } from "@/components/ui/pixel/pixel-badge";
import { PixelCheckbox } from "@/components/ui/pixel/pixel-checkbox";
import { PixelDialog, PixelDialogContent, PixelDialogDescription, PixelDialogHeader, PixelDialogTitle, PixelDialogTrigger } from "@/components/ui/pixel/pixel-dialog";
import { PixelToastProvider, usePixelToast } from "@/components/ui/pixel/pixel-toast";
import { PixelSelect, PixelSelectContent, PixelSelectItem, PixelSelectTrigger, PixelSelectValue } from "@/components/ui/pixel/pixel-select";
import { PixelTabs, PixelTabsContent, PixelTabsList, PixelTabsTrigger } from "@/components/ui/pixel/pixel-tabs";
import { PixelAccordion, PixelAccordionContent, PixelAccordionItem, PixelAccordionTrigger } from "@/components/ui/pixel/pixel-accordion";
import { Home, Settings, User, Bell, Trophy, Star } from "lucide-react";

function DashboardContent() {
  const { addToast } = usePixelToast();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState("dark");

  return (
    <div className="min-h-screen bg-[#f5f5dc] dark:bg-[#000000] p-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] dark:text-[#ffd700]">
              Dashboard
            </h1>
            <div className="flex gap-4">
              <PixelButton onClick={() => addToast("Welcome to Pixel UI!")}>
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </PixelButton>
              <Link href="/">
                <PixelButton variant="secondary">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </PixelButton>
              </Link>
            </div>
          </div>
          
          <div className="flex gap-2">
            <PixelBadge variant="success">Online</PixelBadge>
            <PixelBadge variant="warning">3 Alerts</PixelBadge>
            <PixelBadge>Level 42</PixelBadge>
          </div>
        </header>

        {/* Stats Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <PixelCard>
            <PixelCardHeader>
              <div className="flex items-center justify-between">
                <PixelCardTitle>Total Score</PixelCardTitle>
                <Trophy className="h-6 w-6" />
              </div>
            </PixelCardHeader>
            <PixelCardContent>
              <p className="text-4xl font-bold dark:text-[#ffd700]">12,345</p>
            </PixelCardContent>
          </PixelCard>

          <PixelCard>
            <PixelCardHeader>
              <div className="flex items-center justify-between">
                <PixelCardTitle>Achievements</PixelCardTitle>
                <Star className="h-6 w-6" />
              </div>
            </PixelCardHeader>
            <PixelCardContent>
              <p className="text-4xl font-bold dark:text-[#ffd700]">28/50</p>
            </PixelCardContent>
          </PixelCard>

          <PixelCard>
            <PixelCardHeader>
              <div className="flex items-center justify-between">
                <PixelCardTitle>Level</PixelCardTitle>
                <User className="h-6 w-6" />
              </div>
            </PixelCardHeader>
            <PixelCardContent>
              <p className="text-4xl font-bold dark:text-[#ffd700]">42</p>
            </PixelCardContent>
          </PixelCard>
        </section>

        {/* Main Content with Tabs */}
        <section className="mb-8">
          <PixelTabs defaultValue="profile">
            <PixelTabsList>
              <PixelTabsTrigger value="profile">
                <User className="mr-2 h-4 w-4" />
                Profile
              </PixelTabsTrigger>
              <PixelTabsTrigger value="settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </PixelTabsTrigger>
            </PixelTabsList>

            <PixelTabsContent value="profile">
              <PixelCard>
                <PixelCardHeader>
                  <PixelCardTitle>Profile Information</PixelCardTitle>
                  <PixelCardDescription>
                    Update your profile details
                  </PixelCardDescription>
                </PixelCardHeader>
                <PixelCardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">Username</label>
                    <PixelInput 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter username" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Email</label>
                    <PixelInput 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@example.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Game Mode</label>
                    <PixelSelect value={theme} onValueChange={setTheme}>
                      <PixelSelectTrigger>
                        <PixelSelectValue placeholder="Select mode" />
                      </PixelSelectTrigger>
                      <PixelSelectContent>
                        <PixelSelectItem value="easy">Easy</PixelSelectItem>
                        <PixelSelectItem value="normal">Normal</PixelSelectItem>
                        <PixelSelectItem value="hard">Hard</PixelSelectItem>
                        <PixelSelectItem value="nightmare">Nightmare</PixelSelectItem>
                      </PixelSelectContent>
                    </PixelSelect>
                  </div>
                </PixelCardContent>
                <PixelCardFooter className="gap-2">
                  <PixelButton onClick={() => addToast("Profile updated successfully!", {
                    label: "View",
                    onClick: () => console.log("View profile")
                  })}>
                    Save Changes
                  </PixelButton>
                  <PixelButton variant="ghost">Cancel</PixelButton>
                </PixelCardFooter>
              </PixelCard>
            </PixelTabsContent>

            <PixelTabsContent value="settings">
              <PixelCard>
                <PixelCardHeader>
                  <PixelCardTitle>Game Settings</PixelCardTitle>
                  <PixelCardDescription>
                    Configure your gameplay preferences
                  </PixelCardDescription>
                </PixelCardHeader>
                <PixelCardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <PixelCheckbox 
                      id="notifications" 
                      checked={notifications}
                      onCheckedChange={(checked) => setNotifications(checked as boolean)}
                    />
                    <label htmlFor="notifications" className="text-sm font-medium">
                      Enable notifications
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <PixelCheckbox id="sound" />
                    <label htmlFor="sound" className="text-sm font-medium">
                      Enable sound effects
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <PixelCheckbox id="music" />
                    <label htmlFor="music" className="text-sm font-medium">
                      Enable background music
                    </label>
                  </div>
                </PixelCardContent>
                <PixelCardFooter>
                  <PixelButton onClick={() => addToast("Settings saved!")}>
                    Save Settings
                  </PixelButton>
                </PixelCardFooter>
              </PixelCard>
            </PixelTabsContent>
          </PixelTabs>
        </section>

        {/* FAQ Section with Accordion */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
            FAQ
          </h2>
          <PixelAccordion type="single" collapsible>
            <PixelAccordionItem value="item-1">
              <PixelAccordionTrigger>What is Pixel UI?</PixelAccordionTrigger>
              <PixelAccordionContent>
                Pixel UI is a retro 8-bit component library that brings nostalgic gaming aesthetics to modern web applications.
              </PixelAccordionContent>
            </PixelAccordionItem>
            <PixelAccordionItem value="item-2">
              <PixelAccordionTrigger>How do I use these components?</PixelAccordionTrigger>
              <PixelAccordionContent>
                Simply import the components you need and use them in your React/Next.js application. All components are fully typed with TypeScript.
              </PixelAccordionContent>
            </PixelAccordionItem>
            <PixelAccordionItem value="item-3">
              <PixelAccordionTrigger>Are they accessible?</PixelAccordionTrigger>
              <PixelAccordionContent>
                Yes! All components are built on Radix UI primitives with proper ARIA attributes and keyboard navigation support.
              </PixelAccordionContent>
            </PixelAccordionItem>
          </PixelAccordion>
        </section>

        {/* Dialog Example */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
            Dialogs
          </h2>
          <div className="flex gap-4">
            <PixelDialog>
              <PixelDialogTrigger asChild>
                <PixelButton>Open Dialog</PixelButton>
              </PixelDialogTrigger>
              <PixelDialogContent>
                <PixelDialogHeader>
                  <PixelDialogTitle>Retro Dialog</PixelDialogTitle>
                  <PixelDialogDescription>
                    This is a pixel-styled modal dialog with retro 8-bit aesthetics.
                  </PixelDialogDescription>
                </PixelDialogHeader>
                <div className="py-4">
                  <PixelInput placeholder="Enter your name..." />
                </div>
                <div className="flex gap-2 justify-end">
                  <PixelButton variant="ghost">Cancel</PixelButton>
                  <PixelButton onClick={() => addToast("Action completed!")}>
                    Confirm
                  </PixelButton>
                </div>
              </PixelDialogContent>
            </PixelDialog>

            <PixelButton 
              variant="destructive"
              onClick={() => addToast("This is a destructive action!", {
                label: "Undo",
                onClick: () => addToast("Action undone!")
              })}
            >
              Show Toast
            </PixelButton>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
            Component Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Buttons</PixelCardTitle>
              </PixelCardHeader>
              <PixelCardContent className="space-y-2">
                <PixelButton className="w-full">Default</PixelButton>
                <PixelButton className="w-full" variant="secondary">Secondary</PixelButton>
                <PixelButton className="w-full" variant="ghost">Ghost</PixelButton>
              </PixelCardContent>
            </PixelCard>

            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Badges</PixelCardTitle>
              </PixelCardHeader>
              <PixelCardContent className="space-y-2">
                <div className="flex gap-2 flex-wrap">
                  <PixelBadge>Default</PixelBadge>
                  <PixelBadge variant="success">Success</PixelBadge>
                  <PixelBadge variant="warning">Warning</PixelBadge>
                  <PixelBadge variant="error">Error</PixelBadge>
                </div>
              </PixelCardContent>
            </PixelCard>

            <PixelCard>
              <PixelCardHeader>
                <PixelCardTitle>Form Elements</PixelCardTitle>
              </PixelCardHeader>
              <PixelCardContent className="space-y-2">
                <PixelInput placeholder="Text input" />
                <div className="flex items-center space-x-2">
                  <PixelCheckbox id="example" />
                  <label htmlFor="example">Checkbox</label>
                </div>
              </PixelCardContent>
            </PixelCard>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function ExamplesPage() {
  return (
    <PixelToastProvider position="bottom-right" duration={3000}>
      <DashboardContent />
    </PixelToastProvider>
  );
}
