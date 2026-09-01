"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { nav } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-white shadow-[0_8px_30px_rgba(6,63,152,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[72px] lg:px-8">
        <a href="#home" aria-label="First Line Holidays — home" className="flex items-center">
          <Logo variant={solid ? "color" : "light"} />
        </a>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`group relative text-[0.82rem] font-medium tracking-wide transition-colors ${
                    solid ? "text-royal hover:text-brand-red" : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-brand-red transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-brand-red px-5 py-2.5 text-[0.8rem] font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex"
          >
            Plan Your Trip
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
              solid ? "text-royal" : "text-white"
            }`}
          >
            <Icon name={open ? "arrow" : "route"} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`grid overflow-hidden bg-white transition-[grid-template-rows] duration-500 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav className="border-t border-ink/10 px-5 py-4" aria-label="Mobile">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-ink/5 py-3.5 text-sm font-medium text-royal"
                  >
                    {item.label}
                    <Icon name="arrow" className="h-4 w-4 text-brand-red" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex w-full items-center justify-center rounded-full bg-brand-red px-5 py-3 text-sm font-semibold text-white"
            >
              Plan Your Trip
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
