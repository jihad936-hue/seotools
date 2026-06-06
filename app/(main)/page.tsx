import { generateSEO } from "@/lib/seo";
import { getFeaturedTools, getPopularTools, toolCategories, getToolCount } from "@/lib/tools";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { 
  ArrowRight, Sparkles, Zap, Shield, BarChart3, Globe, Clock, Users,
  FileText, Settings, Search, Link2, TrendingUp, PenTool,
  ChevronRight, Star, CheckCircle2, ArrowUpRight, Play
} from "lucide-react";

export const metadata = generateSEO({
  title: "Professional SEO Tools Suite",
  description:
    "Enterprise-grade SEO tools trusted by 100,000+ marketers. Keyword research, technical audits, rank tracking, and backlink analysis—all in one powerful platform.",
});

// Icon mapping for categories
const categoryIcons: Record<string, React.ComponentType<{className?: string}>> = {
  "on-page-seo": FileText,
  "technical-seo": Settings,
  "keyword-research": Search,
  "link-building": Link2,
  "rank-tracking": TrendingUp,
  "content-tools": PenTool,
};

// Category color schemes
const categoryStyles: Record<string, { bg: string; text: string; border: string }> = {
  "on-page-seo": { 
    bg: "bg-blue-50 dark:bg-blue-950/30", 
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200/50 dark:border-blue-800/50"
  },
  "technical-seo": { 
    bg: "bg-emerald-50 dark:bg-emerald-950/30", 
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-200/50 dark:border-emerald-800/50"
  },
  "keyword-research": { 
    bg: "bg-violet-50 dark:bg-violet-950/30", 
    text: "text-violet-600 dark:text-violet-400",
    border: "border-violet-200/50 dark:border-violet-800/50"
  },
  "link-building": { 
    bg: "bg-amber-50 dark:bg-amber-950/30", 
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-200/50 dark:border-amber-800/50"
  },
  "rank-tracking": { 
    bg: "bg-rose-50 dark:bg-rose-950/30", 
    text: "text-rose-600 dark:text-rose-400",
    border: "border-rose-200/50 dark:border-rose-800/50"
  },
  "content-tools": { 
    bg: "bg-sky-50 dark:bg-sky-950/30", 
    text: "text-sky-600 dark:text-sky-400",
    border: "border-sky-200/50 dark:border-sky-800/50"
  },
};

