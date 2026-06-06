import Link from "next/link";
import { toolCategories } from "@/lib/tools";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { 
  FileText, Settings, Search, Link2, TrendingUp, PenTool 
} from "lucide-react";

const categoryIcons: Record<string, React.ComponentType<{className?: string}>> = {
  "on-page-seo": FileText,
  "technical-seo": Settings,
  "keyword-research": Search,
  "link-building": Link2,
  "rank-tracking": TrendingUp,
  "content-tools": PenTool,
};

export default function Categories() {
  return (
    <section className="py-20 bg-white dark:bg-secondary-950">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white">
            Explore by Category
          </h2>
          <p className="mt-4 text-lg text-secondary-600 dark:text-secondary-400">
            Organized tools for every aspect of your SEO strategy
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories.map((category) => {
            const IconComponent = categoryIcons[category.slug] || FileText;
            return (
              <Link key={category.id} href={`/tools/${category.slug}`}>
                <Card hover className="p-6 h-full group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-secondary-900 dark:text-white group-hover:text-primary-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="mt-1 text-sm text-secondary-600 dark:text-secondary-400">
                        {category.description}
                      </p>
                      <p className="mt-3 text-sm font-medium text-primary-600">
                        {category.tools.length} tools →
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
