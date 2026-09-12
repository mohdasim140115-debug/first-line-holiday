"use client";

import { useEffect, useId, useState } from "react";
import Icon from "./Icon";
import { submitEnquiry } from "@/lib/submitEnquiry";
import { ENQUIRY_EVENT } from "@/lib/enquiryBus";

const initial = { name: "", phone: "", email: "", travellers: "", date: "", message: "" };

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

    // Auto-open once per session, on the visitor's first scroll (never during
    // a no-scroll audit, and it doesn't interrupt someone still reading).
    let armed = false;
    let graceTimer;
    let seen = true;
    try {
      seen = !!sessionStorage.getItem("flh_enquiry_shown");
    } catch {}

    const trigger = () => {
      cleanupAuto();
      setOpen((current) => {
        if (current) return current;
        try {
          sessionStorage.setItem("flh_enquiry_shown", "1");
        } catch {}
        return true;
      });
    };
    const onFirstScroll = () => {
      if (armed) trigger();
    };
    function cleanupAuto() {
      window.removeEventListener("scroll", onFirstScroll);
      if (graceTimer) clearTimeout(graceTimer);
    }

    if (!seen) {
      graceTimer = setTimeout(() => {
        armed = true;
      }, 800);
      window.addEventListener("scroll", onFirstScroll, { passive: true });
    }

    return () => {
      window.removeEventListener(ENQUIRY_EVENT, onOpen);
      cleanupAuto();
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
    if (status === "sending") return;
    setStatus("sending");
    setError("");
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
    "h-9 w-full rounded-lg border border-ink/12 bg-soft pl-8 pr-2.5 text-[0.85rem] text-ink outline-none transition placeholder:text-ink/40 focus:border-royal focus:bg-white focus:ring-2 focus:ring-royal/15";
  const iconCls = "pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-royal/45";

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

      <div className="relative z-10 flex max-h-[90vh] w-full max-w-sm flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl">
        {/* Gradient header band */}
        <div className="relative shrink-0 bg-gradient-to-br from-royal to-royal-deep px-5 pb-3.5 pt-3.5 text-white">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-3 top-3 flex h-6.5 w-6.5 items-center justify-center rounded-full bg-white/15 text-white/90 transition-colors hover:bg-white/25"
          >
            <Icon name="close" className="h-3.5 w-3.5" />
          </button>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-0.5 text-[0.58rem] font-semibold uppercase tracking-wider text-white">
            {pkg ? <Icon name="tag" className="h-3 w-3" /> : <Icon name="sparkle" className="h-3 w-3" />}
            {pkg || "Plan with local experts"}
          </span>

          <p id={`${uid}-title`} className="mt-1.5 font-serif text-base leading-tight">
            Plan Your Kashmir Trip
          </p>
        </div>

        {/* Body */}
        <form onSubmit={submit} className="flex-1 overflow-y-auto px-5 pb-4 pt-3.5">
          <p className="text-[0.74rem] leading-snug text-ink/50">
            Get a free customized Kashmir itinerary — usually within the hour.
          </p>

          <div className="mt-3 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <Icon name="user" className={iconCls} />
                <input
                  aria-label="Full name"
                  required
                  placeholder="Full name"
                  className={field}
                  value={form.name}
                  onChange={set("name")}
                />
              </div>
              <div className="relative">
                <Icon name="phone" className={iconCls} />
                <input
                  aria-label="WhatsApp number"
                  required
                  type="tel"
                  inputMode="tel"
                  placeholder="WhatsApp"
                  className={field}
                  value={form.phone}
                  onChange={set("phone")}
                />
              </div>
            </div>

            <div className="relative">
              <Icon name="mail" className={iconCls} />
              <input
                aria-label="Email"
                type="email"
                placeholder="Email address"
                className={field}
                value={form.email}
                onChange={set("email")}
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="relative">
                <Icon name="users" className={iconCls} />
                <input
                  aria-label="Travellers"
                  type="number"
                  min="1"
                  placeholder="Travellers"
                  className={field}
                  value={form.travellers}
                  onChange={set("travellers")}
                />
              </div>
              <div className="relative">
                <Icon name="calendar" className={iconCls} />
                <input
                  aria-label="Travel date"
                  type="date"
                  className={`${field} pr-1.5`}
                  value={form.date}
                  onChange={set("date")}
                />
              </div>
            </div>

            <textarea
              aria-label="Message"
              rows={2}
              placeholder="Anything else we should know? (optional)"
              className="w-full rounded-lg border border-ink/12 bg-soft px-2.5 py-2 text-[0.85rem] text-ink outline-none transition placeholder:text-ink/40 focus:border-royal focus:bg-white focus:ring-2 focus:ring-royal/15"
              value={form.message}
              onChange={set("message")}
            />
          </div>

          {status === "error" ? (
            <p className="mt-2 text-center text-xs text-brand-red">{error}</p>
          ) : null}

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-red px-6 py-2.5 text-[0.85rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? "Sending…" : "Get My Free Kashmir Quote"}
            {status !== "sending" ? <Icon name="arrow" className="h-3.5 w-3.5" /> : null}
          </button>

          <p className="mt-2 flex items-center justify-center gap-3 text-[0.62rem] font-medium uppercase tracking-wider text-ink/40">
            <span className="inline-flex items-center gap-1">
              <Icon name="shield" className="h-3 w-3" /> Secure
            </span>
            <span className="inline-flex items-center gap-1">
              <Icon name="bolt" className="h-3 w-3 text-brand-orange" /> Fast response
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
