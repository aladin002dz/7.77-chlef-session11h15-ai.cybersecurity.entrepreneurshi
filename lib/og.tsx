/**
 * Shared Open Graph card, reused by each locale's `opengraph-image.tsx`.
 *
 * Deliberately locale-agnostic: it carries only the brand mark and the
 * (untranslated) programme name, never deck-specific copy. `ImageResponse`
 * renders with a bundled Latin-only font and no network access at build
 * time, so any Arabic text baked into the raster would render as tofu —
 * the real localized title/description already reach crawlers as plain
 * `<meta>` text (see `lib/metadata.ts`), which is what matters for SEO.
 */
export const OG_SIZE = { width: 1200, height: 630 };

export function ogImageElement() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        background: "#030712",
        backgroundImage:
          "radial-gradient(circle at 50% 40%, rgba(139,92,246,0.35), rgba(3,7,18,0) 60%)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: 168,
          height: 168,
          borderRadius: 999,
          background: "linear-gradient(135deg, #8b5cf6, #0ea5e9, #10b981)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 148,
            height: 148,
            borderRadius: 999,
            background: "#030712",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 56,
          fontWeight: 700,
          color: "#f3f4f6",
          letterSpacing: -1,
        }}
      >
        Programme 7.77
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 30,
          color: "#9ca3af",
        }}
      >
        Skills Center Mobilis Chlef
      </div>
    </div>
  );
}
