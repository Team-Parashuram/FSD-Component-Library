export type ComponentCategory = 
  | "Forms"
  | "Layout"
  | "Feedback"
  | "Navigation"
  | "Display"
  | "Overlays"
  | "Animations";

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
];
