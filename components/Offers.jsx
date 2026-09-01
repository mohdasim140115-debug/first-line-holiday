import SectionHeading from "./SectionHeading";
import OfferCard from "./OfferCard";
import Reveal from "./Reveal";
import { offers } from "@/lib/content";

export default function Offers() {
  return (
    <section id="offers" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="More Offers"
          title="Short Tours & Day Trips"
          subtitle="Quick add-ons and standalone day tours across the valley — day trips you can add to any package."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((o, i) => (
            <Reveal key={o.name} delay={i * 90} className="h-full">
              <OfferCard offer={o} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
