"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ChevronDown, Wrench, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { toolCategories } from "@/lib/tools";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const totalTools = toolCategories.reduce((acc, c) => acc + c.tools.length, 0);

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 w-full glass border-b border-secondary-200/50 dark:border-secondary-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-2.5 flex-shrink-0 group"
              aria-label="SEO Tools Pro - Home"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/30 transition-shadow">
                <Wrench className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="text-lg font-bold text-secondary-900 dark:text-white tracking-tight">
                SEO<span className="text-primary-600">Tools</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              <Link
                href="/"
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-white hover:bg-secondary-100/50 dark:hover:bg-secondary-800/50 transition-all"
              >
                Home
              </Link>

              {/* Tools Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("tools")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-white hover:bg-secondary-100/50 dark:hover:bg-secondary-800/50 transition-all"
                  aria-expanded={activeDropdown === "tools"}
                  aria-haspopup="true"
                >
                  Tools
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", activeDropdown === "tools" && "rotate-180")} aria-hidden="true" />
                </button>

                {activeDropdown === "tools" && (
                  <div 
                    className="absolute top-full left-0 w-[520px] bg-white dark:bg-secondary-900 rounded-2xl shadow-2xl shadow-secondary-900/10 dark:shadow-black/30 border border-secondary-200/60 dark:border-secondary-800/60 p-4 mt-1.5 animate-slide-down"
                    role="menu"
                  >
                    <div className="grid grid-cols-2 gap-1">
                      {toolCategories.map((category) => (
                        <Link
                          key={category.id}
                          href={`/tools/${category.slug}`}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-colors group"
                          role="menuitem"
                        >
                          <div className="w-9 h-9 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
                            <span className="text-xs font-bold text-primary-600">{category.tools.length}</span>
                          </div>
                          <div>
                            <p className="font-medium text-secondary-900 dark:text-white text-sm group-hover:text-primary-600 transition-colors">
                              {category.name}
                            </p>
                            <p className="text-xs text-secondary-500 mt-0.5 line-clamp-1">
                              {category.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-secondary-100 dark:border-secondary-800">
                      <Link
                        href="/tools"
                        className="flex items-center justify-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 py-2 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                      >
                        View all {totalTools} tools
                        <ChevronDown className="w-3.5 h-3.5 -rotate-90" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-white hover:bg-secondary-100/50 dark:hover:bg-secondary-800/50 transition-all"
              >
                Blog
              </Link>
              <Link
                href="/faq"
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-white hover:bg-secondary-100/50 dark:hover:bg-secondary-800/50 transition-all"
              >
                FAQ
              </Link>
              <Link
                href="/about"
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-white hover:bg-secondary-100/50 dark:hover:bg-secondary-800/50 transition-all"
              >
                About
              </Link>
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-2">
              <button
                className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-secondary-500 bg-secondary-100/50 dark:bg-secondary-800/50 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors border border-transparent hover:border-secondary-200 dark:hover:border-secondary-700"
                aria-label="Search tools"
              >
                <Search className="w-4 h-4" aria-hidden="true" />
                <span className="text-secondary-400 text-sm hidden lg:inline">Search...</span>
                <kbd className="hidden xl:inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-mono text-secondary-400 bg-white dark:bg-secondary-900 rounded border border-secondary-200 dark:border-secondary-700">
                  ⌘K
                </kbd>
              </button>
              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div 
            className="lg:hidden fixed inset-0 top-16 z-50 bg-white dark:bg-[#0a0a0f] overflow-y-auto animate-fade-in"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <nav className="px-4 py-6 space-y-1 max-w-lg mx-auto" aria-label="Mobile menu">
              <Link href="/" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-secondary-900 dark:text-white hover:bg-secondary-50 dark:hover:bg-secondary-900">
                Home
              </Link>

              <div className="px-4 py-2 text-xs font-semibold text-secondary-400 uppercase tracking-wider mt-4">Tools</div>
              {toolCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/tools/${category.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-900 transition-colors"
                >
                  <span className="w-7 h-7 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-xs font-bold text-primary-600">
                    {category.tools.length}
                  </span>
                  {category.name}
                </Link>
              ))}

              <div className="px-4 py-2 text-xs font-semibold text-secondary-400 uppercase tracking-wider mt-4">Pages</div>
              <Link href="/blog" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-secondary-900 dark:text-white hover:bg-secondary-50 dark:hover:bg-secondary-900">
                Blog
              </Link>
              <Link href="/faq" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-secondary-900 dark:text-white hover:bg-secondary-50 dark:hover:bg-secondary-900">
                FAQ
              </Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-xl text-base font-medium text-secondary-900 dark:text-white hover:bg-secondary-50 dark:hover:bg-secondary-900">
                About
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
