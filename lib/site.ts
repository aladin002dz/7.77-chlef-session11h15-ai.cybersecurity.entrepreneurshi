import type { Locale } from "./content/types";

/** Public URL of the deployed GitHub Pages preview (see README.md). */
export const LIVE_PREVIEW_URL =
  "https://mahfoudh.dev/7.77-chlef-session11h15-ai.cybersecurity.entrepreneurshi/";

/** Human name for the site, used in Open Graph `site_name` and JSON-LD. */
export const SITE_NAME = "Programme 7.77 · Skills Center Mobilis Chlef";

/** Route segment (relative to {@link LIVE_PREVIEW_URL}) that serves each locale. */
export const LOCALE_PATH: Record<Locale, string> = {
  fr: "",
  en: "en/",
  ar: "ar/",
};

/** BCP 47 / Open Graph locale tag for each site locale. */
export const OG_LOCALE: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_US",
  ar: "ar_DZ",
};

/** The default locale served with no path prefix (`/`). */
export const DEFAULT_LOCALE: Locale = "fr";

/** Absolute, canonical URL for a given locale's page. */
export function localeUrl(locale: Locale): string {
  return new URL(LOCALE_PATH[locale], LIVE_PREVIEW_URL).toString();
}

/**
 * Absolute URL for a static file under `public/`, resolved against the
 * deployed GitHub Pages path (`LIVE_PREVIEW_URL`). Metadata fields (icons,
 * Open Graph/Twitter images) must use this instead of a root-relative
 * string like "/favicon.svg": Next does not rewrite plain metadata strings
 * with `basePath`, so a root-relative href 404s once the site is served
 * from a sub-path.
 */
export function siteAsset(path: string): string {
  return new URL(path, LIVE_PREVIEW_URL).toString();
}
