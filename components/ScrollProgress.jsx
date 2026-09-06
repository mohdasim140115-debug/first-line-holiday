"use client";

import { useEffect, useRef } from "react";

// Writes the scroll percentage straight to a CSS var via rAF — no React
// re-renders per scroll event.
export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
      <div
        ref={barRef}
        className="h-full w-0 bg-gradient-to-r from-brand-red to-brand-orange"
      />
    </div>
  );
}
