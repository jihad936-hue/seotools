import Link from "next/link";
import { ArrowRight, Zap, Shield, BarChart3 } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-secondary-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Container className="relative py-20 lg:py-28">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 mb-8">
            <Zap className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              50+ Free Professional SEO Tools
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white tracking-tight">
            Boost Your Rankings with{" "}
            <span className="text-primary-600">Professional SEO Tools</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto leading-relaxed">
            Access powerful, free SEO tools for keyword research, site audits, backlink analysis, 
            rank tracking, and more. No registration required.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/tools">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Explore Tools
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Read SEO Guides
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-900 dark:text-white">50+</div>
              <div className="text-sm text-secondary-500 mt-1">SEO Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-900 dark:text-white">100K+</div>
              <div className="text-sm text-secondary-500 mt-1">Users Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-900 dark:text-white">Free</div>
              <div className="text-sm text-secondary-500 mt-1">Forever</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
