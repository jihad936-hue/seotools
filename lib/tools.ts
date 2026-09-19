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
      longDescription:
  "A clear heading structure helps users understand the organization of a page and makes it easier for search engines to interpret its content. H1 through H6 headings should form a logical hierarchy that reflects the main topic and supporting sections. This tool helps you review your heading structure and identify opportunities to make it clearer and more consistent.",

howToUse: [
  "Enter or analyze the page content containing your H1-H6 headings.",
  "Review the heading levels and their order.",
  "Check whether the main topic is represented by an appropriate H1.",
  "Identify missing, duplicated, or poorly ordered heading levels.",
  "Adjust your headings so they clearly organize the page content."
],

benefits: [
  "Helps create a clearer content hierarchy.",
  "Makes long pages easier for visitors to scan.",
  "Helps identify heading structure issues during SEO audits.",
  "Supports better organization of page content."
],

useCases: [
  "Auditing heading structures on existing websites.",
  "Checking article and blog post heading hierarchy.",
  "Reviewing landing pages before publication.",
  "Finding heading issues during technical and on-page SEO audits."
],

faq: [
  {
    question: "How many H1 tags should a page have?",
    answer:
      "A page should have a clear primary heading that represents its main topic. The important goal is a logical and meaningful heading structure rather than simply targeting a specific number of H1 tags."
  },
  {
    question: "Should H2 headings come before H3 headings?",
    answer:
      "Generally, H2 headings should introduce major sections and H3 headings should be used for subsections within those sections. This creates a more understandable hierarchy."
  },
  {
    question: "Do heading tags directly improve rankings?",
    answer:
      "Headings primarily help communicate page structure and make content easier to understand and navigate. They should be written for clarity and users rather than being filled with keywords."
  }
],},
      {
        id: "image-alt-checker",
        name: "Image Alt Text Checker",
        description: "Check and optimize image alt text for accessibility and SEO",
        category: "on-page-seo",
        icon: "Image",
        slug: "image-alt-checker",
        metaTitle: "Image Alt Text Checker - SEO & Accessibility",
        metaDescription: "Check image alt text across your website. Improve accessibility and image SEO rankings.",
      longDescription:
  "Alternative text describes the purpose or meaning of an image when the image cannot be viewed. Well-written alt text can improve accessibility by helping screen-reader users understand relevant images, while also giving search engines additional context. This tool helps identify missing or weak alt text so images can be reviewed and described appropriately.",

howToUse: [
  "Enter the page or image information you want to review.",
  "Identify images that are missing alternative text.",
  "Review existing alt text for clarity and relevance.",
  "Rewrite descriptions so they communicate the useful purpose of each image.",
  "Save the improved alt text and verify it in your page HTML."
],

benefits: [
  "Helps identify missing image alt attributes.",
  "Supports more accessible website content.",
  "Provides useful context about images to search engines.",
  "Makes image audits easier during on-page SEO reviews."
],

useCases: [
  "Auditing image accessibility across a website.",
  "Reviewing blog posts with many images.",
  "Checking product and e-commerce images.",
  "Improving image optimization during an SEO audit."
],

faq: [
  {
    question: "What should image alt text contain?",
    answer:
      "Alt text should briefly describe the meaningful content or purpose of an image. It should be specific and useful rather than stuffed with keywords."
  },
  {
    question: "Should decorative images have alt text?",
    answer:
      "Decorative images generally do not need a descriptive alternative. They can use an empty alt attribute when appropriate so assistive technologies can ignore them."
  },
  {
    question: "Does alt text help image SEO?",
    answer:
      "Relevant alt text gives search engines additional context about an image. It can support image search understanding, although it should primarily serve accessibility and user needs."
  }
],},
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
      longDescription:
  "High-quality SEO content should satisfy the search intent behind a query while remaining useful and readable for visitors. Content analysis can reveal issues such as weak topical coverage, excessive keyword repetition, difficult readability, or sections that need clearer explanations. This tool helps you review important content signals and identify practical opportunities for improvement.",

howToUse: [
  "Enter or paste the content you want to analyze.",
  "Review the readability and keyword-related metrics.",
  "Look for sections that may need clearer explanations or better organization.",
  "Check keyword usage without forcing unnecessary repetitions.",
  "Apply the recommendations and review the content again before publishing."
],

benefits: [
  "Provides a structured review of important content signals.",
  "Helps identify readability and organization issues.",
  "Highlights potentially excessive or insufficient keyword usage.",
  "Supports consistent content quality during SEO workflows."
],

useCases: [
  "Auditing existing blog articles.",
  "Reviewing landing-page copy before publication.",
  "Improving content that receives little organic traffic.",
  "Checking articles during an on-page SEO audit."
],

