import { ToolCategory, Tool } from "@/types";

// ============================================
// SITE URL CONFIGURATION
// ============================================
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://seotools-peach.vercel.app";

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

        longDescription: `Meta tags are the first impression your page makes in search results. The title tag and meta description appear directly on the search engine results page (SERP) and heavily influence whether a user clicks through to your site. A well-crafted title tag should be concise, include your primary keyword near the beginning, and accurately reflect the page content. The meta description, while not a direct ranking factor, acts as ad copy for your organic listing — compelling descriptions can significantly lift click-through rates. This tool helps you draft both elements while respecting character limits: titles should stay under 60 characters to avoid truncation, and descriptions under 160 characters. It also flags common issues like duplicate titles across pages, missing descriptions, or keyword stuffing that can trigger search-engine penalties.`,
        howToUse: [
          "Enter your target keyword and a brief summary of the page topic.",
          "Review the generated title tag and adjust it to match your brand voice.",
          "Edit the meta description to include a clear call-to-action.",
          "Copy the final HTML or export the tags for your CMS.",
          "Paste the tags into the <head> section of your page and verify with a crawler."
        ],
        benefits: [
          "Stays within Google's display limits so your full title and description appear in SERPs.",
          "Prevents duplicate meta tags that dilute topical relevance across your site.",
          "Helps you A/B test different copy to find the highest CTR variant.",
          "Generates ready-to-paste HTML you can drop into any template or CMS."
        ],
        useCases: [
          "Launching a new landing page and need optimized SERP copy before going live.",
          "Refreshing stale meta descriptions on under-performing blog posts.",
          "Creating consistent title-tag patterns for large e-commerce catalogs.",
          "Auditing an inherited site where every page has the same generic meta tags."
        ],
        faq: [
          {
            question: "Do meta descriptions affect rankings directly?",
            answer: "No, Google has confirmed meta descriptions are not a direct ranking factor. However, they strongly influence click-through rate, which indirectly affects rankings over time."
          },
          {
            question: "What happens if my title tag is too long?",
            answer: "Google typically truncates titles beyond ~60 characters and may append your brand name. Long titles can also dilute keyword prominence, so concise is better."
          },
          {
            question: "Should every page have a unique meta description?",
            answer: "Yes. Duplicate or missing meta descriptions force Google to generate its own snippet, which may not reflect your messaging or include your target keywords."
          }
        ],
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

        longDescription: `Schema markup is a standardized vocabulary of tags you add to your HTML to help search engines understand the context of your content. When implemented correctly, it can unlock rich snippets — enhanced search results that display ratings, prices, event dates, FAQ dropdowns, and more directly on the SERP. JSON-LD (JavaScript Object Notation for Linked Data) is Google's preferred format because it keeps structured data separate from your visible HTML, reducing the risk of display bugs. This generator produces valid JSON-LD scripts for common schemas including Article, Product, FAQPage, LocalBusiness, Organization, and BreadcrumbList. Each script is validated against Schema.org and Google's rich-results test criteria before you copy it.`,
        howToUse: [
          "Select the schema type that matches your content (Article, Product, FAQ, etc.).",
          "Fill in the required fields such as name, description, and URL.",
          "Add optional fields like image, author, or aggregate rating for richer results.",
          "Click Generate to produce the JSON-LD script.",
          "Paste the script into the <head> or <body> of your page and test with Google's Rich Results Test."
        ],
        benefits: [
          "Unlocks rich snippets that increase visual footprint and CTR on the SERP.",
          "Helps voice assistants like Google Assistant understand and surface your content.",
          "Validates against Schema.org and Google's guidelines before you publish.",
          "Supports multiple schema types so you can mark up articles, products, events, and local businesses."
        ],
        useCases: [
          "Adding FAQ schema so your questions appear as expandable snippets in search results.",
          "Marking up product pages with price, availability, and review stars for e-commerce.",
          "Implementing LocalBusiness schema to improve visibility in map packs and local searches.",
          "Creating BreadcrumbList schema to show clean URL paths in SERPs instead of raw URLs."
        ],
        faq: [
          {
            question: "Will schema markup guarantee rich snippets?",
            answer: "No. Google decides whether to display rich snippets based on query relevance, site authority, and markup quality. However, correct schema is a prerequisite — without it, rich snippets are impossible."
          },
          {
            question: "Where should I place the JSON-LD script?",
            answer: "Google recommends placing JSON-LD in either the <head> or <body> of the page. Unlike microdata, it does not need to wrap around visible HTML elements."
          },
          {
            question: "Can I use multiple schema types on one page?",
            answer: "Yes. You can include multiple JSON-LD scripts on a single page. For example, an article can have Article schema, Author schema, and BreadcrumbList schema simultaneously."
          }
        ],
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

        longDescription: `Page speed is a confirmed Google ranking factor and a critical component of user experience. Studies show that every additional second of load time increases bounce rates and reduces conversions. Core Web Vitals — Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) — are the specific metrics Google uses to evaluate page experience. LCP measures how quickly the main content loads; FID tracks interactivity delay; CLS quantifies visual stability. This tool analyzes your URL against these benchmarks, identifies render-blocking resources, oversized images, unoptimized JavaScript, and slow server response times. The report prioritizes fixes by impact so you can tackle the highest-ROI improvements first.`,
        howToUse: [
          "Enter the full URL of the page you want to test, including the protocol (https://).",
          "Choose a test location closest to your primary audience for accurate latency readings.",
          "Run the analysis and wait for the full waterfall and metric breakdown.",
          "Review the prioritized recommendations list — items at the top have the biggest speed impact.",
          "Implement the fixes, then re-test to measure improvement."
        ],
        benefits: [
          "Measures real Core Web Vitals scores used by Google's page-experience algorithm.",
          "Identifies render-blocking CSS and JavaScript that delay first paint.",
          "Flags oversized images and suggests modern formats like WebP or AVIF.",
          "Provides a prioritized action list so you fix the biggest bottlenecks first."
        ],
        useCases: [
          "Benchmarking a new site before launch to ensure it passes Core Web Vitals.",
          "Diagnosing a sudden traffic drop after a Google page-experience update.",
          "Comparing mobile vs. desktop speed before prioritizing responsive optimizations.",
          "Generating a speed audit report for a client to justify development resources."
        ],
        faq: [
          {
            question: "What is a good Core Web Vitals score?",
            answer: "Google defines 'good' as LCP under 2.5 seconds, FID under 100 milliseconds, and CLS under 0.1. Scores outside these ranges need improvement or are considered poor."
          },
          {
            question: "Does page speed affect SEO rankings?",
            answer: "Yes. Since 2021, page experience signals including Core Web Vitals are part of Google's ranking algorithm. While content relevance remains primary, poor speed can push you below faster competitors."
          },
          {
            question: "Why do mobile scores differ from desktop scores?",
            answer: "Mobile devices typically have slower CPUs, higher latency, and smaller caches than desktops. Google primarily uses mobile-first indexing, so your mobile score is the one that matters most for SEO."
          }
        ],
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

        longDescription: `An XML sitemap is a roadmap you submit to search engines listing every URL you want indexed, along with metadata like last-modified dates, change frequencies, and priority scores. A malformed sitemap can prevent crawlers from discovering new content, waste crawl budget on broken URLs, or trigger warnings in Google Search Console. This validator checks your sitemap against the official Sitemap Protocol specification and Google's extended guidelines. It detects syntax errors, invalid URLs, oversized files, incorrect namespace declarations, and URLs blocked by robots.txt. The tool also warns if your sitemap exceeds the 50,000 URL or 50 MB limit, and suggests splitting large sitemaps into index files.`,
        howToUse: [
          "Paste your sitemap XML directly into the input field, or enter the public URL where it is hosted.",
          "Click Validate to run the full specification check.",
          "Review the error report — syntax issues are highlighted with line numbers.",
          "Fix the reported issues in your sitemap generator or CMS.",
          "Re-validate and then resubmit the corrected sitemap to Google Search Console."
        ],
        benefits: [
          "Catches syntax errors that cause Google to reject the entire sitemap.",
          "Flags URLs blocked by robots.txt so you don't waste crawl budget.",
          "Warns when file size or URL count exceeds search-engine limits.",
          "Validates namespace declarations required by the official Sitemap Protocol."
        ],
        useCases: [
          "Validating a new sitemap before submitting it to Google Search Console for the first time.",
          "Troubleshooting a 'Sitemap could not be read' error in Search Console.",
          "Auditing an auto-generated e-commerce sitemap with thousands of product URLs.",
          "Checking that hreflang sitemap extensions are correctly formatted for international sites."
        ],
        faq: [
          {
            question: "How often should I update my XML sitemap?",
            answer: "Update it whenever you publish, remove, or significantly change a page. Most CMS plugins and static-site generators can auto-regenerate sitemaps on each build or publish event."
          },
          {
            question: "Does a sitemap guarantee indexing?",
            answer: "No. A sitemap helps discovery but does not force indexing. Google still evaluates content quality, relevance, and site authority before deciding to index a URL."
          },
          {
            question: "What is the maximum size of an XML sitemap?",
            answer: "The official limit is 50,000 URLs or 50 MB uncompressed, whichever comes first. If you exceed this, split your URLs across multiple sitemaps and reference them in a sitemap index file."
          }
        ],
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

        longDescription: `Keyword research is the foundation of every successful SEO strategy. Before you write a single sentence, you need to know what your audience is actually searching for — not just what you assume they want. This tool takes a seed keyword and expands it into hundreds of related terms using semantic analysis, search-autocomplete data, and question-based modifiers. Each suggestion includes search volume estimates, competition level, and cost-per-click data where available. The results are organized into thematic clusters so you can identify content gaps, plan editorial calendars, and build topic clusters that signal topical authority to search engines. Unlike basic autocomplete scrapers, this tool filters out branded terms, deduplicates close variants, and surfaces long-tail opportunities with commercial intent.`,
        howToUse: [
          "Enter a broad seed keyword that describes your product, service, or content niche.",
          "Select your target country and language to localize search volume data.",
          "Run the analysis and browse the clustered suggestions by theme (questions, comparisons, prepositions).",
          "Export the full list or copy individual clusters into your content brief.",
          "Map high-intent keywords to existing pages and flag gaps that need new content."
        ],
        benefits: [
          "Expands one seed keyword into hundreds of related terms with search metrics.",
          "Clusters suggestions by intent type: informational, navigational, transactional, and commercial investigation.",
          "Surfaces question-based keywords that trigger featured snippets and voice search results.",
          "Filters out branded noise so you focus on generic, rankable terms."
        ],
        useCases: [
          "Planning a content calendar for a new blog in an unfamiliar niche.",
          "Identifying low-competition long-tail terms for a new website with limited domain authority.",
          "Building a topic-cluster strategy by grouping related keywords into pillar and sub-topic pages.",
          "Finding comparison and review keywords for affiliate content with high commercial intent."
        ],
        faq: [
          {
            question: "What is a seed keyword?",
            answer: "A seed keyword is a broad term that defines your niche or topic. For example, 'running shoes' is a seed keyword that can expand into 'best running shoes for flat feet,' 'lightweight running shoes,' and 'running shoes vs trainers.'"
          },
          {
            question: "How accurate is the search volume data?",
            answer: "Search volume is estimated from aggregated data sources and should be treated as directional rather than exact. Trends and relative comparisons between keywords are more reliable than absolute numbers."
          },
          {
            question: "Should I target high-volume or low-competition keywords?",
            answer: "New sites should prioritize low-competition, long-tail keywords to build authority before targeting high-volume head terms. Established sites can compete for broader keywords while maintaining a mix of both."
          }
        ],
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

        longDescription: `Search engine results pages are crowded. Your listing competes with ads, featured snippets, image packs, local packs, and video carousels — often above the traditional blue links. That means your organic result has less visual space and less time to earn a click. The SERP Preview Tool simulates exactly how your title tag, meta description, and URL will appear in Google's results on both desktop and mobile. It accounts for pixel-width truncation (not just character counts), bolding of query terms, and rich-result eligibility. You can test multiple title and description variants side-by-side, preview how they look with your favicon, and see whether your copy gets cut off on smaller screens. This removes the guesswork from meta-tag optimization and lets you iterate before publishing.`,
        howToUse: [
          "Enter your proposed title tag, meta description, and target URL.",
          "Type a sample search query to see how Google bolds matching terms in your snippet.",
          "Switch between desktop and mobile views to check truncation points.",
          "Adjust the title and description until the full message fits within pixel limits.",
          "Copy the final tags and implement them on your live page."
        ],
        benefits: [
          "Simulates real Google SERP rendering including pixel-width truncation, not just character counts.",
          "Shows how query-term bolding affects readability and visual weight.",
          "Compares desktop and mobile previews so you optimize for both contexts.",
          "Helps you craft compelling copy that stands out against competitors and rich results."
        ],
        useCases: [
          "Finalizing title and description copy before launching a critical landing page.",
          "A/B testing two headline variants to see which looks more compelling in actual search results.",
          "Checking whether a long brand name pushes important keywords out of the visible title.",
          "Previewing how a page will appear when it wins a featured snippet or sits in position zero."
        ],
        faq: [
          {
            question: "Why does the preview use pixel width instead of character count?",
            answer: "Google truncates titles and descriptions based on pixel width, not character count. A title with many wide characters like 'W' or 'M' will be truncated sooner than one with narrow characters like 'i' or 'l.'"
          },
          {
            question: "Does this tool show how rich results will look?",
            answer: "The preview focuses on standard blue-link results. Rich results like stars, images, or FAQ dropdowns depend on schema markup and are not guaranteed — this tool helps you perfect the base snippet that appears underneath."
          },
          {
            question: "Can I test multiple variants at once?",
            answer: "Yes. You can save and compare multiple title-description pairs side-by-side to see which one maximizes visible information and click appeal."
          }
        ],
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
      longDescription:
  "A backlink profile shows which websites link to your pages and can reveal opportunities, risks, and changes in your site's authority. Reviewing backlinks regularly helps you understand how other sites reference your content and whether your link profile is growing naturally. This tool gives you a practical starting point for reviewing referring domains and individual backlinks in one place.",
