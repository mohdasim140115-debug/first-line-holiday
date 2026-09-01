import Image from "next/image";
import Icon from "./Icon";

export default function OfferCard({ offer }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_10px_30px_-18px_rgba(6,63,152,0.22)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_50px_-24px_rgba(6,63,152,0.32)]">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={offer.image}
          alt={`${offer.name} — ${offer.place}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-sans text-[0.98rem] font-bold leading-snug tracking-tight text-royal-deep">
          {offer.name}
        </h3>
        <p className="mt-0.5 text-[0.76rem] text-ink/55">{offer.place}</p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-ink/10 pt-3">
          <span className="text-[0.82rem] font-bold text-royal-deep">
            {offer.price}
            <span className="ml-1 text-[0.66rem] font-medium text-ink/45">{offer.unit}</span>
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 rounded-full bg-brand-red px-3.5 py-1.5 text-[0.72rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            More
            <Icon name="arrow" className="h-3 w-3" />
          </a>
        </div>
      </div>
    </article>
  );
}
