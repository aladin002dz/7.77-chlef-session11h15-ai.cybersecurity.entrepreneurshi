import type { Slide } from "@/lib/content";

export type Accent = "brand" | "ai" | "cyber" | "biz";

const ACCENT_CLASSES: Record<
  Accent,
  { text: string; border: string; bg: string; ring: string; glow: string }
> = {
  brand: {
    text: "text-violet-400",
    border: "border-violet-400/40",
    bg: "bg-violet-500/10",
    ring: "bg-violet-500",
    glow: "from-violet-600/20",
  },
  ai: {
    text: "text-sky-400",
    border: "border-sky-400/40",
    bg: "bg-sky-500/10",
    ring: "bg-sky-500",
    glow: "from-sky-600/20",
  },
  cyber: {
    text: "text-rose-400",
    border: "border-rose-400/40",
    bg: "bg-rose-500/10",
    ring: "bg-rose-500",
    glow: "from-rose-600/20",
  },
  biz: {
    text: "text-emerald-400",
    border: "border-emerald-400/40",
    bg: "bg-emerald-500/10",
    ring: "bg-emerald-500",
    glow: "from-emerald-600/20",
  },
};

export function accentClasses(accent: Accent) {
  return ACCENT_CLASSES[accent];
}

/**
 * Slides don't carry a locale-specific "section" field (block titles are
 * translated text), so the accent is derived purely from position: how many
 * "block" divider slides have appeared before this index. Order and count
 * of slides is identical across every locale.
 */
export function getAccent(slides: Slide[], index: number): Accent {
  const current = slides[index];
  if (current?.type === "title" || current?.type === "closing") {
    return "brand";
  }

  let blockCount = 0;
  for (let i = 0; i <= index; i++) {
    if (slides[i]?.type === "block") blockCount++;
  }

  switch (blockCount) {
    case 1:
      return "ai";
    case 2:
      return "cyber";
    case 3:
      return "biz";
    default:
      return "brand";
  }
}
