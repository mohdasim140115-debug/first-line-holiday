import Icon from "./Icon";

const AVATAR = ["bg-royal", "bg-brand-red", "bg-brand-orange text-royal-deep", "bg-royal-deep"];

function initials(name) {
  const parts = name.replace(/&/g, " ").split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase();
}

export default function ReviewCard({ review, index = 0 }) {
  const rating = Math.max(1, Math.min(5, review.rating || 5));

  return (
    <figure className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-5 shadow-[0_10px_30px_-20px_rgba(6,63,152,0.28)]">
      <div className="flex items-center gap-3">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[0.8rem] font-bold text-white ${AVATAR[index % AVATAR.length]}`}
        >
          {initials(review.name)}
        </span>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="truncate text-sm font-semibold text-royal-deep">{review.name}</span>
            <Icon name="shield" className="h-3.5 w-3.5 shrink-0 text-royal" />
          </div>
          {review.location ? (
            <span className="text-[0.72rem] text-ink/45">{review.location}</span>
          ) : null}
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="flex gap-0.5">
          {[0, 1, 2, 3, 4].map((s) => (
            <Icon
              key={s}
              name="star"
              className={`h-4 w-4 ${s < rating ? "text-brand-orange" : "text-ink/15"}`}
            />
          ))}
        </span>
        {review.timeAgo ? (
          <span className="text-[0.7rem] text-ink/40">{review.timeAgo}</span>
        ) : null}
      </div>

      <blockquote className="mt-2.5 flex-1 text-[0.86rem] leading-relaxed text-ink/70">
        {review.body}
      </blockquote>

      {review.trip ? (
        <figcaption className="mt-4 border-t border-ink/10 pt-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-royal/8 px-2.5 py-1 text-[0.68rem] font-medium text-royal">
            <Icon name="tag" className="h-3 w-3" />
            {review.trip}
          </span>
        </figcaption>
      ) : null}
    </figure>
  );
}
