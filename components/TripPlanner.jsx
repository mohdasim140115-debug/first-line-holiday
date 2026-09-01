"use client";

import { useState } from "react";
import Icon from "./Icon";
import { whatsappLink, destinationOptions, tripTypes } from "@/lib/content";

export default function TripPlanner() {
  const [form, setForm] = useState({
    destination: "",
    dates: "",
    travellers: "2 Travellers",
    tripType: "Couples",
  });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const msg = `Hello First Line Holidays, I'd like to plan a Kashmir trip.
Destination: ${form.destination || "Not sure yet"}
Travel dates: ${form.dates || "Flexible"}
Travellers: ${form.travellers}
Trip type: ${form.tripType}`;
    window.open(whatsappLink(msg), "_blank", "noopener");
  };

  const field =
    "w-full rounded-lg border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-white/50 focus:bg-white/15 [&>option]:text-ink";
  const label = "mb-1.5 block text-[0.68rem] font-semibold uppercase tracking-wider text-white/60";

  return (
    <form
      onSubmit={submit}
      className="w-full rounded-2xl border border-white/15 bg-royal-deep/70 p-5 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.6)] backdrop-blur-md md:p-6"
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="h-px w-8 bg-brand-red" />
        <span className="eyebrow text-brand-orange">Plan Your Trip</span>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={label} htmlFor="tp-dest">Where do you want to go?</label>
          <select id="tp-dest" className={field} value={form.destination} onChange={set("destination")}>
            <option value="">Select a destination</option>
            {destinationOptions.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="tp-dates">Travel dates</label>
          <input id="tp-dates" type="text" placeholder="e.g. 12–17 Oct" className={field} value={form.dates} onChange={set("dates")} />
        </div>
        <div>
          <label className={label} htmlFor="tp-trav">Travellers</label>
          <select id="tp-trav" className={field} value={form.travellers} onChange={set("travellers")}>
            {["1 Traveller", "2 Travellers", "3–4 Travellers", "5+ Travellers"].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="tp-type">Trip type</label>
          <select id="tp-type" className={field} value={form.tripType} onChange={set("tripType")}>
            {tripTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      >
        Plan My Trip
        <Icon name="arrow" className="h-4 w-4" />
      </button>
    </form>
  );
}
