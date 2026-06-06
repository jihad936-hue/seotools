import { generateSEO } from "@/lib/seo";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import Container from "@/components/ui/Container";
import BlogGrid from "@/components/blog/BlogGrid";

export const metadata = generateSEO({
  title: "SEO Blog - Tips, Guides & Strategies",
  description: "Learn SEO best practices, strategies, and techniques from industry experts. Read our comprehensive guides and tutorials.",
});

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div className="py-12">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-secondary-900 dark:text-white">
            SEO Blog
          </h1>
          <p className="mt-4 text-lg text-secondary-600 dark:text-secondary-400">
            Expert insights, strategies, and guides to help you master search engine optimization
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <a
            href="/blog"
            className="px-4 py-2 rounded-full bg-primary-600 text-white text-sm font-medium"
          >
            All
          </a>
          {categories.map((category) => (
            <a
              key={category}
              href={`/blog?category=${encodeURIComponent(category)}`}
              className="px-4 py-2 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 text-sm font-medium hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
            >
              {category}
            </a>
          ))}
        </div>

        <BlogGrid posts={posts} featured />
      </Container>
    </div>
  );
}
