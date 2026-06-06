export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  slug: string;
  featured?: boolean;
  popular?: boolean;
  metaTitle?: string;
  metaDescription?: string;
}

export interface ToolCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  slug: string;
  tools: Tool[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface StatsItem {
  label: string;
  value: string;
  suffix?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}
