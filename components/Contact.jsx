import SectionHeading from "./SectionHeading";
import EnquiryForm from "./EnquiryForm";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { company, whatsappLink } from "@/lib/content";

export default function Contact() {
  const rows = [
    { icon: "phone", label: "Call Us", value: company.phone, href: `tel:+${company.phoneIntl}` },
    { icon: "mail", label: "Email Us", value: company.email, href: `mailto:${company.email}` },
    { icon: "whatsapp", label: "WhatsApp", value: company.phone, href: whatsappLink() },
    {
      icon: "pin",
      label: "Visit Us",
      value: `${company.address.line1}, ${company.address.line2}, ${company.address.region} ${company.address.pin}`,
    },
  ];

  return (
    <section id="contact" className="bg-soft py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Plan Your Journey"
          subtitle="Reach out to Mehraj and the First Line Holidays team — we usually reply the same day."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* Contact info panel */}
          <Reveal variant="left" className="flex flex-col rounded-2xl bg-royal-deep p-6 text-white">
            <span className="eyebrow text-brand-orange">Reach Us</span>
            <p className="mt-3 font-serif text-2xl">{company.contactPerson}</p>
            <p className="text-sm text-white/60">{company.name}</p>

            <ul className="mt-5 divide-y divide-white/10">
              {rows.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    {...(r.href?.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                    className="group flex items-start gap-3.5 py-3 first:pt-0"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-orange transition-colors group-hover:bg-white/20">
                      <Icon name={r.icon} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.65rem] font-semibold uppercase tracking-widest text-white/45">
                        {r.label}
                      </span>
                      <span className="mt-0.5 block text-sm text-white/90">{r.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </Reveal>

          {/* Enquiry form */}
          <Reveal delay={120}>
            <EnquiryForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
