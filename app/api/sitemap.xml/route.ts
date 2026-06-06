import { NextResponse } from "next/server";
import { toolCategories, getAllTools } from "@/lib/tools";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://seotools.pro";

export async function GET() {
  const today = new Date().toISOString().split("T")[0];

  // Static pages
  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "daily" },
    { url: "/tools", priority: "0.9", changefreq: "daily" },
    { url: "/blog", priority: "0.8", changefreq: "daily" },
    { url: "/faq", priority: "0.7", changefreq: "monthly" },
    { url: "/about", priority: "0.6", changefreq: "monthly" },
  ];

  // Category pages
  const categoryPages = toolCategories.map((category) => ({
    url: `/tools/${category.slug}`,
    priority: "0.8",
    changefreq: "weekly",
  }));

  // Tool pages
  const toolPages = getAllTools().map((tool) => ({
    url: `/tools/${tool.category}/${tool.slug}`,
    priority: "0.7",
    changefreq: "weekly",
  }));

  // Blog posts
  const blogPosts = getAllPosts().map((post) => ({
    url: `/blog/${post.slug}`,
    priority: "0.6",
    changefreq: "monthly",
  }));

  const allUrls = [...staticPages, ...categoryPages, ...toolPages, ...blogPosts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
