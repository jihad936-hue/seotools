import Link from "next/link";
import { Wrench, Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import { toolCategories } from "@/lib/tools";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-50/50 dark:bg-[#0d0d14] border-t border-secondary-200/50 dark:border-secondary-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label="SEO Tools Pro - Home">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
                <Wrench className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="text-lg font-bold text-secondary-900 dark:text-white tracking-tight">
                SEO<span className="text-primary-600">Tools</span>
              </span>
            </Link>
            <p className="text-sm text-secondary-500 dark:text-secondary-400 leading-relaxed mb-6 max-w-xs">
              Professional SEO tools trusted by 100,000+ marketers worldwide. 
              Research, analyze, and optimize—all in one platform.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com" },
                { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white dark:bg-secondary-900 border border-secondary-200/60 dark:border-secondary-800/60 flex items-center justify-center text-secondary-400 hover:text-primary-600 hover:border-primary-200 dark:hover:border-primary-800 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Tools Column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-secondary-900 dark:text-white uppercase tracking-wider mb-5">
              Tools
            </h3>
            <ul className="space-y-3">
              {toolCategories.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/tools/${category.slug}`}
                    className="group flex items-center gap-1 text-sm text-secondary-500 dark:text-secondary-400 hover:text-primary-600 transition-colors"
                  >
                    {category.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/tools"
                  className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                >
                  View all tools →
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-secondary-900 dark:text-white uppercase tracking-wider mb-5">
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "/faq" },
                { label: "About Us", href: "/about" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-1 text-sm text-secondary-500 dark:text-secondary-400 hover:text-primary-600 transition-colors"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-secondary-900 dark:text-white uppercase tracking-wider mb-5">
              Stay Updated
            </h3>
            <p className="text-sm text-secondary-500 dark:text-secondary-400 mb-4">
              SEO tips and tool updates, weekly.
            </p>
            <form className="space-y-2">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="you@company.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-secondary-200/60 dark:border-secondary-800/60 bg-white dark:bg-secondary-900 text-sm text-secondary-900 dark:text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-300 transition-all"
              />
              <button
                type="submit"
                className="w-full px-3.5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-secondary-200/50 dark:border-secondary-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-400">
            © {currentYear} SEO Tools Pro. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Sitemap"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-sm text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-300 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
