import Image from "next/image";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { images, company, aboutPoints } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="bg-soft py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-14 lg:px-8">
        {/* Images */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl md:h-[23rem]">
            <Image
              src={images.aboutLarge}
              alt="Green meadows and pine forest below the Kashmir mountains"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-3 hidden h-40 w-52 overflow-hidden rounded-xl border-4 border-white shadow-2xl sm:block md:-right-8">
            <Image
              src={images.aboutSmall}
              alt="Houseboats along the water in Srinagar"
              fill
              sizes="208px"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={120} className="order-1 lg:order-2">
          <span className="eyebrow flex items-center gap-3 text-brand-red">
            <span className="h-px w-10 bg-brand-red" />
            About Us
          </span>
          <h2 className="mt-4 font-serif text-2xl leading-tight text-royal-deep sm:text-[2.1rem] md:text-[2.45rem]">
            Your Trusted Kashmir Travel Partner
          </h2>
          <p className="mt-4 max-w-lg text-ink/70">
            {company.name} is a Kashmir-based travel company led by {company.contactPerson}, planning
            personal journeys across the valley from our base in {company.address.line1}. From the
            first conversation to the drive back to the airport, we handle the stays, transport and
            route so your trip feels effortless — and worth remembering.
          </p>

          <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {aboutPoints.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-ink/70">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                {p}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Plan Your Trip
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