faq: [
  {
    question: "What does a content analyzer check?",
    answer:
      "Depending on the available metrics, a content analyzer can review factors such as readability, keyword usage, text structure, and other signals that help identify areas for improvement."
  },
  {
    question: "Is higher keyword density always better?",
    answer:
      "No. Keywords should appear naturally where they help explain the topic. Excessive repetition can make content difficult to read and may reduce its usefulness."
  },
  {
    question: "What makes content SEO-friendly?",
    answer:
      "SEO-friendly content clearly addresses the searcher's intent, provides useful information, is easy to read, and is organized around a clear topic without relying on unnatural keyword repetition."
  }
],},
      {
        id: "internal-link-checker",
        name: "Internal Link Checker",
        description: "Audit and optimize your internal linking structure",
        category: "on-page-seo",
        icon: "Link",
        slug: "internal-link-checker",
        metaTitle: "Internal Link Checker - Audit Site Structure",
        metaDescription: "Audit internal links across your website. Find orphaned pages and improve your site architecture.",
      longDescription:
  "Internal links connect pages within the same website and help visitors discover related information. They also help search engines understand relationships between pages and navigate a site's content structure. This tool helps identify internal linking opportunities and potential issues such as weak connections or pages that may be difficult to reach through internal links.",

howToUse: [
  "Enter the website or page information you want to review.",
  "Review the internal links detected across the available pages.",
  "Look for important pages with few or no relevant internal links.",
  "Identify opportunities to connect related pages using descriptive anchor text.",
  "Add useful internal links and review the site structure again."
],

benefits: [
  "Helps uncover internal linking opportunities.",
  "Makes important pages easier for visitors to discover.",
  "Supports clearer website information architecture.",
  "Helps identify potentially isolated or weakly connected pages."
],

useCases: [
  "Auditing internal links during an SEO project.",
  "Improving navigation between related blog articles.",
  "Finding pages that need stronger internal connections.",
  "Optimizing site architecture as new content is published."
],

faq: [
  {
    question: "Why are internal links important for SEO?",
    answer:
      "Internal links help users navigate between related pages and help search engines discover and understand relationships within a website."
  },
  {
    question: "What is an orphan page?",
    answer:
      "An orphan page is a page that has no meaningful internal links pointing to it from other pages on the site. Such pages can be harder for users and search engines to discover."
  },
  {
    question: "What makes good internal anchor text?",
    answer:
      "Good anchor text briefly describes the destination page and gives users a clear idea of what they will find after clicking the link."
  }
],},
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
      longDescription:
  "A mobile-friendly website should provide a clear and usable experience across phones and tablets. Responsive layouts, readable text, accessible controls, and properly sized content help visitors interact with a site without unnecessary zooming or horizontal scrolling. This tool helps review important mobile usability signals and identify areas that may need improvement.",

howToUse: [
  "Enter the URL of the page you want to check.",
  "Run the mobile-friendly analysis.",
  "Review the detected mobile usability issues.",
  "Fix layout, text, navigation, or viewport-related problems.",
  "Test the page again after making your changes."
],

benefits: [
  "Helps identify common mobile usability problems.",
  "Supports better experiences for visitors using smartphones and tablets.",
  "Makes responsive design issues easier to discover.",
  "Provides a practical checkpoint before publishing or updating pages."
],

useCases: [
  "Checking newly published landing pages.",
  "Auditing an existing website for mobile usability.",
  "Reviewing responsive layouts after a redesign.",
  "Troubleshooting pages that perform poorly for mobile visitors."
],

faq: [
  {
    question: "Why is mobile friendliness important?",
    answer:
      "A large share of web traffic comes from mobile devices, so pages should be easy to read, navigate, and interact with on smaller screens."
  },
  {
    question: "What can make a page difficult to use on mobile?",
    answer:
      "Common problems include text that is too small, content that extends beyond the screen, poorly sized controls, and layouts that do not adapt to different screen sizes."
  },
  {
    question: "Does a mobile-friendly test guarantee higher rankings?",
    answer:
      "No. Mobile usability is only one part of overall SEO. A useful mobile experience should be combined with strong content, technical health, and other SEO best practices."
  }
],},
      {
        id: "ssl-checker",
        name: "SSL Checker",
        description: "Verify SSL certificate installation and security",
        category: "technical-seo",
        icon: "Shield",
        slug: "ssl-checker",
        metaTitle: "SSL Checker - Verify HTTPS Security",
        metaDescription: "Check SSL certificate validity and HTTPS configuration. Ensure your website is secure for visitors.",
      longDescription:
  "An SSL certificate enables encrypted HTTPS connections between a website and its visitors. A valid certificate helps protect information exchanged with the site and gives users confidence that they are connecting securely. This tool helps review certificate details and identify common SSL configuration or validity problems.",

howToUse: [
  "Enter the domain you want to check.",
  "Run the SSL certificate analysis.",
  "Review the certificate status, validity, and configuration details.",
  "Investigate any warnings or certificate errors.",
  "Resolve identified issues and run the check again."
],

benefits: [
  "Helps verify that HTTPS is configured correctly.",
  "Makes certificate expiration easier to detect.",
  "Helps identify common SSL configuration problems.",
  "Supports a more secure experience for website visitors."
],

useCases: [
  "Checking a newly installed SSL certificate.",
  "Monitoring certificate expiration dates.",
  "Troubleshooting HTTPS warnings.",
  "Auditing the security configuration of an existing website."
],

faq: [
  {
    question: "What is an SSL certificate?",
    answer:
      "An SSL certificate helps establish an encrypted HTTPS connection between a website and a visitor's browser."
  },
  {
    question: "Why should my website use HTTPS?",
    answer:
      "HTTPS encrypts data exchanged between the browser and website and helps visitors recognize that the connection is protected."
  },
  {
    question: "What happens when an SSL certificate expires?",
    answer:
      "Browsers may display security warnings and visitors may be prevented from accessing the site normally until the certificate is renewed or replaced."
  }
],},
      {
        id: "redirect-checker",
        name: "Redirect Checker",
        description: "Check HTTP status codes and redirect chains",
        category: "technical-seo",
        icon: "ArrowRight",
        slug: "redirect-checker",
        metaTitle: "Redirect Checker - HTTP Status & Chains",
        metaDescription: "Check HTTP status codes and redirect chains. Find redirect loops and broken redirects.",
      longDescription:
  "HTTP redirects tell browsers and search engines that a requested URL should lead to another location. Correct redirects are important when pages move, domains change, or old URLs need to point to updated content. This tool helps inspect HTTP status codes and redirect chains so you can identify unnecessary hops, loops, or broken destinations.",

howToUse: [
  "Enter the URL you want to inspect.",
  "Run the redirect check.",
  "Review the HTTP status codes and destination URLs.",
  "Look for unnecessary redirect chains or redirect loops.",
  "Update the affected redirects and test the URL again."
],

benefits: [
  "Helps identify incorrect or broken redirects.",
  "Makes redirect chains easier to detect.",
  "Supports cleaner website URL structures.",
  "Helps troubleshoot unexpected HTTP status responses."
],

useCases: [
  "Auditing redirects after a website migration.",
  "Checking URLs after changing page locations.",
  "Troubleshooting pages that redirect unexpectedly.",
  "Reviewing redirect rules during a technical SEO audit."
],

faq: [
  {
    question: "What is a redirect chain?",
    answer:
      "A redirect chain occurs when one URL redirects to another URL that then redirects again before reaching the final destination."
  },
  {
    question: "Why should unnecessary redirects be avoided?",
    answer:
      "Unnecessary redirects can add extra requests and make URL paths more complicated. Keeping redirects efficient can improve navigation and crawling."
  },
  {
    question: "What is a redirect loop?",
    answer:
      "A redirect loop occurs when URLs repeatedly redirect to each other instead of reaching a final page, preventing the requested content from loading normally."
  }
],},
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
      longDescription:
  "A robots.txt file provides crawl instructions that can tell search engine crawlers which areas of a website they may or may not access. Correct rules can help communicate your preferred crawl boundaries, while incorrect directives can unintentionally block important pages. This tool helps review robots.txt content and identify potential syntax or configuration issues.",

