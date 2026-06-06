"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { toolCategories } from "@/lib/tools";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (slug: string) => {
    setExpandedCategory(expandedCategory === slug ? null : slug);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white dark:bg-secondary-950 overflow-y-auto">
          <nav className="px-4 py-6 space-y-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-lg font-medium text-secondary-900 dark:text-white hover:text-primary-600"
            >
              Home
            </Link>
            <Link
              href="/tools"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-lg font-medium text-secondary-900 dark:text-white hover:text-primary-600"
            >
              All Tools
            </Link>

            <div className="border-t border-secondary-200 dark:border-secondary-800 pt-4">
              <p className="text-sm font-semibold text-secondary-500 uppercase tracking-wider mb-3">
                Categories
              </p>
              {toolCategories.map((category) => (
                <div key={category.id}>
                  <button
                    onClick={() => toggleCategory(category.slug)}
                    className="flex items-center justify-between w-full py-2 text-secondary-900 dark:text-white"
                  >
                    <span className="font-medium">{category.name}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        expandedCategory === category.slug && "rotate-180"
                      )}
                    />
                  </button>
                  {expandedCategory === category.slug && (
                    <div className="pl-4 space-y-2 pb-2">
                      {category.tools.map((tool) => (
                        <Link
                          key={tool.id}
                          href={`/tools/${category.slug}/${tool.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="block py-1.5 text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600"
                        >
                          {tool.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-secondary-200 dark:border-secondary-800 pt-4 space-y-4">
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-lg font-medium text-secondary-900 dark:text-white hover:text-primary-600"
              >
                Blog
              </Link>
              <Link
                href="/faq"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-lg font-medium text-secondary-900 dark:text-white hover:text-primary-600"
              >
                FAQ
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-lg font-medium text-secondary-900 dark:text-white hover:text-primary-600"
              >
                About
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
