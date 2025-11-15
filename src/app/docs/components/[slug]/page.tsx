import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { promises as fs } from "fs";
import path from "path";
import { DocsSidebar } from "@/components/docs/sidebar";
import { CodeBlock } from "@/components/docs/code-block";
import { CollapsibleCode } from "@/components/docs/collapsible-code";
import { PixelButton } from "@/components/ui/pixel/pixel-button";
import { PixelCard, PixelCardContent, PixelCardDescription, PixelCardHeader, PixelCardTitle } from "@/components/ui/pixel/pixel-card";
import { PixelBadge } from "@/components/ui/pixel/pixel-badge";
import { PixelTabs, PixelTabsContent, PixelTabsList, PixelTabsTrigger } from "@/components/ui/pixel/pixel-tabs";
import { componentRegistry } from "@/lib/component-registry";
import { ComponentExamplePreview } from "./component-example-preview";
import { ComponentPreview } from "./component-preview";

// Generate metadata for each component page
export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const component = componentRegistry.find(c => c.slug === params.slug);
  
  if (!component) {
    return {
      title: "Component Not Found"
    };
  }

  return {
    title: `${component.title} - Pixel UI`,
    description: component.description,
    openGraph: {
      title: `${component.title} - Pixel UI Component`,
      description: component.description,
      type: "article",
      url: `https://pixel-ui.vercel.app/docs/components/${params.slug}`
    },
    twitter: {
      card: "summary",
      title: `${component.title} - Pixel UI`,
      description: component.description
    }
  };
}

// Function to read component source code from file
async function getComponentSource(slug: string): Promise<string> {
  try {
    // Try animation components path first
    let filePath = path.join(process.cwd(), "src", "components", "ui", "pixel", "animations", `${slug}.tsx`);
    
    try {
      const source = await fs.readFile(filePath, "utf-8");
      return source;
    } catch {
      // If not in animations, try regular pixel components
      filePath = path.join(process.cwd(), "src", "components", "ui", "pixel", `${slug}.tsx`);
      const source = await fs.readFile(filePath, "utf-8");
      return source;
    }
  } catch (error) {
    return `// Component source code not available\n// Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}

export default async function ComponentPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  
  // Find component from registry
  const component = componentRegistry.find(c => c.slug === params.slug);

  if (!component) {
    notFound();
  }

  // Dynamically load component source code
  const componentSource = await getComponentSource(params.slug);

  return (
    <div className="min-h-screen bg-[#f5f5dc] dark:bg-[#000000]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <DocsSidebar />
          
          <main className="flex-1 max-w-4xl">
            {/* Back Button */}
            <Link href="/docs/components">
              <PixelButton variant="ghost" size="sm" className="mb-6">
                ← Back to Components
              </PixelButton>
            </Link>

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] dark:text-[#ffd700]">
                  {component.title}
                </h1>
                <PixelBadge variant="default">{component.category}</PixelBadge>
              </div>
              <p className="text-lg dark:text-white/80">{component.description}</p>
            </div>

            {/* Installation */}
            {component.installation && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                  Installation
                </h2>
                <CodeBlock code={component.installation} language="bash" />
              </section>
            )}

            {/* Import */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                Import
              </h2>
              <CodeBlock code={component.importCode} />
            </section>

            {/* Usage */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                Usage
              </h2>
              <PixelTabs defaultValue="preview">
                <PixelTabsList>
                  <PixelTabsTrigger value="preview">Preview</PixelTabsTrigger>
                  <PixelTabsTrigger value="code">Code</PixelTabsTrigger>
                </PixelTabsList>
                <PixelTabsContent value="preview">
                  <div className="pixel-borders border-4 border-black p-8 bg-white dark:border-[#ff8c00] dark:bg-[#1a1a1a] min-h-[200px] flex items-center justify-center">
                    <ComponentPreview slug={params.slug} />
                  </div>
                </PixelTabsContent>
                <PixelTabsContent value="code">
                  <CodeBlock code={component.usageCode} />
                </PixelTabsContent>
              </PixelTabs>
            </section>

            {/* Component Source Code */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                Component Source
              </h2>
              <p className="mb-4 text-sm dark:text-white/70">
                Copy and paste the following code into your project at <code className="bg-black/10 dark:bg-white/10 px-2 py-1 rounded">{component.componentCode}</code>
              </p>
              <CollapsibleCode code={componentSource} language="tsx" previewLines={50} />
            </section>

            {/* Props Table */}
            {component.props && component.props.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                  Props
                </h2>
                <div className="pixel-borders border-4 border-black overflow-hidden dark:border-[#ff8c00]">
                  <table className="w-full">
                    <thead className="bg-[#ff8c00] text-white">
                      <tr>
                        <th className="text-left p-3 font-bold uppercase text-xs">Prop</th>
                        <th className="text-left p-3 font-bold uppercase text-xs">Type</th>
                        <th className="text-left p-3 font-bold uppercase text-xs">Default</th>
                        <th className="text-left p-3 font-bold uppercase text-xs">Description</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-[#1a1a1a]">
                      {component.props.map((prop, index) => (
                        <tr key={index} className="border-t-2 border-black dark:border-[#ff8c00]">
                          <td className="p-3 font-mono text-sm font-bold">{prop.name}</td>
                          <td className="p-3 font-mono text-xs text-black/70 dark:text-white/70">{prop.type}</td>
                          <td className="p-3 font-mono text-xs text-black/70 dark:text-white/70">{prop.default || '-'}</td>
                          <td className="p-3 text-sm text-black/70 dark:text-white/70">{prop.description || '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Examples */}
            {component.examples && component.examples.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                  Examples
                </h2>
                {component.examples.map((example, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-lg font-bold mb-2 dark:text-white">{example.title}</h3>
                    {example.description && (
                      <p className="text-sm mb-3 dark:text-white/70">{example.description}</p>
                    )}
                    <PixelTabs defaultValue="preview">
                      <PixelTabsList>
                        <PixelTabsTrigger value="preview">Preview</PixelTabsTrigger>
                        <PixelTabsTrigger value="code">Code</PixelTabsTrigger>
                      </PixelTabsList>
                      <PixelTabsContent value="preview">
                        <div className="pixel-borders border-4 border-black p-8 bg-white dark:border-[#ff8c00] dark:bg-[#1a1a1a] min-h-[150px] flex items-center justify-center">
                          <ComponentExamplePreview code={example.code} slug={params.slug} />
                        </div>
                      </PixelTabsContent>
                      <PixelTabsContent value="code">
                        <CodeBlock code={example.code} />
                      </PixelTabsContent>
                    </PixelTabs>
                  </div>
                ))}
              </section>
            )}

            {/* Accessibility */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                Accessibility
              </h2>
              <PixelCard>
                <PixelCardContent className="pt-6">
                  <p className="text-sm dark:text-white/80">
                    This component is built with accessibility in mind, including proper ARIA attributes, 
                    keyboard navigation, and focus management.
                  </p>
                </PixelCardContent>
              </PixelCard>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