howToUse: [
  "Enter your website or robots.txt URL.",
  "Run the robots.txt analysis.",
  "Review the detected directives and crawl rules.",
  "Check whether important pages or resources may be unintentionally blocked.",
  "Correct any issues and test the file again before publishing."
],

benefits: [
  "Helps identify potential robots.txt configuration problems.",
  "Makes crawl directives easier to review.",
  "Helps prevent accidental blocking of important areas.",
  "Supports technical SEO audits and troubleshooting."
],

useCases: [
  "Checking a newly created robots.txt file.",
  "Auditing crawl rules during a technical SEO review.",
  "Troubleshooting pages that search engines cannot access.",
  "Reviewing robots.txt after a website migration or redesign."
],

faq: [
  {
    question: "What is robots.txt?",
    answer:
      "Robots.txt is a text file that provides instructions to automated crawlers about which URL paths they may or may not access."
  },
  {
    question: "Can robots.txt remove a page from Google?",
    answer:
      "Robots.txt primarily controls crawling and should not be relied upon as the primary method for removing indexed content from search results."
  },
  {
    question: "Can an incorrect robots.txt file hurt SEO?",
    answer:
      "Yes. An overly restrictive rule can prevent search engine crawlers from accessing pages or resources that are important for your website."
  }
],},
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
      longDescription:
  "Keyword difficulty estimates how challenging it may be to compete for a search query based on the strength and competitiveness of the pages already ranking. Difficulty is useful when prioritizing keywords, but it should be considered alongside search intent, relevance, content quality, and the authority of your own website.",

howToUse: [
  "Enter the keyword you want to evaluate.",
  "Run the keyword difficulty analysis.",
  "Review the estimated competition level.",
  "Compare the difficulty with the relevance and search intent of the keyword.",
  "Prioritize keywords that match your site's goals and realistic ranking opportunities."
],

benefits: [
  "Helps prioritize keywords for SEO campaigns.",
  "Provides a quick view of competitive search terms.",
  "Supports more informed content planning.",
  "Helps balance ambitious targets with realistic opportunities."
],

useCases: [
  "Planning a new keyword research campaign.",
  "Finding realistic targets for a newer website.",
  "Comparing several keywords before creating content.",
  "Building a prioritized SEO content roadmap."
],

