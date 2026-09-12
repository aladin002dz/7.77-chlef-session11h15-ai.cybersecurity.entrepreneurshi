import type { MetadataRoute } from "next";
import { locales } from "@/lib/content";
import { DEFAULT_LOCALE, localeUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {
    "x-default": localeUrl(DEFAULT_LOCALE),
    ...Object.fromEntries(locales.map((l) => [l, localeUrl(l)])),
  };
  // Static content — this build's date stands in for "last modified" since
  // Next's static export has no per-page source timestamp to read here.
  const lastModified = new Date();

  return locales.map((locale) => ({
    url: localeUrl(locale),
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "fr" ? 1 : 0.8,
    alternates: { languages },
  }));
}
