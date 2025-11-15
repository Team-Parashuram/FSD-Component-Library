"use client";

import { PixelButton } from "@/components/ui/pixel/pixel-button";
import { 
  PixelFooter,
  PixelFooterGrid,
  PixelFooterSection,
  PixelFooterTitle,
  PixelFooterLinks,
  PixelFooterLink,
  PixelFooterDivider,
  PixelFooterBottom,
  PixelFooterCopyright,
  PixelFooterSocial,
  PixelFooterSocialLink,
  PixelFooterLogo,
  PixelFooterDescription
} from "@/components/ui/pixel/pixel-footer";

export default function FooterExamples() {
  return (
    <div className="space-y-32 pb-16">
      <div className="container mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider font-pixel">
          Footer Examples
        </h1>
        <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
          Retro pixel-perfect footer components for your website
        </p>
      </div>

      {/* Example 1: Complete Footer with 4 Columns */}
      <section className="space-y-8">
        <div className="container mx-auto px-4 space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-pixel">
            1. Complete 4-Column Footer
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Full-featured footer with multiple sections and social links
          </p>
        </div>
        
        <PixelFooter variant="default" size="md">
          <PixelFooterGrid>
            <PixelFooterSection>
              <PixelFooterTitle>Product</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink><a href="#">Features</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Pricing</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Changelog</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Roadmap</a></PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Company</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink><a href="#">About Us</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Blog</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Careers</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Press Kit</a></PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Resources</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink><a href="#">Documentation</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Guides</a></PixelFooterLink>
                <PixelFooterLink><a href="#">API Reference</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Support</a></PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Legal</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink><a href="#">Privacy Policy</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Terms of Service</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Cookie Policy</a></PixelFooterLink>
                <PixelFooterLink><a href="#">License</a></PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
          </PixelFooterGrid>
          
          <PixelFooterDivider />
          
          <PixelFooterBottom>
            <PixelFooterCopyright>© 2025 Pixel UI. All rights reserved.</PixelFooterCopyright>
            <PixelFooterSocial>
              <PixelFooterSocialLink href="#">🐦</PixelFooterSocialLink>
              <PixelFooterSocialLink href="#">📘</PixelFooterSocialLink>
              <PixelFooterSocialLink href="#">💼</PixelFooterSocialLink>
              <PixelFooterSocialLink href="#">📷</PixelFooterSocialLink>
            </PixelFooterSocial>
          </PixelFooterBottom>
        </PixelFooter>
      </section>

      {/* Example 2: Footer with Logo and Description */}
      <section className="space-y-8">
        <div className="container mx-auto px-4 space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-pixel">
            2. Footer with Logo Section
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Include branding and company description
          </p>
        </div>
        
        <PixelFooter variant="default" size="md">
          <PixelFooterGrid>
            <PixelFooterSection>
              <PixelFooterLogo>🎮 PIXEL UI</PixelFooterLogo>
              <PixelFooterDescription>
                Build retro-styled interfaces with our pixel-perfect component library.
              </PixelFooterDescription>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Quick Links</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink><a href="#">Home</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Components</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Examples</a></PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Support</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink><a href="#">Help Center</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Contact</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Status</a></PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Connect</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink><a href="#">Twitter</a></PixelFooterLink>
                <PixelFooterLink><a href="#">GitHub</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Discord</a></PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
          </PixelFooterGrid>
          
          <PixelFooterDivider />
          
          <PixelFooterBottom>
            <PixelFooterCopyright>Made with ❤️ by Pixel UI Team</PixelFooterCopyright>
            <PixelFooterSocial>
              <PixelFooterSocialLink href="#">🐦</PixelFooterSocialLink>
              <PixelFooterSocialLink href="#">🐙</PixelFooterSocialLink>
            </PixelFooterSocial>
          </PixelFooterBottom>
        </PixelFooter>
      </section>

      {/* Example 3: Compact Footer */}
      <section className="space-y-8">
        <div className="container mx-auto px-4 space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-pixel">
            3. Compact Footer
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Minimalist footer with essential links only
          </p>
        </div>
        
        <PixelFooter variant="default" size="sm">
          <PixelFooterBottom>
            <PixelFooterCopyright>© 2025 Pixel UI</PixelFooterCopyright>
            <div className="flex gap-4">
              <PixelFooterLink><a href="#">Privacy</a></PixelFooterLink>
              <PixelFooterLink><a href="#">Terms</a></PixelFooterLink>
              <PixelFooterLink><a href="#">Contact</a></PixelFooterLink>
            </div>
            <PixelFooterSocial>
              <PixelFooterSocialLink href="#">🐦</PixelFooterSocialLink>
              <PixelFooterSocialLink href="#">💼</PixelFooterSocialLink>
            </PixelFooterSocial>
          </PixelFooterBottom>
        </PixelFooter>
      </section>

      {/* Example 4: Dark Footer */}
      <section className="space-y-8">
        <div className="container mx-auto px-4 space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-pixel">
            4. Dark Footer Variant
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Dark background with orange accents
          </p>
        </div>
        
        <PixelFooter variant="dark" size="md">
          <PixelFooterGrid>
            <PixelFooterSection>
              <PixelFooterLogo>⚡ RETRO APP</PixelFooterLogo>
              <PixelFooterDescription>
                The ultimate retro gaming platform for developers and designers.
              </PixelFooterDescription>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Platform</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink><a href="#">Overview</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Features</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Pricing</a></PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Developers</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink><a href="#">Documentation</a></PixelFooterLink>
                <PixelFooterLink><a href="#">API</a></PixelFooterLink>
                <PixelFooterLink><a href="#">SDKs</a></PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Community</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink><a href="#">Forum</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Discord</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Events</a></PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
          </PixelFooterGrid>
          
          <PixelFooterDivider />
          
          <PixelFooterBottom>
            <PixelFooterCopyright>© 2025 Retro App. Powered by Pixel UI.</PixelFooterCopyright>
            <PixelFooterSocial>
              <PixelFooterSocialLink href="#">🐦</PixelFooterSocialLink>
              <PixelFooterSocialLink href="#">📘</PixelFooterSocialLink>
              <PixelFooterSocialLink href="#">💬</PixelFooterSocialLink>
            </PixelFooterSocial>
          </PixelFooterBottom>
        </PixelFooter>
      </section>

      {/* Example 5: Primary Footer */}
      <section className="space-y-8">
        <div className="container mx-auto px-4 space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-pixel">
            5. Primary Branded Footer
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Orange background with prominent branding
          </p>
        </div>
        
        <PixelFooter variant="primary" size="lg">
          <PixelFooterGrid>
            <PixelFooterSection>
              <PixelFooterLogo>🎯 PIXEL STUDIO</PixelFooterLogo>
              <PixelFooterDescription>
                Create stunning pixel-art interfaces with our professional tools and components.
              </PixelFooterDescription>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Products</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink><a href="#">UI Kit</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Icons</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Templates</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Animations</a></PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Resources</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink><a href="#">Blog</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Tutorials</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Newsletter</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Community</a></PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Company</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink><a href="#">About</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Careers</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Partners</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Contact</a></PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
          </PixelFooterGrid>
          
          <PixelFooterDivider />
          
          <PixelFooterBottom>
            <PixelFooterCopyright>© 2025 Pixel Studio. All rights reserved.</PixelFooterCopyright>
            <PixelFooterSocial>
              <PixelFooterSocialLink href="#">🐦</PixelFooterSocialLink>
              <PixelFooterSocialLink href="#">📘</PixelFooterSocialLink>
              <PixelFooterSocialLink href="#">💼</PixelFooterSocialLink>
              <PixelFooterSocialLink href="#">📷</PixelFooterSocialLink>
              <PixelFooterSocialLink href="#">🎮</PixelFooterSocialLink>
            </PixelFooterSocial>
          </PixelFooterBottom>
        </PixelFooter>
      </section>

      {/* Example 6: Secondary Footer */}
      <section className="space-y-8">
        <div className="container mx-auto px-4 space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-pixel">
            6. Secondary Gold Footer
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Gold background for premium feel
          </p>
        </div>
        
        <PixelFooter variant="secondary" size="md">
          <PixelFooterGrid>
            <PixelFooterSection>
              <PixelFooterLogo>👑 PREMIUM</PixelFooterLogo>
              <PixelFooterDescription>
                Premium pixel components for professional projects.
              </PixelFooterDescription>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Solutions</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink><a href="#">Enterprise</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Startups</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Agencies</a></PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Learn</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink><a href="#">Documentation</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Video Tutorials</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Best Practices</a></PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Support</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink><a href="#">Help Center</a></PixelFooterLink>
                <PixelFooterLink><a href="#">Contact Us</a></PixelFooterLink>
                <PixelFooterLink><a href="#">FAQ</a></PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
          </PixelFooterGrid>
          
          <PixelFooterDivider />
          
          <PixelFooterBottom>
            <PixelFooterCopyright>© 2025 Premium Pixels Inc.</PixelFooterCopyright>
            <PixelFooterSocial>
              <PixelFooterSocialLink href="#">🐦</PixelFooterSocialLink>
              <PixelFooterSocialLink href="#">📘</PixelFooterSocialLink>
            </PixelFooterSocial>
          </PixelFooterBottom>
        </PixelFooter>
      </section>
    </div>
  );
}
