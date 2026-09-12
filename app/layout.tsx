import type { Metadata, Viewport } from "next";
import { inter, notoSansArabic } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "IA, Cybersécurité & Entrepreneuriat Digital",
  description:
    "Diapositives interactives de l'atelier — Programme 7.77, Skills Center Mobilis Chlef.",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#030712",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${notoSansArabic.variable}`}>
      <body>{children}</body>
    </html>
  );
}
