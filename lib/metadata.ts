import type { Metadata } from "next";
import type { Deck } from "./content/types";
import { locales } from "./content";
import {
  DEFAULT_LOCALE,
  LIVE_PREVIEW_URL,
  OG_LOCALE,
  SITE_NAME,
  localeUrl,
  siteAsset,
} from "./site";

/**
 * Open Graph / Twitter Card image shared by all three locales — see
 * `scripts/generate-og-image.mjs` for how `public/og-image.png` is built
 * and why it must be a real `.png` file rather than a dynamic route.
 */
const OG_IMAGE = {
  url: siteAsset("og-image.png"),
  width: 1200,
  height: 630,
};

/**
 * Base metadata shared by every locale's root layout: resolves relative
 * URLs (Open Graph images, canonical links) against the live site, and
 * carries the icon/robots defaults common to all three pages.
 */
export const baseMetadata: Metadata = {
  metadataBase: new URL(LIVE_PREVIEW_URL),
  // A root-relative icon href isn't rewritten with `basePath` by Next, so
  // it must be spelled out as an absolute URL here (see `siteAsset`) —
  // otherwise it 404s once the site is served from a GitHub Pages sub-path.
  icons: { icon: siteAsset("favicon.svg") },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

/**
 * Full per-page metadata for a locale: title, description, canonical URL,
 * hreflang alternates (incl. `x-default`), Open Graph and Twitter Card.
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
      images: [{ ...OG_IMAGE, alt: meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE.url],
    },
  };
}
