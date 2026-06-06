import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`}>
        <Card hover className="overflow-hidden group">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-full bg-secondary-100 dark:bg-secondary-800">
              <div className="absolute inset-0 flex items-center justify-center text-secondary-400">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <Badge variant="primary" className="w-fit mb-3">{post.category}</Badge>
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white group-hover:text-primary-600 transition-colors mb-3">
                {post.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-secondary-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card hover className="overflow-hidden group h-full flex flex-col">
        <div className="relative h-48 bg-secondary-100 dark:bg-secondary-800">
          <div className="absolute inset-0 flex items-center justify-center text-secondary-400">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <Badge variant="primary" size="sm" className="w-fit mb-2">{post.category}</Badge>
          <h3 className="font-semibold text-secondary-900 dark:text-white group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-4 line-clamp-2 flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3 text-xs text-secondary-500 pt-3 border-t border-secondary-100 dark:border-secondary-800">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
