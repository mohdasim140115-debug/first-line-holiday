import Image from "next/image";

export default function Logo({ className = "" }) {
  return (
    <Image
      src="/logo1.png"
      alt="First Line Holidays"
      width={294}
      height={122}
      priority
      className={`h-11 w-auto md:h-13 ${className}`}
    />
  );
}
