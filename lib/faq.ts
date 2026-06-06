import { FAQItem } from "@/types";

export const faqItems: FAQItem[] = [
  {
    question: "Are all SEO tools on this platform completely free?",
    answer:
      "Yes, all basic features of our SEO tools are completely free to use. We offer premium features for advanced users who need more comprehensive data and higher usage limits, but the core functionality of every tool is available at no cost.",
    category: "General",
  },
  {
    question: "How accurate are the SEO metrics provided by your tools?",
    answer:
      "Our tools use industry-standard APIs and algorithms to provide highly accurate metrics. We regularly update our data sources and methodologies to ensure reliability. However, like all SEO tools, metrics should be used as indicators rather than absolute values, as search engines don't publicly share all ranking factors.",
    category: "General",
  },
  {
    question: "Do I need to create an account to use the tools?",
    answer:
      "No, most of our tools are available without registration. However, creating a free account unlocks additional features like saved reports, historical data tracking, and higher usage limits. Some advanced tools may require login to prevent abuse.",
    category: "General",
  },
  {
    question: "How often is the data updated in your tools?",
    answer:
      "Data refresh rates vary by tool. Keyword rankings and backlink data are typically updated daily, while site audit data is real-time. Search volume data is updated monthly to reflect the latest trends. Premium users get access to more frequent updates.",
    category: "Data",
  },
  {
    question: "Can I use these tools for client websites?",
    answer:
      "Absolutely! Our tools are designed for both personal and professional use. Many SEO agencies and freelancers use our platform to audit client websites, research keywords, and generate reports. Premium plans offer white-label reporting features.",
    category: "Usage",
  },
  {
    question: "What makes your SEO tools different from competitors?",
    answer:
      "We focus on simplicity, speed, and accuracy. Our tools are designed to be intuitive while providing enterprise-level data quality. We also offer unique features like batch processing, API access, and integration with popular platforms like Google Analytics and Search Console.",
    category: "General",
  },
  {
    question: "How do I interpret the keyword difficulty scores?",
    answer:
      "Keyword difficulty is scored on a 0-100 scale. 0-30 indicates low competition (easier to rank), 31-60 is medium competition, and 61-100 is high competition. This score considers factors like domain authority of current ranking pages, backlink profiles, and content quality.",
    category: "Tools",
  },
  {
    question: "Can I export data from the tools?",
    answer:
      "Yes, most tools support data export in CSV, PDF, and Excel formats. Free users can export basic data, while premium users get access to comprehensive exports with historical data, charts, and branded reports.",
    category: "Usage",
  },
  {
    question: "Is there an API available for developers?",
    answer:
      "Yes, we offer a REST API for developers and agencies who want to integrate our SEO data into their own applications. API access is available on Business and Enterprise plans with comprehensive documentation and support.",
    category: "Technical",
  },
  {
    question: "How do I report a bug or suggest a new feature?",
    answer:
      "We welcome feedback! You can report bugs or suggest features through our contact form, email support, or community forum. We actively monitor feedback and regularly implement user-suggested improvements in our monthly updates.",
    category: "Support",
  },
  {
    question: "Are the tools mobile-friendly?",
    answer:
      "Yes, all our tools are fully responsive and work seamlessly on mobile devices, tablets, and desktops. We use a mobile-first design approach to ensure optimal user experience across all screen sizes.",
    category: "Technical",
  },
  {
    question: "Can I check multiple websites at once?",
    answer:
      "Yes, our batch processing feature allows you to analyze multiple URLs simultaneously. This is particularly useful for site audits, backlink checks, and rank tracking. The number of concurrent checks depends on your plan level.",
    category: "Usage",
  },
  {
    question: "How do I improve my Core Web Vitals scores?",
    answer:
      "Focus on three key metrics: LCP (optimize images, use CDN), FID (reduce JavaScript execution time), and CLS (set image dimensions, avoid layout shifts). Our Site Speed Test tool provides specific recommendations for your website.",
    category: "Technical",
  },
  {
    question: "What is the difference between on-page and off-page SEO?",
    answer:
      "On-page SEO refers to optimizations you make directly on your website (content, meta tags, internal links). Off-page SEO involves external factors like backlinks, social signals, and brand mentions. Both are essential for comprehensive SEO success.",
    category: "SEO Basics",
  },
  {
    question: "How long does it take to see SEO results?",
    answer:
      "SEO is a long-term strategy. Typically, you can expect to see initial improvements within 3-6 months, with significant results appearing after 6-12 months of consistent effort. Technical fixes may show faster results, while competitive keywords take longer.",
    category: "SEO Basics",
  },
];

export function getFAQByCategory(category: string): FAQItem[] {
  return faqItems.filter((item) => item.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(faqItems.map((item) => item.category))];
}
