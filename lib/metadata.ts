import type { Metadata } from "next";
import type { Deck } from "./content/types";
import { locales } from "./content";
import {
  DEFAULT_LOCALE,
  LIVE_PREVIEW_URL,
  OG_LOCALE,
  SITE_NAME,
  localeUrl,
} from "./site";

/**
 * Base metadata shared by every locale's root layout: resolves relative
 * URLs (Open Graph images, canonical links) against the live site, and
 * carries the icon/robots defaults common to all three pages.
 */
export const baseMetadata: Metadata = {
  metadataBase: new URL(LIVE_PREVIEW_URL),
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

/**
 * Full per-page metadata for a locale: title, description, canonical URL,
 * hreflang alternates (incl. `x-default`), Open Graph and Twitter Card.
 * The matching `opengraph-image` route colocated with each locale's page
 * is picked up automatically by Next and merged into `openGraph.images`.
 */
export function buildMetadata(deck: Deck): Metadata {
  const { locale, meta } = deck;
  const url = localeUrl(locale);

  const languages: Record<string, string> = { "x-default": localeUrl(DEFAULT_LOCALE) };
  for (const l of locales) languages[l] = localeUrl(l);

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url, languages },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: SITE_NAME,
      locale: OG_LOCALE[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}
