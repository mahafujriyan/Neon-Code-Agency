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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const urls: MetadataRoute.Sitemap = [
    ...staticPaths.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: path === "/" ? 1 : 0.7,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${siteUrl}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
    ...portfolioProjects.map((project) => ({
      url: `${siteUrl}/portfolio/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];

  return urls;
}

