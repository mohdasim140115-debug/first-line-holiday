import Image from "next/image";
import Icon from "./Icon";

export default function PackageCard({ pkg }) {
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

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-ink/10 pt-4">
          <span className="flex items-center gap-1.5 text-[0.72rem] font-medium text-royal">
            <Icon name="clock" className="h-3.5 w-3.5" />
            {pkg.duration}
          </span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-red px-3.5 py-1.5 text-[0.72rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get Quote
            <Icon name="arrow" className="h-3 w-3" />
          </a>
        </div>
      </div>
    </article>
  );
}
