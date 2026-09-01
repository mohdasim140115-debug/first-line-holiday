import Link from "next/link";
import { company, whatsappLink } from "@/lib/content";

export const metadata = {
  title: "Thank You | First Line Holidays",
  description: "Your Kashmir travel enquiry has been received.",
  robots: { index: false },
};

export default function ThankYou() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-soft px-5 py-20">
      <div className="w-full max-w-lg rounded-2xl border border-ink/10 bg-white p-8 text-center shadow-[0_24px_70px_-30px_rgba(6,63,152,0.3)] md:p-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-royal/10 text-royal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
            <path d="m4 12 5 5L20 6" />
          </svg>
        </span>

        <h1 className="mt-5 font-serif text-3xl text-royal-deep">Thank You!</h1>
        <p className="mt-3 text-ink/65">
          Your enquiry has reached {company.contactPerson} and the First Line Holidays team.
          We usually reply the same day — please keep an eye on your phone and email.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Back to Home
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-royal transition-colors hover:border-royal"
          >
            Message us on WhatsApp
          </a>
        </div>

        <p className="mt-6 text-xs text-ink/45">
          Or call us directly at{" "}
          <a href={`tel:+${company.phoneIntl}`} className="font-semibold text-royal">
            {company.phone}
          </a>
        </p>
      </div>
    </main>
  );
}
