import type { Metadata } from "next";
import Link from "next/link";
import RootDocument from "@/components/RootDocument";
import "./globals.css";

// Top-level 404 for any URL outside the three locale route groups
// ((ar)/, (en)/en/, (fr)/fr/). Required because those groups each define
// their own root layout instead of sharing app/layout.tsx — see
// https://nextjs.org/docs/app/building-your-application/routing/route-groups
// Rendered in the site's default language (Arabic, RTL) since it isn't
// scoped to any one locale route.
export const metadata: Metadata = {
  title: "الصفحة غير موجودة",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <RootDocument locale="ar" dir="rtl">
      <main className="flex h-dvh w-full flex-col items-center justify-center gap-4 bg-gray-950 px-6 text-center text-gray-100">
        <p className="text-sm font-medium tracking-wide text-violet-400 uppercase">
          404
        </p>
        <h1 className="text-2xl font-semibold">الصفحة غير موجودة</h1>
        <p className="max-w-sm text-sm text-gray-400">
          هذه الصفحة غير موجودة. عد إلى شرائح الورشة.
        </p>
        <Link
          href="/"
          className="mt-2 rounded-full border border-white/15 px-4 py-2 text-sm text-gray-200 transition hover:border-white/30 hover:bg-white/5"
        >
          العودة إلى الرئيسية
        </Link>
      </main>
    </RootDocument>
  );
}
