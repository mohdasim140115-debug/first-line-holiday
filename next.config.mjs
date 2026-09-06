import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
  // Inline the (small, atomic) Tailwind CSS into <head> so first-time visitors
  // don't pay a render-blocking stylesheet round-trip.
  experimental: {
    inlineCss: true,
  },
  images: {
    // WebP: good compression, cheap decode (AVIF decode was spiking desktop TBT).
    formats: ["image/webp"],
    // Allowed <Image quality> values (Next 16 requires an allowlist).
    qualities: [60, 68, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
