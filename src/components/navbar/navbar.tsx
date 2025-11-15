"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";
import { ModeToggle } from "@/components/theme/theme-button";
import { PixelButton } from "@/components/ui/pixel/pixel-button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-black bg-[#fffacd] dark:bg-[#1a1a1a] dark:border-[#ff8c00] shadow-[0_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[0_4px_0px_0px_rgba(255,140,0,0.3)]">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold uppercase tracking-wider font-[family-name:var(--font-press-start)] dark:text-[#ffd700] hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors">
              Pixel UI
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/docs/components">
              <PixelButton variant="ghost" size="sm">
                Components
              </PixelButton>
            </Link>
            <Link href="/examples">
              <PixelButton variant="ghost" size="sm">
                Examples
              </PixelButton>
            </Link>
            <Link href="/patterns">
              <PixelButton variant="ghost" size="sm">
                Patterns
              </PixelButton>
            </Link>
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="flex items-center space-x-2">
            {/* GitHub Repo */}
            <a
              href="https://github.com/Team-Parashuram/Pixel-art-8-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="h-5 w-5 dark:text-white" />
            </a>

            {/* Portfolio */}
            <a
              href="https://mishrashardendu22.is-a.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded transition-colors"
              aria-label="Portfolio Website"
            >
              <Globe className="h-5 w-5 dark:text-white" />
            </a>

            {/* Personal GitHub */}
            <a
              href="https://github.com/MishraShardendu22/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded transition-colors"
              aria-label="Personal GitHub"
            >
              <Github className="h-5 w-5 dark:text-white" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shardendumishra22/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5 dark:text-white" />
            </a>

            {/* Twitter/X */}
            <a
              href="https://x.com/Shardendu_M"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded transition-colors"
              aria-label="Twitter Profile"
            >
              <Twitter className="h-5 w-5 dark:text-white" />
            </a>

            {/* Theme Toggle */}
            <div className="ml-2">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
