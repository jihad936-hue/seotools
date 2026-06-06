import { ToolCategory, Tool } from "@/types";

// ============================================
// CENTRALIZED TOOLS REGISTRY
// ============================================
// All tool metadata lives here. Dynamic pages are auto-generated
// from this registry using generateStaticParams in route handlers.

export const toolCategories: ToolCategory[] = [
  {
    id: "on-page-seo",
    name: "On-Page SEO",
    description: "Optimize your web pages for better search engine rankings",
    icon: "FileText",
    slug: "on-page-seo",
    tools: [
      {
        id: "meta-tag-generator",
        name: "Meta Tag Generator",
        description: "Generate optimized meta titles and descriptions for better CTR",
        category: "on-page-seo",
        icon: "Tags",
        slug: "meta-tag-generator",
        featured: true,
        popular: true,
        metaTitle: "Meta Tag Generator - Create SEO-Optimized Meta Tags",
        metaDescription: "Generate perfect meta titles and descriptions for your web pages. Improve click-through rates with our free meta tag generator tool.",
      },
      {
        id: "header-analyzer",
        name: "Header Tag Analyzer",
        description: "Analyze and optimize your H1-H6 tag structure",
        category: "on-page-seo",
        icon: "Heading",
        slug: "header-analyzer",
        popular: true,
        metaTitle: "Header Tag Analyzer - Check H1-H6 Structure",
        metaDescription: "Analyze your heading hierarchy and optimize H1-H6 tags for better SEO structure and accessibility.",
      },
      {
        id: "image-alt-checker",
        name: "Image Alt Text Checker",
        description: "Check and optimize image alt text for accessibility and SEO",
        category: "on-page-seo",
        icon: "Image",
        slug: "image-alt-checker",
        metaTitle: "Image Alt Text Checker - SEO & Accessibility",
        metaDescription: "Check image alt text across your website. Improve accessibility and image SEO rankings.",
      },
      {
        id: "schema-generator",
        name: "Schema Markup Generator",
        description: "Generate JSON-LD structured data for rich snippets",
        category: "on-page-seo",
        icon: "Code",
        slug: "schema-generator",
        featured: true,
        metaTitle: "Schema Markup Generator - JSON-LD Structured Data",
        metaDescription: "Generate JSON-LD schema markup for rich snippets. Support for Article, Product, FAQ, LocalBusiness and more.",
      },
      {
        id: "content-analyzer",
        name: "Content Analyzer",
        description: "Analyze content quality, readability, and keyword density",
        category: "on-page-seo",
        icon: "AlignLeft",
        slug: "content-analyzer",
        popular: true,
        metaTitle: "Content Analyzer - Quality & Readability Score",
        metaDescription: "Analyze your content quality, readability scores, and keyword density. Get actionable SEO improvement suggestions.",
      },
      {
        id: "internal-link-checker",
        name: "Internal Link Checker",
        description: "Audit and optimize your internal linking structure",
        category: "on-page-seo",
        icon: "Link",
        slug: "internal-link-checker",
        metaTitle: "Internal Link Checker - Audit Site Structure",
        metaDescription: "Audit internal links across your website. Find orphaned pages and improve your site architecture.",
      },
    ],
  },
  {
    id: "technical-seo",
    name: "Technical SEO",
    description: "Fix technical issues that prevent search engines from crawling your site",
    icon: "Settings",
    slug: "technical-seo",
    tools: [
      {
        id: "site-speed-test",
        name: "Site Speed Test",
        description: "Test page load speed and get optimization recommendations",
        category: "technical-seo",
        icon: "Zap",
        slug: "site-speed-test",
        featured: true,
        popular: true,
        metaTitle: "Site Speed Test - Check Page Load Time",
        metaDescription: "Test your website speed and get Core Web Vitals scores. Receive actionable optimization recommendations.",
      },
      {
        id: "mobile-friendly-test",
        name: "Mobile-Friendly Test",
        description: "Check if your website is optimized for mobile devices",
        category: "technical-seo",
        icon: "Smartphone",
        slug: "mobile-friendly-test",
        popular: true,
        metaTitle: "Mobile-Friendly Test - Responsive Design Checker",
        metaDescription: "Check if your website is mobile-friendly. Test responsive design and mobile usability for better rankings.",
      },
      {
        id: "ssl-checker",
        name: "SSL Checker",
        description: "Verify SSL certificate installation and security",
        category: "technical-seo",
        icon: "Shield",
        slug: "ssl-checker",
        metaTitle: "SSL Checker - Verify HTTPS Security",
        metaDescription: "Check SSL certificate validity and HTTPS configuration. Ensure your website is secure for visitors.",
      },
      {
        id: "redirect-checker",
        name: "Redirect Checker",
        description: "Check HTTP status codes and redirect chains",
        category: "technical-seo",
        icon: "ArrowRight",
        slug: "redirect-checker",
        metaTitle: "Redirect Checker - HTTP Status & Chains",
        metaDescription: "Check HTTP status codes and redirect chains. Find redirect loops and broken redirects.",
      },
      {
        id: "xml-sitemap-validator",
        name: "XML Sitemap Validator",
        description: "Validate your XML sitemap for search engines",
        category: "technical-seo",
        icon: "FileCheck",
        slug: "xml-sitemap-validator",
        featured: true,
        metaTitle: "XML Sitemap Validator - Check Sitemap Format",
        metaDescription: "Validate your XML sitemap against Google and Bing standards. Check for errors and formatting issues.",
      },
      {
        id: "robots-txt-checker",
        name: "Robots.txt Checker",
        description: "Analyze and validate your robots.txt file",
        category: "technical-seo",
        icon: "FileLock",
        slug: "robots-txt-checker",
        metaTitle: "Robots.txt Checker - Validate Crawl Rules",
        metaDescription: "Check your robots.txt file for syntax errors. Ensure search engines can crawl your important pages.",
      },
    ],
  },
  {
    id: "keyword-research",
    name: "Keyword Research",
    description: "Discover high-value keywords to target in your content",
    icon: "Search",
    slug: "keyword-research",
    tools: [
      {
        id: "keyword-suggestion",
        name: "Keyword Suggestion Tool",
        description: "Get keyword ideas based on seed keywords",
        category: "keyword-research",
        icon: "Lightbulb",
        slug: "keyword-suggestion",
        featured: true,
        popular: true,
        metaTitle: "Keyword Suggestion Tool - Find Keyword Ideas",
        metaDescription: "Discover new keyword opportunities. Enter a seed keyword and get hundreds of related suggestions with metrics.",
      },
      {
        id: "keyword-difficulty",
        name: "Keyword Difficulty Checker",
        description: "Analyze how hard it is to rank for specific keywords",
        category: "keyword-research",
        icon: "BarChart3",
        slug: "keyword-difficulty",
        popular: true,
        metaTitle: "Keyword Difficulty Checker - Competition Analysis",
        metaDescription: "Check keyword difficulty scores. Analyze competition level and ranking probability for any keyword.",
      },
      {
        id: "long-tail-finder",
        name: "Long Tail Keyword Finder",
        description: "Discover low-competition long-tail keyword opportunities",
        category: "keyword-research",
        icon: "List",
        slug: "long-tail-finder",
        metaTitle: "Long Tail Keyword Finder - Low Competition Keywords",
        metaDescription: "Find profitable long-tail keywords with low competition. Perfect for new websites and niche targeting.",
      },
      {
        id: "keyword-density",
        name: "Keyword Density Checker",
        description: "Analyze keyword usage and density in your content",
        category: "keyword-research",
        icon: "Percent",
        slug: "keyword-density",
        metaTitle: "Keyword Density Checker - Content Analysis",
        metaDescription: "Check keyword density in your content. Avoid over-optimization and maintain natural keyword usage.",
      },
      {
        id: "serp-preview",
        name: "SERP Preview Tool",
        description: "Preview how your page appears in Google search results",
        category: "keyword-research",
        icon: "Eye",
        slug: "serp-preview",
        featured: true,
        metaTitle: "SERP Preview Tool - Google Search Preview",
        metaDescription: "Preview how your page appears in Google search results. Optimize title and description for higher CTR.",
      },
      {
        id: "question-keyword",
        name: "Question Keyword Finder",
        description: "Find question-based keywords for featured snippets",
        category: "keyword-research",
        icon: "HelpCircle",
        slug: "question-keyword",
        metaTitle: "Question Keyword Finder - Featured Snippet Opportunities",
        metaDescription: "Find question-based keywords that trigger featured snippets. Optimize for voice search and position zero.",
      },
    ],
  },
  {
    id: "link-building",
    name: "Link Building",
    description: "Analyze and build high-quality backlinks to improve authority",
    icon: "Link2",
    slug: "link-building",
    tools: [
      {
        id: "backlink-checker",
        name: "Backlink Checker",
        description: "Analyze your backlink profile and referring domains",
        category: "link-building",
        icon: "ExternalLink",
        slug: "backlink-checker",
        featured: true,
        popular: true,
        metaTitle: "Backlink Checker - Analyze Link Profile",
        metaDescription: "Check your backlink profile and referring domains. Analyze link quality and anchor text distribution.",
      },
      {
        id: "broken-link-finder",
        name: "Broken Link Finder",
        description: "Find broken links on your website for cleanup",
        category: "link-building",
        icon: "Unlink",
        slug: "broken-link-finder",
        popular: true,
        metaTitle: "Broken Link Finder - Find 404 Links",
        metaDescription: "Find broken links on your website. Identify 404 errors and fix them to improve user experience and SEO.",
      },
      {
        id: "competitor-backlink",
        name: "Competitor Backlink Analyzer",
        description: "Analyze competitor backlink strategies",
        category: "link-building",
        icon: "Users",
        slug: "competitor-backlink",
        metaTitle: "Competitor Backlink Analyzer - Link Strategy",
        metaDescription: "Analyze competitor backlink profiles. Discover their link building strategies and find opportunities.",
      },
      {
        id: "anchor-text",
        name: "Anchor Text Analyzer",
        description: "Analyze anchor text distribution in your backlinks",
        category: "link-building",
        icon: "Type",
        slug: "anchor-text",
        metaTitle: "Anchor Text Analyzer - Distribution Check",
        metaDescription: "Analyze anchor text distribution in your backlinks. Avoid over-optimization penalties with balanced anchor text.",
      },
      {
        id: "link-prospect",
        name: "Link Prospect Finder",
        description: "Find potential link building opportunities",
        category: "link-building",
        icon: "Target",
        slug: "link-prospect",
        metaTitle: "Link Prospect Finder - Build Opportunities",
        metaDescription: "Find high-quality link building prospects. Discover websites that might link to your content.",
      },
    ],
  },
  {
    id: "rank-tracking",
    name: "Rank Tracking",
    description: "Monitor your search engine rankings and visibility",
    icon: "TrendingUp",
    slug: "rank-tracking",
    tools: [
      {
        id: "rank-checker",
        name: "Keyword Rank Checker",
        description: "Check your keyword positions in Google",
        category: "rank-tracking",
        icon: "Search",
        slug: "rank-checker",
        featured: true,
        popular: true,
        metaTitle: "Keyword Rank Checker - Google Position Tracker",
        metaDescription: "Check your keyword rankings in Google. Track positions across different locations and devices.",
      },
      {
        id: "local-rank-tracker",
        name: "Local Rank Tracker",
        description: "Track rankings for local SEO and Google Maps",
        category: "rank-tracking",
        icon: "MapPin",
        slug: "local-rank-tracker",
        metaTitle: "Local Rank Tracker - Google Maps Rankings",
        metaDescription: "Track local SEO rankings and Google Maps positions. Monitor visibility for local business searches.",
      },
      {
        id: "visibility-score",
        name: "Search Visibility Score",
        description: "Calculate your overall search visibility metrics",
        category: "rank-tracking",
        icon: "BarChart",
        slug: "visibility-score",
        metaTitle: "Search Visibility Score - SEO Visibility Calculator",
        metaDescription: "Calculate your overall search visibility score. Measure SEO performance across all tracked keywords.",
      },
      {
        id: "competitor-rank",
        name: "Competitor Rank Comparison",
        description: "Compare your rankings with competitors",
        category: "rank-tracking",
        icon: "GitCompare",
        slug: "competitor-rank",
        metaTitle: "Competitor Rank Comparison - Side by Side",
        metaDescription: "Compare your rankings with competitors. Identify keyword gaps and competitive opportunities.",
      },
    ],
  },
  {
    id: "content-tools",
    name: "Content Tools",
    description: "Create and optimize SEO-friendly content",
    icon: "PenTool",
    slug: "content-tools",
    tools: [
      {
        id: "content-idea",
        name: "Content Idea Generator",
        description: "Generate content ideas based on trending topics",
        category: "content-tools",
        icon: "Sparkles",
        slug: "content-idea",
        featured: true,
        metaTitle: "Content Idea Generator - Blog Topic Ideas",
        metaDescription: "Generate content ideas and blog topics. Find trending subjects and create engaging content calendars.",
      },
      {
        id: "readability-checker",
        name: "Readability Checker",
        description: "Check Flesch-Kincaid and other readability scores",
        category: "content-tools",
        icon: "BookOpen",
        slug: "readability-checker",
        popular: true,
        metaTitle: "Readability Checker - Flesch-Kincaid Score",
        metaDescription: "Check readability scores for your content. Improve Flesch-Kincaid, Flesch Reading Ease, and grade levels.",
      },
      {
        id: "plagiarism-checker",
        name: "Plagiarism Checker",
        description: "Check content originality and uniqueness",
        category: "content-tools",
        icon: "CopyCheck",
        slug: "plagiarism-checker",
        popular: true,
        metaTitle: "Plagiarism Checker - Content Originality",
        metaDescription: "Check content for plagiarism and duplicate content. Ensure originality before publishing.",
      },
      {
        id: "word-counter",
        name: "Word Counter & Analyzer",
        description: "Count words, characters, and analyze text structure",
        category: "content-tools",
        icon: "Calculator",
        slug: "word-counter",
        metaTitle: "Word Counter - Text Analysis Tool",
        metaDescription: "Count words, characters, sentences, and paragraphs. Analyze text structure and reading time.",
      },
      {
        id: "title-generator",
        name: "Blog Title Generator",
        description: "Generate catchy, SEO-optimized blog titles",
        category: "content-tools",
        icon: "Type",
        slug: "title-generator",
        metaTitle: "Blog Title Generator - Catchy Headlines",
        metaDescription: "Generate SEO-optimized blog titles and headlines. Create catchy, click-worthy titles that rank.",
      },
    ],
  },
];

