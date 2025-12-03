// components/PostCard.tsx

import Link from "next/link";

import { PostMeta } from "../lib/posts";

import { formatDate } from "../lib/dateUtils";



export default function PostCard({ post }: { post: PostMeta }) {

  return (

    <article className="group bg-white border border-gray-200 rounded-lg p-5 hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col h-full">

      <div className="flex items-start justify-between mb-4">

        <time className="text-xs font-medium text-gray-500 uppercase tracking-wide">

          {formatDate(post.date)}

        </time>

        {post.featured && (

          <span className="px-2 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded border border-emerald-200">

            Featured

          </span>

        )}

      </div>

      <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">

        <Link href={`/blog/${post.slug}`} className="hover:underline">

          {post.title}

        </Link>

      </h2>

      <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed flex-grow">

        {post.description}

      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">

        <Link

          href={`/blog/${post.slug}`}

          className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"

        >

          Read Article

          <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">

            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />

          </svg>

        </Link>

        {post.tags && post.tags.length > 0 && (

          <div className="flex gap-1.5">

            {post.tags.slice(0, 2).map((tag) => (

              <span key={tag} className="px-2 py-0.5 text-xs font-medium bg-gray-50 text-gray-600 rounded border border-gray-200">

                {tag}

              </span>

            ))}

          </div>

        )}

      </div>

    </article>

  );

}

