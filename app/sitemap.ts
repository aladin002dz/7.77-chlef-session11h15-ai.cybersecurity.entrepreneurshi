import type { MetadataRoute } from "next";
import { locales } from "@/lib/content";
import { localeUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, localeUrl(l)]));

  return locales.map((locale) => ({
    url: localeUrl(locale),
    changeFrequency: "monthly",
    priority: locale === "fr" ? 1 : 0.8,
    alternates: { languages },
  }));
}
