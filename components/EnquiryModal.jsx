"use client";

import { useEffect, useId, useState } from "react";
import Icon from "./Icon";
import { submitEnquiry } from "@/lib/submitEnquiry";
import { ENQUIRY_EVENT } from "@/lib/enquiryBus";

const initial = { name: "", phone: "", email: "", date: "", travellers: "", message: "" };

export default function EnquiryModal() {
  const uid = useId();
  const [open, setOpen] = useState(false);
  const [pkg, setPkg] = useState("");
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const [error, setError] = useState("");

  useEffect(() => {
    const onOpen = (e) => {
      setPkg(e.detail?.package || "");
      setForm(initial);
      setStatus("idle");
      setError("");
      setOpen(true);
    };
    window.addEventListener(ENQUIRY_EVENT, onOpen);
    return () => window.removeEventListener(ENQUIRY_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitEnquiry({
        ...form,
        package: pkg,
        source: pkg ? `Package enquiry — ${pkg}` : "Enquiry popup",
      });
      window.location.href = "/thank-you";
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  const field =
    "h-11 w-full rounded-lg border border-ink/15 bg-soft px-3.5 text-sm text-ink outline-none transition focus:border-royal focus:bg-white focus:ring-2 focus:ring-royal/15";
  const label = "mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-widest text-ink/50";

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${uid}-title`}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-royal-deep/65 backdrop-blur-sm"
      />

      <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl md:p-7">
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-ink/50 transition-colors hover:bg-ink/5 hover:text-ink"
        >
          <Icon name="close" className="h-4 w-4" />
        </button>

        <p id={`${uid}-title`} className="font-serif text-2xl text-royal-deep">
          Send an Enquiry
        </p>
        {pkg ? (
          <p className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-royal/8 px-3 py-1 text-[0.78rem] font-medium text-royal">
            <Icon name="tag" className="h-3.5 w-3.5" />
            {pkg}
          </p>
        ) : (
          <p className="mt-1 text-sm text-ink/55">We usually reply the same day.</p>
        )}
        <div className="mt-4 h-px w-full bg-ink/10" />

        <form onSubmit={submit} className="mt-4 grid gap-3.5 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor={`${uid}-name`}>Name</label>
            <input id={`${uid}-name`} required className={field} value={form.name} onChange={set("name")} />
          </div>
          <div>
            <label className={label} htmlFor={`${uid}-phone`}>Phone</label>
            <input id={`${uid}-phone`} required type="tel" className={field} value={form.phone} onChange={set("phone")} />
          </div>
          <div>
            <label className={label} htmlFor={`${uid}-email`}>Email</label>
            <input id={`${uid}-email`} type="email" className={field} value={form.email} onChange={set("email")} />
          </div>
          <div>
            <label className={label} htmlFor={`${uid}-date`}>Travel date</label>
            <input id={`${uid}-date`} type="date" className={field} value={form.date} onChange={set("date")} />
          </div>
          <div className="sm:col-span-2">
            <label className={label} htmlFor={`${uid}-trav`}>Travellers</label>
            <input id={`${uid}-trav`} type="number" min="1" className={field} value={form.travellers} onChange={set("travellers")} />
          </div>
          <div className="sm:col-span-2">
            <label className={label} htmlFor={`${uid}-msg`}>Message</label>
            <textarea
              id={`${uid}-msg`}
              rows={3}
              className="w-full rounded-lg border border-ink/15 bg-soft px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-royal focus:bg-white focus:ring-2 focus:ring-royal/15"
              value={form.message}
              onChange={set("message")}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
          >
            {status === "sending" ? "Sending…" : "Send Enquiry"}
            {status !== "sending" ? <Icon name="arrow" className="h-4 w-4" /> : null}
          </button>

          {status === "error" ? (
            <p className="text-center text-xs text-brand-red sm:col-span-2">{error}</p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
