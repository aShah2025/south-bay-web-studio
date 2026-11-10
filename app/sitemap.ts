import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://southbayweb.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "work/", "pricing/", "about/", "contact/"].map((p) => ({ url: `${BASE}/${p}` }));
}
