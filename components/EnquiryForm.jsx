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

export default function EnquiryForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
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

  const field =
    "h-10 w-full rounded-lg border border-ink/15 bg-soft px-3.5 text-sm text-ink outline-none transition focus:border-royal focus:bg-white focus:ring-2 focus:ring-royal/15";
  const label = "mb-1.5 block text-[0.68rem] font-semibold uppercase tracking-widest text-ink/50";

  return (
    <form onSubmit={submit} className="h-full rounded-2xl border border-ink/10 bg-white p-6 shadow-[0_18px_50px_-24px_rgba(6,63,152,0.28)] md:p-7">
      <p className="font-serif text-2xl text-royal-deep">Send an Enquiry</p>
      <p className="mt-1 text-sm text-ink/55">Fill this in and we&apos;ll come back with a plan.</p>
      <div className="mt-5 h-px w-full bg-ink/10" />

      <div className="mt-5 grid gap-3.5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="f-name">Name</label>
          <input id="f-name" required className={field} value={form.name} onChange={set("name")} />
        </div>
        <div>
          <label className={label} htmlFor="f-phone">Phone</label>
          <input id="f-phone" required type="tel" className={field} value={form.phone} onChange={set("phone")} />
        </div>
        <div>
          <label className={label} htmlFor="f-email">Email</label>
          <input id="f-email" type="email" className={field} value={form.email} onChange={set("email")} />
        </div>
        <div>
          <label className={label} htmlFor="f-date">Travel date</label>
          <input id="f-date" type="date" className={field} value={form.date} onChange={set("date")} />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="f-trav">Travellers</label>
          <input id="f-trav" type="number" min="1" className={field} value={form.travellers} onChange={set("travellers")} />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="f-msg">Message</label>
          <textarea
            id="f-msg"
            rows={3}
            className="w-full rounded-lg border border-ink/15 bg-soft px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-royal focus:bg-white focus:ring-2 focus:ring-royal/15"
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
      ) : null}
    </form>
  );
}