faq: [
  {
    question: "What does keyword difficulty mean?",
    answer:
      "Keyword difficulty is an estimate of how competitive it may be to rank organically for a particular search query."
  },
  {
    question: "Is a low difficulty keyword always better?",
    answer:
      "Not necessarily. A keyword should also be relevant to your audience, match search intent, and provide meaningful value for your business or website."
  },
  {
    question: "Can keyword difficulty guarantee ranking success?",
    answer:
      "No. Difficulty is an estimate rather than a guarantee. Rankings also depend on content quality, relevance, authority, technical factors, and competition."
  }
],},
      {
        id: "long-tail-finder",
        name: "Long Tail Keyword Finder",
        description: "Discover low-competition long-tail keyword opportunities",
        category: "keyword-research",
        icon: "List",
        slug: "long-tail-finder",
        metaTitle: "Long Tail Keyword Finder - Low Competition Keywords",
        metaDescription: "Find profitable long-tail keywords with low competition. Perfect for new websites and niche targeting.",
      longDescription:
  "Long-tail keywords are more specific search queries that often contain several words and describe a particular need or topic. They can be useful for finding focused content opportunities and reaching searchers with clearer intent. This tool helps generate long-tail keyword ideas that can be evaluated for relevance and competition.",

howToUse: [
  "Enter a broad topic or primary keyword.",
  "Generate related long-tail keyword ideas.",
  "Review the suggestions for relevance to your audience.",
  "Group useful phrases by search intent and topic.",
  "Select suitable keywords for content planning and optimization."
],

benefits: [
  "Helps discover more specific keyword opportunities.",
  "Supports focused content planning.",
  "Can reveal queries with clearer search intent.",
  "Provides additional ideas beyond broad head terms."
],

useCases: [
  "Finding topics for targeted blog articles.",
  "Building keyword clusters around a primary topic.",
  "Planning content for niche audiences.",
  "Expanding an existing keyword research list."
],

faq: [
  {
    question: "What is a long-tail keyword?",
    answer:
      "A long-tail keyword is a specific search query that usually contains multiple words and expresses a more focused search intent."
  },
  {
    question: "Are long-tail keywords easier to rank for?",
    answer:
      "They can be less competitive than broad keywords, but competitiveness varies by query. Relevance and search intent should also be considered."
  },
  {
    question: "Why are long-tail keywords useful?",
    answer:
      "They can help create focused content around specific questions, needs, or topics and may attract visitors with clearer search intent."
  }
],},
      {
        id: "keyword-density",
        name: "Keyword Density Checker",
        description: "Analyze keyword usage and density in your content",
        category: "keyword-research",
        icon: "Percent",
        slug: "keyword-density",
        metaTitle: "Keyword Density Checker - Content Analysis",
        metaDescription: "Check keyword density in your content. Avoid over-optimization and maintain natural keyword usage.",
      longDescription:
  "Keyword density describes how frequently a particular word or phrase appears within a piece of content. Reviewing keyword usage can help identify unusually repetitive wording, but there is no universal ideal density that guarantees better rankings. The goal should be natural, useful writing that clearly covers the topic and satisfies search intent.",

howToUse: [
  "Paste or enter the content you want to analyze.",
  "Choose the keyword or phrase you want to review.",
  "Run the keyword density analysis.",
  "Review how frequently the term appears in the content.",
  "Edit repetitive wording where necessary while keeping the content natural."
],

benefits: [
  "Makes keyword repetition easier to identify.",
  "Helps detect potentially unnatural wording.",
  "Supports content optimization reviews.",
  "Encourages more balanced and readable keyword usage."
],

useCases: [
  "Reviewing blog content before publication.",
  "Auditing existing pages for repetitive keywords.",
  "Checking target keyword usage during on-page SEO work.",
  "Comparing keyword usage across different content drafts."
],

faq: [
  {
    question: "What is keyword density?",
    answer:
      "Keyword density is the frequency of a keyword or phrase relative to the total amount of text on a page."
  },
  {
    question: "Is there an ideal keyword density for SEO?",
    answer:
      "There is no universal keyword density percentage that guarantees higher rankings. Keywords should be used naturally and where they help explain the topic."
  },
  {
    question: "Can high keyword density hurt content quality?",
    answer:
      "Excessive repetition can make content unnatural and harder to read. Focus on useful information and natural language rather than a specific density target."
  }
],},
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
      longDescription:
  "Broken links can prevent visitors from reaching useful pages and may create unnecessary problems during website crawling. This tool helps identify links that return errors so you can review and fix them, improving navigation, site maintenance, and overall website quality.",
