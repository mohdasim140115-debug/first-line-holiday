"use client";

import { useRef } from "react";
import ReviewCard from "./ReviewCard";
import Icon from "./Icon";

export default function ReviewsTrack({ reviews }) {
  const ref = useRef(null);

  const scroll = (dir) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <div className="relative mt-8">
      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r, i) => (
          <div
            key={i}
            className="w-[86%] shrink-0 snap-center sm:w-[47%] lg:w-[31.6%]"
          >
            <ReviewCard review={r} index={i} />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scroll(-1)}
        aria-label="Previous reviews"
        className="absolute -left-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-white text-royal shadow-md transition-colors hover:bg-royal hover:text-white sm:flex lg:-left-5"
      >
        <Icon name="arrow" className="h-4 w-4 rotate-180" />
      </button>
      <button
        type="button"
        onClick={() => scroll(1)}
        aria-label="Next reviews"
        className="absolute -right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-white text-royal shadow-md transition-colors hover:bg-royal hover:text-white sm:flex lg:-right-5"
      >
        <Icon name="arrow" className="h-4 w-4" />
      </button>

      <p className="mt-3 text-center text-[0.72rem] text-ink/40 sm:hidden">
        Swipe to see more reviews →
      </p>
    </div>
  );
}
