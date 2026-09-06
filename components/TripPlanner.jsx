"use client";

import { useId, useState } from "react";
import Icon from "./Icon";
import { submitEnquiry } from "@/lib/submitEnquiry";
import { destinationOptions, tripTypes } from "@/lib/content";

const travellerOptions = ["1 Traveller", "2 Travellers", "3–4 Travellers", "5+ Travellers"];

export default function TripPlanner() {
  const uid = useId();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    destination: "",
    date: "",
    travellers: "2 Travellers",
    tripType: "Couples",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      await submitEnquiry({ ...form, source: "Hero trip planner" });
      window.location.href = "/thank-you";
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong.");
    }
  };

  const base =
    "h-11 w-full rounded-lg border border-white/20 bg-white/10 px-3.5 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-white/60 focus:bg-white/15";
  const label = "mb-1.5 block text-[0.68rem] font-semibold uppercase tracking-wider text-white/60";

  const Select = ({ id, value, onChange, children }) => (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={`${base} appearance-none pr-9 [&>option]:text-ink`}
      >
        {children}
      </select>
      <Icon
        name="chevron"
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60"
      />
    </div>
  );

  return (
    <form
      onSubmit={submit}
      className="w-full rounded-2xl border border-white/15 bg-royal-deep/92 p-5 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.6)] md:p-6"
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="h-px w-8 bg-brand-red" />
        <span className="eyebrow text-brand-orange">Plan Your Trip</span>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor={`${uid}-name`}>Name</label>
          <input id={`${uid}-name`} required className={base} value={form.name} onChange={set("name")} />
        </div>
        <div>
          <label className={label} htmlFor={`${uid}-phone`}>Phone</label>
          <input id={`${uid}-phone`} required type="tel" inputMode="tel" className={base} value={form.phone} onChange={set("phone")} />
        </div>

        <div className="sm:col-span-2">
          <label className={label} htmlFor={`${uid}-dest`}>Where do you want to go?</label>
          <input
            id={`${uid}-dest`}
            list={`${uid}-dest-list`}
            placeholder="Type or pick a destination"
            className={base}
            value={form.destination}
            onChange={set("destination")}
          />
          <datalist id={`${uid}-dest-list`}>
            {destinationOptions.map((d) => (
              <option key={d} value={d} />
            ))}
          </datalist>
        </div>

        <div>
          <label className={label} htmlFor={`${uid}-date`}>Travel date</label>
          <input
            id={`${uid}-date`}
            type="date"
            className={`${base} [color-scheme:dark]`}
            value={form.date}
            onChange={set("date")}
          />
        </div>
        <div>
          <label className={label} htmlFor={`${uid}-trav`}>Travellers</label>
          <Select id={`${uid}-trav`} value={form.travellers} onChange={set("travellers")}>
            {travellerOptions.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </Select>
        </div>

        <div className="sm:col-span-2">
          <label className={label} htmlFor={`${uid}-type`}>Trip type</label>
          <Select id={`${uid}-type`} value={form.tripType} onChange={set("tripType")}>
            {tripTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </Select>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Plan My Trip"}
        {status !== "sending" ? <Icon name="arrow" className="h-4 w-4" /> : null}
      </button>

      {status === "error" ? (
        <p className="mt-3 text-center text-xs text-brand-orange">{error}</p>
      ) : null}
    </form>
  );
}