howToUse: [
  "Enter the website or page you want to check.",
  "Run the link analysis and review the detected URLs.",
  "Identify links that return errors or cannot be reached.",
  "Check each broken link and determine whether it should be fixed, redirected, or removed.",
  "Recheck the affected pages after making the necessary changes."
],
benefits: [
  "Helps identify broken URLs that may affect visitors.",
  "Makes website link maintenance easier.",
  "Supports cleaner website navigation.",
  "Helps find issues that should be reviewed during SEO audits."
],
useCases: [
  "Auditing a website for broken links.",
  "Checking older blog posts after URL changes.",
  "Reviewing links after a website migration.",
  "Cleaning up websites with outdated or removed pages."
],
faq: [
  {
    question: "What is a broken link?",
    answer:
      "A broken link is a hyperlink that leads to a page or resource that cannot be reached successfully, often because the destination was removed, moved, or returns an error."
  },
  {
    question: "Do broken links affect SEO?",
    answer:
      "Broken links can create a poor user experience and make website maintenance more difficult. Important broken links should be reviewed and fixed when appropriate."
  },
  {
    question: "How should I fix a broken link?",
    answer:
      "Depending on the situation, you can update the link to the correct URL, redirect the old URL to a relevant replacement, or remove the link if the destination is no longer useful."
  }
],},
      {
        id: "competitor-backlink",
        name: "Competitor Backlink Analyzer",
        description: "Analyze competitor backlink strategies",
        category: "link-building",
        icon: "Users",
        slug: "competitor-backlink",
        metaTitle: "Competitor Backlink Analyzer - Link Strategy",
        metaDescription: "Analyze competitor backlink profiles. Discover their link building strategies and find opportunities.",
      longDescription:
  "Competitor backlink analysis can reveal websites and content that link to competing businesses or publishers. Reviewing these patterns can help you understand competitive link-building strategies and discover relevant opportunities for your own website.",
howToUse: [
  "Enter the competitor website or domain you want to analyze.",
  "Review the available backlink and referring-domain information.",
  "Identify websites that link to the competitor.",
  "Look for relevant sources that may also be appropriate for your own content.",
  "Use the findings to guide your link-building and content outreach strategy."
],
benefits: [
  "Helps reveal competitor backlink patterns.",
  "Makes referring-domain research more organized.",
  "Can uncover potential link-building opportunities.",
  "Provides useful context for competitive SEO analysis."
],
useCases: [
  "Researching competitor link-building strategies.",
  "Finding websites that reference competing content.",
  "Discovering potential outreach opportunities.",
  "Supporting backlink analysis during an SEO audit."
],
faq: [
  {
    question: "Why analyze competitor backlinks?",
    answer:
      "Competitor backlink analysis can help you discover websites and content that already reference competitors and may provide useful ideas for your own link-building strategy."
  },
  {
    question: "Should I try to get every backlink my competitors have?",
    answer:
      "No. Focus on relevant and trustworthy opportunities that make sense for your website and content rather than trying to reproduce every competitor backlink."
  },
  {
    question: "What is a referring domain?",
    answer:
      "A referring domain is a website domain that contains one or more links pointing to another website."
  }
],},
      {
        id: "anchor-text",
        name: "Anchor Text Analyzer",
        description: "Analyze anchor text distribution in your backlinks",
        category: "link-building",
        icon: "Type",
        slug: "anchor-text",
        metaTitle: "Anchor Text Analyzer - Distribution Check",
        metaDescription: "Analyze anchor text distribution in your backlinks. Avoid over-optimization penalties with balanced anchor text.",
      longDescription:
  "Anchor text is the clickable text used in a hyperlink. Reviewing anchor text distribution can help you understand how pages are being referenced and whether link descriptions appear varied, descriptive, and natural. This tool helps organize anchor text data for backlink analysis.",
howToUse: [
  "Enter the backlink or website data you want to analyze.",
  "Review the anchor text used across the available links.",
  "Group similar anchor phrases and identify common patterns.",
  "Look for unusually repetitive or unclear anchor text.",
  "Use the findings to guide a more natural and descriptive linking strategy."
],
benefits: [
  "Helps understand anchor text distribution.",
  "Makes repetitive anchor patterns easier to identify.",
  "Supports backlink profile analysis.",
  "Encourages clearer and more descriptive linking practices."
],
useCases: [
  "Auditing a website's backlink profile.",
  "Reviewing anchor text after a link-building campaign.",
  "Investigating unusual backlink patterns.",
  "Analyzing competitor anchor text strategies."
],
faq: [
  {
    question: "What is anchor text?",
    answer:
      "Anchor text is the visible, clickable text of a hyperlink that points users to another page or resource."
  },
  {
    question: "Why is anchor text important?",
    answer:
      "Descriptive anchor text can help users understand where a link leads and can provide search engines with contextual information about the destination page."
  },
  {
    question: "Should I use the same anchor text for every backlink?",
    answer:
      "A natural backlink profile generally contains varied anchor text. Links should use wording that accurately describes the destination rather than forcing the same phrase repeatedly."
  }
],},
      {
        id: "link-prospect",
        name: "Link Prospect Finder",
        description: "Find potential link building opportunities",
        category: "link-building",
        icon: "Target",
        slug: "link-prospect",
        metaTitle: "Link Prospect Finder - Build Opportunities",
        metaDescription: "Find high-quality link building prospects. Discover websites that might link to your content.",
      longDescription:
  "Finding relevant websites for link-building outreach is an important part of developing a strong backlink strategy. This tool helps organize potential link prospects so you can evaluate websites based on relevance, content quality, and whether they are a sensible fit for your outreach goals.",
howToUse: [
  "Enter your topic, niche, or target website information.",
  "Review the potential websites and pages identified as prospects.",
  "Evaluate each prospect for relevance and content quality.",
  "Prioritize prospects that are closely related to your audience and topic.",
  "Plan personalized outreach based on the value your content can provide."
],
benefits: [
  "Helps organize potential link-building prospects.",
  "Makes prospect research more focused.",
  "Supports relevant and targeted outreach.",
  "Saves time during the initial link-building research stage."
],
useCases: [
  "Building a list of outreach prospects.",
  "Finding websites related to a specific niche.",
  "Researching potential guest-post or content-promotion opportunities.",
  "Supporting a larger digital PR or link-building campaign."
],
faq: [
  {
    question: "What is a link-building prospect?",
    answer:
      "A link-building prospect is a website, organization, publisher, or page that may be relevant to a potential link opportunity."
  },
  {
    question: "What makes a good link prospect?",
    answer:
      "A good prospect is relevant to your topic or audience, publishes useful content, and has a legitimate reason to reference or link to your resource."
  },
  {
    question: "Should I contact every prospect I find?",
    answer:
      "No. Prioritize relevant prospects where your content provides genuine value and personalize outreach rather than sending the same message to every website."
  }
],},
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
      longDescription:
  "Local search rankings can vary significantly by location, making it important to understand how a business appears in local search results and Google Maps. This tool helps review local ranking performance and identify opportunities to improve visibility for location-based searches.",
