import Image from "next/image";

export default function Logo({ variant = "color", className = "" }) {
  // `variant="light"` renders the logo on dark backgrounds using a CSS filter,
  // keeping the official artwork itself untouched.
  return (
    <Image
      src="/logo/first-line-holidays.svg"
      alt="First Line Holidays"
      width={200}
      height={56}
      priority
      className={`h-10 w-auto md:h-11 ${
        variant === "light" ? "brightness-0 invert" : ""
      } ${className}`}
    />
  );
}
