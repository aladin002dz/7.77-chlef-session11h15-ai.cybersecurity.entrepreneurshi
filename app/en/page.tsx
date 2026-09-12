import type { Metadata } from "next";
import Slideshow from "@/components/Slideshow";
import { getDeck } from "@/lib/content";

const deck = getDeck("en");

export const metadata: Metadata = {
  title: deck.meta.title,
  description: deck.meta.description,
};

export default function Page() {
  return <Slideshow deck={deck} />;
}
