"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import FAQItem from "./FAQItem";
import { faqs } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState([0]);

  const toggle = (i) =>
    setOpen((cur) => {
      if (cur.includes(i)) return cur.filter((x) => x !== i);
      // allow up to two open at a time
      const next = [...cur, i];
      return next.slice(-2);
    });

  return (
    <section id="faq" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions, Answered" align="center" />
        <div className="mt-8">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.q}
              id={i}
              faq={faq}
              open={open.includes(i)}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
