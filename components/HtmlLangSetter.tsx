"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/content";

/**
 * The root layout only renders a single <html> tag, so it can't know in
 * advance which locale route is being served. This tiny client component
 * patches `lang` / `dir` on the document element once the matching locale
 * page mounts, so screen readers and RTL layout still get it right.
 */
export default function HtmlLangSetter({
  locale,
  dir,
}: {
  locale: Locale;
  dir: "ltr" | "rtl";
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  return null;
}
