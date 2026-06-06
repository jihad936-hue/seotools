import { notFound } from "next/navigation";
import { generateSEO } from "@/lib/seo";
import { 
  getCategoryBySlug, 
  getToolsByCategory, 
  generateCategoryStaticParams 
} from "@/lib/tools";
import Container from "@/components/ui/Container";
import ToolGrid from "@/components/tools/ToolGrid";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// ============================================
// STATIC GENERATION - Auto-generates all category pages
// ============================================
export async function generateStaticParams() {
  return generateCategoryStaticParams();
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ category: string }> 
}) {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);

  if (!categoryData) {
    return generateSEO({
      title: "Category Not Found",
      description: "The requested category could not be found.",
      noIndex: true,
    });
  }

  return generateSEO({
    title: `${categoryData.name} Tools`,
    description: `${categoryData.description}. Browse ${categoryData.tools.length} free ${categoryData.name.toLowerCase()} tools.`,
    canonical: `https://seotools.pro/tools/${category}`,
  });
}

export default async function CategoryPage({ 
  params 
}: { 
  params: Promise<{ category: string }> 
}) {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);

  if (!categoryData) {
    notFound();
  }

  const tools = getToolsByCategory(category);

  return (
    <div className="py-12">
      <Container>
        <Link
          href="/tools"
          className="inline-flex items-center gap-2 text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Tools
        </Link>

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-secondary-900 dark:text-white">
            {categoryData.name} Tools
          </h1>
          <p className="mt-3 text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl">
            {categoryData.description}
          </p>
          <p className="mt-2 text-sm text-secondary-500">
            {tools.length} tools available
          </p>
        </div>

        <ToolGrid tools={tools} columns={3} />
      </Container>
    </div>
  );
}
