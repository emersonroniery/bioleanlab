// components/ReviewCard.tsx
// Card para exibir review na listagem (baseado em PostCard)

import Link from "next/link";
import Image from "next/image";
import { ReviewMeta } from "../lib/reviews";
import StarRating from "./StarRating";

type Props = {
  review: ReviewMeta;
  priority?: boolean;
};

export default function ReviewCard({ review, priority }: Props) {
  return (
    <article className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-[2px] flex flex-col h-full">
      {review.coverImage && review.coverImage !== null && (
        <div className="mb-4 overflow-hidden rounded-xl bg-slate-100 relative h-40 w-full">
          <Image
            src={review.coverImage}
            alt={review.title}
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
        {new Date(review.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      
      {review.productName && (
        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1">
          {review.productName}
        </p>
      )}
      
      <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-2 leading-snug hover:text-emerald-600 transition-colors duration-200">
        <Link href={`/reviews/${review.slug}`}>
          {review.title}
        </Link>
      </h2>
      
      {review.rating !== undefined && review.rating !== null && (
        <div className="mb-3">
          <StarRating rating={review.rating} size="sm" showNumber={true} />
        </div>
      )}
      
      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-3 flex-grow">
        {review.summary || review.description}
      </p>
      
      <Link
        href={`/reviews/${review.slug}`}
        className="text-sm font-semibold text-emerald-700 mt-auto transition-colors duration-200"
      >
        Read full review →
      </Link>
    </article>
  );
}

