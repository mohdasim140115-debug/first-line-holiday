import { fileURLToPath } from "node:url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
  images: {
    // AVIF first (≈20-30% smaller than WebP for photos), WebP fallback.
    formats: ["image/avif", "image/webp"],
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
