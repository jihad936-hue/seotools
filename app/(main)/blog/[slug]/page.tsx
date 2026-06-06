import { notFound } from "next/navigation";
import { generateSEO } from "@/lib/seo";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import BlogContent from "@/components/blog/BlogContent";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return generateSEO({
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
      noIndex: true,
    });
  }

  return generateSEO({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    canonical: `https://seotools.pro/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogContent post={post} />;
}
