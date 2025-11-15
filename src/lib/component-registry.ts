export type ComponentCategory = 
  | "Forms"
  | "Layout"
  | "Feedback"
  | "Navigation"
  | "Display"
  | "Overlays"
  | "Animations"
  | "Special";

export interface ComponentExample {
  title: string;
  description?: string;
  code: string;
}

export interface ComponentProp {
  name: string;
  type: string;
  default?: string;
  description?: string;
}

export interface ComponentDoc {
  slug: string;
  title: string;
  description: string;
  category: ComponentCategory;
  installation: string;
  importCode: string;
  usageCode: string;
  componentCode: string;
  props?: ComponentProp[];
  examples?: ComponentExample[];
}

export const componentRegistry: ComponentDoc[] = [
  // Forms
  {
    slug: "pixel-button",
    title: "Button",
    description: "Retro 8-bit styled button with pixel-perfect borders and instant state changes.",
    category: "Forms",
    installation: "npm install @radix-ui/react-slot",
    importCode: `import { PixelButton } from "@/components/ui/pixel-button"`,
    usageCode: `<PixelButton>Click Me</PixelButton>
<PixelButton variant="secondary">Secondary</PixelButton>
<PixelButton variant="destructive">Delete</PixelButton>`,
    componentCode: `/src/components/ui/pixel-button.tsx`,
    props: [
      { name: "variant", type: '"default" | "secondary" | "ghost" | "destructive"', default: '"default"', description: "Button visual style" },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Button size" },
      { name: "asChild", type: "boolean", default: "false", description: "Render as child component" },
    ],
    examples: [
      {
        title: "Variants",
        code: `<div className="flex gap-4 flex-wrap">
  <PixelButton variant="default">Default</PixelButton>
  <PixelButton variant="secondary">Secondary</PixelButton>
  <PixelButton variant="ghost">Ghost</PixelButton>
  <PixelButton variant="destructive">Destructive</PixelButton>
</div>`,
      },
      {
        title: "Sizes",
        code: `<div className="flex gap-4 items-center">
  <PixelButton size="sm">Small</PixelButton>
  <PixelButton size="md">Medium</PixelButton>
  <PixelButton size="lg">Large</PixelButton>
</div>`,
      },
    ],
  },
  {
    slug: "pixel-input",
    title: "Input",
    description: "Text input field with retro pixel borders and styling.",
    category: "Forms",
    installation: "",
    importCode: `import { PixelInput } from "@/components/ui/pixel-input"`,
    usageCode: `<PixelInput placeholder="Enter text..." />`,
    componentCode: `/src/components/ui/pixel-input.tsx`,
    props: [
      { name: "type", type: "string", default: '"text"', description: "Input type" },
      { name: "placeholder", type: "string", description: "Placeholder text" },
    ],
    examples: [
      {
        title: "Basic Input",
        code: `<PixelInput placeholder="Type something..." />`,
      },
      {
        title: "With Label",
        code: `<div className="space-y-2">
  <PixelLabel htmlFor="email">Email</PixelLabel>
  <PixelInput id="email" type="email" placeholder="email@example.com" />
</div>`,
      },
    ],
  },
  {
    slug: "pixel-checkbox",
    title: "Checkbox",
    description: "A pixel-styled checkbox component for selections.",
    category: "Forms",
    installation: "npm install @radix-ui/react-checkbox",
    importCode: `import { PixelCheckbox } from "@/components/ui/pixel-checkbox"`,
    usageCode: `<PixelCheckbox id="terms" />
<PixelLabel htmlFor="terms">Accept terms</PixelLabel>`,
    componentCode: `/src/components/ui/pixel-checkbox.tsx`,
    examples: [
      {
        title: "With Label",
        code: `<div className="flex items-center space-x-2">
  <PixelCheckbox id="terms" />
  <PixelLabel htmlFor="terms">Accept terms and conditions</PixelLabel>
</div>`,
      },
    ],
  },
  {
    slug: "pixel-switch",
    title: "Switch",
    description: "A toggle switch with pixel-art styling.",
    category: "Forms",
    installation: "npm install @radix-ui/react-switch",
    importCode: `import { PixelSwitch } from "@/components/ui/pixel-switch"`,
    usageCode: `<PixelSwitch />`,
    componentCode: `/src/components/ui/pixel-switch.tsx`,
    examples: [
      {
        title: "Basic Switch",
        code: `<div className="flex items-center space-x-2">
  <PixelSwitch id="airplane-mode" />
  <PixelLabel htmlFor="airplane-mode">Airplane Mode</PixelLabel>
</div>`,
      },
    ],
  },
  {
    slug: "pixel-radio-group",
    title: "Radio Group",
    description: "Radio button group with retro styling.",
    category: "Forms",
    installation: "npm install @radix-ui/react-radio-group",
    importCode: `import { PixelRadioGroup, PixelRadioGroupItem } from "@/components/ui/pixel-radio-group"`,
    usageCode: `<PixelRadioGroup defaultValue="option1">
  <PixelRadioGroupItem value="option1" />
  <PixelRadioGroupItem value="option2" />
</PixelRadioGroup>`,
    componentCode: `/src/components/ui/pixel-radio-group.tsx`,
  },
  {
    slug: "pixel-select",
    title: "Select",
    description: "Dropdown selection with pixel borders.",
    category: "Forms",
    installation: "npm install @radix-ui/react-select",
    importCode: `import { PixelSelect, PixelSelectTrigger, PixelSelectValue, PixelSelectContent, PixelSelectItem } from "@/components/ui/pixel-select"`,
    usageCode: `<PixelSelect>
  <PixelSelectTrigger>
    <PixelSelectValue placeholder="Select..." />
  </PixelSelectTrigger>
  <PixelSelectContent>
    <PixelSelectItem value="1">Option 1</PixelSelectItem>
    <PixelSelectItem value="2">Option 2</PixelSelectItem>
  </PixelSelectContent>
</PixelSelect>`,
    componentCode: `/src/components/ui/pixel-select.tsx`,
  },
  {
    slug: "pixel-textarea",
    title: "Textarea",
    description: "Multi-line text input with pixel styling.",
    category: "Forms",
    installation: "",
    importCode: `import { PixelTextarea } from "@/components/ui/pixel-textarea"`,
    usageCode: `<PixelTextarea placeholder="Type your message..." />`,
    componentCode: `/src/components/ui/pixel-textarea.tsx`,
  },
  {
    slug: "pixel-slider",
    title: "Slider",
    description: "Range slider with chunky pixel styling.",
    category: "Forms",
    installation: "npm install @radix-ui/react-slider",
    importCode: `import { PixelSlider } from "@/components/ui/pixel-slider"`,
    usageCode: `<PixelSlider defaultValue={[50]} max={100} step={1} />`,
    componentCode: `/src/components/ui/pixel-slider.tsx`,
  },
  {
    slug: "pixel-label",
    title: "Label",
    description: "Form label with pixel font styling.",
    category: "Forms",
    installation: "npm install @radix-ui/react-label",
    importCode: `import { PixelLabel } from "@/components/ui/pixel-label"`,
    usageCode: `<PixelLabel htmlFor="input">Label</PixelLabel>`,
    componentCode: `/src/components/ui/pixel-label.tsx`,
  },
  {
    slug: "pixel-form",
    title: "Form",
    description: "Form components integrated with react-hook-form.",
    category: "Forms",
    installation: "npm install react-hook-form @hookform/resolvers zod",
    importCode: `import { PixelForm, PixelFormField, PixelFormItem, PixelFormLabel, PixelFormControl, PixelFormMessage } from "@/components/ui/pixel-form"`,
    usageCode: `// See examples for full usage`,
    componentCode: `/src/components/ui/pixel-form.tsx`,
  },

  // Display
  {
    slug: "pixel-card",
    title: "Card",
    description: "Container component with pixel-art styling for displaying content.",
    category: "Display",
    installation: "",
    importCode: `import { PixelCard, PixelCardHeader, PixelCardTitle, PixelCardDescription, PixelCardContent, PixelCardFooter } from "@/components/ui/pixel-card"`,
    usageCode: `<PixelCard>
  <PixelCardHeader>
    <PixelCardTitle>Title</PixelCardTitle>
    <PixelCardDescription>Description</PixelCardDescription>
  </PixelCardHeader>
  <PixelCardContent>Content</PixelCardContent>
  <PixelCardFooter>Footer</PixelCardFooter>
</PixelCard>`,
    componentCode: `/src/components/ui/pixel-card.tsx`,
  },
  {
    slug: "pixel-badge",
    title: "Badge",
    description: "Small status indicator with retro styling.",
    category: "Display",
    installation: "",
    importCode: `import { PixelBadge } from "@/components/ui/pixel-badge"`,
    usageCode: `<PixelBadge>New</PixelBadge>
<PixelBadge variant="secondary">Beta</PixelBadge>`,
    componentCode: `/src/components/ui/pixel-badge.tsx`,
  },
  {
    slug: "pixel-avatar",
    title: "Avatar",
    description: "Pixelated user avatar component.",
    category: "Display",
    installation: "npm install @radix-ui/react-avatar",
    importCode: `import { PixelAvatar, PixelAvatarImage, PixelAvatarFallback } from "@/components/ui/pixel-avatar"`,
    usageCode: `<PixelAvatar>
  <PixelAvatarImage src="/avatar.png" />
  <PixelAvatarFallback>JD</PixelAvatarFallback>
</PixelAvatar>`,
    componentCode: `/src/components/ui/pixel-avatar.tsx`,
  },
  {
    slug: "pixel-skeleton",
    title: "Skeleton",
    description: "Loading placeholder with pixel styling.",
    category: "Display",
    installation: "",
    importCode: `import { PixelSkeleton } from "@/components/ui/pixel-skeleton"`,
    usageCode: `<PixelSkeleton className="w-full h-12" />`,
    componentCode: `/src/components/ui/pixel-skeleton.tsx`,
  },
  {
    slug: "pixel-table",
    title: "Table",
    description: "Data table with pixel borders.",
    category: "Display",
    installation: "",
    importCode: `import { PixelTable, PixelTableHeader, PixelTableBody, PixelTableRow, PixelTableHead, PixelTableCell } from "@/components/ui/pixel-table"`,
    usageCode: `<PixelTable>
  <PixelTableHeader>
    <PixelTableRow>
      <PixelTableHead>Name</PixelTableHead>
    </PixelTableRow>
  </PixelTableHeader>
  <PixelTableBody>
    <PixelTableRow>
      <PixelTableCell>Data</PixelTableCell>
    </PixelTableRow>
  </PixelTableBody>
</PixelTable>`,
    componentCode: `/src/components/ui/pixel-table.tsx`,
  },
  {
    slug: "pixel-kbd",
    title: "Keyboard Key",
    description: "Display keyboard shortcuts with pixel styling.",
    category: "Display",
    installation: "",
    importCode: `import { PixelKbd } from "@/components/ui/pixel-kbd"`,
    usageCode: `<PixelKbd>Ctrl</PixelKbd> + <PixelKbd>C</PixelKbd>`,
    componentCode: `/src/components/ui/pixel-kbd.tsx`,
  },
  {
    slug: "pixel-empty",
    title: "Empty State",
    description: "Empty state display component.",
    category: "Display",
    installation: "",
    importCode: `import { PixelEmpty, PixelEmptyIcon, PixelEmptyTitle, PixelEmptyDescription } from "@/components/ui/pixel-empty"`,
    usageCode: `<PixelEmpty>
  <PixelEmptyIcon />
  <PixelEmptyTitle>No items</PixelEmptyTitle>
  <PixelEmptyDescription>Get started by creating a new item</PixelEmptyDescription>
</PixelEmpty>`,
    componentCode: `/src/components/ui/pixel-empty.tsx`,
  },

  // Feedback
  {
    slug: "pixel-alert",
    title: "Alert",
    description: "Alert messages with pixel styling.",
    category: "Feedback",
    installation: "",
    importCode: `import { PixelAlert, PixelAlertTitle, PixelAlertDescription } from "@/components/ui/pixel-alert"`,
    usageCode: `<PixelAlert>
  <PixelAlertTitle>Heads up!</PixelAlertTitle>
  <PixelAlertDescription>This is an alert message</PixelAlertDescription>
</PixelAlert>`,
    componentCode: `/src/components/ui/pixel-alert.tsx`,
  },
  {
    slug: "pixel-toast",
    title: "Toast",
    description: "Toast notifications with retro styling.",
    category: "Feedback",
    installation: "",
    importCode: `import { usePixelToast } from "@/components/ui/pixel-toast"`,
    usageCode: `const { toast } = usePixelToast()

toast({
  title: "Success!",
  description: "Operation completed",
})`,
    componentCode: `/src/components/ui/pixel-toast.tsx`,
  },
  {
    slug: "pixel-progress",
    title: "Progress",
    description: "Progress bar with pixel styling.",
    category: "Feedback",
    installation: "npm install @radix-ui/react-progress",
    importCode: `import { PixelProgress } from "@/components/ui/pixel-progress"`,
    usageCode: `<PixelProgress value={60} />`,
    componentCode: `/src/components/ui/pixel-progress.tsx`,
  },
  {
    slug: "pixel-spinner",
    title: "Spinner",
    description: "Loading spinner with pixel animation.",
    category: "Feedback",
    installation: "",
    importCode: `import { PixelSpinner } from "@/components/ui/pixel-spinner"`,
    usageCode: `<PixelSpinner />`,
    componentCode: `/src/components/ui/pixel-spinner.tsx`,
  },
  {
    slug: "pixel-sonner",
    title: "Sonner Toast",
    description: "Toast notifications using Sonner library.",
    category: "Feedback",
    installation: "npm install sonner",
    importCode: `import { toast } from "sonner"`,
    usageCode: `toast.success("Saved!")`,
    componentCode: `/src/components/ui/pixel-sonner.tsx`,
  },

  // Navigation
  {
    slug: "pixel-tabs",
    title: "Tabs",
    description: "Tabbed interface with pixel styling.",
    category: "Navigation",
    installation: "npm install @radix-ui/react-tabs",
    importCode: `import { PixelTabs, PixelTabsList, PixelTabsTrigger, PixelTabsContent } from "@/components/ui/pixel-tabs"`,
    usageCode: `<PixelTabs defaultValue="tab1">
  <PixelTabsList>
    <PixelTabsTrigger value="tab1">Tab 1</PixelTabsTrigger>
    <PixelTabsTrigger value="tab2">Tab 2</PixelTabsTrigger>
  </PixelTabsList>
  <PixelTabsContent value="tab1">Content 1</PixelTabsContent>
  <PixelTabsContent value="tab2">Content 2</PixelTabsContent>
</PixelTabs>`,
    componentCode: `/src/components/ui/pixel-tabs.tsx`,
  },
  {
    slug: "pixel-breadcrumb",
    title: "Breadcrumb",
    description: "Navigation breadcrumbs with pixel styling.",
    category: "Navigation",
    installation: "",
    importCode: `import { PixelBreadcrumb, PixelBreadcrumbList, PixelBreadcrumbItem, PixelBreadcrumbLink, PixelBreadcrumbSeparator } from "@/components/ui/pixel-breadcrumb"`,
    usageCode: `<PixelBreadcrumb>
  <PixelBreadcrumbList>
    <PixelBreadcrumbItem>
      <PixelBreadcrumbLink href="/">Home</PixelBreadcrumbLink>
    </PixelBreadcrumbItem>
    <PixelBreadcrumbSeparator />
    <PixelBreadcrumbItem>
      <PixelBreadcrumbLink href="/docs">Docs</PixelBreadcrumbLink>
    </PixelBreadcrumbItem>
  </PixelBreadcrumbList>
</PixelBreadcrumb>`,
    componentCode: `/src/components/ui/pixel-breadcrumb.tsx`,
  },
  {
    slug: "pixel-pagination",
    title: "Pagination",
    description: "Page navigation with pixel styling.",
    category: "Navigation",
    installation: "",
    importCode: `import { PixelPagination, PixelPaginationContent, PixelPaginationItem, PixelPaginationLink, PixelPaginationNext, PixelPaginationPrevious } from "@/components/ui/pixel-pagination"`,
    usageCode: `<PixelPagination>
  <PixelPaginationContent>
    <PixelPaginationItem>
      <PixelPaginationPrevious href="#" />
    </PixelPaginationItem>
    <PixelPaginationItem>
      <PixelPaginationLink href="#">1</PixelPaginationLink>
    </PixelPaginationItem>
    <PixelPaginationItem>
      <PixelPaginationNext href="#" />
    </PixelPaginationItem>
  </PixelPaginationContent>
</PixelPagination>`,
    componentCode: `/src/components/ui/pixel-pagination.tsx`,
  },
  {
    slug: "pixel-menubar",
    title: "Menubar",
    description: "Application menu bar with dropdowns.",
    category: "Navigation",
    installation: "npm install @radix-ui/react-menubar",
    importCode: `import { PixelMenubar, PixelMenubarMenu, PixelMenubarTrigger, PixelMenubarContent, PixelMenubarItem } from "@/components/ui/pixel-menubar"`,
    usageCode: `<PixelMenubar>
  <PixelMenubarMenu>
    <PixelMenubarTrigger>File</PixelMenubarTrigger>
    <PixelMenubarContent>
      <PixelMenubarItem>New</PixelMenubarItem>
      <PixelMenubarItem>Open</PixelMenubarItem>
    </PixelMenubarContent>
  </PixelMenubarMenu>
</PixelMenubar>`,
    componentCode: `/src/components/ui/pixel-menubar.tsx`,
  },
  {
    slug: "pixel-navigation-menu",
    title: "Navigation Menu",
    description: "Navigation menu with dropdowns.",
    category: "Navigation",
    installation: "npm install @radix-ui/react-navigation-menu",
    importCode: `import { PixelNavigationMenu, PixelNavigationMenuList, PixelNavigationMenuItem, PixelNavigationMenuTrigger, PixelNavigationMenuContent, PixelNavigationMenuLink } from "@/components/ui/pixel-navigation-menu"`,
    usageCode: `// See examples`,
    componentCode: `/src/components/ui/pixel-navigation-menu.tsx`,
  },
  {
    slug: "pixel-command",
    title: "Command",
    description: "Command palette for keyboard navigation.",
    category: "Navigation",
    installation: "npm install cmdk",
    importCode: `import { PixelCommand, PixelCommandInput, PixelCommandList, PixelCommandEmpty, PixelCommandGroup, PixelCommandItem } from "@/components/ui/pixel-command"`,
    usageCode: `// See examples`,
    componentCode: `/src/components/ui/pixel-command.tsx`,
  },

  // Overlays
  {
    slug: "pixel-dialog",
    title: "Dialog",
    description: "Modal dialog with pixel styling.",
    category: "Overlays",
    installation: "npm install @radix-ui/react-dialog",
    importCode: `import { PixelDialog, PixelDialogTrigger, PixelDialogContent, PixelDialogHeader, PixelDialogTitle, PixelDialogDescription } from "@/components/ui/pixel-dialog"`,
    usageCode: `<PixelDialog>
  <PixelDialogTrigger>Open</PixelDialogTrigger>
  <PixelDialogContent>
    <PixelDialogHeader>
      <PixelDialogTitle>Title</PixelDialogTitle>
      <PixelDialogDescription>Description</PixelDialogDescription>
    </PixelDialogHeader>
  </PixelDialogContent>
</PixelDialog>`,
    componentCode: `/src/components/ui/pixel-dialog.tsx`,
  },
  {
    slug: "pixel-alert-dialog",
    title: "Alert Dialog",
    description: "Alert confirmation dialog.",
    category: "Overlays",
    installation: "npm install @radix-ui/react-alert-dialog",
    importCode: `import { PixelAlertDialog, PixelAlertDialogTrigger, PixelAlertDialogContent, PixelAlertDialogHeader, PixelAlertDialogTitle, PixelAlertDialogDescription, PixelAlertDialogFooter, PixelAlertDialogCancel, PixelAlertDialogAction } from "@/components/ui/pixel-alert-dialog"`,
    usageCode: `// See examples`,
    componentCode: `/src/components/ui/pixel-alert-dialog.tsx`,
  },
  {
    slug: "pixel-popover",
    title: "Popover",
    description: "Floating content container.",
    category: "Overlays",
    installation: "npm install @radix-ui/react-popover",
    importCode: `import { PixelPopover, PixelPopoverTrigger, PixelPopoverContent } from "@/components/ui/pixel-popover"`,
    usageCode: `<PixelPopover>
  <PixelPopoverTrigger>Open</PixelPopoverTrigger>
  <PixelPopoverContent>Content</PixelPopoverContent>
</PixelPopover>`,
    componentCode: `/src/components/ui/pixel-popover.tsx`,
  },
  {
    slug: "pixel-tooltip",
    title: "Tooltip",
    description: "Tooltip with pixel styling.",
    category: "Overlays",
    installation: "npm install @radix-ui/react-tooltip",
    importCode: `import { PixelTooltip, PixelTooltipTrigger, PixelTooltipContent, PixelTooltipProvider } from "@/components/ui/pixel-tooltip"`,
    usageCode: `<PixelTooltipProvider>
  <PixelTooltip>
    <PixelTooltipTrigger>Hover me</PixelTooltipTrigger>
    <PixelTooltipContent>Tooltip text</PixelTooltipContent>
  </PixelTooltip>
</PixelTooltipProvider>`,
    componentCode: `/src/components/ui/pixel-tooltip.tsx`,
  },
  {
    slug: "pixel-dropdown-menu",
    title: "Dropdown Menu",
    description: "Dropdown menu with pixel styling.",
    category: "Overlays",
    installation: "npm install @radix-ui/react-dropdown-menu",
    importCode: `import { PixelDropdownMenu, PixelDropdownMenuTrigger, PixelDropdownMenuContent, PixelDropdownMenuItem } from "@/components/ui/pixel-dropdown-menu"`,
    usageCode: `<PixelDropdownMenu>
  <PixelDropdownMenuTrigger>Open</PixelDropdownMenuTrigger>
  <PixelDropdownMenuContent>
    <PixelDropdownMenuItem>Item 1</PixelDropdownMenuItem>
    <PixelDropdownMenuItem>Item 2</PixelDropdownMenuItem>
  </PixelDropdownMenuContent>
</PixelDropdownMenu>`,
    componentCode: `/src/components/ui/pixel-dropdown-menu.tsx`,
  },
  {
    slug: "pixel-context-menu",
    title: "Context Menu",
    description: "Right-click context menu.",
    category: "Overlays",
    installation: "npm install @radix-ui/react-context-menu",
    importCode: `import { PixelContextMenu, PixelContextMenuTrigger, PixelContextMenuContent, PixelContextMenuItem } from "@/components/ui/pixel-context-menu"`,
    usageCode: `<PixelContextMenu>
  <PixelContextMenuTrigger>Right click me</PixelContextMenuTrigger>
  <PixelContextMenuContent>
    <PixelContextMenuItem>Item 1</PixelContextMenuItem>
  </PixelContextMenuContent>
</PixelContextMenu>`,
    componentCode: `/src/components/ui/pixel-context-menu.tsx`,
  },
  {
    slug: "pixel-sheet",
    title: "Sheet",
    description: "Side panel overlay.",
    category: "Overlays",
    installation: "npm install @radix-ui/react-dialog",
    importCode: `import { PixelSheet, PixelSheetTrigger, PixelSheetContent, PixelSheetHeader, PixelSheetTitle } from "@/components/ui/pixel-sheet"`,
    usageCode: `<PixelSheet>
  <PixelSheetTrigger>Open</PixelSheetTrigger>
  <PixelSheetContent>
    <PixelSheetHeader>
      <PixelSheetTitle>Title</PixelSheetTitle>
    </PixelSheetHeader>
  </PixelSheetContent>
</PixelSheet>`,
    componentCode: `/src/components/ui/pixel-sheet.tsx`,
  },
  {
    slug: "pixel-drawer",
    title: "Drawer",
    description: "Bottom drawer component.",
    category: "Overlays",
    installation: "npm install vaul",
    importCode: `import { PixelDrawer, PixelDrawerTrigger, PixelDrawerContent, PixelDrawerHeader, PixelDrawerTitle } from "@/components/ui/pixel-drawer"`,
    usageCode: `// See examples`,
    componentCode: `/src/components/ui/pixel-drawer.tsx`,
  },
  {
    slug: "pixel-hover-card",
    title: "Hover Card",
    description: "Card that appears on hover.",
    category: "Overlays",
    installation: "npm install @radix-ui/react-hover-card",
    importCode: `import { PixelHoverCard, PixelHoverCardTrigger, PixelHoverCardContent } from "@/components/ui/pixel-hover-card"`,
    usageCode: `<PixelHoverCard>
  <PixelHoverCardTrigger>Hover me</PixelHoverCardTrigger>
  <PixelHoverCardContent>Content</PixelHoverCardContent>
</PixelHoverCard>`,
    componentCode: `/src/components/ui/pixel-hover-card.tsx`,
  },

  // Layout
  {
    slug: "pixel-hero",
    title: "Hero Section",
    description: "Pixel-perfect hero sections with multiple variants and layouts for landing pages.",
    category: "Layout",
    installation: "",
    importCode: `import { 
  PixelHero, 
  PixelHeroContent, 
  PixelHeroTitle, 
  PixelHeroSubtitle, 
  PixelHeroDescription, 
  PixelHeroActions, 
  PixelHeroBadge,
  PixelHeroImage,
  PixelHeroGrid,
  PixelHeroFeature,
  PixelHeroPattern
} from "@/components/ui/pixel/pixel-hero"`,
    usageCode: `<PixelHero variant="default" size="lg">
  <PixelHeroContent>
    <PixelHeroBadge>New Release v1.0</PixelHeroBadge>
    <PixelHeroTitle>Welcome to Pixel UI</PixelHeroTitle>
    <PixelHeroSubtitle>8-Bit Retro Component Library</PixelHeroSubtitle>
    <PixelHeroDescription>
      Build nostalgic web experiences with pixel-perfect components
    </PixelHeroDescription>
    <PixelHeroActions>
      <PixelButton size="lg">Get Started</PixelButton>
      <PixelButton size="lg" variant="ghost">Learn More</PixelButton>
    </PixelHeroActions>
  </PixelHeroContent>
</PixelHero>`,
    componentCode: `/src/components/ui/pixel/pixel-hero.tsx`,
    props: [
      { name: "variant", type: '"default" | "primary" | "secondary" | "dark" | "gradient"', default: '"default"', description: "Hero visual style" },
      { name: "size", type: '"sm" | "md" | "lg" | "xl" | "full"', default: '"lg"', description: "Hero height/padding" },
      { name: "align", type: '"left" | "center" | "right"', default: '"center"', description: "Content alignment" },
      { name: "container", type: "boolean", default: "true", description: "Wrap content in container" },
    ],
    examples: [
      {
        title: "Simple Hero",
        description: "Basic hero with title and actions",
        code: `<PixelHero variant="default" size="lg">
  <PixelHeroContent>
    <PixelHeroTitle>Pixel UI</PixelHeroTitle>
    <PixelHeroDescription>
      8-bit retro components for modern web
    </PixelHeroDescription>
    <PixelHeroActions>
      <PixelButton size="lg">Get Started</PixelButton>
      <PixelButton size="lg" variant="ghost">Documentation</PixelButton>
    </PixelHeroActions>
  </PixelHeroContent>
</PixelHero>`,
      },
      {
        title: "Hero with Badge",
        description: "Hero with announcement badge",
        code: `<PixelHero variant="primary" size="lg">
  <PixelHeroContent>
    <PixelHeroBadge>🎮 New Release</PixelHeroBadge>
    <PixelHeroTitle size="xl">Level Up Your UI</PixelHeroTitle>
    <PixelHeroSubtitle size="lg">
      Nostalgic Design, Modern Code
    </PixelHeroSubtitle>
    <PixelHeroActions>
      <PixelButton size="lg">Start Building</PixelButton>
    </PixelHeroActions>
  </PixelHeroContent>
</PixelHero>`,
      },
      {
        title: "Full Screen Hero",
        description: "Hero that takes full viewport height",
        code: `<PixelHero variant="gradient" size="full">
  <PixelHeroContent>
    <PixelHeroTitle size="xl">Build Retro Experiences</PixelHeroTitle>
    <PixelHeroDescription>
      Complete component library with 50+ pixel-perfect components
    </PixelHeroDescription>
    <PixelHeroActions>
      <PixelButton size="lg">Explore Components</PixelButton>
      <PixelButton size="lg" variant="secondary">View Examples</PixelButton>
    </PixelHeroActions>
  </PixelHeroContent>
</PixelHero>`,
      },
      {
        title: "Hero with Pattern",
        description: "Hero with background pattern overlay",
        code: `<PixelHero variant="dark" size="lg" className="relative">
  <PixelHeroPattern pattern="dots" />
  <PixelHeroContent>
    <PixelHeroTitle>Pixel Perfect Design</PixelHeroTitle>
    <PixelHeroSubtitle>With Background Patterns</PixelHeroSubtitle>
    <PixelHeroActions>
      <PixelButton>Get Started</PixelButton>
    </PixelHeroActions>
  </PixelHeroContent>
</PixelHero>`,
      },
      {
        title: "Split Hero with Grid",
        description: "Two-column hero layout with image",
        code: `<PixelHero variant="default" size="lg" align="left">
  <PixelHeroGrid>
    <PixelHeroContent className="mx-0">
      <PixelHeroBadge>⭐ Featured</PixelHeroBadge>
      <PixelHeroTitle size="lg">Next-Gen Components</PixelHeroTitle>
      <PixelHeroDescription>
        Build faster with our pixel-art component library
      </PixelHeroDescription>
      <PixelHeroActions className="justify-start">
        <PixelButton>Get Started</PixelButton>
        <PixelButton variant="ghost">Learn More</PixelButton>
      </PixelHeroActions>
    </PixelHeroContent>
    <PixelHeroImage>
      <img src="/hero-image.png" alt="Hero" className="w-full h-auto" />
    </PixelHeroImage>
  </PixelHeroGrid>
</PixelHero>`,
      },
      {
        title: "Hero with Features",
        description: "Hero with feature highlights",
        code: `<PixelHero variant="secondary" size="lg">
  <PixelHeroContent>
    <PixelHeroTitle>Why Choose Pixel UI?</PixelHeroTitle>
    <PixelHeroDescription>
      Everything you need for retro web design
    </PixelHeroDescription>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <PixelHeroFeature>
        <span className="text-2xl">🎮</span>
        <div>
          <h3 className="font-bold">Retro Design</h3>
          <p className="text-sm opacity-80">Authentic 8-bit styling</p>
        </div>
      </PixelHeroFeature>
      <PixelHeroFeature>
        <span className="text-2xl">⚡</span>
        <div>
          <h3 className="font-bold">Fast</h3>
          <p className="text-sm opacity-80">Zero transitions</p>
        </div>
      </PixelHeroFeature>
      <PixelHeroFeature>
        <span className="text-2xl">♿</span>
        <div>
          <h3 className="font-bold">Accessible</h3>
          <p className="text-sm opacity-80">ARIA compliant</p>
        </div>
      </PixelHeroFeature>
    </div>
  </PixelHeroContent>
</PixelHero>`,
      },
    ],
  },
  {
    slug: "pixel-bento",
    title: "Bento Grid",
    description: "Modern bento-style grid layout with customizable spans and patterns.",
    category: "Layout",
    installation: "",
    importCode: `import { 
  PixelBentoGrid, 
  PixelBentoItem, 
  PixelBentoHeader,
  PixelBentoTitle,
  PixelBentoDescription,
  PixelBentoContent,
  PixelBentoIcon,
  PixelBentoFooter,
  PixelBentoPattern
} from "@/components/ui/pixel/pixel-bento"`,
    usageCode: `<PixelBentoGrid columns={3} gap="md">
  <PixelBentoItem span={2} variant="primary">
    <PixelBentoHeader>
      <PixelBentoIcon>🎮</PixelBentoIcon>
      <PixelBentoTitle>Featured</PixelBentoTitle>
      <PixelBentoDescription>Main content area</PixelBentoDescription>
    </PixelBentoHeader>
    <PixelBentoContent>Your content here</PixelBentoContent>
  </PixelBentoItem>
  <PixelBentoItem>
    <PixelBentoTitle>Item 2</PixelBentoTitle>
  </PixelBentoItem>
</PixelBentoGrid>`,
    componentCode: `/src/components/ui/pixel/pixel-bento.tsx`,
    examples: [
      {
        title: "Basic Grid",
        description: "Simple 3-column bento grid",
        code: `<PixelBentoGrid columns={3} gap="md">
  <PixelBentoItem>
    <PixelBentoHeader>
      <PixelBentoIcon>🎮</PixelBentoIcon>
      <PixelBentoTitle>Gaming</PixelBentoTitle>
      <PixelBentoDescription>Retro gaming components</PixelBentoDescription>
    </PixelBentoHeader>
  </PixelBentoItem>
  <PixelBentoItem>
    <PixelBentoHeader>
      <PixelBentoIcon>🎨</PixelBentoIcon>
      <PixelBentoTitle>Design</PixelBentoTitle>
      <PixelBentoDescription>Pixel-perfect styling</PixelBentoDescription>
    </PixelBentoHeader>
  </PixelBentoItem>
  <PixelBentoItem>
    <PixelBentoHeader>
      <PixelBentoIcon>⚡</PixelBentoIcon>
      <PixelBentoTitle>Fast</PixelBentoTitle>
      <PixelBentoDescription>Zero transitions</PixelBentoDescription>
    </PixelBentoHeader>
  </PixelBentoItem>
</PixelBentoGrid>`,
      },
      {
        title: "Featured Layout",
        description: "Large featured item with smaller cards",
        code: `<PixelBentoGrid columns={3} gap="lg">
  <PixelBentoItem span={2} rowSpan={2} variant="primary" hover="lift">
    <PixelBentoPattern pattern="dots" />
    <PixelBentoHeader>
      <PixelBentoIcon>🚀</PixelBentoIcon>
      <PixelBentoTitle>Featured Project</PixelBentoTitle>
      <PixelBentoDescription>
        Main showcase area with extra space
      </PixelBentoDescription>
    </PixelBentoHeader>
    <PixelBentoContent>
      <p>Large content area for featured items, projects, or announcements.</p>
    </PixelBentoContent>
    <PixelBentoFooter>
      <button className="text-sm font-bold">Learn More →</button>
    </PixelBentoFooter>
  </PixelBentoItem>
  <PixelBentoItem variant="secondary">
    <PixelBentoIcon>📊</PixelBentoIcon>
    <PixelBentoTitle>Stats</PixelBentoTitle>
  </PixelBentoItem>
  <PixelBentoItem variant="dark">
    <PixelBentoIcon>💎</PixelBentoIcon>
    <PixelBentoTitle>Premium</PixelBentoTitle>
  </PixelBentoItem>
</PixelBentoGrid>`,
      },
      {
        title: "Pattern Backgrounds",
        description: "Items with decorative patterns",
        code: `<PixelBentoGrid columns={2} gap="md">
  <PixelBentoItem variant="gradient">
    <PixelBentoPattern pattern="dots" />
    <PixelBentoHeader>
      <PixelBentoTitle>Dots Pattern</PixelBentoTitle>
    </PixelBentoHeader>
  </PixelBentoItem>
  <PixelBentoItem variant="dark">
    <PixelBentoPattern pattern="grid" />
    <PixelBentoHeader>
      <PixelBentoTitle>Grid Pattern</PixelBentoTitle>
    </PixelBentoHeader>
  </PixelBentoItem>
  <PixelBentoItem variant="primary">
    <PixelBentoPattern pattern="checkerboard" />
    <PixelBentoHeader>
      <PixelBentoTitle>Checkerboard</PixelBentoTitle>
    </PixelBentoHeader>
  </PixelBentoItem>
  <PixelBentoItem variant="secondary">
    <PixelBentoPattern pattern="scanlines" />
    <PixelBentoHeader>
      <PixelBentoTitle>Scanlines</PixelBentoTitle>
    </PixelBentoHeader>
  </PixelBentoItem>
</PixelBentoGrid>`,
      },
      {
        title: "Dashboard Layout",
        description: "Complex dashboard-style grid",
        code: `<PixelBentoGrid columns={4} gap="md">
  <PixelBentoItem span={2} variant="primary" hover="glow">
    <PixelBentoHeader>
      <PixelBentoIcon>📈</PixelBentoIcon>
      <PixelBentoTitle>Analytics</PixelBentoTitle>
      <PixelBentoDescription>Real-time data</PixelBentoDescription>
    </PixelBentoHeader>
    <PixelBentoContent>
      <div className="text-4xl font-bold">1,234</div>
      <div className="text-sm">Active Users</div>
    </PixelBentoContent>
  </PixelBentoItem>
  <PixelBentoItem variant="secondary">
    <PixelBentoIcon>⭐</PixelBentoIcon>
    <PixelBentoTitle>Rating</PixelBentoTitle>
    <div className="text-3xl font-bold mt-2">4.9</div>
  </PixelBentoItem>
  <PixelBentoItem variant="dark">
    <PixelBentoIcon>🔥</PixelBentoIcon>
    <PixelBentoTitle>Streak</PixelBentoTitle>
    <div className="text-3xl font-bold mt-2">42</div>
  </PixelBentoItem>
  <PixelBentoItem span={full}>
    <PixelBentoPattern pattern="grid" />
    <PixelBentoHeader>
      <PixelBentoTitle>Full Width Section</PixelBentoTitle>
    </PixelBentoHeader>
  </PixelBentoItem>
</PixelBentoGrid>`,
      },
      {
        title: "Ghost Items",
        description: "Dashed border placeholder items",
        code: `<PixelBentoGrid columns={3} gap="md">
  <PixelBentoItem variant="primary">
    <PixelBentoTitle>Active</PixelBentoTitle>
  </PixelBentoItem>
  <PixelBentoItem variant="ghost">
    <PixelBentoTitle>Coming Soon</PixelBentoTitle>
    <PixelBentoDescription>Feature in development</PixelBentoDescription>
  </PixelBentoItem>
  <PixelBentoItem variant="ghost">
    <PixelBentoTitle>Placeholder</PixelBentoTitle>
  </PixelBentoItem>
</PixelBentoGrid>`,
      },
      {
        title: "Hover Effects",
        description: "Interactive hover animations",
        code: `<PixelBentoGrid columns={3} gap="md">
  <PixelBentoItem hover="lift" variant="default">
    <PixelBentoIcon>🎯</PixelBentoIcon>
    <PixelBentoTitle>Lift Effect</PixelBentoTitle>
    <PixelBentoDescription>Hover to lift</PixelBentoDescription>
  </PixelBentoItem>
  <PixelBentoItem hover="glow" variant="dark">
    <PixelBentoIcon>✨</PixelBentoIcon>
    <PixelBentoTitle>Glow Effect</PixelBentoTitle>
    <PixelBentoDescription>Hover to glow</PixelBentoDescription>
  </PixelBentoItem>
  <PixelBentoItem hover="none" variant="secondary">
    <PixelBentoIcon>🔒</PixelBentoIcon>
    <PixelBentoTitle>No Effect</PixelBentoTitle>
    <PixelBentoDescription>Static item</PixelBentoDescription>
  </PixelBentoItem>
</PixelBentoGrid>`,
      },
    ],
    props: [
      {
        name: "variant",
        type: '"default" | "primary" | "secondary" | "dark" | "gradient" | "ghost"',
        default: '"default"',
        description: "Visual style variant of the bento grid or item",
      },
      {
        name: "columns",
        type: '1 | 2 | 3 | 4 | "auto"',
        default: '"auto"',
        description: "Number of columns in the grid (responsive)",
      },
      {
        name: "gap",
        type: '"none" | "sm" | "md" | "lg" | "xl"',
        default: '"md"',
        description: "Spacing between grid items",
      },
      {
        name: "span",
        type: "1 | 2 | 3 | 4 | 'full'",
        default: "1",
        description: "Number of columns the item should span",
      },
      {
        name: "rowSpan",
        type: "1 | 2 | 3 | 'full'",
        default: "1",
        description: "Number of rows the item should span",
      },
      {
        name: "hover",
        type: '"none" | "lift" | "glow"',
        default: '"none"',
        description: "Hover effect animation",
      },
      {
        name: "pattern",
        type: '"dots" | "grid" | "checkerboard" | "scanlines"',
        default: '"dots"',
        description: "Background pattern for decorative overlay",
      },
    ],
  },
  {
    slug: "pixel-features",
    title: "Features Section",
    description: "Showcase features and capabilities in a responsive grid layout.",
    category: "Layout",
    installation: "",
    importCode: `import { 
  PixelFeatures,
  PixelFeatureItem,
  PixelFeatureIcon,
  PixelFeatureTitle,
  PixelFeatureDescription,
  PixelFeatureHeader,
  PixelFeatureSectionTitle,
  PixelFeatureSectionDescription
} from "@/components/ui/pixel/pixel-features"`,
    usageCode: `<PixelFeatures columns={3} gap="lg">
  <PixelFeatureHeader>
    <PixelFeatureSectionTitle>Features</PixelFeatureSectionTitle>
    <PixelFeatureSectionDescription>
      Everything you need to build amazing products
    </PixelFeatureSectionDescription>
  </PixelFeatureHeader>
  <PixelFeatureItem hover="lift">
    <PixelFeatureIcon>🎯</PixelFeatureIcon>
    <PixelFeatureTitle>Fast Performance</PixelFeatureTitle>
    <PixelFeatureDescription>
      Lightning-fast load times
    </PixelFeatureDescription>
  </PixelFeatureItem>
</PixelFeatures>`,
    componentCode: `/src/components/ui/pixel/pixel-features.tsx`,
    examples: [
      {
        title: "Basic Features",
        description: "Simple 3-column features grid",
        code: `<PixelFeatures columns={3} gap="lg">
  <PixelFeatureItem hover="lift">
    <PixelFeatureIcon>🚀</PixelFeatureIcon>
    <PixelFeatureTitle>Fast</PixelFeatureTitle>
    <PixelFeatureDescription>
      Blazing fast performance
    </PixelFeatureDescription>
  </PixelFeatureItem>
  <PixelFeatureItem hover="lift">
    <PixelFeatureIcon>🎨</PixelFeatureIcon>
    <PixelFeatureTitle>Modern</PixelFeatureTitle>
    <PixelFeatureDescription>
      Pixel-perfect design
    </PixelFeatureDescription>
  </PixelFeatureItem>
  <PixelFeatureItem hover="lift">
    <PixelFeatureIcon>🔧</PixelFeatureIcon>
    <PixelFeatureTitle>Flexible</PixelFeatureTitle>
    <PixelFeatureDescription>
      Fully customizable
    </PixelFeatureDescription>
  </PixelFeatureItem>
</PixelFeatures>`,
      },
      {
        title: "With Header",
        description: "Features section with title and description",
        code: `<PixelFeatures columns={3} gap="lg">
  <PixelFeatureHeader>
    <PixelFeatureSectionTitle>Why Choose Us</PixelFeatureSectionTitle>
    <PixelFeatureSectionDescription>
      Everything you need to build amazing pixel-perfect applications
    </PixelFeatureSectionDescription>
  </PixelFeatureHeader>
  <PixelFeatureItem variant="primary" hover="lift">
    <PixelFeatureIcon>⚡</PixelFeatureIcon>
    <PixelFeatureTitle>Lightning Fast</PixelFeatureTitle>
    <PixelFeatureDescription>
      Optimized for performance and speed
    </PixelFeatureDescription>
  </PixelFeatureItem>
  <PixelFeatureItem variant="secondary" hover="lift">
    <PixelFeatureIcon>🎯</PixelFeatureIcon>
    <PixelFeatureTitle>Precise</PixelFeatureTitle>
    <PixelFeatureDescription>
      Pixel-perfect accuracy in every detail
    </PixelFeatureDescription>
  </PixelFeatureItem>
  <PixelFeatureItem variant="dark" hover="glow">
    <PixelFeatureIcon>🔒</PixelFeatureIcon>
    <PixelFeatureTitle>Secure</PixelFeatureTitle>
    <PixelFeatureDescription>
      Built with security best practices
    </PixelFeatureDescription>
  </PixelFeatureItem>
</PixelFeatures>`,
      },
      {
        title: "4-Column Layout",
        description: "Wider grid with more features",
        code: `<PixelFeatures columns={4} gap="md">
  <PixelFeatureItem hover="lift">
    <PixelFeatureIcon>🎮</PixelFeatureIcon>
    <PixelFeatureTitle>Gaming Ready</PixelFeatureTitle>
    <PixelFeatureDescription>
      Perfect for retro gaming UIs
    </PixelFeatureDescription>
  </PixelFeatureItem>
  <PixelFeatureItem hover="lift">
    <PixelFeatureIcon>📱</PixelFeatureIcon>
    <PixelFeatureTitle>Responsive</PixelFeatureTitle>
    <PixelFeatureDescription>
      Works on all devices
    </PixelFeatureDescription>
  </PixelFeatureItem>
  <PixelFeatureItem hover="lift">
    <PixelFeatureIcon>🌙</PixelFeatureIcon>
    <PixelFeatureTitle>Dark Mode</PixelFeatureTitle>
    <PixelFeatureDescription>
      Built-in dark mode support
    </PixelFeatureDescription>
  </PixelFeatureItem>
  <PixelFeatureItem hover="lift">
    <PixelFeatureIcon>♿</PixelFeatureIcon>
    <PixelFeatureTitle>Accessible</PixelFeatureTitle>
    <PixelFeatureDescription>
      WCAG compliant components
    </PixelFeatureDescription>
  </PixelFeatureItem>
</PixelFeatures>`,
      },
      {
        title: "Dark Variant",
        description: "Features section with dark background",
        code: `<PixelFeatures variant="dark" columns={3} gap="lg">
  <PixelFeatureItem variant="primary" hover="glow">
    <PixelFeatureIcon>💎</PixelFeatureIcon>
    <PixelFeatureTitle>Premium</PixelFeatureTitle>
    <PixelFeatureDescription>
      Enterprise-grade features
    </PixelFeatureDescription>
  </PixelFeatureItem>
  <PixelFeatureItem hover="glow">
    <PixelFeatureIcon>🔥</PixelFeatureIcon>
    <PixelFeatureTitle>Hot Features</PixelFeatureTitle>
    <PixelFeatureDescription>
      Latest and greatest capabilities
    </PixelFeatureDescription>
  </PixelFeatureItem>
  <PixelFeatureItem variant="gradient" hover="glow">
    <PixelFeatureIcon>✨</PixelFeatureIcon>
    <PixelFeatureTitle>Magic</PixelFeatureTitle>
    <PixelFeatureDescription>
      Delightful user experiences
    </PixelFeatureDescription>
  </PixelFeatureItem>
</PixelFeatures>`,
      },
    ],
    props: [
      {
        name: "variant",
        type: '"default" | "primary" | "secondary" | "dark"',
        default: '"default"',
        description: "Background style of the features section",
      },
      {
        name: "columns",
        type: "1 | 2 | 3 | 4",
        default: "3",
        description: "Number of columns in the grid (responsive)",
      },
      {
        name: "gap",
        type: '"none" | "sm" | "md" | "lg" | "xl"',
        default: '"lg"',
        description: "Spacing between feature items",
      },
      {
        name: "hover",
        type: '"none" | "lift" | "glow"',
        default: '"lift"',
        description: "Hover effect animation for feature items",
      },
    ],
  },
  {
    slug: "pixel-cta",
    title: "CTA Section",
    description: "Call-to-action section for conversions and user engagement.",
    category: "Layout",
    installation: "",
    importCode: `import { 
  PixelCta,
  PixelCtaContent,
  PixelCtaTitle,
  PixelCtaDescription,
  PixelCtaActions,
  PixelCtaPattern,
  PixelCtaBadge,
  PixelCtaHighlight
} from "@/components/ui/pixel/pixel-cta"`,
    usageCode: `<PixelCta variant="primary" size="md">
  <PixelCtaContent>
    <PixelCtaTitle>Get Started Today</PixelCtaTitle>
    <PixelCtaDescription>
      Join thousands of developers building amazing things
    </PixelCtaDescription>
    <PixelCtaActions>
      <PixelButton size="lg">Start Building</PixelButton>
      <PixelButton variant="ghost" size="lg">Learn More</PixelButton>
    </PixelCtaActions>
  </PixelCtaContent>
</PixelCta>`,
    componentCode: `/src/components/ui/pixel/pixel-cta.tsx`,
    examples: [
      {
        title: "Basic CTA",
        description: "Simple call-to-action with buttons",
        code: `<PixelCta variant="primary" size="md">
  <PixelCtaContent>
    <PixelCtaTitle>Ready to Get Started?</PixelCtaTitle>
    <PixelCtaDescription>
      Join thousands of developers building pixel-perfect applications
    </PixelCtaDescription>
    <PixelCtaActions>
      <PixelButton size="lg" variant="default">Get Started</PixelButton>
      <PixelButton size="lg" variant="ghost">Learn More</PixelButton>
    </PixelCtaActions>
  </PixelCtaContent>
</PixelCta>`,
      },
      {
        title: "With Pattern",
        description: "CTA with decorative background pattern",
        code: `<PixelCta variant="gradient" size="lg">
  <PixelCtaPattern pattern="dots" />
  <PixelCtaContent>
    <PixelCtaBadge>✨ Limited Time Offer</PixelCtaBadge>
    <PixelCtaTitle>Build Something Amazing</PixelCtaTitle>
    <PixelCtaDescription>
      Create stunning retro interfaces with our pixel-perfect components
    </PixelCtaDescription>
    <PixelCtaActions>
      <PixelButton size="lg">Start Free Trial</PixelButton>
    </PixelCtaActions>
  </PixelCtaContent>
</PixelCta>`,
      },
      {
        title: "Dark CTA",
        description: "Dark themed call-to-action",
        code: `<PixelCta variant="dark" size="md">
  <PixelCtaPattern pattern="grid" />
  <PixelCtaContent>
    <PixelCtaTitle>Join the Community</PixelCtaTitle>
    <PixelCtaDescription>
      Connect with other developers and share your creations
    </PixelCtaDescription>
    <PixelCtaActions>
      <PixelButton variant="primary" size="lg">Join Discord</PixelButton>
      <PixelButton variant="secondary" size="lg">View GitHub</PixelButton>
    </PixelCtaActions>
  </PixelCtaContent>
</PixelCta>`,
      },
      {
        title: "Left Aligned",
        description: "CTA with left-aligned content",
        code: `<PixelCta variant="secondary" size="md" align="left">
  <PixelCtaContent>
    <PixelCtaBadge>🎮 New Release</PixelCtaBadge>
    <PixelCtaTitle>Version 2.0 is Here</PixelCtaTitle>
    <PixelCtaDescription>
      Check out the latest features and improvements in our biggest update yet
    </PixelCtaDescription>
    <PixelCtaActions className="justify-start">
      <PixelButton size="lg">What's New</PixelButton>
      <PixelButton variant="ghost" size="lg">Documentation</PixelButton>
    </PixelCtaActions>
  </PixelCtaContent>
</PixelCta>`,
      },
      {
        title: "Compact CTA",
        description: "Smaller CTA for inline use",
        code: `<PixelCta variant="default" size="sm" align="center">
  <PixelCtaContent>
    <PixelCtaTitle>Subscribe to Newsletter</PixelCtaTitle>
    <PixelCtaDescription>
      Get weekly updates and exclusive content
    </PixelCtaDescription>
    <PixelCtaActions>
      <input 
        type="email" 
        placeholder="your@email.com"
        className="px-4 py-2 border-2 border-black"
      />
      <PixelButton>Subscribe</PixelButton>
    </PixelCtaActions>
  </PixelCtaContent>
</PixelCta>`,
      },
    ],
    props: [
      {
        name: "variant",
        type: '"default" | "primary" | "secondary" | "dark" | "gradient" | "success" | "accent" | "purple"',
        default: '"primary"',
        description: "Visual style variant of the CTA section - now with colorful options",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg" | "xl"',
        default: '"md"',
        description: "Padding size of the CTA section",
      },
      {
        name: "align",
        type: '"left" | "center" | "right"',
        default: '"center"',
        description: "Text alignment within the CTA",
      },
      {
        name: "pattern",
        type: '"dots" | "grid" | "checkerboard" | "scanlines"',
        default: '"dots"',
        description: "Background pattern for decorative overlay",
      },
    ],
  },
  {
    slug: "pixel-pricing",
    title: "Pricing Section",
    description: "Pricing tables and cards for displaying product or service pricing plans.",
    category: "Layout",
    installation: "",
    importCode: `import { 
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
} from "@/components/ui/pixel/pixel-pricing"`,
    usageCode: `<PixelPricing columns={3} gap="md">
  <PixelPricingCard>
    <PixelPricingTitle>Basic</PixelPricingTitle>
    <PixelPricingPrice>$9</PixelPricingPrice>
    <PixelPricingPeriod>per month</PixelPricingPeriod>
    <PixelPricingFeatures>
      <PixelPricingFeature>10 Projects</PixelPricingFeature>
      <PixelPricingFeature>5GB Storage</PixelPricingFeature>
    </PixelPricingFeatures>
    <PixelPricingActions>
      <PixelButton>Get Started</PixelButton>
    </PixelPricingActions>
  </PixelPricingCard>
</PixelPricing>`,
    componentCode: `/src/components/ui/pixel/pixel-pricing.tsx`,
    examples: [
      {
        title: "Basic Pricing Cards",
        description: "Simple 3-column pricing layout",
        code: `<PixelPricing columns={3} gap="md">
  <PixelPricingCard variant="default">
    <PixelPricingTitle>Basic</PixelPricingTitle>
    <PixelPricingPrice>$9</PixelPricingPrice>
    <PixelPricingPeriod>per month</PixelPricingPeriod>
    <PixelPricingDescription>Perfect for individuals</PixelPricingDescription>
    <PixelPricingFeatures>
      <PixelPricingFeature>10 Projects</PixelPricingFeature>
      <PixelPricingFeature>5GB Storage</PixelPricingFeature>
      <PixelPricingFeature>Email Support</PixelPricingFeature>
    </PixelPricingFeatures>
    <PixelPricingActions>
      <PixelButton variant="secondary">Choose Plan</PixelButton>
    </PixelPricingActions>
  </PixelPricingCard>
  
  <PixelPricingCard variant="featured">
    <PixelPricingBadge>Most Popular</PixelPricingBadge>
    <PixelPricingTitle>Pro</PixelPricingTitle>
    <PixelPricingPrice>$29</PixelPricingPrice>
    <PixelPricingPeriod>per month</PixelPricingPeriod>
    <PixelPricingDescription>Perfect for teams</PixelPricingDescription>
    <PixelPricingFeatures>
      <PixelPricingFeature>Unlimited Projects</PixelPricingFeature>
      <PixelPricingFeature>50GB Storage</PixelPricingFeature>
      <PixelPricingFeature>Priority Support</PixelPricingFeature>
    </PixelPricingFeatures>
    <PixelPricingActions>
      <PixelButton>Choose Plan</PixelButton>
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
      <PixelPricingFeature>24/7 Support</PixelPricingFeature>
    </PixelPricingFeatures>
    <PixelPricingActions>
      <PixelButton variant="secondary">Contact Sales</PixelButton>
    </PixelPricingActions>
  </PixelPricingCard>
</PixelPricing>`,
      },
    ],
    props: [
      { name: "columns", type: '2 | 3 | 4', default: '3', description: "Number of columns in the grid" },
      { name: "gap", type: '"none" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: "Gap between pricing cards" },
      { name: "variant", type: '"default" | "primary" | "secondary" | "dark" | "featured"', default: '"default"', description: "Card visual style" },
    ],
  },
  {
    slug: "pixel-footer",
    title: "Footer",
    description: "Website footer with links, social media, and copyright information.",
    category: "Layout",
    installation: "",
    importCode: `import { 
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
} from "@/components/ui/pixel/pixel-footer"`,
    usageCode: `<PixelFooter variant="default" size="md">
  <PixelFooterGrid>
    <PixelFooterSection>
      <PixelFooterTitle>Company</PixelFooterTitle>
      <PixelFooterLinks>
        <PixelFooterLink href="/about">About</PixelFooterLink>
        <PixelFooterLink href="/contact">Contact</PixelFooterLink>
      </PixelFooterLinks>
    </PixelFooterSection>
  </PixelFooterGrid>
  <PixelFooterDivider />
  <PixelFooterBottom>
    <PixelFooterCopyright>© 2025 Your Company</PixelFooterCopyright>
    <PixelFooterSocial>
      <PixelFooterSocialLink href="#" icon="🐦" />
      <PixelFooterSocialLink href="#" icon="💼" />
    </PixelFooterSocial>
  </PixelFooterBottom>
</PixelFooter>`,
    componentCode: `/src/components/ui/pixel/pixel-footer.tsx`,
    examples: [
      {
        title: "Basic Footer",
        description: "Simple footer with sections",
        code: `<PixelFooter variant="default" size="md">
  <PixelFooterGrid>
    <PixelFooterSection>
      <PixelFooterTitle>Product</PixelFooterTitle>
      <PixelFooterLinks>
        <PixelFooterLink href="#">Features</PixelFooterLink>
        <PixelFooterLink href="#">Pricing</PixelFooterLink>
        <PixelFooterLink href="#">Changelog</PixelFooterLink>
      </PixelFooterLinks>
    </PixelFooterSection>
    
    <PixelFooterSection>
      <PixelFooterTitle>Company</PixelFooterTitle>
      <PixelFooterLinks>
        <PixelFooterLink href="#">About</PixelFooterLink>
        <PixelFooterLink href="#">Blog</PixelFooterLink>
        <PixelFooterLink href="#">Careers</PixelFooterLink>
      </PixelFooterLinks>
    </PixelFooterSection>
    
    <PixelFooterSection>
      <PixelFooterTitle>Resources</PixelFooterTitle>
      <PixelFooterLinks>
        <PixelFooterLink href="#">Docs</PixelFooterLink>
        <PixelFooterLink href="#">Guides</PixelFooterLink>
        <PixelFooterLink href="#">API</PixelFooterLink>
      </PixelFooterLinks>
    </PixelFooterSection>
    
    <PixelFooterSection>
      <PixelFooterTitle>Legal</PixelFooterTitle>
      <PixelFooterLinks>
        <PixelFooterLink href="#">Privacy</PixelFooterLink>
        <PixelFooterLink href="#">Terms</PixelFooterLink>
        <PixelFooterLink href="#">License</PixelFooterLink>
      </PixelFooterLinks>
    </PixelFooterSection>
  </PixelFooterGrid>
  
  <PixelFooterDivider />
  
  <PixelFooterBottom>
    <PixelFooterCopyright>© 2025 Pixel UI. All rights reserved.</PixelFooterCopyright>
    <PixelFooterSocial>
      <PixelFooterSocialLink href="#" icon="🐦" />
      <PixelFooterSocialLink href="#" icon="📘" />
      <PixelFooterSocialLink href="#" icon="💼" />
      <PixelFooterSocialLink href="#" icon="📷" />
    </PixelFooterSocial>
  </PixelFooterBottom>
</PixelFooter>`,
      },
    ],
    props: [
      { name: "variant", type: '"default" | "primary" | "secondary" | "dark"', default: '"default"', description: "Footer visual style" },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Padding size" },
    ],
  },
  {
    slug: "pixel-testimonials",
    title: "Testimonials Section",
    description: "Display customer reviews and testimonials in a grid layout.",
    category: "Layout",
    installation: "",
    importCode: `import { 
  PixelTestimonials,
  PixelTestimonialCard,
  PixelTestimonialQuote,
  PixelTestimonialAuthor,
  PixelTestimonialAvatar,
  PixelTestimonialInfo,
  PixelTestimonialName,
  PixelTestimonialRole,
  PixelTestimonialRating,
  PixelTestimonialsHeader,
  PixelTestimonialsSectionTitle,
  PixelTestimonialsSectionDescription
} from "@/components/ui/pixel/pixel-testimonials"`,
    usageCode: `<PixelTestimonials columns={3} gap="md">
  <PixelTestimonialCard>
    <PixelTestimonialRating rating={5} />
    <PixelTestimonialQuote>
      "Amazing product! Highly recommended."
    </PixelTestimonialQuote>
    <PixelTestimonialAuthor>
      <PixelTestimonialAvatar>JD</PixelTestimonialAvatar>
      <PixelTestimonialInfo>
        <PixelTestimonialName>John Doe</PixelTestimonialName>
        <PixelTestimonialRole>CEO, Company</PixelTestimonialRole>
      </PixelTestimonialInfo>
    </PixelTestimonialAuthor>
  </PixelTestimonialCard>
</PixelTestimonials>`,
    componentCode: `/src/components/ui/pixel/pixel-testimonials.tsx`,
    examples: [
      {
        title: "Basic Testimonials",
        description: "Simple testimonial cards with ratings",
        code: `<PixelTestimonials columns={3} gap="md">
  <PixelTestimonialCard variant="default">
    <PixelTestimonialRating rating={5} />
    <PixelTestimonialQuote>
      "This component library completely transformed our design workflow. The pixel-art aesthetic is perfect for our retro gaming platform!"
    </PixelTestimonialQuote>
    <PixelTestimonialAuthor>
      <PixelTestimonialAvatar>SM</PixelTestimonialAvatar>
      <PixelTestimonialInfo>
        <PixelTestimonialName>Sarah Miller</PixelTestimonialName>
        <PixelTestimonialRole>Lead Designer, GameDev Studios</PixelTestimonialRole>
      </PixelTestimonialInfo>
    </PixelTestimonialAuthor>
  </PixelTestimonialCard>
  
  <PixelTestimonialCard variant="primary">
    <PixelTestimonialRating rating={5} />
    <PixelTestimonialQuote>
      "Easy to use, highly customizable, and the documentation is excellent. Our team shipped faster than ever before."
    </PixelTestimonialQuote>
    <PixelTestimonialAuthor>
      <PixelTestimonialAvatar>MJ</PixelTestimonialAvatar>
      <PixelTestimonialInfo>
        <PixelTestimonialName>Mike Johnson</PixelTestimonialName>
        <PixelTestimonialRole>CTO, StartupXYZ</PixelTestimonialRole>
      </PixelTestimonialInfo>
    </PixelTestimonialAuthor>
  </PixelTestimonialCard>
  
  <PixelTestimonialCard variant="default">
    <PixelTestimonialRating rating={4} />
    <PixelTestimonialQuote>
      "The attention to detail is remarkable. Every component feels thoughtfully crafted and production-ready."
    </PixelTestimonialQuote>
    <PixelTestimonialAuthor>
      <PixelTestimonialAvatar>EK</PixelTestimonialAvatar>
      <PixelTestimonialInfo>
        <PixelTestimonialName>Emma Kim</PixelTestimonialName>
        <PixelTestimonialRole>Product Manager, TechCorp</PixelTestimonialRole>
      </PixelTestimonialInfo>
    </PixelTestimonialAuthor>
  </PixelTestimonialCard>
</PixelTestimonials>`,
      },
    ],
    props: [
      { name: "columns", type: '1 | 2 | 3', default: '3', description: "Number of columns in the grid" },
      { name: "gap", type: '"none" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: "Gap between testimonial cards" },
      { name: "variant", type: '"default" | "primary" | "secondary" | "dark"', default: '"default"', description: "Card visual style" },
    ],
  },
  {
    slug: "pixel-stats",
    title: "Stats Section",
    description: "Display key metrics and statistics in an engaging grid layout.",
    category: "Layout",
    installation: "",
    importCode: `import { 
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
} from "@/components/ui/pixel/pixel-stats"`,
    usageCode: `<PixelStats columns={4} gap="md">
  <PixelStatItem>
    <PixelStatIcon>📊</PixelStatIcon>
    <PixelStatValue>10K+</PixelStatValue>
    <PixelStatLabel>Active Users</PixelStatLabel>
    <PixelStatTrend trend="up">+12%</PixelStatTrend>
  </PixelStatItem>
</PixelStats>`,
    componentCode: `/src/components/ui/pixel/pixel-stats.tsx`,
    examples: [
      {
        title: "Basic Stats Grid",
        description: "Simple 4-column stats display",
        code: `<PixelStats columns={4} gap="md">
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
</PixelStats>`,
      },
    ],
    props: [
      { name: "columns", type: '2 | 3 | 4', default: '4', description: "Number of columns in the grid" },
      { name: "gap", type: '"none" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: "Gap between stat items" },
      { name: "variant", type: '"default" | "primary" | "secondary" | "dark" | "gradient"', default: '"default"', description: "Stat item visual style" },
      { name: "trend", type: '"up" | "down" | "neutral"', default: '"neutral"', description: "Trend indicator direction and color" },
    ],
  },
  {
    slug: "pixel-faq",
    title: "FAQ Section",
    description: "Frequently Asked Questions with accordion-style expandable answers.",
    category: "Layout",
    installation: "",
    importCode: `import { 
  PixelFaq,
  PixelFaqList,
  PixelFaqItem,
  PixelFaqQuestion,
  PixelFaqAnswer,
  PixelFaqHeader,
  PixelFaqSectionTitle,
  PixelFaqSectionDescription,
  PixelFaqCategory,
  PixelFaqCategoryTitle
} from "@/components/ui/pixel/pixel-faq"`,
    usageCode: `<PixelFaq variant="default">
  <PixelFaqHeader>
    <PixelFaqSectionTitle>FAQ</PixelFaqSectionTitle>
    <PixelFaqSectionDescription>
      Commonly asked questions
    </PixelFaqSectionDescription>
  </PixelFaqHeader>
  <PixelFaqList>
    <PixelFaqItem>
      <PixelFaqQuestion>How do I get started?</PixelFaqQuestion>
      <PixelFaqAnswer>Simply install and import components.</PixelFaqAnswer>
    </PixelFaqItem>
  </PixelFaqList>
</PixelFaq>`,
    componentCode: `/src/components/ui/pixel/pixel-faq.tsx`,
    examples: [
      {
        title: "Basic FAQ",
        description: "Simple accordion-style FAQ",
        code: `<PixelFaq variant="default">
  <PixelFaqHeader>
    <PixelFaqSectionTitle>Frequently Asked Questions</PixelFaqSectionTitle>
    <PixelFaqSectionDescription>
      Find answers to common questions about our pixel component library
    </PixelFaqSectionDescription>
  </PixelFaqHeader>
  
  <PixelFaqList>
    <PixelFaqItem defaultOpen>
      <PixelFaqQuestion>How do I install the components?</PixelFaqQuestion>
      <PixelFaqAnswer>
        You can install individual components by copying the code from our docs, or install the entire library via npm. Each component includes installation instructions and dependencies.
      </PixelFaqAnswer>
    </PixelFaqItem>
    
    <PixelFaqItem>
      <PixelFaqQuestion>Is this library free to use?</PixelFaqQuestion>
      <PixelFaqAnswer>
        Yes! All components are completely free and open source. You can use them in personal and commercial projects without any restrictions.
      </PixelFaqAnswer>
    </PixelFaqItem>
    
    <PixelFaqItem>
      <PixelFaqQuestion>Can I customize the pixel borders and shadows?</PixelFaqQuestion>
      <PixelFaqAnswer>
        Absolutely! All components use Tailwind CSS classes and support className prop for easy customization. You can modify borders, shadows, colors, and more.
      </PixelFaqAnswer>
    </PixelFaqItem>
    
    <PixelFaqItem>
      <PixelFaqQuestion>Do these components support dark mode?</PixelFaqQuestion>
      <PixelFaqAnswer>
        Yes, all components are built with dark mode support using Tailwind's dark: variant. They automatically adapt to your system's color scheme.
      </PixelFaqAnswer>
    </PixelFaqItem>
  </PixelFaqList>
</PixelFaq>`,
      },
    ],
    props: [
      { name: "variant", type: '"default" | "primary" | "secondary" | "dark"', default: '"default"', description: "FAQ section visual style" },
      { name: "defaultOpen", type: "boolean", default: "false", description: "Whether the FAQ item is open by default" },
    ],
  },
  {
    slug: "pixel-accordion",
    title: "Accordion",
    description: "Collapsible content sections.",
    category: "Layout",
    installation: "npm install @radix-ui/react-accordion",
    importCode: `import { PixelAccordion, PixelAccordionItem, PixelAccordionTrigger, PixelAccordionContent } from "@/components/ui/pixel-accordion"`,
    usageCode: `<PixelAccordion type="single" collapsible>
  <PixelAccordionItem value="item-1">
    <PixelAccordionTrigger>Section 1</PixelAccordionTrigger>
    <PixelAccordionContent>Content 1</PixelAccordionContent>
  </PixelAccordionItem>
</PixelAccordion>`,
    componentCode: `/src/components/ui/pixel-accordion.tsx`,
  },
  {
    slug: "pixel-separator",
    title: "Separator",
    description: "Visual divider with pixel styling and expandable sections.",
    category: "Layout",
    installation: "npm install @radix-ui/react-separator @radix-ui/react-collapsible",
    importCode: `import { PixelSeparator, PixelExpandableSeparator, PixelSectionDivider } from "@/components/ui/pixel-separator"`,
    usageCode: `<PixelSeparator />
<PixelExpandableSeparator title="Expand Me">
  Hidden content
</PixelExpandableSeparator>
<PixelSectionDivider label="Section" />`,
    componentCode: `/src/components/ui/pixel-separator.tsx`,
  },
  {
    slug: "pixel-collapsible",
    title: "Collapsible",
    description: "Collapsible content container.",
    category: "Layout",
    installation: "npm install @radix-ui/react-collapsible",
    importCode: `import { PixelCollapsible, PixelCollapsibleTrigger, PixelCollapsibleContent } from "@/components/ui/pixel-collapsible"`,
    usageCode: `<PixelCollapsible>
  <PixelCollapsibleTrigger>Toggle</PixelCollapsibleTrigger>
  <PixelCollapsibleContent>Content</PixelCollapsibleContent>
</PixelCollapsible>`,
    componentCode: `/src/components/ui/pixel-collapsible.tsx`,
  },
  {
    slug: "pixel-scroll-area",
    title: "Scroll Area",
    description: "Scrollable container with pixel styling.",
    category: "Layout",
    installation: "npm install @radix-ui/react-scroll-area",
    importCode: `import { PixelScrollArea } from "@/components/ui/pixel-scroll-area"`,
    usageCode: `<PixelScrollArea className="h-72">
  {/* Long content */}
</PixelScrollArea>`,
    componentCode: `/src/components/ui/pixel-scroll-area.tsx`,
  },
  {
    slug: "pixel-aspect-ratio",
    title: "Aspect Ratio",
    description: "Container with fixed aspect ratio.",
    category: "Layout",
    installation: "npm install @radix-ui/react-aspect-ratio",
    importCode: `import { PixelAspectRatio } from "@/components/ui/pixel-aspect-ratio"`,
    usageCode: `<PixelAspectRatio ratio={16 / 9}>
  <img src="..." alt="..." />
</PixelAspectRatio>`,
    componentCode: `/src/components/ui/pixel-aspect-ratio.tsx`,
  },
  {
    slug: "pixel-resizable",
    title: "Resizable",
    description: "Resizable panel container.",
    category: "Layout",
    installation: "npm install react-resizable-panels",
    importCode: `import { PixelResizablePanelGroup, PixelResizablePanel, PixelResizableHandle } from "@/components/ui/pixel-resizable"`,
    usageCode: `// See examples`,
    componentCode: `/src/components/ui/pixel-resizable.tsx`,
  },
  {
    slug: "pixel-carousel",
    title: "Carousel",
    description: "Image/content carousel with pixel styling.",
    category: "Layout",
    installation: "npm install embla-carousel-react",
    importCode: `import { PixelCarousel, PixelCarouselContent, PixelCarouselItem, PixelCarouselNext, PixelCarouselPrevious } from "@/components/ui/pixel-carousel"`,
    usageCode: `// See examples`,
    componentCode: `/src/components/ui/pixel-carousel.tsx`,
  },

  // Animations - Text Effects
  {
    slug: "pixel-blur-text",
    title: "Blur Text",
    description: "Animated text that fades in from blur on scroll or hover.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelBlurText } from "@/components/ui/pixel/animations/pixel-blur-text"`,
    usageCode: `<PixelBlurText text="Hello World" variant="primary" size="lg" />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-blur-text.tsx`,
    props: [
      { name: "text", type: "string", description: "The text to display" },
      { name: "duration", type: "number", default: "1", description: "Animation duration in seconds" },
      { name: "animateOnHover", type: "boolean", default: "false", description: "Trigger animation on hover instead of scroll" },
      { name: "variant", type: '"default" | "primary" | "secondary" | "accent"', default: '"default"', description: "Color variant" },
      { name: "size", type: '"sm" | "md" | "lg" | "xl"', default: '"md"', description: "Text size" },
    ],
    examples: [
      {
        title: "Basic Usage",
        code: `<PixelBlurText text="Pixel Perfect!" variant="primary" size="lg" />`,
      },
      {
        title: "Hover Triggered",
        code: `<PixelBlurText 
  text="Hover Me" 
  variant="accent" 
  size="md"
  animateOnHover={true}
/>`,
      },
    ],
  },
  {
    slug: "pixel-glitch-text",
    title: "Glitch Text",
    description: "Retro glitch effect text animation with cyber aesthetics.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelGlitchText } from "@/components/ui/pixel/animations/pixel-glitch-text"`,
    usageCode: `<PixelGlitchText text="GLITCH" variant="cyber" size="xl" />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-glitch-text.tsx`,
    props: [
      { name: "text", type: "string", description: "The text to display" },
      { name: "speed", type: "number", default: "0.5", description: "Animation speed multiplier" },
      { name: "enableShadows", type: "boolean", default: "true", description: "Show glitch shadow effects" },
      { name: "enableOnHover", type: "boolean", default: "false", description: "Only glitch on hover" },
      { name: "variant", type: '"default" | "primary" | "secondary" | "cyber"', default: '"default"', description: "Color variant" },
    ],
    examples: [
      {
        title: "Cyber Style",
        code: `<PixelGlitchText 
  text="SYSTEM ERROR" 
  variant="cyber" 
  size="xl"
  speed={0.8}
/>`,
      },
      {
        title: "Hover Effect",
        code: `<PixelGlitchText 
  text="CLICK ME" 
  variant="primary"
  enableOnHover={true}
/>`,
      },
    ],
  },
  {
    slug: "pixel-gradient-text",
    title: "Gradient Text",
    description: "Animated gradient text with smooth color transitions.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelGradientText } from "@/components/ui/pixel/animations/pixel-gradient-text"`,
    usageCode: `<PixelGradientText text="RAINBOW" variant="sunset" size="lg" />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-gradient-text.tsx`,
    props: [
      { name: "text", type: "string", description: "The text to display" },
      { name: "animationSpeed", type: "number", default: "8", description: "Gradient animation speed in seconds" },
      { name: "showBorder", type: "boolean", default: "false", description: "Show pixel border around text" },
      { name: "variant", type: '"sunset" | "ocean" | "forest" | "cyber" | "gold"', default: '"sunset"', description: "Gradient color scheme" },
    ],
    examples: [
      {
        title: "Sunset Gradient",
        code: `<PixelGradientText 
  text="SUNSET VIBES" 
  variant="sunset" 
  size="xl"
  animationSpeed={6}
/>`,
      },
      {
        title: "With Border",
        code: `<PixelGradientText 
  text="BORDERED" 
  variant="ocean"
  showBorder={true}
/>`,
      },
    ],
  },
  {
    slug: "pixel-shiny-text",
    title: "Shiny Text",
    description: "Metallic sheen effect that sweeps across text.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelShinyText } from "@/components/ui/pixel/animations/pixel-shiny-text"`,
    usageCode: `<PixelShinyText text="GOLD" variant="gold" size="lg" />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-shiny-text.tsx`,
    props: [
      { name: "text", type: "string", description: "The text to display" },
      { name: "speed", type: "number", default: "5", description: "Shine animation speed in seconds" },
      { name: "disabled", type: "boolean", default: "false", description: "Disable animation" },
      { name: "variant", type: '"gold" | "silver" | "rainbow" | "fire"', default: '"gold"', description: "Shine color" },
    ],
    examples: [
      {
        title: "Gold Shine",
        code: `<PixelShinyText 
  text="LEGENDARY" 
  variant="gold" 
  size="xl"
  speed={3}
/>`,
      },
    ],
  },
  {
    slug: "pixel-count-up",
    title: "Count Up",
    description: "Animated number counter with customizable formatting.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelCountUp } from "@/components/ui/pixel/animations/pixel-count-up"`,
    usageCode: `<PixelCountUp to={1000} duration={2} separator="," />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-count-up.tsx`,
    props: [
      { name: "to", type: "number", description: "Target number to count to" },
      { name: "from", type: "number", default: "0", description: "Starting number" },
      { name: "duration", type: "number", default: "2", description: "Animation duration in seconds" },
      { name: "delay", type: "number", default: "0", description: "Delay before animation starts" },
      { name: "separator", type: "string", default: '""', description: "Thousands separator" },
      { name: "prefix", type: "string", default: '""', description: "Prefix (e.g., '$')" },
      { name: "suffix", type: "string", default: '""', description: "Suffix (e.g., '+')" },
    ],
    examples: [
      {
        title: "Currency Counter",
        code: `<PixelCountUp 
  to={9999} 
  prefix="$" 
  separator=","
  variant="success"
  size="xl"
/>`,
      },
      {
        title: "Score Counter",
        code: `<PixelCountUp 
  to={1000000} 
  suffix="pts"
  duration={3}
  variant="primary"
/>`,
      },
    ],
  },
  {
    slug: "pixel-circular-text",
    title: "Circular Text",
    description: "Text arranged in a circle with rotation animation.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelCircularText } from "@/components/ui/pixel/animations/pixel-circular-text"`,
    usageCode: `<PixelCircularText text="ROTATING TEXT" spinDuration={20} />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-circular-text.tsx`,
    props: [
      { name: "text", type: "string", description: "The text to display in a circle" },
      { name: "spinDuration", type: "number", default: "20", description: "Rotation duration in seconds" },
      { name: "onHover", type: '"slowDown" | "speedUp" | "pause" | "reverse"', default: '"speedUp"', description: "Hover behavior" },
    ],
    examples: [
      {
        title: "Basic Rotation",
        code: `<PixelCircularText 
  text="ROUND AND ROUND" 
  spinDuration={15}
  variant="primary"
  size="lg"
/>`,
      },
    ],
  },

  // Animations - Card Effects
  {
    slug: "pixel-spotlight-card",
    title: "Spotlight Card",
    description: "Card with animated spotlight effect following the cursor.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelSpotlightCard } from "@/components/ui/pixel/animations/pixel-spotlight-card"`,
    usageCode: `<PixelSpotlightCard variant="primary" size="md">
  <h3>Card Content</h3>
</PixelSpotlightCard>`,
    componentCode: `/src/components/ui/pixel/animations/pixel-spotlight-card.tsx`,
    props: [
      { name: "spotlightColor", type: "string", default: '"rgba(255, 215, 0, 0.3)"', description: "Spotlight color in rgba format" },
      { name: "spotlightSize", type: "number", default: "200", description: "Spotlight radius in pixels" },
      { name: "variant", type: '"default" | "primary" | "secondary" | "accent"', default: '"default"', description: "Card style variant" },
    ],
    examples: [
      {
        title: "Primary Spotlight",
        code: `<PixelSpotlightCard 
  variant="primary" 
  size="lg"
  spotlightColor="rgba(255, 140, 0, 0.4)"
  spotlightSize={250}
>
  <h3 className="text-2xl font-bold mb-2">Featured</h3>
  <p>Hover to reveal spotlight effect!</p>
</PixelSpotlightCard>`,
      },
    ],
  },
  {
    slug: "pixel-glare-card",
    title: "Glare Card",
    description: "Card with glare/shine effect on hover.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelGlareCard } from "@/components/ui/pixel/animations/pixel-glare-card"`,
    usageCode: `<PixelGlareCard variant="glass" size="md">
  <h3>Shiny Card</h3>
</PixelGlareCard>`,
    componentCode: `/src/components/ui/pixel/animations/pixel-glare-card.tsx`,
    props: [
      { name: "glareColor", type: "string", default: '"#ffffff"', description: "Glare color" },
      { name: "glareOpacity", type: "number", default: "0.5", description: "Glare opacity (0-1)" },
      { name: "glareSize", type: "number", default: "250", description: "Glare gradient size" },
      { name: "playOnce", type: "boolean", default: "false", description: "Only play animation once" },
    ],
    examples: [
      {
        title: "Glass Effect",
        code: `<PixelGlareCard 
  variant="glass" 
  glareColor="#ffd700"
  glareOpacity={0.6}
>
  <div className="p-6">
    <h3>Premium Card</h3>
    <p>With beautiful glare effect</p>
  </div>
</PixelGlareCard>`,
      },
    ],
  },
  
  // Additional Text Animations
  {
    slug: "pixel-ascii-text",
    title: "ASCII Text",
    description: "Convert text to ASCII art with animation effects.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelASCIIText } from "@/components/ui/pixel/animations/pixel-ascii-text"`,
    usageCode: `<PixelASCIIText text="PIXEL" />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-ascii-text.tsx`,
  },
  {
    slug: "pixel-split-text",
    title: "Split Text",
    description: "Text animation with split and stagger effects.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelSplitText } from "@/components/ui/pixel/animations/pixel-split-text"`,
    usageCode: `<PixelSplitText text="SPLIT" splitType="chars" />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-split-text.tsx`,
  },
  {
    slug: "pixel-rotating-text",
    title: "Rotating Text",
    description: "Text that rotates through multiple words or phrases.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelRotatingText } from "@/components/ui/pixel/animations/pixel-rotating-text"`,
    usageCode: `<PixelRotatingText words={["Fast", "Simple", "Pixel"]} />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-rotating-text.tsx`,
  },
  {
    slug: "pixel-letter-glitch",
    title: "Letter Glitch",
    description: "Individual letter glitch effect with random characters.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelLetterGlitch } from "@/components/ui/pixel/animations/pixel-letter-glitch"`,
    usageCode: `<PixelLetterGlitch />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-letter-glitch.tsx`,
  },
  {
    slug: "pixel-shuffle-text",
    title: "Shuffle Text",
    description: "Text shuffle animation with scramble effect.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelShuffleText } from "@/components/ui/pixel/animations/pixel-shuffle-text"`,
    usageCode: `<PixelShuffleText text="SHUFFLE" />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-shuffle-text.tsx`,
  },
  {
    slug: "pixel-text-pressure",
    title: "Text Pressure",
    description: "Text that responds to mouse pressure with variable font.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelTextPressure } from "@/components/ui/pixel/animations/pixel-text-pressure"`,
    usageCode: `<PixelTextPressure text="PRESS" />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-text-pressure.tsx`,
  },
  {
    slug: "pixel-true-focus",
    title: "True Focus",
    description: "Text with focus animation highlighting one word at a time.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelTrueFocus } from "@/components/ui/pixel/animations/pixel-true-focus"`,
    usageCode: `<PixelTrueFocus sentence="True Focus" />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-true-focus.tsx`,
  },

  // Additional Card Effects
  {
    slug: "pixel-tilted-card",
    title: "Tilted Card",
    description: "3D tilting card effect that follows mouse movement.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelTiltedCard } from "@/components/ui/pixel/animations/pixel-tilted-card"`,
    usageCode: `<PixelTiltedCard imageSrc="/image.jpg" />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-tilted-card.tsx`,
  },
  {
    slug: "pixel-decay-card",
    title: "Decay Card",
    description: "Card with decay/disintegration effect on hover.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelDecayCard } from "@/components/ui/pixel/animations/pixel-decay-card"`,
    usageCode: `<PixelDecayCard image="/image.jpg" />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-decay-card.tsx`,
  },
  {
    slug: "pixel-sticker-peel",
    title: "Sticker Peel",
    description: "Draggable sticker with peel-back effect.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelStickerPeel } from "@/components/ui/pixel/animations/pixel-sticker-peel"`,
    usageCode: `<PixelStickerPeel imageSrc="/sticker.png" />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-sticker-peel.tsx`,
  },
  {
    slug: "pixel-bounce-cards",
    title: "Bounce Cards",
    description: "Cards with bouncy hover animations.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelBounceCards } from "@/components/ui/pixel/animations/pixel-bounce-cards"`,
    usageCode: `<PixelBounceCards />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-bounce-cards.tsx`,
  },

  // Background Effects
  {
    slug: "pixel-dot-grid",
    title: "Dot Grid",
    description: "Interactive dot grid background with mouse effects.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelDotGrid } from "@/components/ui/pixel/animations/pixel-dot-grid"`,
    usageCode: `<PixelDotGrid />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-dot-grid.tsx`,
  },
  {
    slug: "pixel-squares",
    title: "Squares",
    description: "Animated square grid background.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelSquares } from "@/components/ui/pixel/animations/pixel-squares"`,
    usageCode: `<PixelSquares />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-squares.tsx`,
  },
  {
    slug: "pixel-waves",
    title: "Waves",
    description: "Wave animation background with mouse interaction.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelWaves } from "@/components/ui/pixel/animations/pixel-waves"`,
    usageCode: `<PixelWaves />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-waves.tsx`,
  },
  {
    slug: "pixel-ribbons",
    title: "Ribbons",
    description: "Flowing ribbon effects following the cursor.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelRibbons } from "@/components/ui/pixel/animations/pixel-ribbons"`,
    usageCode: `<PixelRibbons />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-ribbons.tsx`,
  },
  {
    slug: "pixel-meta-balls",
    title: "Meta Balls",
    description: "Liquid meta balls effect with blob interactions.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelMetaBalls } from "@/components/ui/pixel/animations/pixel-meta-balls"`,
    usageCode: `<PixelMetaBalls />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-meta-balls.tsx`,
  },
  {
    slug: "pixel-plasma",
    title: "Plasma",
    description: "Animated plasma background effect.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelPlasma } from "@/components/ui/pixel/animations/pixel-plasma"`,
    usageCode: `<PixelPlasma />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-plasma.tsx`,
  },
  {
    slug: "pixel-grid-motion",
    title: "Grid Motion",
    description: "Grid with motion effects based on mouse position.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelGridMotion } from "@/components/ui/pixel/animations/pixel-grid-motion"`,
    usageCode: `<PixelGridMotion />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-grid-motion.tsx`,
  },
  {
    slug: "pixel-aurora",
    title: "Aurora",
    description: "Aurora borealis background effect.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelAurora } from "@/components/ui/pixel/animations/pixel-aurora"`,
    usageCode: `<PixelAurora />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-aurora.tsx`,
  },
  {
    slug: "pixel-galaxy",
    title: "Galaxy",
    description: "Animated galaxy/space background.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelGalaxy } from "@/components/ui/pixel/animations/pixel-galaxy"`,
    usageCode: `<PixelGalaxy />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-galaxy.tsx`,
  },
  {
    slug: "pixel-ripple-grid",
    title: "Ripple Grid",
    description: "Grid with ripple wave effects.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelRippleGrid } from "@/components/ui/pixel/animations/pixel-ripple-grid"`,
    usageCode: `<PixelRippleGrid />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-ripple-grid.tsx`,
  },

  // Cursor Effects
  {
    slug: "pixel-blob-cursor",
    title: "Blob Cursor",
    description: "Blob-shaped cursor effect that follows the mouse.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelBlobCursor } from "@/components/ui/pixel/animations/pixel-blob-cursor"`,
    usageCode: `<PixelBlobCursor />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-blob-cursor.tsx`,
  },
  {
    slug: "pixel-splash-cursor",
    title: "Splash Cursor",
    description: "Fluid splash effect following cursor movement.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelSplashCursor } from "@/components/ui/pixel/animations/pixel-splash-cursor"`,
    usageCode: `<PixelSplashCursor />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-splash-cursor.tsx`,
  },
  {
    slug: "pixel-target-cursor",
    title: "Target Cursor",
    description: "Targeting crosshair cursor effect.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelTargetCursor } from "@/components/ui/pixel/animations/pixel-target-cursor"`,
    usageCode: `<PixelTargetCursor />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-target-cursor.tsx`,
  },
  {
    slug: "pixel-trail",
    title: "Pixel Trail",
    description: "Pixelated trail following the cursor.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelTrail } from "@/components/ui/pixel/animations/pixel-trail"`,
    usageCode: `<PixelTrail />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-trail.tsx`,
  },
  {
    slug: "pixel-image-trail",
    title: "Image Trail",
    description: "Image trail effect following mouse movement.",
    category: "Animations",
    installation: "",
    importCode: `import { PixelImageTrail } from "@/components/ui/pixel/animations/pixel-image-trail"`,
    usageCode: `<PixelImageTrail images={[]} />`,
    componentCode: `/src/components/ui/pixel/animations/pixel-image-trail.tsx`,
  },

  // Special Components
  {
    slug: "pixel-loader",
    title: "Retro Loader",
    description: "Retro loading screens with cassette tape, floppy disk, and CRT boot animations.",
    category: "Special",
    installation: "",
    importCode: `import { PixelLoader } from "@/components/ui/pixel/pixel-loader"`,
    usageCode: `<PixelLoader variant="cassette" />
<PixelLoader variant="floppy" text="Loading..." />
<PixelLoader variant="crt" size="lg" />`,
    componentCode: `/src/components/ui/pixel/pixel-loader.tsx`,
    props: [
      { name: "variant", type: '"cassette" | "floppy" | "crt"', default: '"cassette"', description: "Loading animation style" },
      { name: "size", type: '"sm" | "md" | "lg" | "full"', default: '"md"', description: "Loader size" },
      { name: "progress", type: "number", default: "0", description: "Progress percentage (0-100)" },
      { name: "text", type: "string", description: "Custom loading text" },
      { name: "isLoading", type: "boolean", default: "true", description: "Enable auto-progress animation" },
    ],
    examples: [
      {
        title: "Cassette Tape",
        description: "Classic cassette tape loading animation",
        code: `<PixelLoader variant="cassette" text="LOADING GAME..." />`,
      },
      {
        title: "Floppy Disk",
        description: "Floppy disk inserting animation",
        code: `<PixelLoader variant="floppy" size="lg" />`,
      },
      {
        title: "CRT Boot",
        description: "CRT terminal boot sequence",
        code: `<PixelLoader variant="crt" text="BOOTING SYSTEM..." />`,
      },
    ],
  },
  {
    slug: "pixel-terminal",
    title: "Terminal",
    description: "Interactive retro terminal with command execution, history, and auto-completion.",
    category: "Special",
    installation: "",
    importCode: `import { PixelTerminal } from "@/components/ui/pixel/pixel-terminal"`,
    usageCode: `<PixelTerminal 
  variant="matrix"
  commands={{
    hello: () => 'Hello World!',
    time: () => new Date().toLocaleTimeString(),
  }}
/>`,
    componentCode: `/src/components/ui/pixel/pixel-terminal.tsx`,
    props: [
      { name: "variant", type: '"default" | "amber" | "white" | "matrix" | "retro"', default: '"default"', description: "Terminal color scheme" },
      { name: "size", type: '"sm" | "md" | "lg" | "xl"', default: '"md"', description: "Terminal size" },
      { name: "prompt", type: "string", default: '"user@pixel:~$"', description: "Command prompt text" },
      { name: "welcomeMessage", type: "string | ReactNode", description: "Message shown on terminal start" },
      { name: "commands", type: "Record<string, Function>", description: "Custom command handlers" },
      { name: "onCommand", type: "(command: string, args: string[]) => void", description: "Command execution callback" },
      { name: "showCursor", type: "boolean", default: "true", description: "Show blinking cursor" },
    ],
    examples: [
      {
        title: "Matrix Terminal",
        description: "Green matrix-style terminal",
        code: `<PixelTerminal variant="matrix" prompt="neo@matrix:~$" />`,
      },
      {
        title: "Custom Commands",
        description: "Terminal with custom commands",
        code: `<PixelTerminal 
  commands={{
    joke: () => 'Why do programmers prefer dark mode?',
    calc: (args) => eval(args.join(' ')),
  }}
/>`,
      },
      {
        title: "Portfolio Terminal",
        description: "Interactive portfolio showcase",
        code: `<PixelTerminal 
  variant="amber"
  welcomeMessage="Welcome to my portfolio!"
  commands={{
    about: () => 'Full Stack Developer',
    skills: () => 'React, TypeScript, Node.js',
  }}
/>`,
      },
    ],
  },
  {
    slug: "pixel-game-ui",
    title: "Game UI",
    description: "Gaming UI components including health bars, inventory, achievements, and damage numbers.",
    category: "Special",
    installation: "",
    importCode: `import { 
  PixelHealthBar, 
  PixelManaBar, 
  PixelXPBar,
  PixelInventory,
  PixelInventorySlot,
  PixelAchievement,
  PixelDamageNumber
} from "@/components/ui/pixel/pixel-game-ui"`,
    usageCode: `<PixelHealthBar current={75} max={100} />
<PixelManaBar current={50} max={100} />
<PixelXPBar currentXP={350} requiredXP={500} level={12} />
<PixelInventory columns={5} title="Backpack">
  <PixelInventorySlot item="⚔️" rarity="legendary" />
</PixelInventory>
<PixelAchievement 
  variant="gold" 
  title="Master"
  icon="🥇"
  points={50}
/>`,
    componentCode: `/src/components/ui/pixel/pixel-game-ui.tsx`,
    props: [
      { name: "current", type: "number", description: "Current health/mana value" },
      { name: "max", type: "number", description: "Maximum health/mana value" },
      { name: "currentXP", type: "number", description: "Current experience points" },
      { name: "requiredXP", type: "number", description: "XP required for next level" },
      { name: "level", type: "number", description: "Character level" },
      { name: "columns", type: "3 | 4 | 5 | 6", default: "5", description: "Inventory grid columns" },
      { name: "rarity", type: '"common" | "rare" | "epic" | "legendary"', description: "Item rarity" },
      { name: "variant", type: '"bronze" | "silver" | "gold" | "platinum"', description: "Achievement tier" },
    ],
    examples: [
      {
        title: "Health Bar",
        description: "HP bar with auto-coloring",
        code: `<PixelHealthBar current={75} max={100} label="HP" />`,
      },
      {
        title: "XP Bar",
        description: "Experience bar with level",
        code: `<PixelXPBar currentXP={350} requiredXP={500} level={12} />`,
      },
      {
        title: "Inventory",
        description: "Grid-based inventory system",
        code: `<PixelInventory columns={5}>
  <PixelInventorySlot item="⚔️" rarity="legendary" />
  <PixelInventorySlot item="💊" count={5} />
</PixelInventory>`,
      },
      {
        title: "Achievement",
        description: "Trophy notification",
        code: `<PixelAchievement 
  variant="gold" 
  title="Master"
  description="Defeat 100 enemies"
  icon="🥇"
  points={50}
/>`,
      },
    ],
  },
  {
    slug: "pixel-window",
    title: "Retro Window",
    description: "Windows 95/98 style draggable windows with minimize, maximize, and close buttons.",
    category: "Special",
    installation: "",
    importCode: `import { PixelWindow } from "@/components/ui/pixel/pixel-window"`,
    usageCode: `<PixelWindow 
  title="My Window"
  defaultPosition={{ x: 100, y: 100 }}
  defaultSize={{ width: 400, height: 300 }}
>
  Window content here...
</PixelWindow>`,
    componentCode: `/src/components/ui/pixel/pixel-window.tsx`,
    props: [
      { name: "title", type: "string", default: '"Window"', description: "Window title text" },
      { name: "icon", type: "ReactNode", description: "Window icon" },
      { name: "defaultPosition", type: "{ x: number, y: number }", description: "Initial window position" },
      { name: "defaultSize", type: "{ width: number, height: number }", description: "Initial window size" },
      { name: "resizable", type: "boolean", default: "false", description: "Allow window resizing" },
      { name: "closable", type: "boolean", default: "true", description: "Show close button" },
      { name: "minimizable", type: "boolean", default: "true", description: "Show minimize button" },
      { name: "maximizable", type: "boolean", default: "true", description: "Show maximize button" },
      { name: "onClose", type: "() => void", description: "Close callback" },
    ],
    examples: [
      {
        title: "Basic Window",
        description: "Simple draggable window",
        code: `<PixelWindow title="Notepad">
  <p>This is a retro window!</p>
</PixelWindow>`,
      },
      {
        title: "With Icon",
        description: "Window with title icon",
        code: `<PixelWindow title="My Computer" icon="💻">
  <p>Computer contents...</p>
</PixelWindow>`,
      },
      {
        title: "Custom Size",
        description: "Window with custom dimensions",
        code: `<PixelWindow 
  title="Large Window"
  defaultSize={{ width: 600, height: 400 }}
>
  <p>Large content area</p>
</PixelWindow>`,
      },
    ],
  },
  {
    slug: "pixel-audio-visualizer",
    title: "Audio Visualizer",
    description: "Retro audio visualizer with equalizer bars, waveform, and circular modes.",
    category: "Special",
    installation: "",
    importCode: `import { PixelAudioVisualizer } from "@/components/ui/pixel/pixel-audio-visualizer"`,
    usageCode: `<PixelAudioVisualizer 
  variant="bars"
  barCount={32}
  animated={true}
/>`,
    componentCode: `/src/components/ui/pixel/pixel-audio-visualizer.tsx`,
    props: [
      { name: "variant", type: '"bars" | "wave" | "circular" | "spectrum"', default: '"bars"', description: "Visualizer style" },
      { name: "barCount", type: "number", default: "32", description: "Number of frequency bars" },
      { name: "color", type: "string", description: "Visualizer color" },
      { name: "animated", type: "boolean", default: "true", description: "Enable animation" },
      { name: "responsive", type: "boolean", default: "true", description: "Adapt to container size" },
      { name: "audioSource", type: "MediaStream | HTMLAudioElement", description: "Audio source for real-time visualization" },
    ],
    examples: [
      {
        title: "Equalizer Bars",
        description: "Classic equalizer bars",
        code: `<PixelAudioVisualizer variant="bars" barCount={32} />`,
      },
      {
        title: "Waveform",
        description: "Wave oscilloscope style",
        code: `<PixelAudioVisualizer variant="wave" color="#00ff00" />`,
      },
      {
        title: "Circular",
        description: "Circular frequency display",
        code: `<PixelAudioVisualizer variant="circular" barCount={64} />`,
      },
      {
        title: "Spectrum",
        description: "Full spectrum analyzer",
        code: `<PixelAudioVisualizer variant="spectrum" />`,
      },
    ],
  },
  {
    slug: "pixel-code-block",
    title: "Code Block",
    description: "Syntax-highlighted code display with line numbers, copy button, and retro terminal themes.",
    category: "Special",
    installation: "",
    importCode: `import { PixelCodeBlock, PixelCode } from "@/components/ui/pixel/pixel-code-block"`,
    usageCode: `<PixelCodeBlock 
  code={sourceCode}
  language="javascript"
  title="app.js"
  highlightLines={[2, 3]}
/>
<PixelCode>const x = 10;</PixelCode>`,
    componentCode: `/src/components/ui/pixel/pixel-code-block.tsx`,
    props: [
      { name: "code", type: "string", description: "Source code to display" },
      { name: "language", type: "string", description: "Programming language (e.g., 'javascript', 'python')" },
      { name: "title", type: "string", description: "Code block title/filename" },
      { name: "variant", type: '"default" | "terminal" | "dark" | "light" | "matrix" | "amber"', default: '"default"', description: "Color theme" },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Text size" },
      { name: "showLineNumbers", type: "boolean", default: "true", description: "Show line numbers" },
      { name: "showCopyButton", type: "boolean", default: "true", description: "Show copy button" },
      { name: "highlightLines", type: "number[]", description: "Array of line numbers to highlight" },
    ],
    examples: [
      {
        title: "JavaScript Code",
        description: "Basic JavaScript with syntax highlighting",
        code: `<PixelCodeBlock 
  code="function hello() { console.log('Hello!'); }"
  language="javascript"
  title="app.js"
/>`,
      },
      {
        title: "Terminal Theme",
        description: "Green terminal style",
        code: `<PixelCodeBlock 
  code="npm install pixel-ui"
  variant="terminal"
  showLineNumbers={false}
/>`,
      },
      {
        title: "Line Highlighting",
        description: "Highlight specific lines",
        code: `<PixelCodeBlock 
  code={multiLineCode}
  highlightLines={[2, 3, 4]}
  title="important.ts"
/>`,
      },
      {
        title: "Inline Code",
        description: "Inline code snippet",
        code: `<p>Use <PixelCode>useState</PixelCode> for state management.</p>`,
      },
    ],
  },
  {
    slug: "pixel-timeline",
    title: "Timeline",
    description: "Vertical and horizontal timelines with milestones, checkpoints, and progress tracking.",
    category: "Special",
    installation: "",
    importCode: `import { PixelTimeline, PixelTimelineCheckpoint } from "@/components/ui/pixel/pixel-timeline"`,
    usageCode: `<PixelTimeline 
  items={timelineItems}
  orientation="vertical"
  markerShape="circle"
/>
<PixelTimelineCheckpoint 
  checkpoints={checkpoints}
  orientation="horizontal"
/>`,
    componentCode: `/src/components/ui/pixel/pixel-timeline.tsx`,
    props: [
      { name: "items", type: "TimelineItemType[]", description: "Timeline items array" },
      { name: "orientation", type: '"vertical" | "horizontal"', default: '"vertical"', description: "Timeline direction" },
      { name: "markerSize", type: '"sm" | "md" | "lg"', default: '"md"', description: "Marker size" },
      { name: "markerShape", type: '"square" | "circle" | "diamond"', default: '"square"', description: "Marker shape" },
      { name: "showConnector", type: "boolean", default: "true", description: "Show connecting lines" },
      { name: "checkpoints", type: "Array<{ label: string, completed?: boolean, active?: boolean }>", description: "Checkpoint items for progress tracking" },
    ],
    examples: [
      {
        title: "Project Timeline",
        description: "Vertical timeline with milestones",
        code: `<PixelTimeline 
  items={[
    { title: "Started", date: "Jan 2024", variant: "success" },
    { title: "In Progress", date: "Feb 2024", variant: "warning" },
  ]}
/>`,
      },
      {
        title: "Checkpoint Progress",
        description: "Step-by-step progress tracker",
        code: `<PixelTimelineCheckpoint 
  checkpoints={[
    { label: "Register", completed: true },
    { label: "Verify", active: true },
    { label: "Complete", completed: false },
  ]}
/>`,
      },
      {
        title: "Horizontal Timeline",
        description: "Horizontal layout for wide displays",
        code: `<PixelTimeline 
  items={events}
  orientation="horizontal"
  markerShape="circle"
/>`,
      },
    ],
  },
  {
    slug: "pixel-notification",
    title: "Notification",
    description: "Toast notification system with auto-dismiss, stacking, variants, and action buttons.",
    category: "Special",
    installation: "",
    importCode: `import { PixelNotification, usePixelToast } from "@/components/ui/pixel/pixel-notification"`,
    usageCode: `<PixelNotification 
  title="Success!"
  description="Changes saved"
  variant="success"
  onClose={() => {}}
/>

// In component:
const { addToast } = usePixelToast();
addToast({ 
  title: "Success", 
  variant: "success",
  duration: 5000 
});`,
    componentCode: `/src/components/ui/pixel/pixel-notification.tsx`,
    props: [
      { name: "title", type: "string", description: "Notification title" },
      { name: "description", type: "string", description: "Notification message" },
      { name: "variant", type: '"default" | "success" | "warning" | "error" | "info"', default: '"default"', description: "Notification style" },
      { name: "icon", type: "ReactNode", description: "Icon element" },
      { name: "onClose", type: "() => void", description: "Close callback" },
      { name: "action", type: "{ label: string, onClick: () => void }", description: "Action button config" },
      { name: "duration", type: "number", default: "5000", description: "Auto-dismiss duration (ms), 0 for persistent" },
    ],
    examples: [
      {
        title: "Success Toast",
        description: "Success notification",
        code: `<PixelNotification 
  title="Success!"
  description="Operation completed"
  variant="success"
  icon="✓"
/>`,
      },
      {
        title: "With Action",
        description: "Notification with action button",
        code: `<PixelNotification 
  title="Update Available"
  action={{ label: "Update", onClick: () => update() }}
/>`,
      },
      {
        title: "Toast Hook",
        description: "Programmatic toast creation",
        code: `const { addToast } = usePixelToast();

addToast({
  title: "Saved!",
  variant: "success",
  duration: 3000
});`,
      },
    ],
  },
  {
    slug: "pixel-chat",
    title: "Chat",
    description: "Retro chat messenger with message bubbles, typing indicators, and multiple style variants.",
    category: "Special",
    installation: "",
    importCode: `import { PixelChat, PixelMessageBubble } from "@/components/ui/pixel/pixel-chat"`,
    usageCode: `<PixelChat 
  messages={messages}
  onSendMessage={(text) => handleSend(text)}
  showTypingIndicator={isTyping}
/>
<PixelMessageBubble 
  text="Hello!"
  sender="user"
/>`,
    componentCode: `/src/components/ui/pixel/pixel-chat.tsx`,
    props: [
      { name: "messages", type: "MessageType[]", description: "Array of chat messages" },
      { name: "onSendMessage", type: "(message: string) => void", description: "Send message callback" },
      { name: "variant", type: '"default" | "retro" | "terminal"', default: '"default"', description: "Chat style" },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Chat window size" },
      { name: "showTypingIndicator", type: "boolean", default: "false", description: "Show typing animation" },
      { name: "typingUser", type: "string", description: "Name of user who is typing" },
      { name: "placeholder", type: "string", default: '"Type a message..."', description: "Input placeholder" },
    ],
    examples: [
      {
        title: "Basic Chat",
        description: "Simple chat interface",
        code: `<PixelChat 
  messages={chatMessages}
  onSendMessage={handleSend}
/>`,
      },
      {
        title: "With Typing Indicator",
        description: "Show when other user is typing",
        code: `<PixelChat 
  messages={messages}
  showTypingIndicator={true}
  typingUser="Alice"
/>`,
      },
      {
        title: "Message Bubble",
        description: "Standalone message component",
        code: `<PixelMessageBubble 
  text="Hello!"
  sender="user"
  username="Bob"
  timestamp="10:30 AM"
/>`,
      },
      {
        title: "Terminal Style",
        description: "Terminal-themed chat",
        code: `<PixelChat 
  messages={messages}
  variant="terminal"
/>`,
      },
    ],
  },
  {
    slug: "pixel-countdown",
    title: "Countdown",
    description: "Countdown timer and stopwatch with flip-clock display, multiple variants, and controls.",
    category: "Special",
    installation: "",
    importCode: `import { PixelCountdown, PixelTimer } from "@/components/ui/pixel/pixel-countdown"`,
    usageCode: `<PixelCountdown 
  targetDate={new Date("2025-12-31")}
  variant="flip"
  size="lg"
/>
<PixelTimer 
  initialMinutes={5}
  showControls={true}
/>`,
    componentCode: `/src/components/ui/pixel/pixel-countdown.tsx`,
    props: [
      { name: "targetDate", type: "Date", description: "Target date for countdown" },
      { name: "initialSeconds", type: "number", description: "Initial seconds (alternative to targetDate)" },
      { name: "variant", type: '"default" | "retro" | "digital" | "flip"', default: '"default"', description: "Display style" },
      { name: "size", type: '"sm" | "md" | "lg" | "xl"', default: '"md"', description: "Countdown size" },
      { name: "showDays", type: "boolean", default: "true", description: "Show days unit" },
      { name: "showHours", type: "boolean", default: "true", description: "Show hours unit" },
      { name: "showMinutes", type: "boolean", default: "true", description: "Show minutes unit" },
      { name: "showSeconds", type: "boolean", default: "true", description: "Show seconds unit" },
      { name: "labels", type: "boolean", default: "true", description: "Show unit labels" },
      { name: "onComplete", type: "() => void", description: "Callback when countdown reaches zero" },
      { name: "showControls", type: "boolean", default: "true", description: "Show start/pause/reset buttons (PixelTimer only)" },
    ],
    examples: [
      {
        title: "Event Countdown",
        description: "Countdown to specific date",
        code: `<PixelCountdown 
  targetDate={new Date("2025-12-31")}
  variant="flip"
/>`,
      },
      {
        title: "Timer with Controls",
        description: "Controllable timer",
        code: `<PixelTimer 
  initialMinutes={5}
  variant="digital"
  showControls={true}
/>`,
      },
      {
        title: "Seconds Only",
        description: "Simple seconds counter",
        code: `<PixelCountdown 
  initialSeconds={60}
  showDays={false}
  showHours={false}
  showMinutes={false}
/>`,
      },
      {
        title: "Pomodoro Timer",
        description: "25-minute focus timer",
        code: `<PixelTimer 
  initialMinutes={25}
  onComplete={() => alert("Break time!")}
/>`,
      },
    ],
  },
];

export function getComponentBySlug(slug: string): ComponentDoc | undefined {
  return componentRegistry.find((comp) => comp.slug === slug);
}

export function getComponentsByCategory(category: ComponentCategory): ComponentDoc[] {
  return componentRegistry.filter((comp) => comp.category === category);
}

export const categories: ComponentCategory[] = [
  "Animations",
  "Forms",
  "Display",
  "Feedback",
  "Navigation",
  "Overlays",
  "Layout",
  "Special",
];