// ============================================
// QUERY FUNCTIONS - Used by dynamic routes
// ============================================

export function getAllTools(): Tool[] {
  return toolCategories.flatMap((category) => category.tools);
}

export function getToolBySlug(slug: string): Tool | undefined {
  return getAllTools().find((tool) => tool.slug === slug);
}

export function getCategoryBySlug(slug: string): ToolCategory | undefined {
  return toolCategories.find((category) => category.slug === slug);
}

export function getToolsByCategory(categorySlug: string): Tool[] {
  const category = getCategoryBySlug(categorySlug);
  return category ? category.tools : [];
}

export function getFeaturedTools(): Tool[] {
  return getAllTools().filter((tool) => tool.featured);
}

export function getPopularTools(): Tool[] {
  return getAllTools().filter((tool) => tool.popular);
}

export function getToolCount(): number {
  return getAllTools().length;
}

export function getCategoryCount(): number {
  return toolCategories.length;
}

// ============================================
// STATIC PARAMS GENERATORS - For Next.js 15
// ============================================

export function generateCategoryStaticParams() {
  return toolCategories.map((category) => ({
    category: category.slug,
  }));
}

export function generateToolStaticParams() {
  return toolCategories.flatMap((category) =>
    category.tools.map((tool) => ({
      category: category.slug,
      tool: tool.slug,
    }))
  );
}

export function generateAllToolSlugs(): string[] {
  return getAllTools().map((tool) => tool.slug);
}

export function generateAllCategorySlugs(): string[] {
  return toolCategories.map((category) => category.slug);
}
