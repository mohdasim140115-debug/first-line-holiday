import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

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
  title: "First Line Holidays | Kashmir Travel & Holiday Packages",
  description:
    "Discover Kashmir with First Line Holidays. Explore personalized Kashmir holiday packages, beautiful destinations, comfortable stays and unforgettable travel experiences.",
  applicationName: "First Line Holidays",
  keywords: [
    "Kashmir travel",
    "Kashmir holiday packages",
    "Srinagar tour",
    "Gulmarg",
    "Pahalgam",
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
    title: "First Line Holidays | Kashmir Travel & Holiday Packages",
    description:
      "Personalized Kashmir holiday packages, beautiful destinations, comfortable stays and unforgettable travel experiences.",
    url: "/",
    type: "website",
    locale: "en_IN",
    siteName: "First Line Holidays",
  },
  twitter: {
    card: "summary_large_image",
    title: "First Line Holidays | Kashmir Travel & Holiday Packages",
    description:
      "Personalized Kashmir holiday packages, beautiful destinations and comfortable stays.",
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
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