howToUse: [
  "Enter the URL of the website or page you want to review.",
  "Run the backlink check and wait for the available link data to load.",
  "Review the referring domains and backlinks pointing to the target.",
  "Look for useful referring sites, unusual links, and changes in your backlink profile.",
  "Use the findings to plan link-building, content, and backlink-audit work."
],
benefits: [
  "Provides a clearer view of the websites linking to your pages.",
  "Helps identify potential link-building opportunities.",
  "Makes backlink profile reviews easier during SEO audits.",
  "Helps you monitor changes in your site's external link profile."
],
useCases: [
  "Reviewing the backlink profile of an established website.",
  "Finding referring domains that may provide future outreach opportunities.",
  "Auditing backlinks after a major website or content change.",
  "Comparing backlink patterns when researching competing websites."
],
faq: [
  {
    question: "What is a backlink?",
    answer:
      "A backlink is a link from another website to a page on your website. Search engines can use links as one signal when evaluating the relationships and authority of pages on the web."
  },
  {
    question: "Why should I check my backlinks?",
    answer:
      "Regular backlink checks help you understand which websites reference your content, discover link-building opportunities, and spot unusual changes in your backlink profile."
  },
  {
    question: "Are all backlinks equally valuable?",
    answer:
      "No. The usefulness of a backlink depends on factors such as the relevance and quality of the linking page and website. A large number of links does not automatically mean a stronger SEO profile."
  }
]},
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
      longDescription:
  "Keyword rankings show where your pages appear in search results for the queries that matter to your business. Tracking these positions over time helps you understand whether your SEO efforts are improving visibility, losing ground, or reaching new search opportunities. This tool provides a simple way to check keyword positions and evaluate changes in your search performance.",
