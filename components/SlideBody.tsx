import type { SlideLine } from "@/lib/content";
import type { Accent } from "@/lib/accent";
import { accentClasses } from "@/lib/accent";
import { renderInline } from "@/lib/inlineMarkdown";

function Marker({
  line,
  accent,
}: {
  line: SlideLine;
  accent: ReturnType<typeof accentClasses>;
}) {
  const marker = line.marker ?? "bullet";

  if (marker === "number") {
    return (
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${accent.border} ${accent.text} ${accent.bg}`}
      >
        {line.number}
      </span>
    );
  }

  if (marker === "quote") {
    return (
      <span
        className={`mt-1 shrink-0 text-2xl leading-none ${accent.text}`}
        aria-hidden
      >
        “
      </span>
    );
  }

  if (marker === "none") return null;

  return (
    <span
      className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent.ring}`}
      aria-hidden
    />
  );
}

export default function SlideBody({
  lines,
  accent,
}: {
  lines: SlideLine[];
  accent: Accent;
}) {
  const a = accentClasses(accent);

  return (
    <ul className="flex w-full flex-col gap-3.5 sm:gap-4">
      {lines.map((line, i) => (
        <li
          key={i}
          className={`flex items-start gap-3 sm:gap-3.5 ${
            line.indent ? "ms-6 sm:ms-10" : ""
          } ${line.marker === "quote" ? "italic text-slate-200" : "text-slate-200"}`}
        >
          <Marker line={line} accent={a} />
          <span className="text-[1.05rem] leading-relaxed sm:text-xl sm:leading-relaxed">
            {line.bold ? (
              <span className={`font-semibold ${a.text}`}>
                {renderInline(line.bold)}{" "}
              </span>
            ) : null}
            {line.text ? renderInline(line.text) : null}
          </span>
        </li>
      ))}
    </ul>
  );
}
