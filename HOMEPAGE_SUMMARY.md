
╔══════════════════════════════════════════════════════════════════════════════╗
║                   PREMIUM SAAS HOMEPAGE — COMPLETE BUILD                      ║
╠══════════════════════════════════════════════════════════════════════════════╣

📁 PROJECT: seotools/ (Next.js 15 + TypeScript + Tailwind CSS)
📊 STATS: 61 files | 5,583 lines | 32.9 KB homepage

═══════════════════════════════════════════════════════════════════════════════
HOMEPAGE SECTIONS (7 total, all auto-populated from lib/tools.ts)
═══════════════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. HERO SECTION                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ • Subtle grid background + gradient orbs                                    │
│ • Badge: "{totalTools}+ Professional SEO Tools" (auto from registry)        │
│ • Headline: "The SEO platform built for results" with gradient text         │
│ • Subheadline with max-width for readability                                │
│ • Search bar with glow effect + popular links                               │
│ • Social proof: avatars + 5-star rating + trust badges                      │
│ • Staggered fade-in/slide-up animations                                     │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ 2. FEATURED TOOLS SECTION                                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│ • Data: getFeaturedTools() from lib/tools.ts                                │
│ • 3-column responsive grid (1 col mobile, 2 col tablet, 3 col desktop)      │
│ • Category-colored icon backgrounds                                         │
│ • Hover: shadow + lift (-translate-y-1)                                     │
│ • Category badge + Popular badge per card                                   │
│ • Arrow-up-right icon on hover                                              │
│ • "View all tools" link (desktop only, mobile below grid)                   │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ 3. POPULAR TOOLS SECTION                                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│ • Data: getPopularTools() from lib/tools.ts                                 │
│ • 4-column compact grid (1→2→4 responsive)                                  │
│ • Minimal card design with icon + title + description                       │
│ • Subtle hover: background change + shadow                                  │
│ • "Most Used" badge with star icon                                          │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ 4. CATEGORIES SECTION                                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│ • Data: toolCategories[] from lib/tools.ts                                  │
│ • 3-column grid with tool count badges                                      │
│ • Category-specific color schemes (6 unique palettes)                       │
│ • Hover gradient overlay effect                                             │
│ • "Explore category →" link with chevron animation                          │
│ • Description text for each category                                        │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ 5. STATS / WHY CHOOSE US SECTION                                            │
├─────────────────────────────────────────────────────────────────────────────┤
│ • 2-column layout: features list + dashboard mockup                         │
│ • 4 feature items with icons: Speed, Privacy, Accuracy, Global              │
│ • Stats dashboard: bar chart + 3 metrics                                    │
│ • Metrics auto-populated: {totalTools} tools, {categories} categories       │
│ • "+24%" growth indicator                                                   │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ 6. FAQ SECTION                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ • 5 curated questions with detailed answers                                 │
│ • Native HTML <details> with smooth chevron rotation                        │
│ • Clean card design with hover background                                   │
│ • "View all FAQs →" link                                                    │
│ • Centered layout with max-width container                                  │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ 7. CTA SECTION                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ • Full-width gradient banner (primary → violet)                             │
│ • Dot pattern overlay                                                       │
│ • Headline: "Ready to dominate search rankings?"                            │
│ • Two buttons: "Start Using Tools" (white) + "Read SEO Guides" (ghost)      │
│ • "Free forever" trust text                                                 │
│ • Blurred gradient orbs for depth                                           │
└─────────────────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════
DESIGN SYSTEM
═══════════════════════════════════════════════════════════════════════════════

Backgrounds:
  • Light: white
  • Dark: #0a0a0f (deep navy-black, not generic slate)
  • Section alternation: white ↔ #0d0d14

