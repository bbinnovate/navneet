import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = Object.values(ROUTES);

  return paths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
