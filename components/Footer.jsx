import Logo from "./Logo";
import Icon from "./Icon";
import { company, nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-royal-deep text-white/80">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="inline-block rounded-lg bg-white/95 px-3 py-2">
              <Logo />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              {company.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-[0.75rem] font-bold uppercase tracking-widest text-brand-orange">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="transition-colors hover:text-white">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.75rem] font-bold uppercase tracking-widest text-brand-orange">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="phone" className="h-4 w-4 text-brand-orange" />
                <a href={`tel:+${company.phoneIntl}`} className="hover:text-white">{company.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="mail" className="h-4 w-4 text-brand-orange" />
                <a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                <span>
                  {company.address.line1}, {company.address.line2}
                  <br />
                  {company.address.region} {company.address.pin}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row">
          <p>&copy; 2026 First Line Holidays. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
