import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  preload: true,
  variable: "--font-syne",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true,
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "RUBERIO — High-End Webdesign Bureau | Brabant",
  description:
    "Geen templates. Geen excuses. Ruberio bouwt high-end websites die converteren. Webdesign bureau gevestigd in Brabant.",
  robots: "index, follow",
  openGraph: {
    title: "RUBERIO — High-End Webdesign Bureau | Brabant",
    description: "Geen templates. Geen excuses. Ruberio bouwt high-end websites die converteren.",
    url: "https://ruberio.nl",
    type: "website",
    locale: "nl_NL",
  },
  alternates: {
    canonical: "https://ruberio.nl",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruberio",
  description: "High-end webdesign bureau gevestigd in Brabant",
  url: "https://ruberio.nl",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Brabant",
    addressCountry: "NL",
  },
  areaServed: "NL",
  serviceType: ["Webdesign", "SEO Content", "Website Onderhoud"],
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
        <header>
          <Nav />
        </header>
        <div className="noise-overlay" />
        {children}
        <footer className="sr-only">Ruberio webdesign bureau gevestigd in Brabant.</footer>
      </body>
    </html>
  );
}
