import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
  images: {
    // WebP only — AVIF decode was spiking Total Blocking Time on desktop.
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
