// components/PostCard.tsx

import Link from "next/link";

import { PostMeta } from "../lib/posts";

import { formatDate } from "../lib/dateUtils";



export default function PostCard({ post }: { post: PostMeta }) {

  return (

    <article className="group bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-emerald-50/0 group-hover:from-emerald-50/50 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>

      <div className="relative z-10">

        <div className="flex items-start justify-between mb-4">

          <div className="flex items-center gap-2">

            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>

            <time className="text-xs font-medium text-gray-500 uppercase tracking-wide">

              {formatDate(post.date)}

            </time>

          </div>

          {post.featured && (

            <span className="px-3 py-1 text-xs font-bold text-emerald-700 bg-gradient-to-r from-emerald-100 to-emerald-50 rounded-full border border-emerald-200">

              ⭐ Featured

            </span>

          )}

        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-emerald-600 transition-colors line-clamp-2">

          <Link href={`/blog/${post.slug}`} className="hover:underline">

            {post.title}

          </Link>

        </h2>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">

          {post.description}

        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">

          <Link

            href={`/blog/${post.slug}`}

            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 group-hover:gap-3 transition-all"

          >

            Read Article

            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />

            </svg>

          </Link>

          {post.tags && post.tags.length > 0 && (

            <div className="flex gap-1">

              {post.tags.slice(0, 2).map((tag) => (

                <span key={tag} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md">

                  {tag}

                </span>

              ))}

            </div>

          )}

        </div>

      </div>

    </article>

  );

}

