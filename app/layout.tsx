import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://foxmademods.com"),
  title: "Realistic Genetics — Sims 4 Genetics Mod with Grandparents & Recessive Traits",
  description:
    "A free Sims 4 genetics mod that inherits eye color, hair color, skin tone and facial features from the whole family tree — grandparents included. Recessive traits can skip a generation and come back. Works with existing legacy saves.",
  keywords: [
    "sims 4 genetics mod",
    "realistic genetics sims 4",
    "sims 4 recessive genes",
    "sims 4 grandparent genetics",
    "sims 4 inheritance mod",
    "sims 4 legacy mod",
    "sims 4 babies look like parents",
  ],
  alternates: { canonical: "https://foxmademods.com" },
  openGraph: {
    title: "Realistic Genetics — a Sims 4 genetics mod that remembers the whole family",
    description:
      "Eye color, hair color, skin tone and facial features inherited from parents AND grandparents, with recessive traits that skip generations. Free beta.",
    type: "article",
    url: "https://foxmademods.com",
    siteName: "FoxMade Mods",
  },
  twitter: {
    card: "summary_large_image",
    title: "Realistic Genetics — a Sims 4 genetics mod that remembers the whole family",
    description:
      "Inheritance from grandparents, recessive traits that skip generations. Free beta for The Sims 4.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c130f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
