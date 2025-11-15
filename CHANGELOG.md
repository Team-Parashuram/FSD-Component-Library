# Changelog

## [Unreleased] - 2025-11-15

### ✨ Added

- **PixelRating Component** 
  - Created interactive 5-star rating component with pixel-art styling
  - Features hover effects, multiple color variants (default/gold/red), and three size options
  - Supports both interactive and read-only modes
  - State managed with React hooks, no Redux required
  - Fully documented in component registry with usage examples
  - Live preview added to documentation page

### 🐛 Fixed

- **Menubar Preview** 
  - Fixed missing interactive preview for menubar component on documentation page
  - Added proper imports for all menubar-related components
  - Created realistic demo with File, Edit, and View menus including separators
  - Preview now fully functional with dropdown interactions

- **Navigation Menu Preview**
  - Fixed missing interactive preview for navigation menu component
  - Added imports for PixelNavigationMenu and related sub-components
  - Created dropdown demo with products menu and direct link
  - Preview now displays correctly with working interactions

- **Command Preview**
  - Fixed missing interactive preview for command palette component
  - Added imports for PixelCommand and related sub-components
  - Created search interface demo with command items and empty state
  - Preview now functional with keyboard navigation support

- **Drawer Preview**
  - Fixed missing interactive preview for drawer component
  - Added imports for PixelDrawer and all sub-components
  - Created bottom drawer demo with header, title, and description
  - Preview now displays correctly with slide-up animation

- **Toast Preview**
  - Fixed missing interactive preview for toast notifications
  - Added ToastDemo helper component with multiple toast examples
  - Created demos for simple toast and toast with action button
  - Preview now functional with proper toast provider setup

- **Sonner Preview**
  - Fixed missing interactive preview for Sonner toast notifications
  - Added SonnerDemo helper component with different toast types
  - Created demos for success, error, default, and loading toasts
  - Preview now displays correctly with all toast variants

### 📝 Documentation

- **Component Registry Updates**
  - Added complete usage code for PixelNavigationMenu component
  - Added complete usage code for PixelCommand component
  - Added complete usage code for PixelAlertDialog component
  - Added complete usage code for PixelDrawer component
  - Replaced placeholder comments with copy-paste ready examples
  - Improved developer experience with clear, functional code samples

### 📊 Summary

**New Component:** PixelRating - Interactive star rating system  
**Fixed:** Menubar, Navigation Menu, Command, Drawer, Toast, and Sonner documentation previews  
**Documentation:** Added complete usage examples for 4 components (Navigation Menu, Command, Alert Dialog, Drawer)  
**Files Modified:** 2 files (component-preview.tsx, component-registry.ts)  
**Impact:** Complete documentation coverage with all previews working and all usage code examples provided
