import Icon from "./Icon";

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function ReviewCard({ review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-ink/10 bg-soft p-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5 text-brand-orange">
          {[0, 1, 2, 3, 4].map((s) => (
            <Icon key={s} name="star" className="h-4 w-4" />
          ))}
        </div>
        {review.date ? (
          <span className="text-[0.72rem] text-ink/45">{review.date}</span>
        ) : null}
      </div>

      <blockquote className="mt-4 flex-1 text-sm italic leading-relaxed text-ink/70">
        &ldquo;{review.body}&rdquo;
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-royal/10 text-[0.72rem] font-bold text-royal">
          {initials(review.name)}
        </span>
        <span>
          <span className="block text-sm font-semibold text-royal-deep">{review.name}</span>
          <span className="block text-[0.78rem] text-ink/50">{review.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
