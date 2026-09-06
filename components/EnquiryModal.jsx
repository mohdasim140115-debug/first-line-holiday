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
      try {
        sessionStorage.setItem("flh_enquiry_shown", "1");
      } catch {}
    };
    window.addEventListener(ENQUIRY_EVENT, onOpen);

    // Auto-open once per browser session, a moment after the page loads.
    let timer;
    try {
      if (!sessionStorage.getItem("flh_enquiry_shown")) {
        timer = setTimeout(() => {
          setOpen((current) => {
            if (current) return current;
            try {
              sessionStorage.setItem("flh_enquiry_shown", "1");
            } catch {}
            return true;
          });
        }, 3500);
      }
    } catch {}

    return () => {
      window.removeEventListener(ENQUIRY_EVENT, onOpen);
      if (timer) clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
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
    "h-10 w-full rounded-lg border border-ink/15 bg-white px-3 text-sm text-ink outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/15";
  const label = "mb-1 block text-[0.68rem] font-semibold uppercase tracking-widest text-ink/45";

  return (
    <div
      className="fixed inset-0 z-100 flex items-end justify-center sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${uid}-title`}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-royal-deep/80"
      />

      <div className="relative z-10 flex max-h-[92vh] w-full max-w-md flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-ink/10 px-5 py-4">
          <div>
            <p id={`${uid}-title`} className="font-serif text-xl text-royal-deep">
              Send an Enquiry
            </p>
            {pkg ? (
              <p className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-royal/8 px-2.5 py-0.5 text-[0.72rem] font-medium text-royal">
                <Icon name="tag" className="h-3 w-3" />
                {pkg}
              </p>
            ) : (
              <p className="mt-0.5 text-[0.8rem] text-ink/50">We usually reply the same day.</p>
            )}
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="-mr-1 -mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink/40 transition-colors hover:bg-ink/5 hover:text-ink"
          >
            <Icon name="close" className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={submit} className="flex-1 overflow-y-auto px-5 py-4">
          <div className="grid gap-3 sm:grid-cols-2">
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
              <input id={`${uid}-trav`} type="number" min="1" placeholder="2" className={field} value={form.travellers} onChange={set("travellers")} />
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor={`${uid}-msg`}>Message</label>
              <textarea
                id={`${uid}-msg`}
                rows={3}
                placeholder="Tell us what you're planning…"
                className="w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm text-ink outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/15"
                value={form.message}
                onChange={set("message")}
              />
            </div>
          </div>

          {status === "error" ? (
            <p className="mt-3 text-center text-xs text-brand-red">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? "Sending…" : "Send Enquiry"}
            {status !== "sending" ? <Icon name="arrow" className="h-4 w-4" /> : null}
          </button>

          <p className="mt-2.5 text-center text-[0.7rem] text-ink/40">
            Your details are only used to plan your trip.
          </p>
        </form>
      </div>
    </div>
  );
}