howToUse: [
  "Enter the business, keyword, or location information you want to evaluate.",
  "Review the available local ranking results and visibility information.",
  "Compare rankings across relevant locations or search terms.",
  "Identify keywords and locations where visibility can be improved.",
  "Use the findings to guide local SEO and Google Maps optimization efforts."
],
benefits: [
  "Helps monitor visibility for location-based searches.",
  "Makes local ranking changes easier to track.",
  "Supports more focused local SEO analysis.",
  "Helps identify opportunities to improve local search visibility."
],
useCases: [
  "Monitoring rankings for local business keywords.",
  "Evaluating visibility across different service areas.",
  "Reviewing local SEO performance over time.",
  "Finding locations where a business needs stronger search visibility."
],
faq: [
  {
    question: "Why are local rankings important?",
    answer:
      "Local rankings help businesses understand how visible they are to people searching for products or services in specific geographic areas."
  },
  {
    question: "Can local rankings vary by location?",
    answer:
      "Yes. Local search results can vary depending on the searcher's location, the search query, device, and other contextual factors."
  },
  {
    question: "How can I improve local search visibility?",
    answer:
      "Improving local visibility can include maintaining accurate business information, creating useful local content, earning relevant local links, and maintaining a strong Google Business Profile."
  }
],},
      {
        id: "visibility-score",
        name: "Search Visibility Score",
        description: "Calculate your overall search visibility metrics",
        category: "rank-tracking",
        icon: "BarChart",
        slug: "visibility-score",
        metaTitle: "Search Visibility Score - SEO Visibility Calculator",
        metaDescription: "Calculate your overall search visibility score. Measure SEO performance across all tracked keywords.",
      longDescription:
  "Search visibility provides a broader view of how prominently a website appears across its target keywords. Instead of focusing on a single ranking position, visibility metrics can help reveal overall search performance and changes across a group of tracked queries.",
howToUse: [
  "Enter the keywords or ranking data you want to evaluate.",
  "Review the calculated search visibility metrics.",
  "Compare visibility between different groups of keywords or time periods.",
  "Identify areas where search visibility has increased or declined.",
  "Use the results to prioritize SEO improvements and further analysis."
],
benefits: [
  "Provides a broader view of organic search performance.",
  "Helps identify changes across multiple keywords.",
  "Makes ranking trends easier to compare.",
  "Supports data-driven SEO planning and prioritization."
],
useCases: [
  "Monitoring overall SEO performance.",
  "Comparing visibility before and after an optimization project.",
  "Evaluating groups of target keywords.",
  "Identifying areas that need additional SEO attention."
],
faq: [
  {
    question: "What is search visibility?",
    answer:
      "Search visibility is a metric used to estimate how prominently a website appears across a set of target search queries."
  },
  {
    question: "Is a visibility score the same as ranking position?",
    answer:
      "No. A ranking position describes where a page appears for a particular query, while visibility summarizes performance across multiple queries."
  },
  {
    question: "Why can visibility change even when some rankings stay the same?",
    answer:
      "Overall visibility can change when rankings for other tracked keywords improve or decline, because the score considers a broader set of search queries."
  }
],},
      {
        id: "competitor-rank",
        name: "Competitor Rank Comparison",
        description: "Compare your rankings with competitors",
        category: "rank-tracking",
        icon: "GitCompare",
        slug: "competitor-rank",
        metaTitle: "Competitor Rank Comparison - Side by Side",
        metaDescription: "Compare your rankings with competitors. Identify keyword gaps and competitive opportunities.",
      longDescription:
  "Comparing keyword rankings with competitors can reveal where your website performs well and where competing pages have stronger visibility. This tool helps organize ranking comparisons so you can identify keyword gaps and potential opportunities for improving your SEO strategy.",
howToUse: [
  "Enter your target keywords and the competitors you want to compare.",
  "Review the available ranking positions for your website and competitors.",
  "Identify keywords where competitors rank higher.",
  "Look for gaps and opportunities that are relevant to your content strategy.",
  "Use the findings to prioritize content and SEO improvements."
],
benefits: [
  "Makes competitor ranking differences easier to identify.",
  "Helps uncover keyword gaps and opportunities.",
  "Supports more informed SEO prioritization.",
  "Provides useful context for competitive analysis."
],
useCases: [
  "Comparing rankings with direct search competitors.",
  "Finding keywords where competing pages have stronger visibility.",
  "Planning new content based on competitive gaps.",
  "Reviewing competitor performance during an SEO audit."
],
faq: [
  {
    question: "Why compare keyword rankings with competitors?",
    answer:
      "Competitor comparisons can reveal search queries where competing websites have stronger visibility and help identify areas worth investigating."
  },
  {
    question: "What is a keyword gap?",
    answer:
      "A keyword gap is an opportunity where competitors rank for relevant search queries that your website does not rank for, or where your visibility is significantly weaker."
  },
  {
    question: "Should I target every keyword my competitors rank for?",
    answer:
      "No. Focus on keywords that are relevant to your audience, business, content strategy, and search intent rather than copying every competitor keyword."
  }
],},
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
      longDescription:
  "Readable content is easier for visitors to understand and can improve the overall experience of a web page. Readability scores such as Flesch Reading Ease and Flesch-Kincaid Grade Level provide useful signals about sentence complexity, word difficulty, and the approximate reading level of your text. This tool helps you review those characteristics before publishing.",
