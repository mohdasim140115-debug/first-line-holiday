import SectionHeading from "./SectionHeading";
import ReviewCard from "./ReviewCard";
import Reveal from "./Reveal";
import { reviews } from "@/lib/content";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-soft py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Reviews"
          title="What Our Guests Say"
          subtitle="Real guest reviews will appear here as we collect them."
          align="center"
        />

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 90} className="h-full">
              <ReviewCard review={r} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
