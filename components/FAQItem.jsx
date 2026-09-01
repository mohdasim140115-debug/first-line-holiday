"use client";

import Icon from "./Icon";

export default function FAQItem({ faq, open, onToggle, id }) {
  return (
    <div className="border-b border-ink/12">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-panel-${id}`}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="text-[0.95rem] font-medium text-royal-deep">{faq.q}</span>
          <Icon
            name="chevron"
            className={`h-5 w-5 shrink-0 text-brand-red transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>
      <div
        id={`faq-panel-${id}`}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <p className="pb-5 pr-8 text-sm leading-relaxed text-ink/65">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}
