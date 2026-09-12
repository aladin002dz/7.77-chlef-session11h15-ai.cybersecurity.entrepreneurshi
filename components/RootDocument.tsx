import { inter, notoSansArabic } from "@/lib/fonts";
import type { Locale } from "@/lib/content";

/**
 * The `<html>`/`<body>` shell shared by the three locale root layouts
 * (`app/(fr)`, `app/(en)`, `app/(ar)`). Each locale needs its own root
 * layout — not a single shared one — so that `lang`/`dir` are correct in
 * the static HTML from the first byte, instead of being patched in by
 * client-side JS after hydration (see git history for the previous
 * `HtmlLangSetter` approach).
 */
export default function RootDocument({
  locale,
  dir,
  children,
}: {
  locale: Locale;
  dir: "ltr" | "rtl";
  children: React.ReactNode;
}) {
  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${notoSansArabic.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
