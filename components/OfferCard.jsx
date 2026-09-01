import Image from "next/image";
import Icon from "./Icon";
import { CardButtons } from "./PackageCard";

export default function OfferCard({ offer }) {
  const waMessage = `Hello First Line Holidays, I'm interested in the "${offer.name}" (${offer.place}). Please share details and a quote.`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_10px_30px_-18px_rgba(6,63,152,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_55px_-24px_rgba(6,63,152,0.35)]">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={offer.image}
          alt={`${offer.name} — ${offer.place}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {offer.save ? (
          <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[0.62rem] font-bold text-brand-red shadow">
            {offer.save}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-sans text-[1.02rem] font-bold leading-snug tracking-tight text-royal-deep">
          {offer.name}
        </h3>
        <p className="mt-1 text-[0.76rem] font-medium text-royal">{offer.place}</p>

        {offer.desc ? (
          <p className="mt-2 text-[0.82rem] leading-relaxed text-ink/60">
            <span className="line-clamp-3">{offer.desc}</span>
            <a href="#contact" className="font-semibold text-brand-orange hover:underline">
              Read More
            </a>
          </p>
        ) : null}

        <div className="mt-4 flex-1" />

        <div className="border-t border-ink/10 pt-4">
          <div className="text-right leading-none">
            {offer.wasPrice ? (
              <span className="mr-1 text-[0.72rem] text-ink/40 line-through">{offer.wasPrice}</span>
            ) : null}
            <span className="text-lg font-extrabold text-royal-deep">{offer.price}</span>
            <span className="ml-0.5 text-[0.62rem] font-medium text-ink/45">{offer.unit}</span>
          </div>

          <CardButtons waMessage={waMessage} />
        </div>
      </div>
    </article>
  );
}
