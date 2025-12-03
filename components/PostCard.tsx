// components/PostCard.tsx

import Link from "next/link";

import { PostMeta } from "../lib/posts";



export default function PostCard({ post }: { post: PostMeta }) {

  return (

    <article className="bg-white border rounded-lg p-5 shadow-sm hover:shadow-md transition">

      <h2 className="text-xl font-semibold mb-1">

        <Link href={`/blog/${post.slug}`}>{post.title}</Link>

      </h2>

      <p className="text-xs text-gray-400 mb-2">

        {new Date(post.date).toLocaleDateString("en-US", {

          year: "numeric",

          month: "short",

          day: "numeric",

        })}

      </p>

      <p className="text-sm text-gray-600 mb-3">

        {post.description}

      </p>

      <Link

        href={`/blog/${post.slug}`}

        className="text-emerald-700 text-sm font-semibold"

      >

        Read more →

      </Link>

    </article>

  );

}

