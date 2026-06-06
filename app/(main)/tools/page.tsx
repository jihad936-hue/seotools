import { generateSEO } from "@/lib/seo";
import { toolCategories, getToolCount } from "@/lib/tools";
import Container from "@/components/ui/Container";
import ToolGrid from "@/components/tools/ToolGrid";
import { 
  FileText, Settings, Search, Link2, TrendingUp, PenTool 
} from "lucide-react";
import Link from "next/link";

export const metadata = generateSEO({
  title: "All SEO Tools",
  description: `Browse our complete collection of ${getToolCount()} free professional SEO tools. Keyword research, technical SEO, link building, and more.`,
});

const categoryIcons: Record<string, React.ComponentType<{className?: string}>> = {
  "on-page-seo": FileText,
  "technical-seo": Settings,
  "keyword-research": Search,
  "link-building": Link2,
  "rank-tracking": TrendingUp,
  "content-tools": PenTool,
};

export default function ToolsPage() {
  return (
    <div className="py-12">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-secondary-900 dark:text-white">
            All SEO Tools
          </h1>
          <p className="mt-4 text-lg text-secondary-600 dark:text-secondary-400">
            {getToolCount()} professional SEO tools to boost your rankings
          </p>
        </div>

        <div className="space-y-16">
          {toolCategories.map((category) => {
            const IconComponent = categoryIcons[category.slug] || FileText;
            return (
              <section key={category.id} id={category.slug}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                      {category.name}
                    </h2>
                    <p className="text-sm text-secondary-500">
                      {category.description}
                    </p>
                  </div>
                </div>
                <ToolGrid tools={category.tools} columns={3} />
              </section>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
