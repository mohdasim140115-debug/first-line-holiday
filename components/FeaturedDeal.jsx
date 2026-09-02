import Image from "next/image";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { featuredDeal } from "@/lib/content";

export default function FeaturedDeal() {
  const d = featuredDeal;
  const [b1, b2, s1, s2, s3] = d.gallery;

  return (
    <section className="bg-soft py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Text */}
          <Reveal variant="right">
            <span className="eyebrow flex items-center gap-3 text-brand-red">
              <span className="h-px w-10 bg-brand-red" />
              Featured Package
            </span>
            <h2 className="mt-4 font-serif text-3xl text-royal-deep sm:text-4xl">{d.name}</h2>
            <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-royal">
              <Icon name="pin" className="h-4 w-4" />
              {d.route}
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/65">{d.desc}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div>
                {d.wasPrice ? (
                  <p className="text-sm text-ink/40 line-through">Was: {d.wasPrice}</p>
                ) : null}
                <p className="font-serif text-2xl text-royal-deep">
                  {d.wasPrice ? "Now: " : ""}
                  <span className="text-brand-red">{d.nowPrice}</span>
                  <span className="ml-1 text-sm font-sans text-ink/45">{d.unit}</span>
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get Offer
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          {/* Image collage */}
          <Reveal variant="left" delay={120} className="relative">
            {d.badge ? (
              <span className="flh-float absolute right-3 top-3 z-10 rounded-full bg-white px-3 py-1 text-[0.7rem] font-bold text-brand-red shadow">
                {d.badge}
              </span>
            ) : null}
            <div className="grid grid-cols-2 gap-2">
              {[b1, b2].map((src, i) => (
                <div key={i} className="relative h-40 overflow-hidden rounded-xl md:h-48">
                  <Image src={src} alt={`${d.name} view ${i + 1}`} fill sizes="25vw" className="object-cover" />
                </div>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {[s1, s2, s3].map((src, i) => (
                <div key={i} className="relative h-24 overflow-hidden rounded-xl md:h-28">
                  <Image src={src} alt={`${d.name} detail ${i + 1}`} fill sizes="16vw" className="object-cover" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Thumbnail strip */}
        <Reveal className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-6">
          {d.thumbs.map((src, i) => (
            <div key={i} className="relative h-16 overflow-hidden rounded-lg md:h-20">
              <Image src={src} alt={`Kashmir gallery ${i + 1}`} fill sizes="16vw" className="object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
