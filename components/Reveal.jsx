"use client";

import { useEffect, useRef, useState } from "react";

const VARIANT = {
  up: "",
  left: "rv-left",
  right: "rv-right",
  scale: "rv-scale",
  fade: "rv-fade",
  blur: "rv-blur",
};

export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  variant = "up",
  className = "",
  once = true,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`reveal ${VARIANT[variant] || ""} ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
