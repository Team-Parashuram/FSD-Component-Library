"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Globe, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-black bg-[#fffacd] dark:bg-[#000000] dark:border-[#ff8c00] mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-4 dark:text-[#ffd700]">
              Pixel UI
            </h3>
            <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">
              An 8-bit retro component library bringing nostalgic gaming aesthetics to modern web development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-4 dark:text-[#ffd700]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs/components" className="hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors">
                  Components
                </Link>
              </li>
              <li>
                <Link href="/examples" className="hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors">
                  Examples
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/Team-Parashuram/Pixel-art-8-bit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-4 dark:text-[#ffd700]">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://github.com/Team-Parashuram/Pixel-art-8-bit/blob/main/README.md" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Team-Parashuram/Pixel-art-8-bit/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors"
                >
                  Report Issue
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Team-Parashuram/Pixel-art-8-bit/blob/main/LICENSE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors"
                >
                  License
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-4 dark:text-[#ffd700]">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Team-Parashuram/Pixel-art-8-bit"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://mishrashardendu22.is-a.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors"
                aria-label="Portfolio"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shardendumishra22/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/Shardendu_M"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <a
                href="https://github.com/Team-Parashuram/Pixel-art-8-bit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:text-[#ff8c00] dark:hover:text-[#ff8c00] transition-colors"
              >
                By Team Parashuram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-black dark:border-[#ff8c00] mt-8 pt-8 text-center">
          <p className="text-sm text-black/70 dark:text-white/70 flex items-center justify-center gap-2">
            © {currentYear} Pixel UI. Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Team Parashuram
          </p>
          <p className="text-xs text-black/60 dark:text-white/60 mt-2">
            Open source component library for retro 8-bit design enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
}
