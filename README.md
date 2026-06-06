# SEO Tools Pro

A professional, production-ready SEO Tools platform built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **50+ Free SEO Tools** organized into 6 categories
- **Centralized Tools Registry** in `lib/tools.ts` - add a tool once, pages auto-generate
- **Dynamic Route Generation** via `generateStaticParams` for all tool/category pages
- **SEO-Optimized Architecture** with dynamic metadata, sitemap, and robots.txt
- **Dark Mode Support** via `next-themes`
- **Mobile-First Responsive Design** with Tailwind CSS
- **Google Analytics & AdSense Ready**
- **Blog Section** with static generation
- **FAQ Section** with accordion UI
- **Professional Navbar & Footer**

## 📁 Architecture

```
seotools/
├── app/                          # Next.js 15 App Router
│   ├── (main)/                   # Main layout group (Navbar + Footer)
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Homepage
│   │   ├── tools/
│   │   │   ├── page.tsx            # All tools listing
│   │   │   ├── [category]/         # Category pages (auto-generated)
│   │   │   │   └── page.tsx
│   │   │   └── [category]/[tool]/  # Individual tool pages (auto-generated)
│   │   │       └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── faq/
│   │   │   └── page.tsx
│   │   └── about/
│   │       └── page.tsx
│   ├── api/
│   │   ├── sitemap.xml/route.ts    # Dynamic sitemap
│   │   └── robots.txt/route.ts     # Dynamic robots.txt
│   ├── layout.tsx                # Root layout (ThemeProvider + Analytics)
│   ├── globals.css
│   ├── not-found.tsx
│   ├── loading.tsx
│   └── error.tsx
├── components/
│   ├── ui/                       # Base UI components (Button, Card, Input, etc.)
│   ├── layout/                   # Navbar, Footer, ThemeToggle, MobileMenu
│   ├── tools/                    # ToolCard, ToolGrid, ToolInterface
│   ├── sections/                 # Hero, Features, Categories, Stats, CTA, Testimonials
│   └── blog/                     # BlogCard, BlogGrid, BlogContent
├── lib/
│   ├── tools.ts                  # ⭐ CENTRALIZED TOOLS REGISTRY
│   ├── blog.ts                   # Blog data
│   ├── faq.ts                    # FAQ data
│   ├── seo.ts                    # SEO utilities & metadata generator
│   ├── utils.ts                  # Helper functions
│   └── analytics.ts              # GA & AdSense config
├── types/
│   └── index.ts                  # TypeScript interfaces
├── hooks/
│   ├── useTool.ts
│   └── useTheme.ts
├── middleware.ts                 # Security headers
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 Centralized Tools Registry

The heart of the system is `lib/tools.ts`. To add a new tool:

1. Add the tool definition to the `toolCategories` array
2. The following are auto-generated at build time:
   - Category page (`/tools/[category]`)
   - Individual tool page (`/tools/[category]/[tool]`)
   - Sitemap entries
   - Navigation menus

```typescript
// lib/tools.ts - Add a tool here:
{
  id: "my-new-tool",
  name: "My New Tool",
  description: "What this tool does",
  category: "technical-seo",
  icon: "Zap",
  slug: "my-new-tool",
  featured: true,
  popular: false,
  metaTitle: "My New Tool - SEO Feature",
  metaDescription: "Detailed description for SEO...",
}
```

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Configuration

1. **Google Analytics**: Update `GA_TRACKING_ID` in `lib/analytics.ts`
2. **Google AdSense**: Update `ADSENSE_CLIENT_ID` in `lib/analytics.ts` and the script in `app/layout.tsx`
3. **Site URL**: Update `metadataBase` in `lib/seo.ts`
4. **Google Search Console**: Update verification code in `lib/seo.ts`

## 📝 SEO Features

- Dynamic metadata generation for every page
- Auto-generated XML sitemap
- Auto-generated robots.txt
- Canonical URLs
- Open Graph tags
- Twitter Cards
- Structured data support
- Semantic HTML
- Optimized heading hierarchy

## 🎨 Design System

- **Colors**: Primary (Blue), Secondary (Slate)
- **Typography**: Inter font family
- **Spacing**: Tailwind default scale
- **Components**: Reusable, accessible, dark-mode ready

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔒 Security

- Security headers via middleware
- Content Security Policy ready
- XSS protection
- Clickjacking prevention

## 📄 License

MIT License - feel free to use for personal or commercial projects.
