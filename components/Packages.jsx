import SectionHeading from "./SectionHeading";
import PackageCard from "./PackageCard";
import Reveal from "./Reveal";
import { packages } from "@/lib/content";

export default function Packages() {
  return (
    <section id="packages" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Holiday Packages"
          title="Popular Kashmir Tour Packages"
          subtitle="Kashmir trip packages thoughtfully planned for couples, families and groups."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 90} className="h-full">
              <PackageCard pkg={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
