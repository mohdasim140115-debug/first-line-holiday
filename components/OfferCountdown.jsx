"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { heroOffer } from "@/lib/content";

const KEY = "flh_offer_deadline";

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function OfferCountdown() {
  const [left, setLeft] = useState(null); // ms remaining, or null before mount

  useEffect(() => {
    const total = heroOffer.durationHours * 60 * 60 * 1000;
    let deadline;
    try {
      const saved = Number(sessionStorage.getItem(KEY));
      deadline = saved && saved > Date.now() ? saved : Date.now() + total;
      sessionStorage.setItem(KEY, String(deadline));
    } catch {
      deadline = Date.now() + total;
    }

    const tick = () => setLeft(Math.max(0, deadline - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const s = Math.floor((left ?? 0) / 1000);
  const hh = Math.floor(s / 3600);
  const mm = Math.floor((s % 3600) / 60);
  const ss = s % 60;

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-white/85 backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
        {heroOffer.label}
        <span className="tabular-nums font-bold text-white" suppressHydrationWarning>
          {left === null ? "--:--:--" : `${pad(hh)}:${pad(mm)}:${pad(ss)}`}
        </span>
      </span>

      {heroOffer.badge ? (
        <span className="inline-flex items-center gap-1 rounded-full bg-brand-red px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-white shadow">
          <Icon name="bolt" className="h-3 w-3" />
          {heroOffer.badge}
        </span>
      ) : null}
    </div>
  );
}
