// components/PostCard.tsx

import Link from "next/link";

import { PostMeta } from "../lib/posts";



export default function PostCard({ post }: { post: PostMeta }) {

  return (

    <article className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1">

      <div className="flex items-start justify-between mb-3">

        <time className="text-xs font-medium text-gray-500 uppercase tracking-wide">

          {new Date(post.date).toLocaleDateString("en-US", {

            year: "numeric",

            month: "short",

            day: "numeric",

          })}

        </time>

        {post.featured && (

          <span className="px-2 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-full">

            Featured

          </span>

        )}

      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">

        <Link href={`/blog/${post.slug}`} className="hover:underline">

          {post.title}

        </Link>

      </h2>

      <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">

        {post.description}

      </p>

      <Link

        href={`/blog/${post.slug}`}

        className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 group-hover:gap-2 gap-1 transition-all"

      >

        Read more

        <span className="group-hover:translate-x-1 transition-transform">→</span>

      </Link>

    </article>

  );

}

