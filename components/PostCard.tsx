// components/PostCard.tsx
import { PostMeta } from "../lib/posts";
import CardBase from "./CardBase";

export default function PostCard({ post, priority }: { post: PostMeta; priority?: boolean }) {
  return (
    <CardBase
      title={post.title}
      href={`/blog/${post.slug}`}
      date={post.date}
      coverImage={post.coverImage}
      priority={priority}
      description={post.description}
    />
  );
}