export default function HomePage() {
  const featuredTools = getFeaturedTools();
  const popularTools = getPopularTools();
  const totalTools = getToolCount();

  return (
    <main id="main-content">
      {/* ============================================
          HERO SECTION
      ============================================ */}
      <section 
        className="relative overflow-hidden bg-white dark:bg-[#0a0a0f]"
        aria-label="Hero"
      >
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
          aria-hidden="true"
        />

        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-400/10 dark:bg-primary-500/10 rounded-full blur-[120px]" aria-hidden="true" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-400/10 dark:bg-violet-500/10 rounded-full blur-[100px]" aria-hidden="true" />

        <Container className="relative py-20 sm:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200/50 dark:border-primary-800/50 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary-600" aria-hidden="true" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                {totalTools}+ Professional SEO Tools
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-secondary-900 dark:text-white tracking-tight leading-[1.1] animate-slide-up">
              The SEO platform{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-primary-600 to-violet-600 bg-clip-text text-transparent">
                  built for results
                </span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-secondary-500 dark:text-secondary-400 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Enterprise-grade SEO tools trusted by 100,000+ marketers. 
              Research keywords, audit sites, track rankings, and analyze backlinks—all in one powerful platform.
            </p>

            {/* Search Bar */}
            <div className="mt-8 sm:mt-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-violet-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500" aria-hidden="true" />
                <form 
                  className="relative flex items-center bg-white dark:bg-secondary-900 rounded-xl border border-secondary-200 dark:border-secondary-800 shadow-lg shadow-secondary-900/5 dark:shadow-black/20 overflow-hidden"
                  role="search"
                  aria-label="Search SEO tools"
                >
                  <Search className="w-5 h-5 text-secondary-400 ml-5 flex-shrink-0" aria-hidden="true" />
                  <label htmlFor="hero-search" className="sr-only">Search tools, keywords, or topics</label>
                  <input
                    id="hero-search"
                    type="text"
                    placeholder="Search tools, keywords, or topics..."
                    className="flex-1 px-4 py-4 bg-transparent text-secondary-900 dark:text-white placeholder-secondary-400 focus:outline-none text-base"
                  />
                  <button 
                    type="submit"
                    className="mr-2 px-5 sm:px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
                  >
                    <span className="hidden sm:inline">Search</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </form>
              </div>
              <p className="mt-3 text-sm text-secondary-400">
                Popular:{" "}
                <Link href="/tools/keyword-research/keyword-suggestion" className="text-primary-600 hover:underline">Keyword Research</Link>, 
                {" "}<Link href="/tools/technical-seo/site-speed-test" className="text-primary-600 hover:underline">Site Speed</Link>, 
                {" "}<Link href="/tools/on-page-seo/schema-generator" className="text-primary-600 hover:underline">Schema Markup</Link>
              </p>
            </div>

            {/* Social Proof */}
            <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3" aria-hidden="true">
                  {['SJ', 'MC', 'ER', 'DP'].map((initials, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-violet-500 border-2 border-white dark:border-[#0a0a0f] flex items-center justify-center text-xs font-bold text-white">
                      {initials}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />)}
                  </div>
                  <p className="text-sm text-secondary-500">Trusted by 100K+ users</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-secondary-200 dark:bg-secondary-800" aria-hidden="true" />
              <div className="flex items-center gap-6 text-sm text-secondary-500">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                  No credit card
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                  No registration
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================
          FEATURED TOOLS SECTION
      ============================================ */}
      <section 
        className="py-16 sm:py-20 lg:py-28 bg-secondary-50/50 dark:bg-[#0d0d14]"
        aria-labelledby="featured-heading"
      >
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200/50 dark:border-primary-800/50 mb-4">
                <Zap className="w-3.5 h-3.5 text-primary-600" aria-hidden="true" />
                <span className="text-xs font-semibold text-primary-700 dark:text-primary-300 uppercase tracking-wider">Featured</span>
              </div>
              <h2 id="featured-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white">
                Essential tools for every SEO
              </h2>
              <p className="mt-3 text-base sm:text-lg text-secondary-500 dark:text-secondary-400 max-w-xl">
                Hand-picked tools that deliver the most impact for your search visibility
              </p>
            </div>
            <Link 
              href="/tools" 
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              View all tools
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredTools.map((tool) => {
              const IconComponent = categoryIcons[tool.category] || FileText;
              const styles = categoryStyles[tool.category] || categoryStyles["on-page-seo"];
              return (
                <Link 
                  key={tool.id} 
                  href={`/tools/${tool.category}/${tool.slug}`}
                  className="group relative bg-white dark:bg-secondary-900 rounded-2xl border border-secondary-200/60 dark:border-secondary-800/60 p-6 hover:shadow-xl hover:shadow-primary-500/5 dark:hover:shadow-primary-500/5 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#0d0d14]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${styles.bg} flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${styles.text}`} aria-hidden="true" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-secondary-300 group-hover:text-primary-500 transition-colors" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white group-hover:text-primary-600 transition-colors mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400 leading-relaxed">
                    {tool.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${styles.bg} ${styles.text}`}>
                      {tool.category.replace(/-/g, " ")}
                    </span>
                    {tool.popular && (
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400">
                        Popular
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link 
              href="/tools" 
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              View all tools
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ============================================
          POPULAR TOOLS SECTION
      ============================================ */}
      <section 
        className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#0a0a0f]"
        aria-labelledby="popular-heading"
      >
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-800/50 mb-4">
                <Star className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                <span className="text-xs font-semibold text-amber-700 dark:text-amber-300 uppercase tracking-wider">Most Used</span>
              </div>
              <h2 id="popular-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white">
                Community favorites
              </h2>
              <p className="mt-3 text-base sm:text-lg text-secondary-500 dark:text-secondary-400 max-w-xl">
                The tools our users rely on most for their daily SEO workflow
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {popularTools.map((tool) => {
              const IconComponent = categoryIcons[tool.category] || FileText;
              const styles = categoryStyles[tool.category] || categoryStyles["on-page-seo"];
              return (
                <Link 
                  key={tool.id} 
                  href={`/tools/${tool.category}/${tool.slug}`}
                  className="group bg-secondary-50/50 dark:bg-secondary-900/50 rounded-xl border border-secondary-200/40 dark:border-secondary-800/40 p-5 hover:bg-white dark:hover:bg-secondary-900 hover:shadow-lg hover:shadow-secondary-900/5 dark:hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#0a0a0f]"
                >
                  <div className={`w-10 h-10 rounded-lg ${styles.bg} flex items-center justify-center mb-3`}>
                    <IconComponent className={`w-5 h-5 ${styles.text}`} aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-secondary-900 dark:text-white group-hover:text-primary-600 transition-colors text-sm mb-1">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-secondary-500 dark:text-secondary-400 line-clamp-2">
                    {tool.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          CATEGORIES SECTION
      ============================================ */}
      <section 
        className="py-16 sm:py-20 lg:py-28 bg-secondary-50/50 dark:bg-[#0d0d14]"
        aria-labelledby="categories-heading"
      >
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-950/30 border border-violet-200/50 dark:border-violet-800/50 mb-4">
              <BarChart3 className="w-3.5 h-3.5 text-violet-600" aria-hidden="true" />
              <span className="text-xs font-semibold text-violet-700 dark:text-violet-300 uppercase tracking-wider">Categories</span>
            </div>
            <h2 id="categories-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white">
              Complete SEO toolkit
            </h2>
            <p className="mt-4 text-base sm:text-lg text-secondary-500 dark:text-secondary-400">
              Six specialized categories covering every aspect of search engine optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolCategories.map((category) => {
              const IconComponent = categoryIcons[category.slug] || FileText;
              const styles = categoryStyles[category.slug] || categoryStyles["on-page-seo"];
              return (
                <Link 
                  key={category.id} 
                  href={`/tools/${category.slug}`}
                  className="group relative bg-white dark:bg-secondary-900 rounded-2xl border border-secondary-200/60 dark:border-secondary-800/60 p-7 hover:shadow-xl hover:shadow-primary-500/5 dark:hover:shadow-primary-500/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#0d0d14]"
                >
                  {/* Subtle gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${styles.bg.replace('bg-', 'from-').replace('dark:bg-', 'dark:from-')}`} aria-hidden="true" />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-14 h-14 rounded-2xl ${styles.bg} flex items-center justify-center`}>
                        <IconComponent className={`w-7 h-7 ${styles.text}`} aria-hidden="true" />
                      </div>
                      <span className="text-xs font-medium text-secondary-400 bg-secondary-100 dark:bg-secondary-800 px-2.5 py-1 rounded-full">
                        {category.tools.length} tools
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white group-hover:text-primary-600 transition-colors mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-secondary-500 dark:text-secondary-400 leading-relaxed mb-4">
                      {category.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-medium text-primary-600 group-hover:gap-3 transition-all">
                      Explore category
                      <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================
          STATS SECTION
      ============================================ */}
      <section 
        className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#0a0a0f]"
        aria-label="Platform statistics"
      >
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-800/50 mb-4">
                <Shield className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">Why Us</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white mb-6">
                Built for professionals,{" "}
                <span className="text-primary-600">priced for everyone</span>
              </h2>
              <p className="text-base sm:text-lg text-secondary-500 dark:text-secondary-400 leading-relaxed mb-10">
                We believe powerful SEO software shouldn't cost a fortune. Our platform delivers 
                enterprise-grade features without the enterprise price tag.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: "Lightning Fast Results",
                    description: "Get instant analysis and recommendations. No waiting, no queues—just pure speed optimized for your workflow."
                  },
                  {
                    icon: Shield,
                    title: "Privacy First",
                    description: "Your data stays yours. We don't store your searches, URLs, or content. Process everything securely in real-time."
                  },
                  {
                    icon: BarChart3,
                    title: "Accurate & Reliable",
                    description: "Powered by industry-standard algorithms and regularly updated data sources for dependable SEO insights."
                  },
                  {
                    icon: Globe,
                    title: "Global Coverage",
                    description: "Analyze websites and keywords from any region. Multi-language support and location-specific data."
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary-600" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 dark:text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-secondary-500 dark:text-secondary-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Stats Dashboard */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/10 to-violet-500/10 rounded-3xl blur-2xl" aria-hidden="true" />
              <div className="relative bg-white dark:bg-secondary-900 rounded-2xl border border-secondary-200/60 dark:border-secondary-800/60 shadow-xl shadow-secondary-900/5 dark:shadow-black/20 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-sm text-secondary-500">Monthly Analyses</p>
                    <p className="text-3xl font-bold text-secondary-900 dark:text-white">1.2M+</p>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600 text-sm font-medium">
                    <TrendingUp className="w-4 h-4" aria-hidden="true" />
                    +24%
                  </div>
                </div>

                {/* Mock chart bars */}
                <div className="flex items-end gap-1.5 h-32 mb-8" role="img" aria-label="Monthly usage chart showing growth">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                    <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-primary-600 to-primary-400 opacity-80 hover:opacity-100 transition-opacity"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-secondary-100 dark:border-secondary-800">
                  <div>
                    <p className="text-2xl font-bold text-secondary-900 dark:text-white">{totalTools}</p>
                    <p className="text-xs text-secondary-500 mt-1">Tools</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary-900 dark:text-white">{toolCategories.length}</p>
                    <p className="text-xs text-secondary-500 mt-1">Categories</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary-900 dark:text-white">99.9%</p>
                    <p className="text-xs text-secondary-500 mt-1">Uptime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================
          FAQ SECTION
      ============================================ */}
      <section 
        className="py-16 sm:py-20 lg:py-28 bg-secondary-50/50 dark:bg-[#0d0d14]"
        aria-labelledby="faq-heading"
      >
        <Container size="md">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/30 border border-rose-200/50 dark:border-rose-800/50 mb-4">
              <Users className="w-3.5 h-3.5 text-rose-600" aria-hidden="true" />
              <span className="text-xs font-semibold text-rose-700 dark:text-rose-300 uppercase tracking-wider">FAQ</span>
            </div>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-900 dark:text-white">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base sm:text-lg text-secondary-500 dark:text-secondary-400">
              Everything you need to know about our platform
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Are all SEO tools completely free to use?",
                a: "Yes, all core features of our SEO tools are completely free. We believe professional-grade SEO software should be accessible to everyone, from solo bloggers to enterprise teams. No credit card required, no hidden fees."
              },
              {
                q: "How accurate is the data provided by your tools?",
                a: "Our tools use industry-standard APIs and algorithms to deliver highly accurate metrics. We regularly update our data sources and methodologies. While no tool can match search engines' internal data exactly, our metrics are trusted by 100,000+ professionals worldwide."
              },
              {
                q: "Do I need to create an account to use the tools?",
                a: "No registration required for most tools. Simply visit the tool page and start analyzing. Creating a free account unlocks additional features like saved reports and historical tracking, but it's completely optional."
              },
              {
                q: "Can I use these tools for client websites?",
                a: "Absolutely. Our tools are designed for both personal and professional use. Many SEO agencies and consultants use our platform to audit client sites, research keywords, and generate comprehensive reports."
              },
              {
                q: "How often is the data updated?",
                a: "Data refresh rates vary by tool. Keyword and backlink data updates daily, site audits run in real-time, and search volume data refreshes monthly. This ensures you always have the most current insights for your SEO strategy."
              },
            ].map((faq, index) => (
              <details 
                key={index} 
                className="group bg-white dark:bg-secondary-900 rounded-xl border border-secondary-200/60 dark:border-secondary-800/60 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none hover:bg-secondary-50/50 dark:hover:bg-secondary-800/30 transition-colors">
                  <span className="font-semibold text-secondary-900 dark:text-white pr-4 text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <ChevronRight className="w-5 h-5 text-secondary-400 group-open:rotate-90 transition-transform flex-shrink-0" aria-hidden="true" />
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-secondary-600 dark:text-secondary-400 leading-relaxed text-sm sm:text-base">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-secondary-500 dark:text-secondary-400">
              Still have questions?{" "}
              <Link href="/faq" className="text-primary-600 hover:text-primary-700 font-medium">
                View all FAQs →
              </Link>
            </p>
          </div>
        </Container>
      </section>

      {/* ============================================
          CTA SECTION
      ============================================ */}
      <section aria-label="Call to action">
        <Container className="pb-16 sm:pb-20 lg:pb-28">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-violet-700 dark:from-primary-800 dark:via-primary-900 dark:to-violet-900">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }}
              aria-hidden="true"
            />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl" aria-hidden="true" />

            <div className="relative px-6 py-14 sm:px-12 sm:py-20 lg:px-20 lg:py-24 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to dominate search rankings?
              </h2>
              <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-10">
                Join 100,000+ marketers using our professional SEO tools. 
                Start optimizing today—no credit card, no registration required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/tools">
                  <span className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-colors shadow-lg shadow-black/10 gap-2">
                    Start Using Tools
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </span>
                </Link>
                <Link href="/blog">
                  <span className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                    Read SEO Guides
                  </span>
                </Link>
              </div>
              <p className="mt-6 text-sm text-primary-200">
                Free forever. Upgrade anytime for advanced features.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
