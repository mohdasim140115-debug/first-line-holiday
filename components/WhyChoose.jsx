import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { whyChoose, promises } from "@/lib/content";

export default function WhyChoose() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Travel With First Line Holidays"
          align="center"
        />

        {/* Feature cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((c, i) => (
            <Reveal key={c.title} variant="scale" delay={i * 80} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_50px_-24px_rgba(6,63,152,0.32)]">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-royal/10 text-royal">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-brand-red">
                    {c.label}
                  </span>
                </div>
                <h3 className="font-sans text-base font-bold tracking-tight text-royal-deep">
                  {c.title}
                </h3>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-ink/60">{c.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Value strip */}
        <Reveal className="mt-6 overflow-hidden rounded-2xl bg-royal-deep">
          <div className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {promises.map((p) => (
              <div key={p.label} className="px-6 py-7 text-center">
                <p className="font-serif text-2xl text-brand-orange md:text-[1.7rem]">{p.value}</p>
                <p className="mt-1 text-[0.8rem] text-white/70">{p.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
