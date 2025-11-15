"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { componentRegistry, categories, type ComponentCategory } from "@/lib/component-registry";
import { PixelButton } from "@/components/ui/pixel/pixel-button";
import { PixelCard, PixelCardHeader, PixelCardTitle, PixelCardDescription, PixelCardFooter } from "@/components/ui/pixel/pixel-card";
import { PixelTabs, PixelTabsList, PixelTabsTrigger, PixelTabsContent } from "@/components/ui/pixel/pixel-tabs";
import { PixelBadge } from "@/components/ui/pixel/pixel-badge";
import { PixelInput } from "@/components/ui/pixel/pixel-input";
import { Search, ArrowRight } from "lucide-react";

export default function ComponentsListPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const categoryParam = searchParams.get("category");
  
  const getInitialCategory = () => {
    if (categoryParam) {
      const formattedCategory = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1).toLowerCase() as ComponentCategory;
      if (categories.includes(formattedCategory)) {
        return formattedCategory;
      }
    }
    return categories[0];
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState<string>(getInitialCategory());

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", value.toLowerCase());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };


  useEffect(() => {
    const newCategory = getInitialCategory();
    if (newCategory !== selectedTab) {
      setSelectedTab(newCategory);
    }
  }, [categoryParam]);

  const filteredComponents = componentRegistry.filter((component) =>
    component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    component.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f5f5dc] dark:bg-[#000000]">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <Link href="/">
            <PixelButton variant="ghost" size="sm" className="mb-6">
              ← Back to Home
            </PixelButton>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold uppercase font-[family-name:var(--font-press-start)] mb-6 dark:text-[#ffd700]">
            Components
          </h1>
          
          <p className="text-lg max-w-2xl mx-auto dark:text-white/80 mb-8">
            Browse our collection of {componentRegistry.length}+ pixel-perfect retro components.
            All components are fully typed, accessible, and copy-paste ready.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-black/50 dark:text-white/50" />
            <PixelInput
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {categories.map((category) => {
            const count = componentRegistry.filter((c) => c.category === category).length;
            const isSpecial = category === "Special";
            return (
              <PixelCard 
                key={category}
                className={isSpecial ? "relative border-4 border-[#ffd700] shadow-[8px_8px_0px_0px_rgba(255,215,0,0.5)]" : ""}
              >
                {isSpecial && (
                  <div className="absolute -top-2 -right-2 px-2 py-1 text-[8px] font-bold bg-linear-to-r from-[#ff8c00] to-pixel-dark-secondary text-black border-2 border-black shadow-pixel-sm animate-bounce z-10">
                    ⭐ NEW
                  </div>
                )}
                <PixelCardHeader className="text-center">
                  <PixelCardTitle className="text-2xl">{count}</PixelCardTitle>
                  <PixelCardDescription className="text-xs">{category}</PixelCardDescription>
                </PixelCardHeader>
              </PixelCard>
            );
          })}
        </div>

        {/* Component Grid by Category */}
        <PixelTabs value={selectedTab} onValueChange={handleTabChange}>
          <PixelTabsList className="mb-8">
            {categories.map((category) => (
              <PixelTabsTrigger 
                key={category} 
                value={category}
                className={category === "Special" ? "relative" : ""}
              >
                {category}
                {category === "Special" && (
                  <span className="ml-2 px-2 py-0.5 text-[10px] font-bold bg-linear-to-r from-[#ff8c00] to-pixel-dark-secondary text-black border-2 border-black shadow-pixel-sm animate-pulse">
                    NEW
                  </span>
                )}
              </PixelTabsTrigger>
            ))}
          </PixelTabsList>

          {categories.map((category) => {
            const categoryComponents = filteredComponents.filter((c) => c.category === category);
            
            return (
              <PixelTabsContent key={category} value={category}>
                {categoryComponents.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-lg dark:text-white/60">No components found</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryComponents.map((component) => (
                      <Link key={component.slug} href={`/docs/components/${component.slug}`}>
                        <PixelCard className="h-full hover:scale-105 transition-transform duration-0 cursor-pointer">
                          <PixelCardHeader>
                            <div className="flex items-center justify-between mb-2">
                              <PixelCardTitle className="text-lg">{component.title}</PixelCardTitle>
                              <PixelBadge variant="default" className="text-xs">{category}</PixelBadge>
                            </div>
                            <PixelCardDescription className="text-sm">
                              {component.description}
                            </PixelCardDescription>
                          </PixelCardHeader>
                          <PixelCardFooter>
                            <PixelButton className="w-full" size="sm">
                              View Docs <ArrowRight className="ml-2 h-3 w-3" />
                            </PixelButton>
                          </PixelCardFooter>
                        </PixelCard>
                      </Link>
                    ))}
                  </div>
                )}
              </PixelTabsContent>
            );
          })}
        </PixelTabs>

        {/* All Components (if searching) */}
        {searchQuery && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold uppercase font-[family-name:var(--font-press-start)] mb-6 dark:text-[#ffd700]">
              Search Results ({filteredComponents.length})
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredComponents.map((component) => (
                <Link key={component.slug} href={`/docs/components/${component.slug}`}>
                  <PixelCard className="h-full hover:scale-105 transition-transform duration-0 cursor-pointer">
                    <PixelCardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <PixelCardTitle className="text-lg">{component.title}</PixelCardTitle>
                        <PixelBadge variant="default" className="text-xs">{component.category}</PixelBadge>
                      </div>
                      <PixelCardDescription className="text-sm">
                        {component.description}
                      </PixelCardDescription>
                    </PixelCardHeader>
                    <PixelCardFooter>
                      <PixelButton className="w-full" size="sm">
                        View Docs <ArrowRight className="ml-2 h-3 w-3" />
                      </PixelButton>
                    </PixelCardFooter>
                  </PixelCard>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
