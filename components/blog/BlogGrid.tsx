import { BlogPost } from "@/types";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  posts: BlogPost[];
  featured?: boolean;
}

export default function BlogGrid({ posts, featured = false }: BlogGridProps) {
  if (featured && posts.length > 0) {
    return (
      <div className="space-y-6">
        <BlogCard post={posts[0]} featured />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
