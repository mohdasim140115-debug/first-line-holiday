import Image from "next/image";

export default function Logo({ className = "" }) {
  return (
    <Image
      src="/logo1.png"
      alt="First Line Holidays"
      width={294}
      height={122}
      // Not the LCP element — no `priority`, so it isn't preloaded and doesn't
      // compete with the hero image. It's in the initial viewport so the
      // browser still fetches it right away.
      className={`h-11 w-auto md:h-13 ${className}`}
    />
  );
}
