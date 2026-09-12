import type { Metadata } from "next";
import Link from "next/link";
import RootDocument from "@/components/RootDocument";
import "./globals.css";

// Top-level 404 for any URL outside the three locale route groups
// ((fr)/, (en)/en/, (ar)/ar/). Required because those groups each define
// their own root layout instead of sharing app/layout.tsx — see
// https://nextjs.org/docs/app/building-your-application/routing/route-groups
export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <RootDocument locale="fr" dir="ltr">
      <main className="flex h-dvh w-full flex-col items-center justify-center gap-4 bg-gray-950 px-6 text-center text-gray-100">
        <p className="text-sm font-medium tracking-wide text-violet-400 uppercase">
          404
        </p>
        <h1 className="text-2xl font-semibold">Page introuvable</h1>
        <p className="max-w-sm text-sm text-gray-400">
          Cette page n&rsquo;existe pas. Retournez aux diapositives de
          l&rsquo;atelier.
        </p>
        <Link
          href="/"
          className="mt-2 rounded-full border border-white/15 px-4 py-2 text-sm text-gray-200 transition hover:border-white/30 hover:bg-white/5"
        >
          Retour à l&rsquo;accueil
        </Link>
      </main>
    </RootDocument>
  );
}
