import { seoContent as c } from "@/lib/content";

// Turns "**keyword**" into an accent-coloured span.
function render(text) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-semibold text-royal">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function SeoContent() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="rounded-2xl border border-ink/10 bg-soft p-6 md:p-10">
          <h2 className="text-center font-serif text-lg uppercase tracking-wide text-royal-deep sm:text-2xl">
            {c.heading}
          </h2>

          <div className="mx-auto mt-5 max-w-3xl space-y-3 text-center text-[0.9rem] leading-relaxed text-ink/65">
            {c.paragraphs.map((p, i) => (
              <p key={i}>{render(p)}</p>
            ))}
          </div>

          <div className="mt-6 grid gap-5 border-t border-ink/10 pt-6 sm:grid-cols-2 sm:gap-8">
            <p className="text-sm leading-relaxed text-ink/60">{render(c.colLeft)}</p>
            <p className="text-sm leading-relaxed text-ink/60 sm:border-l sm:border-ink/10 sm:pl-8">
              {render(c.colRight)}
            </p>
          </div>

          <div className="mt-6 border-t border-ink/10 pt-4">
            <p className="text-[0.72rem] leading-relaxed">
              <span className="font-bold uppercase tracking-widest text-brand-red">
                Top Searched:
              </span>{" "}
              {c.topSearched.map((t, i) => (
                <span key={t}>
                  <a href="#packages" className="text-ink/55 transition-colors hover:text-royal">
                    {t}
                  </a>
                  {i < c.topSearched.length - 1 ? (
                    <span className="text-ink/25"> | </span>
                  ) : null}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
