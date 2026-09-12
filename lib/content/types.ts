export type Locale = "fr" | "en" | "ar";

/** One visual line inside the body of a content slide. */
export interface SlideLine {
  /** How the line is prefixed. */
  marker?: "bullet" | "number" | "quote" | "none";
  /** Only used with marker "number". */
  number?: number;
  /** Indentation level (0 = top level, 1 = nested under the previous line). */
  indent?: 0 | 1;
  /** Bold lead-in, e.g. "Règle absolue :" */
  bold?: string;
  /** Regular text following the bold lead-in (or the whole line if no bold). */
  text?: string;
}

export interface TitleSlide {
  type: "title";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  speaker?: string;
}

export interface BlockSlide {
  type: "block";
  label: string;
  title: string;
}

export interface ContentSlide {
  type: "content";
  eyebrow?: string;
  title: string;
  lines: SlideLine[];
}

export interface ClosingSlide {
  type: "closing";
  title: string;
  message: string;
  items: { label: string; value: string }[];
}

export type Slide = TitleSlide | BlockSlide | ContentSlide | ClosingSlide;

export interface UiStrings {
  langName: string;
  prev: string;
  next: string;
  switchLanguage: string;
  swipeHint: string;
  keyboardHint: string;
  home: string;
  fullscreen: string;
  exitFullscreen: string;
  scanToOpen: string;
}

export interface Deck {
  locale: Locale;
  dir: "ltr" | "rtl";
  meta: {
    title: string;
    description: string;
  };
  ui: UiStrings;
  slides: Slide[];
}
