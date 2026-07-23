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
  title: "RealisticGenetics — a Sims 4 mod by FoxMade",
  description:
    "A mod for The Sims 4 that makes babies inherit their looks from parents and grandparents — real dominant and recessive genetics for eyes, hair, skin and faces. Free, no other mods needed.",
  openGraph: {
    title: "RealisticGenetics — a Sims 4 mod by FoxMade",
    description:
      "Babies that actually look like their family. Real inheritance for The Sims 4.",
    type: "article",
    url: "https://foxmademods.com",
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
