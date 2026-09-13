import type { Slide } from "@/lib/content";
import type { Accent } from "@/lib/accent";
import { accentClasses } from "@/lib/accent";
import { renderInline } from "@/lib/inlineMarkdown";
import SlideBody from "./SlideBody";

export default function SlideView({
  slide,
  accent,
}: {
  slide: Slide;
  accent: Accent;
}) {
  const a = accentClasses(accent);

  if (slide.type === "title") {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-[clamp(1.9rem,6vw,3.75rem)] font-extrabold leading-tight tracking-tight text-white">
          {slide.title}
        </h1>
        {slide.subtitle ? (
          <p className="mt-6 max-w-2xl text-[clamp(1rem,2.4vw,1.4rem)] text-slate-300">
            {slide.subtitle}
          </p>
        ) : null}
        {slide.speaker ? (
          <p
            className={`mt-10 rounded-full border px-5 py-2 text-sm font-medium sm:text-base ${a.border} ${a.text} ${a.bg}`}
          >
            {slide.speaker}
          </p>
        ) : null}
      </div>
    );
  }

  if (slide.type === "block") {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center text-center">
        <span
          className={`text-sm font-semibold uppercase tracking-[0.3em] sm:text-base ${a.text}`}
        >
          {slide.label}
        </span>
        <h2 className="mt-5 max-w-4xl text-[clamp(2.2rem,7vw,4.5rem)] font-extrabold leading-tight tracking-tight text-white">
          {slide.title}
        </h2>
        <span
          className={`mt-8 h-1.5 w-24 rounded-full ${a.ring}`}
          aria-hidden
        />
      </div>
    );
  }

  if (slide.type === "closing") {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center text-center">
        <h2 className="max-w-3xl text-[clamp(1.8rem,5.5vw,3.25rem)] font-extrabold leading-tight tracking-tight text-white">
          {slide.title}
        </h2>
        <p className="mt-5 max-w-xl text-[clamp(1rem,2.2vw,1.3rem)] text-slate-300">
          {slide.message}
        </p>
        <dl className="mt-10 grid w-full max-w-xl gap-4 text-start sm:grid-cols-2">
          {slide.items.map((item) => (
            <div
              key={item.label}
              className={`rounded-2xl border p-4 ${a.border} ${a.bg}`}
            >
              <dt className={`text-xs font-semibold uppercase tracking-wide ${a.text}`}>
                {item.label}
              </dt>
              <dd className="mt-1.5 text-sm leading-snug text-slate-200 sm:text-base">
                {renderInline(item.value)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }

  // content
  return (
    <div className="flex h-full w-full flex-col justify-center">
      <div className="mx-auto flex w-full max-w-3xl flex-col">
        {slide.eyebrow ? (
          <span
            className={`mb-3 text-xs font-semibold uppercase tracking-[0.25em] sm:text-sm ${a.text}`}
          >
            {slide.eyebrow}
          </span>
        ) : null}
        <h2 className="mb-6 text-[clamp(1.5rem,4.2vw,2.5rem)] font-bold leading-tight text-white sm:mb-8">
          {slide.title}
        </h2>
        <SlideBody lines={slide.lines} accent={accent} />
      </div>
    </div>
  );
}
