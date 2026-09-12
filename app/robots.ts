import type { MetadataRoute } from "next";
import { LIVE_PREVIEW_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("sitemap.xml", LIVE_PREVIEW_URL).toString(),
  };
}
