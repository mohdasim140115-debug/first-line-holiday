import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}) {
  const alignCls = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <Reveal className={`flex flex-col ${alignCls} max-w-2xl`}>
      {eyebrow ? (
        <span
          className={`eyebrow mb-4 inline-flex items-center gap-2 ${
            light ? "text-brand-orange" : "text-brand-red"
          }`}
        >
          <span className="h-px w-8 bg-current" />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`font-serif text-2xl leading-[1.15] sm:text-[2.1rem] md:text-[2.45rem] ${
          light ? "text-white" : "text-royal-deep"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/75" : "text-ink/65"}`}>
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
