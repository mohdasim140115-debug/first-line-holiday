import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { itinerary } from "@/lib/content";

export default function Itinerary() {
  return (
    <section id="itinerary" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Itinerary"
          title="Your Kashmir Journey"
          subtitle="A sample 5-day flow — every day, stay and stop stays fully editable for your trip."
        />

        <ol className="relative mt-8 space-y-8 before:absolute before:left-[15px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-royal/20 md:before:left-1/2">
          {itinerary.map((d, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal
                as="li"
                key={d.day}
                delay={i * 60}
                className="relative md:grid md:grid-cols-2 md:gap-10"
              >
                <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-royal text-[0.7rem] font-bold text-white md:left-1/2 md:-translate-x-1/2">
                  {d.day}
                </span>

                <div
                  className={`pl-12 md:pl-0 ${
                    flip ? "md:order-2 md:pl-10" : "md:pr-10 md:text-right"
                  }`}
                >
                  <p className="text-[0.7rem] font-bold uppercase tracking-widest text-brand-red">
                    Day {d.day}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl text-royal-deep">{d.place}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{d.desc}</p>
                </div>

                <div className={`mt-4 pl-12 md:mt-0 md:pl-0 ${flip ? "md:order-1" : ""}`}>
                  <div className="relative h-36 w-full overflow-hidden rounded-xl md:h-32">
                    <Image
                      src={d.image}
                      alt={`${d.place} — day ${d.day}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
