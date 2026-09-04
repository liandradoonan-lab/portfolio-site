import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import Nav from "@/components/Nav";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  // opsz lets headings use Fraunces' display cut rather than its text cut —
  // sharper, higher-contrast letterforms at large sizes.
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: {
    default: "Liandra Doonan",
    template: "%s · Liandra Doonan",
  },
  description: "Portfolio of Liandra Doonan.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fraunces.variable}>
      <head>
        {/* Switzer — Fontshare CDN. See README for why this isn't Neue Montreal. */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        {/* If a second family is ever added, it needs its own link — Fontshare
            silently drops every f[] after the first. */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-dvh bg-ink text-beige">
        <MotionProvider>
          <Nav />
          <PageTransition>{children}</PageTransition>
        </MotionProvider>
      </body>
    </html>
  );
}
