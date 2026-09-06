import Image from "next/image";
import Icon from "./Icon";
import EnquiryButton from "./EnquiryButton";
import { company, whatsappLink } from "@/lib/content";

function CardButtons({ waMessage, packageName }) {
  return (
    <div className="mt-3 grid grid-cols-3 gap-1.5">
      <a
        href={`tel:+${company.phoneIntl}`}
        className="inline-flex items-center justify-center gap-1 rounded-md bg-brand-orange px-2 py-2 text-[0.72rem] font-bold text-royal-deep transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
      >
        <Icon name="phone" className="h-3.5 w-3.5" />
        Call Now
      </a>
      <a
        href={whatsappLink(waMessage)}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center justify-center gap-1 rounded-md border border-ink/20 px-2 py-2 text-[0.72rem] font-semibold text-ink/70 transition-colors hover:border-[#25D366] hover:text-[#1c9e4c]"
      >
        <Icon name="whatsapp" className="h-3.5 w-3.5 text-[#25D366]" />
        WhatsApp
      </a>
      <EnquiryButton
        packageName={packageName}
        className="inline-flex items-center justify-center gap-1 rounded-md bg-royal-deep px-2 py-2 text-[0.72rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
      />
    </div>
  );
}

export default function PackageCard({ pkg }) {
  const waMessage = `Hello First Line Holidays, I'm interested in the "${pkg.name}" package (${pkg.duration}). Please share details and a quote.`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_10px_30px_-18px_rgba(6,63,152,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_60px_-24px_rgba(6,63,152,0.35)]">
      <div className="relative h-36 w-full overflow-hidden">
        <Image
          src={pkg.image}
          alt={`${pkg.name} — ${pkg.route}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {pkg.badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-brand-red px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-wider text-white shadow">
            {pkg.badge}
          </span>
        ) : null}
        {pkg.save ? (
          <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[0.6rem] font-bold text-brand-red shadow">
            {pkg.save}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-sans text-[1rem] font-bold leading-snug tracking-tight text-royal-deep">
          {pkg.name}
        </h3>
        <p className="mt-0.5 text-[0.76rem] font-medium leading-snug text-royal">{pkg.route}</p>

        {pkg.desc ? (
          <p className="mt-1.5 text-[0.8rem] leading-relaxed text-ink/60">
            <span className="line-clamp-2">{pkg.desc}</span>
          </p>
        ) : null}

        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-[0.72rem] text-ink/60">
          {pkg.highlights.map((h) => (
            <span key={h} className="inline-flex items-center gap-1">
              <Icon name="check" className="h-3 w-3 shrink-0 text-royal" />
              {h}
            </span>
          ))}
        </div>

        <div className="mt-3 flex-1" />

        <div className="border-t border-ink/10 pt-3">
          <div className="flex items-end justify-between gap-2">
            <span className="flex items-center gap-1.5 text-[0.68rem] font-medium text-ink/50">
              <Icon name="clock" className="h-3 w-3" />
              {pkg.duration}
            </span>
            <span className="text-right leading-none">
              {pkg.wasPrice ? (
                <span className="mr-1 text-[0.7rem] text-ink/40 line-through">{pkg.wasPrice}</span>
              ) : null}
              <span className="text-base font-bold text-royal-deep">{pkg.price}</span>
              <span className="ml-0.5 text-[0.6rem] font-medium text-ink/45">{pkg.unit}</span>
            </span>
          </div>

          <CardButtons waMessage={waMessage} packageName={pkg.name} />
        </div>
      </div>
    </article>
  );
}
