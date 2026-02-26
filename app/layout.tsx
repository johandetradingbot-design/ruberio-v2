import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "RUBERIO — High-End Webdesign Bureau Brabant",
  description:
    "Geen templates. Geen excuses. Ruberio bouwt high-end websites die converteren. Webdesign bureau gevestigd in Brabant.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "RUBERIO",
  description:
    "Geen templates. Geen excuses. Ruberio bouwt high-end websites die converteren.",
  areaServed: "Brabant, Nederland",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Noord-Brabant",
    addressCountry: "NL",
  },
  url: "https://ruberio.nl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${syne.variable} ${jetBrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-black text-white antialiased font-mono">
        <CustomCursor />
        <Nav />
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
