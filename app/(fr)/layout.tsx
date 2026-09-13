import type { Metadata, Viewport } from "next";
import RootDocument from "@/components/RootDocument";
import { baseMetadata } from "@/lib/metadata";
import "../globals.css";

// Root layout for the French locale ("/fr") — see app/(en)/layout.tsx and
// app/(ar)/layout.tsx (the site's default language, served at "/") for
// the other two.
export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030712",
};

export default function FrRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <RootDocument locale="fr" dir="ltr">
      {children}
    </RootDocument>
  );
}
