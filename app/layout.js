import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://firstlineholidays.example"),
  title: "First Line Holidays | Kashmir Travel & Holiday Packages",
  description:
    "Discover Kashmir with First Line Holidays. Explore personalized Kashmir holiday packages, beautiful destinations, comfortable stays and unforgettable travel experiences.",
  keywords: [
    "Kashmir travel",
    "Kashmir holiday packages",
    "Srinagar tour",
    "Gulmarg",
    "Pahalgam",
    "First Line Holidays",
  ],
  authors: [{ name: "First Line Holidays" }],
  openGraph: {
    title: "First Line Holidays | Kashmir Travel & Holiday Packages",
    description:
      "Personalized Kashmir holiday packages, beautiful destinations, comfortable stays and unforgettable travel experiences.",
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
      <body>{children}</body>
    </html>
  );
}
