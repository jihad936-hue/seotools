# SEO Tools Pro - Architecture Documentation

## Centralized Tools Registry System

The entire tool ecosystem is driven by a single source of truth in `lib/tools.ts`.

### Registry Structure

```
lib/tools.ts
├── toolCategories[]                    # Array of 6 categories
│   ├── id, name, description, icon, slug
│   └── tools[]                       # Array of tools in category
│       ├── id, name, description, category, icon, slug
│       ├── featured (boolean)         # Show on homepage
│       ├── popular (boolean)          # Show in popular section
│       ├── metaTitle (string)         # SEO title
│       └── metaDescription (string)   # SEO description
│
├── Query Functions
│   ├── getAllTools()                  # Flatten all tools
│   ├── getToolBySlug(slug)            # Find tool by slug
│   ├── getCategoryBySlug(slug)        # Find category by slug
│   ├── getToolsByCategory(slug)      # Filter by category
│   ├── getFeaturedTools()             # Featured only
│   └── getPopularTools()              # Popular only
│
└── Static Param Generators (Next.js 15)
    ├── generateCategoryStaticParams()  # For [category]/page.tsx
    └── generateToolStaticParams()      # For [category]/[tool]/page.tsx
```

### Dynamic Page Generation Flow

```
Build Time:
┌─────────────────────────────────────────────────────────┐
│ 1. Next.js calls generateStaticParams()                │
│    ├── Category pages: /tools/[category]              │
│    └── Tool pages: /tools/[category]/[tool]           │
│                                                         │
│ 2. Registry provides all slugs from toolCategories[]   │
│                                                         │
│ 3. Next.js pre-renders each page as static HTML        │
│    ├── Fetches tool data from registry                 │
│    ├── Generates metadata (title, description, OG)     │
│    └── Outputs static HTML files                        │
│                                                         │
│ 4. Result: 50+ static pages generated automatically    │
└─────────────────────────────────────────────────────────┘
```

### Adding a New Tool (3 Steps)

**Step 1:** Add tool to `lib/tools.ts`:
```typescript
{
  id: "new-tool-id",
  name: "New Tool Name",
  description: "What this tool does",
  category: "existing-category",
  icon: "IconName",
  slug: "new-tool-slug",
  featured: true,
  popular: false,
  metaTitle: "SEO Title for New Tool",
  metaDescription: "SEO description for new tool page",
}
```

**Step 2:** Add icon to `iconMap` in `components/tools/ToolCard.tsx` (if new icon)

**Step 3:** Build the project - pages auto-generate!
```bash
npm run build
```

That's it. No need to:
- Create new page files
- Update navigation
- Update sitemap
- Update routing

## Route Architecture

```
App Router Structure:

app/
├── layout.tsx                    # Root: ThemeProvider + Analytics
├── (main)/                       # Route Group (no URL prefix)
│   ├── layout.tsx                # Main: Navbar + Footer
│   ├── page.tsx                  # / (Homepage)
│   ├── tools/
│   │   ├── page.tsx              # /tools (All tools)
│   │   ├── [category]/
│   │   │   └── page.tsx          # /tools/on-page-seo
│   │   └── [category]/[tool]/
│   │       └── page.tsx          # /tools/on-page-seo/meta-tag-generator
│   ├── blog/
│   │   ├── page.tsx              # /blog
│   │   └── [slug]/
│   │       └── page.tsx          # /blog/post-slug
│   ├── faq/
│   │   └── page.tsx              # /faq
│   └── about/
│       └── page.tsx              # /about
├── api/
│   ├── sitemap.xml/route.ts      # /api/sitemap.xml
│   └── robots.txt/route.ts       # /api/robots.txt
├── not-found.tsx                 # 404 Page
├── loading.tsx                   # Global Loading
└── error.tsx                     # Global Error
```

## SEO Architecture

### Metadata Generation
```typescript
// lib/seo.ts
export function generateSEO({
  title, description, canonical, ogImage, noIndex
}: SEOProps): Metadata

// Usage in any page:
export const metadata = generateSEO({
  title: "Page Title",
  description: "Page description...",
  canonical: "https://seotools.pro/page-url",
});
```

### Dynamic Metadata (for tool/category pages)
```typescript
// Auto-generates from registry data
export async function generateMetadata({ params }) {
  const { tool } = await params;
  const toolData = getToolBySlug(tool);
  return generateSEO({
    title: toolData.metaTitle || toolData.name,
    description: toolData.metaDescription || toolData.description,
  });
}
```

