import { notFound } from "next/navigation";
import { generateSEO } from "@/lib/seo";
import { 
  getToolBySlug, 
  getCategoryBySlug,
  getToolsByCategory,
  generateToolStaticParams,
  SITE_URL,
} from "@/lib/tools";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import ToolInterface from "@/components/tools/ToolInterface";
import ToolGrid from "@/components/tools/ToolGrid";
import Link from "next/link";
import { ArrowLeft, Wrench, ChevronRight, Home, LayoutGrid, FolderOpen } from "lucide-react";

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
    canonical: `${SITE_URL}/tools/${toolData.category}/${toolData.slug}`,
  });
}

// ============================================
// JSON-LD COMPONENTS
// ============================================

function BreadcrumbJsonLd({ 
  category, 
  categoryName, 
  toolName, 
  toolSlug 
}: { 
  category: string; 
  categoryName: string; 
  toolName: string; 
  toolSlug: string;
}) {
  const items = [
    { name: "Home", item: SITE_URL },
    { name: "Tools", item: `${SITE_URL}/tools` },
    { name: categoryName, item: `${SITE_URL}/tools/${category}` },
    { name: toolName, item: `${SITE_URL}/tools/${category}/${toolSlug}` },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function SoftwareApplicationJsonLd({ 
  toolData, 
  categoryName 
}: { 
  toolData: NonNullable<ReturnType<typeof getToolBySlug>>; 
  categoryName: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: toolData.name,
    description: toolData.metaDescription || toolData.description,
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
    url: `${SITE_URL}/tools/${toolData.category}/${toolData.slug}`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    category: categoryName,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

function FAQPageJsonLd({ 
  faq 
}: { 
  faq: NonNullable<NonNullable<ReturnType<typeof getToolBySlug>>["faq"]>; 
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// ============================================
// BREADCRUMB NAVIGATION COMPONENT
// ============================================

function BreadcrumbNav({ 
  category, 
  categoryName, 
  toolName 
}: { 
  category: string; 
  categoryName: string; 
  toolName: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-secondary-600 dark:text-secondary-400">
        <li>
          <Link 
            href="/" 
            className="inline-flex items-center gap-1 hover:text-primary-600 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <ChevronRight className="w-4 h-4 text-secondary-400" />
        </li>
        <li>
          <Link 
            href="/tools" 
            className="inline-flex items-center gap-1 hover:text-primary-600 transition-colors"
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Tools</span>
          </Link>
        </li>
        <li>
          <ChevronRight className="w-4 h-4 text-secondary-400" />
        </li>
        <li>
          <Link 
            href={`/tools/${category}`} 
            className="inline-flex items-center gap-1 hover:text-primary-600 transition-colors"
          >
            <FolderOpen className="w-4 h-4" />
            <span>{categoryName}</span>
          </Link>
        </li>
        <li>
          <ChevronRight className="w-4 h-4 text-secondary-400" />
        </li>
        <li>
          <span className="text-secondary-900 dark:text-white font-medium" aria-current="page">
            {toolName}
          </span>
        </li>
      </ol>
    </nav>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================

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

  const hasRichContent = !!(
    toolData.longDescription ||
    toolData.howToUse?.length ||
    toolData.benefits?.length ||
    toolData.useCases?.length ||
    toolData.faq?.length
  );

  return (
    <div className="py-12">
      {/* Structured Data */}
      <BreadcrumbJsonLd 
        category={category} 
        categoryName={categoryData.name} 
        toolName={toolData.name} 
        toolSlug={toolData.slug} 
      />
      <SoftwareApplicationJsonLd 
        toolData={toolData} 
        categoryName={categoryData.name} 
      />
      {toolData.faq && toolData.faq.length > 0 && (
        <FAQPageJsonLd faq={toolData.faq} />
      )}

      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <BreadcrumbNav 
            category={category} 
            categoryName={categoryData.name} 
            toolName={toolData.name} 
          />

          {/* Back link (kept for existing UX, now secondary to breadcrumbs) */}
          <Link
            href={`/tools/${category}`}
            className="inline-flex items-center gap-2 text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to {categoryData.name}
          </Link>

          {/* Header */}
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

          {/* ============================================
              RICH SEO CONTENT SECTIONS (conditional)
              ============================================ */}
          {hasRichContent && (
            <article className="mt-16 pt-8 border-t border-secondary-200 dark:border-secondary-800">
              {/* Long Description */}
              {toolData.longDescription && (
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    About {toolData.name}
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                      {toolData.longDescription}
                    </p>
                  </div>
                </section>
              )}

              {/* How to Use */}
              {toolData.howToUse && toolData.howToUse.length > 0 && (
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    How to Use {toolData.name}
                  </h2>
                  <ol className="space-y-3">
                    {toolData.howToUse.map((step, index) => (
                      <li 
                        key={index} 
                        className="flex gap-4 text-secondary-600 dark:text-secondary-400"
                      >
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-sm font-semibold text-primary-600">
                          {index + 1}
                        </span>
                        <span className="pt-1 leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {/* Benefits */}
              {toolData.benefits && toolData.benefits.length > 0 && (
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    Key Benefits
                  </h2>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {toolData.benefits.map((benefit, index) => (
                      <li 
                        key={index}
                        className="flex gap-3 p-4 rounded-lg bg-secondary-50 dark:bg-secondary-800/50"
                      >
                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary-500" />
                        <span className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Use Cases */}
              {toolData.useCases && toolData.useCases.length > 0 && (
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    Common Use Cases
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {toolData.useCases.map((useCase, index) => (
                      <div 
                        key={index}
                        className="p-4 rounded-lg border border-secondary-200 dark:border-secondary-700"
                      >
                        <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                          {useCase}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQ */}
              {toolData.faq && toolData.faq.length > 0 && (
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {toolData.faq.map((item, index) => (
                      <details 
                        key={index}
                        className="group rounded-lg border border-secondary-200 dark:border-secondary-700 open:bg-secondary-50 dark:open:bg-secondary-800/30"
                      >
                        <summary className="flex cursor-pointer items-center justify-between p-4 text-left font-medium text-secondary-900 dark:text-white">
                          {item.question}
                          <span className="ml-4 flex-shrink-0 transition-transform group-open:rotate-180">
                            <svg className="w-5 h-5 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <div className="px-4 pb-4 text-secondary-600 dark:text-secondary-400 leading-relaxed">
                          {item.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}
            </article>
          )}

          {/* ============================================
              FALLBACK "ABOUT" SECTION (for tools without rich content)
              ============================================ */}
          {!hasRichContent && (
            <div className="mt-16 pt-8 border-t border-secondary-200 dark:border-secondary-800">
              <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                About {toolData.name}
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                  {toolData.name} is a powerful SEO tool designed to help you {toolData.description.toLowerCase()}. 
                  This tool is part of our comprehensive {categoryData.name} toolkit, which includes{" "}
                  {categoryData.tools.length} specialized tools for optimizing your website's search performance.
                </p>
                <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mt-4">
                  Using this tool regularly as part of your SEO workflow can help identify opportunities, 
                  fix issues, and improve your overall search visibility. All our tools are free to use 
                  and require no registration.
                </p>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
