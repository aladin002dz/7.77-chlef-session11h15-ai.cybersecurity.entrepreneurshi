import type { Metadata, Viewport } from "next";
import RootDocument from "@/components/RootDocument";
import { baseMetadata } from "@/lib/metadata";
import "../globals.css";

// Root layout for the Arabic locale ("/", RTL), the site's default
// language — see app/(en)/layout.tsx and app/(fr)/layout.tsx for the
// other two.
export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030712",
};

export default function ArRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <RootDocument locale="ar" dir="rtl">
      {children}
    </RootDocument>
  );
}