howToUse: [
  "Enter the keyword or search query you want to check.",
  "Enter the website or domain whose ranking you want to evaluate.",
  "Select the relevant search location or device when those options are available.",
  "Review the position shown for your website in the search results.",
  "Record important changes and use them to guide your SEO and content strategy."
],
benefits: [
  "Shows where your website appears for important search queries.",
  "Helps monitor ranking changes after SEO and content updates.",
  "Makes it easier to identify keywords that need further optimization.",
  "Provides useful ranking information for ongoing SEO performance reviews."
],
useCases: [
  "Checking the current Google position of an important target keyword.",
  "Monitoring ranking changes after publishing or updating a page.",
  "Evaluating whether an SEO campaign is improving search visibility.",
  "Reviewing keyword performance when planning future content updates."
],
faq: [
  {
    question: "What is a keyword rank checker?",
    answer:
      "A keyword rank checker is an SEO tool that helps you determine where a website or page appears in search results for a specific keyword or search query."
  },
  {
    question: "Why are keyword rankings important?",
    answer:
      "Keyword rankings help you understand how visible your pages are for target searches. Changes in rankings can provide useful feedback about your content and SEO performance."
  },
  {
    question: "Can rankings differ by location or device?",
    answer:
      "Yes. Search results can vary depending on factors such as location, device, language, personalization, and search context. Comparing consistent conditions makes ranking changes easier to interpret."
  }
]},
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
     
