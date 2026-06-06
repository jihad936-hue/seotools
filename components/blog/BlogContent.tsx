"use client";

import { BlogPost } from "@/types";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BlogContentProps {
  post: BlogPost;
}

export default function BlogContent({ post }: BlogContentProps) {
  return (
    <article className="py-12">
      <Container size="md">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <header className="mb-8">
          <Badge variant="primary" className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 dark:text-white leading-tight">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-secondary-500">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </header>

        <div className="relative h-64 sm:h-80 lg:h-96 bg-secondary-100 dark:bg-secondary-800 rounded-xl mb-10 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-secondary-400">
            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="prose dark:prose-invert prose-lg max-w-none">
          <div className="text-secondary-700 dark:text-secondary-300 leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-200 dark:border-secondary-800">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="default">{tag}</Badge>
            ))}
          </div>
        </div>
      </Container>
    </article>
  );
}
