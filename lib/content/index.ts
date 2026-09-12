import type { Deck, Locale } from "./types";
import fr from "./fr";
import en from "./en";
import ar from "./ar";

export const decks: Record<Locale, Deck> = { fr, en, ar };

export const locales: Locale[] = ["fr", "en", "ar"];

export function getDeck(locale: Locale): Deck {
  return decks[locale];
}

export * from "./types";
