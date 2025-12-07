// components/ReviewCard.tsx
// Card para exibir review na listagem
import { ReviewMeta } from "../lib/reviews";
import StarRating from "./StarRating";
import CardBase from "./CardBase";

type Props = {
  review: ReviewMeta;
  priority?: boolean;
};

export default function ReviewCard({ review, priority }: Props) {
  return (
    <CardBase
      title={review.title}
      href={`/reviews/${review.slug}`}
      date={review.date}
      coverImage={review.coverImage}
      priority={priority}
      description={review.summary || review.description || ""}
      linkText="Read full review →"
      beforeTitle={
        review.productName ? (
          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1">
            {review.productName}
          </p>
        ) : null
      }
    >
      {review.rating !== undefined && review.rating !== null && (
        <div className="mb-3">
          <StarRating rating={review.rating} size="sm" showNumber={true} />
        </div>
      )}
    </CardBase>
  );
}

