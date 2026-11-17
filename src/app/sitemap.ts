import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/products", priority: 0.9 },
    { path: "/team", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/faq", priority: 0.6 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ];
  return pages.map((page) => ({
    url: `${site.url}${page.path}`,
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}
