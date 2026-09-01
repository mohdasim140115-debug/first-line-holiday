import Image from "next/image";
import Icon from "./Icon";
import { company, whatsappLink } from "@/lib/content";

export default function PackageCard({ pkg }) {
  const wa = whatsappLink(
    `Hello First Line Holidays, I'm interested in the "${pkg.name}" package (${pkg.duration}). Please share the details and a quote.`
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_10px_30px_-18px_rgba(6,63,152,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_60px_-24px_rgba(6,63,152,0.35)]">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={pkg.image}
          alt={`${pkg.name} — ${pkg.route}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {pkg.badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-brand-red px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-white shadow">
            {pkg.badge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-sans text-[1.05rem] font-bold leading-snug tracking-tight text-royal-deep">
          {pkg.name}
        </h3>
        <p className="mt-1 text-[0.78rem] leading-snug text-ink/55">Kashmir · {pkg.route}</p>

        <ul className="mt-3 space-y-1.5">
          {pkg.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-[0.82rem] text-ink/70">
              <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-royal" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex-1" />

        <div className="border-t border-ink/10 pt-4">
          <div className="flex items-end justify-between gap-2">
            <span className="flex items-center gap-1.5 text-[0.72rem] font-medium text-ink/55">
              <Icon name="clock" className="h-3.5 w-3.5" />
              {pkg.duration}
            </span>
            {pkg.price ? (
              <span className="text-right">
                <span className="block text-[0.62rem] uppercase tracking-wider text-ink/40">From</span>
                <span className="font-bold text-royal-deep">
                  {pkg.price}
                  <span className="ml-0.5 text-[0.65rem] font-medium text-ink/45">{pkg.unit}</span>
                </span>
              </span>
            ) : null}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <a
              href={`tel:+${company.phoneIntl}`}
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-royal/30 px-3 py-2 text-[0.75rem] font-semibold text-royal transition-colors hover:border-royal hover:bg-royal/5"
            >
              <Icon name="phone" className="h-3.5 w-3.5" />
              Call
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2 text-[0.75rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Icon name="whatsapp" className="h-3.5 w-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
