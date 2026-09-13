import type { Metadata } from "next";
import Slideshow from "@/components/Slideshow";
import { getDeck } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

const deck = getDeck("fr");

export const metadata: Metadata = buildMetadata(deck);

export default function Page() {
  return <Slideshow deck={deck} />;
}
