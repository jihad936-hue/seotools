import type { MetadataRoute } from "next";
import { toolCategories, getAllTools } from "@/lib/tools";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://seotools-peach.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  const staticPages = [
    "/",
    "/tools",
    "/blog",
    "/faq",
    "/about",
  ].map((url) => ({
    url: `${BASE_URL}${url}`,
    lastModified: today,
    changeFrequency: "daily" as const,
    priority: url === "/" ? 1 : 0.8,
  }));

  const categoryPages = toolCategories.map((category) => ({
    url: `${BASE_URL}/tools/${category.slug}`,
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const toolPages = getAllTools().map((tool) => ({
    url: `${BASE_URL}/tools/${tool.category}/${tool.slug}`,
    lastModified: today,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogPages = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...toolPages,
    ...blogPages,
  ];
}