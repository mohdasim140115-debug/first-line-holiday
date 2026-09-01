import Image from "next/image";
import Icon from "./Icon";
import { company, whatsappLink } from "@/lib/content";

function CardButtons({ waMessage }) {
  return (
    <div className="mt-4 grid grid-cols-3 gap-1.5">
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
      <a
        href="#contact"
        className="inline-flex items-center justify-center gap-1 rounded-md bg-royal-deep px-2 py-2 text-[0.72rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
      >
        <Icon name="mail" className="h-3.5 w-3.5" />
        Enquiry
      </a>
    </div>
  );
}

export default function PackageCard({ pkg }) {
  const waMessage = `Hello First Line Holidays, I'm interested in the "${pkg.name}" package (${pkg.duration}). Please share details and a quote.`;

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
          <span className="absolute left-3 top-3 rounded-full bg-brand-red px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-wider text-white shadow">
            {pkg.badge}
          </span>
        ) : null}
        {pkg.save ? (
          <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[0.62rem] font-bold text-brand-red shadow">
            {pkg.save}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-sans text-[1.05rem] font-bold leading-snug tracking-tight text-royal-deep">
          {pkg.name}
        </h3>
        <p className="mt-1 text-[0.78rem] font-medium leading-snug text-royal">{pkg.route}</p>

        {pkg.desc ? (
          <p className="mt-2 text-[0.82rem] leading-relaxed text-ink/60">
            <span className="line-clamp-3">{pkg.desc}</span>
            <a href="#contact" className="font-semibold text-brand-orange hover:underline">
              Read More
            </a>
          </p>
        ) : null}

        <ul className="mt-3 space-y-1.5">
          {pkg.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-[0.8rem] text-ink/70">
              <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-royal" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex-1" />

        <div className="border-t border-ink/10 pt-4">
          <div className="flex items-end justify-between gap-2">
            <span className="flex items-center gap-1.5 text-[0.7rem] font-medium text-ink/50">
              <Icon name="clock" className="h-3.5 w-3.5" />
              {pkg.duration}
            </span>
            <span className="text-right leading-none">
              {pkg.wasPrice ? (
                <span className="mr-1 text-[0.72rem] text-ink/40 line-through">{pkg.wasPrice}</span>
              ) : null}
              <span className="text-lg font-extrabold text-royal-deep">{pkg.price}</span>
              <span className="ml-0.5 text-[0.62rem] font-medium text-ink/45">{pkg.unit}</span>
            </span>
          </div>

          <CardButtons waMessage={waMessage} />
        </div>
      </div>
    </article>
  );
}

export { CardButtons };
