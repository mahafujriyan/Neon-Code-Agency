import type { MetadataRoute } from "next";

import { portfolioProjects } from "@/utils/portfolioProjects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://neoncode.co";

const staticPaths = [
  "/",
  "/about",
  "/blog",
  "/career",
  "/contact",
  "/login",
  "/portfolio",
  "/pricing",
  "/services",
  "/signup",
];

const serviceSlugs = [
  "branding",
  "web-development",
  "digital-marketing",
  "ui-ux-design",
  "mobile-app",
  "seo",
  "creative-design",
  "professional-page-setup",
];

const makeEntry = (
  url: string,
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>,
  priority: number,
  lastModified: Date
): MetadataRoute.Sitemap[number] => ({
  url,
  lastModified,
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const urls: MetadataRoute.Sitemap = [
    ...staticPaths.map((path) => makeEntry(`${siteUrl}${path}`, "weekly", path === "/" ? 1 : 0.7, now)),
    ...serviceSlugs.map((slug) => makeEntry(`${siteUrl}/services/${slug}`, "monthly", 0.6, now)),
    ...portfolioProjects.map((project) => makeEntry(`${siteUrl}/portfolio/${project.slug}`, "monthly", 0.6, now)),
  ];

  return urls;
}