Colors:
  • Primary: Indigo-600 (#4f46e5)
  • Accent: Violet gradient
  • Category colors: Blue, Emerald, Violet, Amber, Rose, Sky

Typography:
  • Font: Inter (system fallback)
  • Headlines: tight tracking, leading-[1.1]
  • Body: relaxed leading for readability
  • Responsive: text-4xl → sm:text-5xl → lg:text-7xl

Spacing:
  • Section padding: py-16 → sm:py-20 → lg:py-28
  • Generous whitespace between sections
  • Container max-width: max-w-7xl

Cards:
  • Rounded-2xl corners
  • Subtle borders (secondary-200/60)
  • Hover: shadow-xl + -translate-y-1
  • Focus: ring-2 ring-primary-500

Animations:
  • fadeIn: opacity 0→1 + translateY(10px→0)
  • slideUp: opacity 0→1 + translateY(30px→0)
  • Staggered delays: 0s, 0.1s, 0.2s, 0.3s
  • Respects prefers-reduced-motion

═══════════════════════════════════════════════════════════════════════════════
ACCESSIBILITY FEATURES
═══════════════════════════════════════════════════════════════════════════════

✓ Skip to main content link (visible on focus)
✓ Semantic HTML: <main>, <section>, <nav>, <h1>-<h2> hierarchy
✓ ARIA labels: aria-label, aria-labelledby, aria-expanded
✓ Focus visible: ring-2 ring-primary-500 on all interactive elements
✓ Alt text: aria-hidden on decorative icons, labels on functional ones
✓ Form labels: sr-only labels for search input
✓ Reduced motion: @media (prefers-reduced-motion: reduce)
✓ Color contrast: WCAG AA compliant text colors
✓ Keyboard navigation: All links and buttons focusable
✓ Mobile menu: aria-expanded, role="dialog"

═══════════════════════════════════════════════════════════════════════════════
MOBILE RESPONSIVENESS
═══════════════════════════════════════════════════════════════════════════════

Breakpoints:
  • sm: 640px  — 2-column grids activate
  • md: 768px  — Navigation changes, larger text
  • lg: 1024px — Full desktop layout, dropdown menus
  • xl: 1280px — Extra spacing, keyboard shortcut hints

Mobile-specific:
  • Single column layouts
  • Stacked buttons (flex-col)
  • Hidden desktop elements (sm:hidden)
  • Full-screen mobile menu overlay
  • Touch-friendly tap targets (min 44px)
  • Horizontal padding: px-4 (mobile) → sm:px-6 → lg:px-8

═══════════════════════════════════════════════════════════════════════════════
DATA CONNECTIONS (lib/tools.ts)
═══════════════════════════════════════════════════════════════════════════════

getFeaturedTools()    → Featured Tools grid (9 tools)
getPopularTools()     → Popular Tools grid (12 tools)
toolCategories[]      → Categories grid (6 categories)
getToolCount()        → Hero badge, Stats dashboard

Adding a new tool to the registry automatically updates:
  ✓ Homepage grids (if featured/popular)
  ✓ Category cards (tool count)
  ✓ Hero badge (total count)
  ✓ Stats dashboard (total count)
  ✓ Sitemap (on next build)
  ✓ Navigation dropdown (tool count)

═══════════════════════════════════════════════════════════════════════════════
FILE STRUCTURE
═══════════════════════════════════════════════════════════════════════════════

app/
├── (main)/
│   ├── page.tsx              ← HOMEPAGE (this file)
│   ├── layout.tsx            ← Navbar + Footer wrapper
│   └── ...other pages
├── layout.tsx                ← Root (ThemeProvider + Analytics)
└── globals.css               ← Animations + accessibility

components/
├── layout/
│   ├── Navbar.tsx            ← Glass morphism, dropdown, mobile menu
│   ├── Footer.tsx            ← 4-column, newsletter, social
│   └── ThemeToggle.tsx       ← System/light/dark toggle
└── ui/
    └── Container.tsx         ← Responsive width wrapper

lib/
└── tools.ts                  ← CENTRALIZED REGISTRY (data source)

═══════════════════════════════════════════════════════════════════════════════