howToUse: [
  "Paste the article, webpage copy, or other text you want to analyze.",
  "Review the readability scores and estimated reading level.",
  "Identify sentences or sections that may be difficult to understand.",
  "Simplify unnecessarily complex sentences and wording where appropriate.",
  "Review the updated text again before publishing."
],
benefits: [
  "Helps identify text that may be difficult for readers to understand.",
  "Provides multiple readability measurements for a broader text review.",
  "Supports clearer and more accessible website content.",
  "Makes readability checks faster during the editing process."
],
useCases: [
  "Reviewing blog posts before publishing them.",
  "Improving the clarity of SEO landing pages.",
  "Editing educational or informational website content.",
  "Checking long-form articles for unnecessary complexity."
],
faq: [
  {
    question: "What is a readability score?",
    answer:
      "A readability score is a measurement that estimates how easy or difficult a piece of text is to read based on factors such as sentence length and word complexity."
  },
  {
    question: "What does the Flesch-Kincaid Grade Level measure?",
    answer:
      "The Flesch-Kincaid Grade Level estimates the U.S. school grade level generally needed to understand a piece of English text."
  },
  {
    question: "Should I always aim for the lowest readability score?",
    answer:
      "Not necessarily. The appropriate reading level depends on your audience and subject. The goal is to make content clear and appropriate for the intended readers."
  }
],},
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
      longDescription:
  "Original content is important when publishing articles, product pages, and other online material. A plagiarism checker can help identify text that may closely match material found elsewhere so that you can review questionable passages before publication. Use the results as a review step and verify important matches against their original sources.",
howToUse: [
  "Paste the content you want to review into the checker.",
  "Start the originality or plagiarism analysis.",
  "Review passages that are identified as potential matches.",
  "Compare flagged text with the referenced material and verify the context.",
  "Rewrite, quote, attribute, or otherwise address matches where appropriate before publishing."
],
benefits: [
  "Helps identify potentially duplicated or closely matching text.",
  "Supports an originality review before content is published.",
  "Makes it easier to find passages that require further investigation.",
  "Adds an additional quality-control step to the content workflow."
],
useCases: [
  "Reviewing blog articles before publication.",
  "Checking contributed content from external writers.",
  "Reviewing website copy for duplicated passages.",
  "Auditing existing content when updating an SEO campaign."
],
faq: [
  {
    question: "What does a plagiarism checker do?",
    answer:
      "A plagiarism checker compares submitted text with available reference material to identify passages that may be similar or duplicated."
  },
  {
    question: "Does a plagiarism match always mean plagiarism?",
    answer:
      "No. A match can occur because of common phrases, quotations, properly attributed material, or other legitimate reasons. Important matches should be reviewed in context."
  },
  {
    question: "Why should I check content before publishing?",
    answer:
      "Checking content before publication can help you identify questionable similarities and give you an opportunity to review originality, attribution, and source usage."
  }
],},
      {
        id: "word-counter",
        name: "Word Counter & Analyzer",
        description: "Count words, characters, and analyze text structure",
        category: "content-tools",
        icon: "Calculator",
        slug: "word-counter",
        metaTitle: "Word Counter - Text Analysis Tool",
        metaDescription: "Count words, characters, sentences, and paragraphs. Analyze text structure and reading time.",
      longDescription:
  "Understanding the structure and length of your text is useful when writing blog posts, landing pages, social content, and other digital copy. A word counter can quickly measure words, characters, sentences, and paragraphs while also providing useful estimates such as reading time. This tool gives writers a quick overview of their content before publishing.",
howToUse: [
  "Paste or type your text into the analyzer.",
  "Review the total number of words and characters.",
  "Check the number of sentences and paragraphs in the text.",
  "Review the estimated reading time and overall text structure.",
  "Edit the content according to your intended format and audience."
],
benefits: [
  "Provides quick word and character counts.",
  "Helps writers understand the basic structure of their text.",
  "Makes it easier to meet content-length requirements.",
  "Provides a convenient overview during editing and proofreading."
],
useCases: [
  "Checking the length of blog articles and guides.",
  "Preparing copy for platforms with character limits.",
  "Reviewing website content before publication.",
  "Estimating reading time for long-form articles."
],
faq: [
  {
    question: "What can a word counter measure?",
    answer:
      "A word counter can measure words and characters and may also provide counts for sentences, paragraphs, and estimated reading time."
  },
  {
    question: "Does word count matter for SEO?",
    answer:
      "Word count by itself is not a guarantee of better rankings. Content should focus on satisfying the search intent and providing useful information rather than reaching an arbitrary length."
  },
  {
    question: "How is reading time estimated?",
    answer:
      "Reading time is generally estimated by dividing the number of words by an assumed average reading speed."
  }
],},
      {
        id: "title-generator",
        name: "Blog Title Generator",
        description: "Generate catchy, SEO-optimized blog titles",
        category: "content-tools",
        icon: "Type",
        slug: "title-generator",
        metaTitle: "Blog Title Generator - Catchy Headlines",
        metaDescription: "Generate SEO-optimized blog titles and headlines. Create catchy, click-worthy titles that rank.",
      longDescription:
  "A strong blog title helps readers understand what an article is about and can influence whether they choose to open it. An effective title should accurately represent the content, communicate a clear benefit or topic, and use relevant language naturally. This tool helps generate potential headlines that you can review and adapt to your article and audience.",
howToUse: [
  "Enter the main topic or keyword for your article.",
  "Review the suggested blog titles and headline variations.",
  "Choose titles that accurately represent the article content.",
  "Refine the wording to match your audience, brand voice, and search intent.",
  "Use the selected title consistently in your article and page metadata where appropriate."
],
benefits: [
  "Helps generate headline ideas when starting a new article.",
  "Provides multiple title variations for comparison.",
  "Supports clearer and more focused article positioning.",
  "Saves time during the brainstorming stage of content creation."
],
useCases: [
  "Brainstorming titles for new blog posts.",
  "Creating alternative headlines for an existing article.",
  "Planning titles around target SEO keywords.",
  "Developing headline ideas for a larger content calendar."
],
faq: [
  {
    question: "What makes a good blog title?",
    answer:
      "A good blog title clearly communicates the topic, matches the article content, appeals to the intended audience, and uses relevant wording naturally."
  },
  {
    question: "Should I include my target keyword in the title?",
    answer:
      "When it fits naturally, including the primary topic or keyword can help communicate relevance to both users and search engines. Avoid forcing keywords into a title."
  },
  {
    question: "Can I use generated titles exactly as they are?",
    answer:
      "Generated titles are starting points. Review and customize them so they accurately reflect your article and fit your audience and brand voice."
  }
],},
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

