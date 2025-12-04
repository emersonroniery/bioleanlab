// components/PostCard.tsx

import Link from "next/link";

import Image from "next/image";

import { PostMeta } from "../lib/posts";



export default function PostCard({ post, priority }: { post: PostMeta; priority?: boolean }) {

  return (

    <article className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-[2px] flex flex-col h-full">

      {post.coverImage && post.coverImage !== null && (

        <div className="mb-4 overflow-hidden rounded-xl bg-slate-100 relative h-40 w-full">

          <Image

            src={post.coverImage}

            alt={post.title}

            width={800}

            height={400}

            className="object-cover"

            loading={priority ? "eager" : "lazy"}

            priority={priority || false}

            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

          />

        </div>

      )}

      <time className="text-[0.75rem] text-slate-500 mb-1 block">

        {new Date(post.date).toLocaleDateString("en-US", {

          year: "numeric",

          month: "long",

          day: "numeric",

        })}

      </time>

      <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 leading-snug hover:text-emerald-600 transition-colors duration-200">

        <Link href={`/blog/${post.slug}`}>

          {post.title}

        </Link>

      </h2>

      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-3 flex-grow">

        {post.description}

      </p>

      <Link

        href={`/blog/${post.slug}`}

        className="text-sm font-semibold text-emerald-700 mt-auto transition-colors duration-200"

      >

        Read more →

      </Link>

    </article>

  );

}
