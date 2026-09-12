"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Deck, Locale } from "@/lib/content";
import { locales } from "@/lib/content";
import { getAccent, accentClasses } from "@/lib/accent";
import { LIVE_PREVIEW_URL } from "@/lib/site";
import SlideView from "./SlideView";
import HtmlLangSetter from "./HtmlLangSetter";
import QrCode from "./QrCode";

const LOCALE_HREF: Record<Locale, string> = {
  fr: "/",
  en: "/en/",
  ar: "/ar/",
};

/** Minimum horizontal drag, in px, before a touch gesture counts as a swipe. */
const SWIPE_THRESHOLD = 45;

function slideIndexFromHash(total: number): number {
  if (typeof window === "undefined") return 0;
  const n = Number.parseInt(window.location.hash.replace("#", ""), 10);
  if (Number.isFinite(n) && n >= 1 && n <= total) return n - 1;
  return 0;
}

export default function Slideshow({ deck }: { deck: Deck }) {
  const total = deck.slides.length;
  const [index, setIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    setIndex(slideIndexFromHash(total));
  }, [total]);

  useEffect(() => {
    window.history.replaceState(null, "", `#${index + 1}`);
  }, [index]);

  const goTo = useCallback(
    (next: number) => {
      setIndex(Math.min(Math.max(next, 0), total - 1));
    },
    [total],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(total - 1);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev, goTo, total]);

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(document.fullscreenElement !== null);
    }
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen().catch(() => {
        // Fullscreen can be denied (e.g. no user gesture, iOS Safari) —
        // fail silently, the button simply has no effect that time.
      });
    }
  }, []);

  function onTouchStart(e: React.TouchEvent) {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  }

  function onTouchEnd(e: React.TouchEvent) {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;
    // Swipe left -> next slide, swipe right -> previous slide (same physical
    // gesture in every language, like a page turn — direction isn't mirrored
    // for RTL so it stays predictable across the FR/EN/AR versions).
    if (dx < 0) next();
    else prev();
  }

  const accent = getAccent(deck.slides, index);
  const a = accentClasses(accent);
  const slide = deck.slides[index];
  const progress = ((index + 1) / total) * 100;

  return (
    <div
      className="slide-viewport relative flex h-dvh w-full flex-col overflow-hidden bg-gray-950"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <HtmlLangSetter locale={deck.locale} dir={deck.dir} />

      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${a.glow} to-transparent`}
        aria-hidden
      />

      {/* progress bar */}
      <div className="relative z-10 h-1 w-full bg-white/5">
        <div
          className={`h-full ${a.ring} transition-all duration-300 ease-out`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* top bar: language switcher */}
      <div className="relative z-10 flex items-center justify-between px-4 pt-3 sm:px-8">
        <span className="text-xs font-semibold tracking-wide text-slate-500 sm:text-sm">
          7.77 · Chlef
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? deck.ui.exitFullscreen : deck.ui.fullscreen}
            title={isFullscreen ? deck.ui.exitFullscreen : deck.ui.fullscreen}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-slate-100"
          >
            {isFullscreen ? <CompressIcon /> : <ExpandIcon />}
          </button>
          <nav
            aria-label={deck.ui.switchLanguage}
            className="flex gap-1 rounded-full border border-white/10 bg-white/5 p-1"
          >
            {locales.map((loc) => (
              <Link
                key={loc}
                href={LOCALE_HREF[loc]}
                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase transition-colors sm:text-sm ${
                  loc === deck.locale
                    ? `${a.bg} ${a.text}`
                    : "text-slate-400 hover:text-slate-200"
                }`}
                aria-current={loc === deck.locale ? "page" : undefined}
              >
                {loc}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* slide */}
      <main className="relative z-10 flex flex-1 items-center justify-center overflow-y-auto px-6 py-6 sm:px-12">
        <div key={index} className="w-full max-w-5xl animate-slide-in">
          <SlideView slide={slide} accent={accent} />
        </div>
      </main>

      {/* bottom bar: prev / counter / next */}
      <div className="relative z-10 flex items-center justify-between gap-4 px-4 pb-5 pt-2 sm:px-8">
        <button
          type="button"
          onClick={prev}
          disabled={index === 0}
          aria-label={deck.ui.prev}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5"
        >
          <ChevronLeft />
        </button>

        <div className="flex flex-col items-center gap-1">
          <span
            dir="ltr"
            className="text-sm font-medium tabular-nums text-slate-400 sm:text-base"
          >
            {index + 1} / {total}
          </span>
          <span className="hidden text-xs text-slate-600 sm:block">
            {deck.ui.swipeHint} · {deck.ui.keyboardHint}
          </span>
        </div>

        <button
          type="button"
          onClick={next}
          disabled={index === total - 1}
          aria-label={deck.ui.next}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5"
        >
          <ChevronRight />
        </button>
      </div>

      {index === 0 ? (
        <div className="pointer-events-none absolute bottom-24 end-4 z-10 flex flex-col items-center gap-1.5 sm:bottom-28 sm:end-8">
          <div className="pointer-events-auto rounded-2xl border border-white/10 bg-white/5 p-2 shadow-lg shadow-black/20 backdrop-blur">
            <QrCode value={LIVE_PREVIEW_URL} label={deck.ui.scanToOpen} />
          </div>
          <span className="max-w-[7rem] text-center text-[0.65rem] leading-tight text-slate-500">
            {deck.ui.scanToOpen}
          </span>
        </div>
      ) : null}
    </div>
  );
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CompressIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path
        d="M4 9h5V4M4 15h5v5M20 9h-5V4M20 15h-5v5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