### Sitemap Generation
- Static pages: Homepage, Tools, Blog, FAQ, About
- Dynamic pages: All categories, all tools, all blog posts
- Auto-updates on each build
- Proper priorities and changefreq values

## Component Architecture

### UI Layer (Base Components)
- `Button` - 5 variants, 3 sizes, loading state
- `Card` - With hover animation support
- `Input` - With label, error, helper text
- `Badge` - 5 color variants
- `Accordion` - Animated FAQ component
- `Container` - Responsive width containers
- `Tabs` - Content switching
- `Select` - Dropdown with options

### Layout Layer
- `Navbar` - Sticky, responsive, dropdown menus, mobile menu
- `Footer` - 4-column layout, newsletter, social links
- `ThemeToggle` - System/light/dark with icon animation
- `MobileMenu` - Full-screen mobile navigation

### Section Layer (Homepage)
- `Hero` - Main CTA with stats
- `Features` - 6 feature cards with icons
- `Categories` - 6 category cards linking to tool pages
- `Stats` - Blue background metrics bar
- `Testimonials` - 3 testimonial cards with ratings
- `CTA` - Final call-to-action section

### Tool Layer
- `ToolCard` - Individual tool preview card
- `ToolGrid` - Responsive grid layout
- `ToolInterface` - Interactive tool input/output wrapper

## Data Flow

```
┌─────────────────────────────────────────────────────────┐
│                    DATA SOURCES                          │
├─────────────────────────────────────────────────────────┤
│  lib/tools.ts    │  lib/blog.ts    │  lib/faq.ts       │
│  (Registry)      │  (Content)      │  (Support)        │
└────────┬─────────┴────────┬────────┴────────┬───────────┘
         │                  │                 │
         ▼                  ▼                 ▼
┌─────────────────────────────────────────────────────────┐
│              PAGE COMPONENTS (Server)                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │ Homepage    │  │ Tool Pages  │  │ Blog Pages  │    │
│  │ page.tsx    │  │ [tool]      │  │ [slug]      │    │
│  └─────────────┘  └─────────────┘  └─────────────┘    │
│         │                │                │             │
│         ▼                ▼                ▼             │
│  ┌─────────────────────────────────────────────────┐   │
│  │          UI COMPONENTS (Client/Server)         │   │
│  │  ToolCard │ BlogCard │ Accordion │ Button │ etc │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

## Styling Architecture

### Tailwind Configuration
```typescript
// tailwind.config.ts
{
  colors: {
    primary: { 50-950 },    // Blue scale
    secondary: { 50-950 },  // Slate scale
  },
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
  },
  animation: {
    'fade-in': 'fadeIn 0.5s ease-in-out',
    'slide-up': 'slideUp 0.5s ease-out',
  }
}
```

### Dark Mode Strategy
- Uses `next-themes` with `class` strategy
- `dark:` prefix for all color variants
- System preference detection
- Manual toggle with ThemeToggle component
- No flash on load (suppressHydrationWarning)

## Performance Optimizations

1. **Static Generation**: All tool/category pages pre-rendered at build
2. **Image Optimization**: WebP/AVIF formats, lazy loading
3. **Font Optimization**: Inter via next/font (self-hosted)
4. **Code Splitting**: Automatic via Next.js App Router
5. **Caching**: Proper cache headers on sitemap/robots
6. **Bundle Optimization**: optimizePackageImports for lucide-react

## Security Features

1. **Middleware**: Security headers (HSTS, XSS, Content-Type)
2. **CSP Ready**: Headers configured in next.config.js
3. **Referrer Policy**: origin-when-cross-origin
4. **Frame Options**: DENY (clickjacking protection)

## Analytics Integration

### Google Analytics 4
- Via `@next/third-parties/google`
- Configured in root layout
- Pageview tracking automatic

### Google AdSense
- Script tag in root layout head
- Client ID configurable via env var
- Ready for ad placement components

## Future Extensibility

### Adding New Categories
1. Add category to `toolCategories` array
2. Add icon mapping in `ToolCard.tsx`
3. Add icon mapping in `Categories.tsx`
4. Build - pages auto-generate

### Adding Tool Functionality
1. Create tool logic in `lib/tools/` (e.g., `meta-tag-generator.ts`)
2. Import and use in `[tool]/page.tsx`
3. Wrap with `ToolInterface` component for consistent UI

### Adding Blog Posts
1. Add post to `lib/blog.ts` array
2. Build - post page auto-generates
3. Appears in blog grid automatically
