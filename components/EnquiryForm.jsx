"use client";

import { useState } from "react";
import Icon from "./Icon";
import { submitEnquiry } from "@/lib/submitEnquiry";

const initial = {
  name: "",
  phone: "",
  email: "",
  date: "",
  travellers: "",
  message: "",
};

const LABEL = "mb-1.5 block text-[0.68rem] font-semibold uppercase tracking-widest text-ink/50";
const FIELD =
  "h-11 w-full rounded-lg border border-ink/15 bg-soft pl-9 pr-3 text-sm text-ink outline-none transition placeholder:text-ink/40 focus:border-royal focus:bg-white focus:ring-2 focus:ring-royal/15";
const ICON = "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35";

// Defined at module scope so React keeps the input mounted between renders
// (a component defined inside render would remount and drop focus on each keystroke).
function Field({ id, icon, label, wrapClass = "", ...props }) {
  return (
    <div className={wrapClass}>
      <label className={LABEL} htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <Icon name={icon} className={ICON} />
        <input id={id} className={FIELD} {...props} />
      </div>
    </div>
  );
}

export default function EnquiryForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    try {
      await submitEnquiry({ ...form, source: "Contact form" });
      window.location.href = "/thank-you";
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={submit}
      className="h-full rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_18px_50px_-24px_rgba(6,63,152,0.28)] md:p-7"
    >
      <p className="font-serif text-2xl text-royal-deep">Send an Enquiry</p>
      <p className="mt-1 text-sm text-ink/55">
        Share your plan and we&apos;ll come back with an itinerary and a quote — usually the same day.
      </p>
      <div className="mt-5 h-px w-full bg-ink/10" />

      <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
        <Field id="f-name" icon="user" label="Name" required placeholder="Your name" value={form.name} onChange={set("name")} />
        <Field id="f-phone" icon="phone" label="Phone" required type="tel" inputMode="tel" placeholder="WhatsApp number" value={form.phone} onChange={set("phone")} />
        <Field id="f-email" icon="mail" label="Email" type="email" placeholder="Email address" value={form.email} onChange={set("email")} />
        <Field id="f-date" icon="calendar" label="Travel date" type="date" value={form.date} onChange={set("date")} />
        <Field id="f-trav" icon="users" label="Travellers" type="number" min="1" placeholder="e.g. 2" wrapClass="sm:col-span-2" value={form.travellers} onChange={set("travellers")} />

        <div className="sm:col-span-2">
          <label className={LABEL} htmlFor="f-msg">Message</label>
          <textarea
            id="f-msg"
            rows={3}
            placeholder="Where you want to go, rough dates, anything else…"
            className="w-full rounded-lg border border-ink/15 bg-soft px-3.5 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink/40 focus:border-royal focus:bg-white focus:ring-2 focus:ring-royal/15"
            value={form.message}
            onChange={set("message")}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send Enquiry"}
        {status !== "sending" ? <Icon name="arrow" className="h-4 w-4" /> : null}
      </button>

      {status === "error" ? (
        <p className="mt-3 text-center text-xs text-brand-red">{error}</p>
      ) : (
        <p className="mt-2.5 flex items-center justify-center gap-1.5 text-[0.68rem] text-ink/40">
          <Icon name="shield" className="h-3 w-3" />
          Your details are only used to plan your trip.
        </p>
      )}
    </form>
  );
}
