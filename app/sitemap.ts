import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://priyanshu-swami-portfolio.onrender.com",
      lastModified: "2026-03-29",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
