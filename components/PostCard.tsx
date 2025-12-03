// components/PostCard.tsx

import Link from "next/link";

import { PostMeta } from "../lib/posts";




export default function PostCard({ post }: { post: PostMeta }) {

  return (

    <article className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col h-full">

      <time className="text-xs text-slate-400 mb-3 block">

        {new Date(post.date).toLocaleDateString("en-US", {

          year: "numeric",

          month: "long",

          day: "numeric",

        })}

      </time>

      <h2 className="text-xl font-semibold text-slate-900 mb-3 hover:text-emerald-600 transition-colors duration-200">

        <Link href={`/blog/${post.slug}`}>

          {post.title}

        </Link>

      </h2>

      <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed flex-grow">

        {post.description}

      </p>

      <Link

        href={`/blog/${post.slug}`}

        className="text-emerald-600 hover:text-emerald-700 font-medium text-sm mt-auto transition-colors duration-200"

      >

        Read more →

      </Link>

    </article>

  );

}