export interface HeaderAnalysis {
  totalHeaders: number;
  h1Count: number;
  h2Count: number;
  h3Count: number;
  h4Count: number;
  h5Count: number;
  h6Count: number;
  hasH1: boolean;
  multipleH1: boolean;
  missingH1: boolean;
  hierarchyIssues: string[];
  hierarchy: { level: number; text: string; order: number }[];
  recommendations: string[];
}

export function analyzeHeaders(htmlInput: string): HeaderAnalysis {
  const cleanHtml = htmlInput.trim();
  
  if (!cleanHtml) {
    return {
      totalHeaders: 0,
      h1Count: 0,
      h2Count: 0,
      h3Count: 0,
      h4Count: 0,
      h5Count: 0,
      h6Count: 0,
      hasH1: false,
      multipleH1: false,
      missingH1: true,
      hierarchyIssues: [],
      hierarchy: [],
      recommendations: ['Please enter HTML or content to analyze']
    };
  }

  const headerRegex = /<(h[1-6])([^>]*)>([\s\S]*?)<\/\1>/gi;
const headers: { level: number; text: string }[] = [];
let match;

while ((match = headerRegex.exec(cleanHtml)) !== null) {
  const level = parseInt(match[1][1], 10);
  const text = match[3].replace(/<[^>]*>/g, '').trim();

  headers.push({
    level,
    text: text || '(empty heading)',
  });
}

const counts: Record<number, number> = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};

headers.forEach((h) => counts[h.level]++);
  const hierarchyIssues: string[] = [];
  const recommendations: string[] = [];

  if (counts[1] === 0) {
    hierarchyIssues.push('Missing H1 tag - no H1 element found');
    recommendations.push('Add at least one H1 tag. The H1 should be the main title of the page.');
  } else if (counts[1] > 1) {
    hierarchyIssues.push(`Found ${counts[1]} H1 tags (only one H1 is recommended)`);
    recommendations.push(`You have ${counts[1]} H1 tags. There should be only one H1 per page. Convert the additional H1 tags to H2 or H3.`);
  }

  let lastLevel = 1;
  headers.forEach((header, index) => {
    if (index === 0) {
      lastLevel = header.level;
      return;
    }
    
    if (header.level > lastLevel + 1) {
      hierarchyIssues.push(`Hierarchy gap: H${lastLevel} → H${header.level} (position ${index + 1})`);
      recommendations.push(`Don't skip levels from H${lastLevel} to H${header.level}. Add intermediate levels like H${lastLevel + 1} for proper hierarchical organization.`);
    }
    lastLevel = header.level;
  });

  if (counts[1] > 0) {
    const firstHeader = headers.find(h => h.level === 1);
    if (firstHeader) {
      const firstHeaderIndex = headers.indexOf(firstHeader);
      if (firstHeaderIndex > 2) {
        recommendations.push('Place the H1 tag at the beginning of the main content (before H2 or H3).');
      }
    }
  }

  const emptyHeaders = headers.filter(h => h.text === '(empty heading)');
  if (emptyHeaders.length > 0) {
    hierarchyIssues.push(`Found ${emptyHeaders.length} empty heading(s)`);
    recommendations.push(`Fill in the content of the following empty elements: ${emptyHeaders.map(h => `H${h.level}`).join(', ')}`);
  }

  const hierarchy = headers.map((h, index) => ({
    level: h.level,
    text: h.text,
    order: index + 1
  }));

  return {
    totalHeaders: headers.length,
    h1Count: counts[1],
    h2Count: counts[2],
    h3Count: counts[3],
    h4Count: counts[4],
    h5Count: counts[5],
    h6Count: counts[6],
    hasH1: counts[1] > 0,
    multipleH1: counts[1] > 1,
    missingH1: counts[1] === 0,
    hierarchyIssues,
    hierarchy,
    recommendations
  };
}