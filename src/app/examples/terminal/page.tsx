"use client";

import { PixelTerminal } from "@/components/ui/pixel/pixel-terminal";

export default function TerminalExamples() {
  // Custom commands for demo
  const customCommands = {
    joke: () => "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
    status: () => "System: Online ✓\nCPU: 8%\nMemory: 45%\nDisk: 62%",
    rick: () => "Never gonna give you up\nNever gonna let you down\n🎵",
    matrix: () => Array.from({ length: 10 }, () => 
      Array.from({ length: 20 }, () => 
        String.fromCharCode(33 + Math.floor(Math.random() * 94))
      ).join('')
    ).join('\n'),
  };

  const advancedCommands = {
    ...customCommands,
    calc: (args: string[]) => {
      try {
        const expression = args.join(' ');
        // Simple calculation (be careful with eval in production!)
        const result = Function(`'use strict'; return (${expression})`)();
        return `Result: ${result}`;
      } catch {
        return 'Error: Invalid expression';
      }
    },
    greet: (args: string[]) => {
      const name = args[0] || 'stranger';
      return `Hello, ${name}! Welcome to Pixel Terminal. 👋`;
    },
  };

  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      {/* Basic Terminals */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Basic Terminal Variants</h2>
        
        <div className="grid grid-cols-1 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Default (Green)</h3>
            <PixelTerminal 
              variant="default" 
              size="md"
              commands={customCommands}
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Amber Terminal</h3>
            <PixelTerminal 
              variant="amber" 
              size="md"
              prompt="admin@system:~#"
              commands={customCommands}
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">White Terminal</h3>
            <PixelTerminal 
              variant="white" 
              size="md"
              prompt="root@localhost:~$"
              commands={customCommands}
            />
          </div>
        </div>
      </section>

      {/* Size Variations */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Size Variations</h2>
        
        <div className="grid grid-cols-1 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Small Terminal</h3>
            <PixelTerminal 
              variant="matrix" 
              size="sm"
              commands={customCommands}
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Large Terminal</h3>
            <PixelTerminal 
              variant="default" 
              size="lg"
              commands={advancedCommands}
              welcomeMessage={`╔═══════════════════════════════════╗
║   PIXEL TERMINAL v2.0            ║
║   Type 'help' for commands       ║
║   Try: joke, status, greet       ║
╚═══════════════════════════════════╝
`}
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Extra Large Terminal</h3>
            <PixelTerminal 
              variant="retro" 
              size="xl"
              prompt="C:\\>"
              commands={advancedCommands}
              welcomeMessage={`Microsoft(R) DOS Version 6.22
        (C)Copyright Microsoft Corp 1981-1994.

C:\\>`}
            />
          </div>
        </div>
      </section>

      {/* Custom Commands Demo */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Custom Commands</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Interactive Terminal</h3>
            <PixelTerminal 
              variant="matrix" 
              size="md"
              prompt="hacker@matrix:~$"
              commands={advancedCommands}
              welcomeMessage={`WELCOME TO THE MATRIX
═══════════════════════
Available commands:
• help    - Show all commands
• joke    - Random joke
• status  - System status
• calc    - Calculator
• greet   - Greet someone
• matrix  - Random characters
═══════════════════════
`}
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel">Portfolio Terminal</h3>
            <PixelTerminal 
              variant="amber" 
              size="md"
              prompt="visitor@portfolio:~$"
              commands={{
                about: () => `John Doe - Full Stack Developer
Location: San Francisco, CA
Email: john@example.com
GitHub: @johndoe`,
                skills: () => `Languages: JavaScript, TypeScript, Python
Frameworks: React, Next.js, Node.js
Tools: Git, Docker, AWS`,
                projects: () => `1. E-commerce Platform
2. Social Media App
3. Portfolio Website
4. Open Source Library`,
                contact: () => `Email: john@example.com
LinkedIn: linkedin.com/in/johndoe
Twitter: @johndoe`,
              }}
              welcomeMessage={`Welcome to my portfolio!
Type 'help' to see available commands.
`}
            />
          </div>
        </div>
      </section>

      {/* Themed Terminals */}
      <section>
        <h2 className="text-3xl font-bold mb-8 font-pixel">Themed Terminals</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel text-center">Matrix Style</h3>
            <PixelTerminal 
              variant="matrix" 
              size="sm"
              prompt="neo@matrix:~$"
              commands={customCommands}
              welcomeMessage="Wake up, Neo...\n"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel text-center">DOS Style</h3>
            <PixelTerminal 
              variant="retro" 
              size="sm"
              prompt="C:\\>"
              commands={customCommands}
              welcomeMessage="MS-DOS Prompt\n"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-pixel text-center">Classic</h3>
            <PixelTerminal 
              variant="white" 
              size="sm"
              prompt="$"
              commands={customCommands}
              welcomeMessage="Terminal ready.\n"
            />
          </div>
        </div>
      </section>

      {/* Usage Information */}
      <section className="border-4 border-black p-8 bg-[#f5f5dc] dark:bg-[#2a2a2a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-bold mb-4 font-pixel">Usage Examples</h2>
        <div className="space-y-4 font-mono text-sm">
          <div>
            <p className="font-bold mb-2">Basic Usage:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelTerminal variant="default" />`}
            </code>
          </div>
          
          <div>
            <p className="font-bold mb-2">With Custom Commands:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelTerminal 
  variant="matrix"
  commands={{
    hello: () => 'Hello World!',
    time: () => new Date().toLocaleTimeString(),
  }}
/>`}
            </code>
          </div>
          
          <div>
            <p className="font-bold mb-2">Custom Prompt and Welcome:</p>
            <code className="block bg-white dark:bg-black p-4 border-2 border-black overflow-x-auto">
              {`<PixelTerminal 
  variant="amber"
  prompt="admin@server:~#"
  welcomeMessage="Welcome Admin!"
/>`}
            </code>
          </div>
        </div>

        <div className="mt-6 p-4 border-2 border-black bg-yellow-100 dark:bg-yellow-900/20">
          <p className="font-bold mb-2">💡 Tips:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Press <kbd className="px-2 py-1 bg-white dark:bg-black border-2 border-black">↑</kbd> and <kbd className="px-2 py-1 bg-white dark:bg-black border-2 border-black">↓</kbd> to navigate command history</li>
            <li>Press <kbd className="px-2 py-1 bg-white dark:bg-black border-2 border-black">Tab</kbd> for auto-completion</li>
            <li>Built-in commands: help, clear, echo, date, whoami, pwd, ls, about</li>
            <li>Add custom commands via the <code>commands</code> prop</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
