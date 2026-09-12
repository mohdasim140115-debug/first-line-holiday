import { Playfair_Display, Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

// Google Tag Manager container. Loads on every route via the root layout.
const GTM_ID = "GTM-PXS376DH";

// Playfair is only used for headings. One weight = one small file, and it is
// NOT preloaded so it never races the hero (LCP) image — it swaps in from the
// inlined CSS a moment later. `adjustFontFallback` keeps CLS at 0.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal"],
  variable: "--font-playfair",
  display: "swap",
  preload: false,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

// Inter is the body/UI font — preload it so first paint text is right.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// Production domain — update if it ever changes.
const SITE_URL = "https://www.firstlineholidays.in";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Kashmir Tour Packages & Holiday Trips | First Line Holidays",
  description:
    "Book Kashmir tour packages with First Line Holidays — Kashmir trip packages for couples, families and groups. Personalised Kashmir holidays with comfortable stays, transport and local expertise.",
  applicationName: "First Line Holidays",
  keywords: [
    "kashmir tour packages",
    "kashmir trip",
    "kashmir holidays",
    "kashmir package",
    "kashmir trip package",
    "kashmir holiday packages",
    "srinagar tour packages",
    "kashmir tour packages for family",
    "kashmir tour packages for couple",
    "First Line Holidays",
  ],
  authors: [{ name: "First Line Holidays" }],
  creator: "First Line Holidays",
  publisher: "First Line Holidays",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Kashmir Tour Packages & Holiday Trips | First Line Holidays",
    description:
      "Kashmir tour packages and trip packages for couples, families and groups — personalised Kashmir holidays planned around you.",
    url: "/",
    type: "website",
    locale: "en_IN",
    siteName: "First Line Holidays",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashmir Tour Packages & Holiday Trips | First Line Holidays",
    description:
      "Kashmir tour packages and trip packages for couples, families and groups — personalised Kashmir holidays.",
  },
};

export const viewport = {
  themeColor: "#063F98",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <GoogleTagManager gtmId={GTM_ID} />
      <body>
        {/* Google Tag Manager (noscript) — immediately after the opening body tag */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
