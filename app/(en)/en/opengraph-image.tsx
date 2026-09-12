import { ImageResponse } from "next/og";
import { OG_SIZE, ogImageElement } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function Image() {
  return new ImageResponse(ogImageElement(), size);
}
