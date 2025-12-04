// components/ReviewSummaryBox.tsx
// Box de resumo no topo da página de review individual

import { ReviewMeta } from "../lib/reviews";
import StarRating from "./StarRating";
import Link from "next/link";

type Props = {
  review: ReviewMeta;
};

export default function ReviewSummaryBox({ review }: Props) {
  return (
    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          {review.productName && (
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              {review.productName}
            </h2>
          )}
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            {review.rating !== undefined && review.rating !== null && (
              <div className="flex items-center gap-2">
                <span className="font-medium">Rating:</span>
                <StarRating rating={review.rating} size="md" showNumber={true} />
              </div>
            )}
            
            <div className="flex items-center gap-2">
              <span className="font-medium">Reviewed:</span>
              <time dateTime={review.date}>
                {new Date(review.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </div>
        
        {review.affiliateLink && (
          <div className="flex-shrink-0">
            <Link
              href={review.affiliateLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold shadow-md hover:bg-emerald-700 hover:shadow-lg transition-all duration-200 whitespace-nowrap"
            >
              Visit Official Website →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

