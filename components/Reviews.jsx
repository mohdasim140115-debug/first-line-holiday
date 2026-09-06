import SectionHeading from "./SectionHeading";
import ReviewsTrack from "./ReviewsTrack";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { reviews, reviewSummary } from "@/lib/content";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-soft py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Reviews" title="What Our Guests Say" align="center" />

        {reviewSummary?.rating ? (
          <Reveal className="mx-auto mt-4 flex w-fit items-center gap-2.5 rounded-full border border-ink/10 bg-white px-4 py-2 shadow-sm">
            <span className="text-lg font-bold text-royal-deep">{reviewSummary.rating}</span>
            <span className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((s) => (
                <Icon key={s} name="star" className="h-4 w-4 text-brand-orange" />
              ))}
            </span>
            <span className="text-[0.8rem] text-ink/55">{reviewSummary.label}</span>
          </Reveal>
        ) : null}

        <ReviewsTrack reviews={reviews} />
      </div>
    </section>
  );
}