longDescription:
  "Finding useful content topics consistently is an important part of a sustainable SEO strategy. A strong content idea should match what your audience is looking for, address a meaningful question or problem, and provide an opportunity to create a useful page. This tool helps turn broad topics into practical blog and content ideas that can support your editorial planning and organic search strategy.",

howToUse: [
  "Enter a broad topic, keyword, or subject related to your website.",
  "Review the suggested content ideas and identify topics that match your audience.",
  "Evaluate each idea based on search intent, relevance, and the value it can provide.",
  "Select promising topics and turn them into detailed article or content briefs.",
  "Organize the selected ideas into your content calendar and prioritize them by importance."
],

benefits: [
  "Helps you discover new topics when your content calendar needs fresh ideas.",
  "Turns broad subjects into more specific and actionable content opportunities.",
  "Supports consistent content planning for SEO and audience growth.",
  "Makes it easier to organize potential topics before writing begins."
],

useCases: [
  "Planning a new blog content calendar for an SEO campaign.",
  "Finding article ideas around an important target keyword.",
  "Expanding an existing topic cluster with supporting content.",
  "Generating fresh ideas when your publishing schedule needs new topics."
],

faq: [
  {
    question: "What is a content idea generator?",
    answer:
      "A content idea generator helps you discover potential topics for blog posts, articles, guides, and other content formats based on a subject or keyword."
  },
  {
    question: "How should I choose between different content ideas?",
    answer:
      "Prioritize ideas that are relevant to your audience, match a clear search intent, provide useful information, and fit naturally into your overall content strategy."
  },
  {
    question: "Can content ideas help with SEO?",
    answer:
      "Yes. Well-chosen content topics can help you cover relevant search queries, build topical depth, answer user questions, and create useful resources that support your organic search strategy."
  }
],},
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
