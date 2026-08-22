import { Quote, Star } from "lucide-react";

import { GlassSpotlight } from "@/components/site/GlassSpotlight";
import type { Review } from "@/data/clinic";

function ReviewCard({ review }: { review: Review }) {
  return (
    <GlassSpotlight
      as="figure"
      className="glass glass-lift glass-sheen glass-spotlight flex w-[17.5rem] shrink-0 flex-col rounded-3xl p-4.5 sm:w-[21rem] sm:p-5"
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5 text-primary" aria-label={`${review.rating} out of 5 stars`}>
          {[0, 1, 2, 3, 4].map((n) => (
            <Star key={n} className="size-4 fill-current" aria-hidden />
          ))}
        </div>
        <Quote className="size-5 text-primary/40" aria-hidden />
      </div>
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        “{review.text}”
      </blockquote>
      {review.highlights?.length ? (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {review.highlights.map((h) => (
            <li
              key={h}
              className="glass-soft rounded-full px-2.5 py-1 text-[0.68rem] font-medium text-foreground/80"
            >
              {h}
            </li>
          ))}
        </ul>
      ) : null}
      <figcaption className="mt-4 flex items-center justify-between gap-3 text-xs">
        <span className="font-semibold text-foreground">— {review.name}</span>
        <span className="text-muted-foreground">
          {review.source}
          {review.date ? ` · ${review.date}` : ""}
        </span>
      </figcaption>
    </GlassSpotlight>
  );
}

export function ReviewMarquee({ reviews }: { reviews: Review[] }) {
  return (
    <div className="marquee mt-10" role="region" aria-label="Patient reviews">
      <div className="marquee-track gap-5">
        {[...reviews, ...reviews].map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}
