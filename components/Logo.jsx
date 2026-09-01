import Image from "next/image";

export default function Logo({ className = "" }) {
  return (
    <Image
      src="/logo.jpeg"
      alt="First Line Holidays"
      width={249}
      height={100}
      priority
      className={`h-9 w-auto md:h-10 ${className}`}
    />
  );
}
