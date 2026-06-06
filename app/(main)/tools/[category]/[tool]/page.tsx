import { notFound } from "next/navigation";
import { generateSEO } from "@/lib/seo";
import { 
  getToolBySlug, 
  getCategoryBySlug,
  getToolsByCategory,
  generateToolStaticParams 
} from "@/lib/tools";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import ToolInterface from "@/components/tools/ToolInterface";
import ToolGrid from "@/components/tools/ToolGrid";
import Link from "next/link";
import { ArrowLeft, Wrench } from "lucide-react";

// ============================================
// STATIC GENERATION - Auto-generates all tool pages
// ============================================
export async function generateStaticParams() {
  return generateToolStaticParams();
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ category: string; tool: string }> 
}) {
  const { tool } = await params;
  const toolData = getToolBySlug(tool);

  if (!toolData) {
    return generateSEO({
      title: "Tool Not Found",
      description: "The requested SEO tool could not be found.",
      noIndex: true,
    });
  }

  return generateSEO({
    title: toolData.metaTitle || toolData.name,
    description: toolData.metaDescription || toolData.description,
    canonical: `https://seotools.pro/tools/${toolData.category}/${toolData.slug}`,
  });
}

export default async function ToolPage({ 
  params 
}: { 
  params: Promise<{ category: string; tool: string }> 
}) {
  const { category, tool } = await params;
  const toolData = getToolBySlug(tool);
  const categoryData = getCategoryBySlug(category);

  if (!toolData || !categoryData) {
    notFound();
  }

  // Get related tools from same category
  const relatedTools = getToolsByCategory(category)
    .filter((t) => t.slug !== tool)
    .slice(0, 3);

  return (
    <div className="py-12">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/tools/${category}`}
            className="inline-flex items-center gap-2 text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {categoryData.name}
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
                <Wrench className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-secondary-900 dark:text-white">
                  {toolData.name}
                </h1>
                <p className="text-sm text-secondary-500">
                  {categoryData.name}
                </p>
              </div>
            </div>
            <p className="text-secondary-600 dark:text-secondary-400 text-lg">
              {toolData.description}
            </p>
          </div>

          {/* Tool Interface */}
          <Card className="p-6 mb-12">
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                Tool Interface
              </h3>
              <p className="text-secondary-500 max-w-md mx-auto">
                This tool interface will be implemented with the specific functionality for {toolData.name}.
              </p>
            </div>
          </Card>

          {/* Related Tools */}
          {relatedTools.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                Related Tools
              </h2>
              <ToolGrid tools={relatedTools} columns={3} />
            </div>
          )}

          {/* SEO Content Section */}
          <div className="mt-16 pt-8 border-t border-secondary-200 dark:border-secondary-800">
            <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
              About {toolData.name}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                {toolData.name} is a powerful SEO tool designed to help you {toolData.description.toLowerCase()}. 
                This tool is part of our comprehensive {categoryData.name} toolkit, which includes 
                {categoryData.tools.length} specialized tools for optimizing your website's search performance.
              </p>
              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mt-4">
                Using this tool regularly as part of your SEO workflow can help identify opportunities, 
                fix issues, and improve your overall search visibility. All our tools are free to use 
                and require no registration.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
