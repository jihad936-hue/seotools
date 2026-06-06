# Quick Start Guide

## Prerequisites

- Node.js 18.17.0 or later
- npm or yarn or pnpm

## Installation

```bash
# 1. Navigate to project directory
cd seotools

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open http://localhost:3000
```

## Configuration

### 1. Google Analytics
Edit `lib/analytics.ts`:
```typescript
export const GA_TRACKING_ID = "G-YOUR_GA_ID";
```

Edit `app/layout.tsx`:
```tsx
<GoogleAnalytics gaId="G-YOUR_GA_ID" />
```

### 2. Google AdSense
Edit `lib/analytics.ts`:
```typescript
export const ADSENSE_CLIENT_ID = "ca-pub-YOUR_ADSENSE_ID";
```

Edit `app/layout.tsx`:
```tsx
<script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID"
  crossOrigin="anonymous"
/>
```

### 3. Site Domain
Edit `lib/seo.ts`:
```typescript
metadataBase: new URL("https://yourdomain.com"),
```

### 4. Google Search Console
Edit `lib/seo.ts`:
```typescript
verification: {
  google: "YOUR_VERIFICATION_CODE",
},
```

## Adding a New Tool

### Step 1: Add to Registry
Open `lib/tools.ts` and add to the appropriate category:

```typescript
{
  id: "my-new-tool",
  name: "My New Tool",
  description: "Brief description of what the tool does",
  category: "technical-seo",  // existing category
  icon: "Zap",  // Lucide icon name
  slug: "my-new-tool",
  featured: false,
  popular: false,
  metaTitle: "My New Tool - SEO Feature Description",
  metaDescription: "Detailed SEO description for this tool page",
}
```

### Step 2: Add Icon (if new)
Open `components/tools/ToolCard.tsx` and add to `iconMap`:
```typescript
import { Zap } from "lucide-react";
const iconMap = {
  // ... existing icons
  Zap,  // add new icon
};
```

### Step 3: Build
```bash
npm run build
```

The new tool page will be automatically generated at:
`/tools/technical-seo/my-new-tool`

## Adding a New Category

### Step 1: Add to Registry
```typescript
{
  id: "new-category",
  name: "New Category",
  description: "Description of this category",
  icon: "NewIcon",
  slug: "new-category",
  tools: [
    // tools here
  ],
}
```

### Step 2: Add Icon Mappings
Update `components/tools/ToolCard.tsx` and `components/sections/Categories.tsx`.

### Step 3: Build
```bash
npm run build
```

## Adding a Blog Post

Open `lib/blog.ts` and add to `blogPosts` array:

```typescript
{
  id: "7",
  title: "Your New Post Title",
  slug: "your-post-slug",
  excerpt: "Brief summary...",
  content: `Your markdown content here...`,
  author: "Your Name",
  date: "2024-03-20",
  readTime: "5 min read",
  category: "SEO Category",
  tags: ["tag1", "tag2"],
}
```

Build and the post page auto-generates at `/blog/your-post-slug`.

## Production Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the `out` directory
```

### Self-Hosted
```bash
npm run build
npm start
```

## Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## File Structure Conventions

- `page.tsx` - Route page component
- `layout.tsx` - Shared layout wrapper
- `loading.tsx` - Loading UI (auto-wrapped)
- `error.tsx` - Error UI (auto-wrapped)
- `not-found.tsx` - 404 page
- `route.ts` - API route handler
