import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Complete On-Page SEO Checklist for 2024",
    slug: "complete-on-page-seo-checklist-2024",
    excerpt:
      "Master the essential on-page SEO techniques that will help your content rank higher in search engines. From meta tags to content optimization.",
    content: `
## Introduction

On-page SEO remains one of the most critical factors for ranking success. This comprehensive checklist covers everything you need to optimize your web pages effectively.

## 1. Title Tag Optimization

Your title tag is the first thing users see in search results. Make it count:
- Keep it under 60 characters
- Include your primary keyword near the beginning
- Make it compelling and click-worthy
- Avoid keyword stuffing

## 2. Meta Description Best Practices

While meta descriptions don't directly impact rankings, they significantly affect CTR:
- Limit to 150-160 characters
- Include primary and secondary keywords naturally
- Add a clear call-to-action
- Make each description unique

## 3. Header Tag Structure

Proper heading hierarchy helps both users and search engines:
- Use only one H1 per page
- Include keywords in H1, H2, and H3 tags
- Maintain logical hierarchy (H1 → H2 → H3)
- Make headers descriptive and scannable

## 4. Content Quality and Depth

Google prioritizes comprehensive, helpful content:
- Aim for 1,500+ words for competitive topics
- Cover the topic thoroughly
- Use original research and data
- Include relevant images, videos, and infographics

## 5. Internal Linking Strategy

Strategic internal linking distributes link equity:
- Link to relevant pages within your site
- Use descriptive anchor text
- Maintain a reasonable number of links per page
- Update old content with new internal links

## Conclusion

Implementing these on-page SEO techniques consistently will improve your search visibility and drive more organic traffic to your website.
    `,
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "On-Page SEO",
    tags: ["SEO", "on-page SEO", "checklist", "optimization"],
    image: "/images/blog/on-page-seo.jpg",
  },
  {
    id: "2",
    title: "Technical SEO Audit: The Complete Guide",
    slug: "technical-seo-audit-complete-guide",
    excerpt:
      "Learn how to perform a comprehensive technical SEO audit to identify and fix issues that prevent your site from ranking.",
    content: `
## What is Technical SEO?

Technical SEO refers to optimizing your website's infrastructure so search engines can crawl, index, and render your content efficiently.

## Site Speed Optimization

Page speed is a confirmed ranking factor:
- Optimize images (WebP format, compression)
- Enable browser caching
- Minify CSS, JavaScript, and HTML
- Use a CDN for static assets
- Implement lazy loading for images

## Mobile-First Indexing

With Google's mobile-first approach:
- Ensure responsive design
- Test mobile usability regularly
- Optimize touch targets
- Check mobile page speed separately

## Crawlability and Indexing

Help search engines discover your content:
- Create and submit XML sitemaps
- Optimize robots.txt file
- Fix broken links and redirects
- Implement proper canonical tags
- Use schema markup for rich snippets

## Security and HTTPS

Security is essential for trust and rankings:
- Implement SSL/HTTPS across all pages
- Fix mixed content issues
- Keep security certificates updated
- Monitor for security vulnerabilities

## Conclusion

Regular technical SEO audits ensure your site remains accessible and indexable, providing a solid foundation for all other SEO efforts.
    `,
    author: "Michael Chen",
    date: "2024-01-22",
    readTime: "12 min read",
    category: "Technical SEO",
    tags: ["technical SEO", "audit", "site speed", "crawling"],
    image: "/images/blog/technical-seo.jpg",
  },
  {
    id: "3",
    title: "Keyword Research Strategies That Work in 2024",
    slug: "keyword-research-strategies-2024",
    excerpt:
      "Discover advanced keyword research techniques to find high-value, low-competition keywords that drive targeted traffic.",
    content: `
## Understanding Search Intent

Modern keyword research starts with understanding why people search:
- Informational intent (learn, know, how-to)
- Navigational intent (find a specific website)
- Transactional intent (buy, purchase, order)
- Commercial investigation (compare, best, review)

## Long-Tail Keyword Strategy

Long-tail keywords often convert better:
- Lower competition
- Higher conversion rates
- More specific user intent
- Easier to rank for new sites

## Competitor Keyword Analysis

Learn from your competitors:
- Identify their top-ranking keywords
- Find keyword gaps they haven't targeted
- Analyze their content strategy
- Discover new keyword opportunities

## Keyword Metrics That Matter

Focus on these key metrics:
- Search volume (monthly searches)
- Keyword difficulty (competition level)
- Cost-per-click (commercial value)
- Search intent alignment
- Current SERP features

## Tools and Techniques

Combine multiple approaches:
- Use keyword research tools
- Analyze Google autocomplete suggestions
- Check "People Also Ask" boxes
- Review related searches at page bottom
- Monitor Google Trends for seasonality

## Conclusion

Effective keyword research is the foundation of SEO success. Focus on intent, competition, and relevance to build a keyword strategy that drives results.
    `,
    author: "Emily Rodriguez",
    date: "2024-02-05",
    readTime: "10 min read",
    category: "Keyword Research",
    tags: ["keyword research", "long-tail keywords", "search intent", "SEO strategy"],
    image: "/images/blog/keyword-research.jpg",
  },
  {
    id: "4",
    title: "Link Building Strategies for 2024",
    slug: "link-building-strategies-2024",
    excerpt:
      "Explore proven link building techniques that help improve your domain authority and search rankings ethically.",
    content: `
## The Importance of Quality Backlinks

Backlinks remain one of the top ranking factors:
- Signal of trust and authority
- Drive referral traffic
- Help search engines discover content
- Improve domain authority over time

## Content-Based Link Building

Create link-worthy content:
- Original research and data studies
- Comprehensive guides and tutorials
- Infographics and visual content
- Free tools and resources
- Industry reports and statistics

## Guest Posting Done Right

Effective guest posting strategy:
- Target relevant, high-authority sites
- Provide genuine value to readers
- Include natural, contextual links
- Build relationships with editors
- Focus on quality over quantity

## Broken Link Building

Turn broken links into opportunities:
- Find broken links on relevant sites
- Create replacement content
- Reach out to site owners
- Offer value in your pitch
- Follow up appropriately

## Digital PR and Outreach

Earn links through PR:
- Create newsworthy content
- Build relationships with journalists
- Use HARO (Help A Reporter Out)
- Issue press releases for major updates
- Participate in industry discussions

## Conclusion

Focus on building high-quality, relevant backlinks through valuable content and genuine relationships rather than manipulative tactics.
    `,
    author: "David Park",
    date: "2024-02-18",
    readTime: "11 min read",
    category: "Link Building",
    tags: ["link building", "backlinks", "guest posting", "digital PR"],
    image: "/images/blog/link-building.jpg",
  },
  {
    id: "5",
    title: "Core Web Vitals: Optimize for Page Experience",
    slug: "core-web-vitals-optimization-guide",
    excerpt:
      "Learn how to optimize your Core Web Vitals scores to improve user experience and search rankings simultaneously.",
    content: `
## What Are Core Web Vitals?

Core Web Vitals are Google's page experience metrics:
- Largest Contentful Paint (LCP) - Loading performance
- First Input Delay (FID) - Interactivity
- Cumulative Layout Shift (CLS) - Visual stability

## Optimizing LCP (Largest Contentful Paint)

Target: Under 2.5 seconds
- Optimize server response times
- Preload critical resources
- Optimize and compress images
- Use a Content Delivery Network (CDN)
- Remove render-blocking resources

## Optimizing FID/INP (Interaction to Next Paint)

Target: Under 200 milliseconds
- Break up long JavaScript tasks
- Use web workers for heavy computations
- Defer non-critical JavaScript
- Optimize third-party scripts
- Implement code splitting

## Optimizing CLS (Cumulative Layout Shift)

Target: Under 0.1
- Set size attributes for images and videos
- Reserve space for ad slots
- Avoid inserting content above existing content
- Use font-display: optional for web fonts
- Implement proper aspect ratios

## Measuring and Monitoring

Track your progress:
- Use Google PageSpeed Insights
- Monitor Search Console Core Web Vitals report
- Set up real-user monitoring (RUM)
- Test on actual devices, not just emulators
- Track metrics over time

## Conclusion

Core Web Vitals optimization improves both user experience and SEO. Make it an ongoing priority for your website.
    `,
    author: "Sarah Johnson",
    date: "2024-03-01",
    readTime: "9 min read",
    category: "Technical SEO",
    tags: ["core web vitals", "page speed", "user experience", "performance"],
    image: "/images/blog/core-web-vitals.jpg",
  },
  {
    id: "6",
    title: "Local SEO: Dominate Your Geographic Market",
    slug: "local-seo-domination-guide",
    excerpt:
      "Master local SEO strategies to attract more customers from your specific geographic area and outrank local competitors.",
    content: `
## Why Local SEO Matters

Local SEO connects you with nearby customers:
- 46% of Google searches have local intent
- 78% of local mobile searches result in offline purchases
- Local searches lead 50% of mobile visitors to stores within 24 hours

## Google Business Profile Optimization

Your GBP is crucial for local visibility:
- Claim and verify your listing
- Complete every section thoroughly
- Add high-quality photos and videos
- Post regular updates and offers
- Collect and respond to reviews

## Local Keyword Strategy

Target location-specific terms:
- Include city/neighborhood names
- Use "near me" variations
- Target service + location combinations
- Optimize for voice search queries
- Create location-specific pages

## NAP Consistency

Name, Address, Phone must be consistent:
- Use identical formatting everywhere
- Audit all citations and directories
- Fix inconsistencies immediately
- Monitor for new citations
- Use schema markup for NAP

## Local Link Building

Build local authority:
- Sponsor local events and organizations
- Join local business associations
- Get listed in local directories
- Partner with complementary local businesses
- Create local resource content

## Conclusion

Local SEO requires consistent effort but delivers highly targeted, high-converting traffic. Focus on relevance, distance, and prominence.
    `,
    author: "Michael Chen",
    date: "2024-03-15",
    readTime: "7 min read",
    category: "Local SEO",
    tags: ["local SEO", "Google Business Profile", "local rankings", "citations"],
    image: "/images/blog/local-seo.jpg",
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getAllCategories(): string[] {
  return [...new Set(blogPosts.map((post) => post.category))];
}
