import { MetadataRoute } from "next";
import { siteConfig } from "@/src/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/experience",
    "/projects",
    "/portfolio/design",
    "/portfolio/writing",
    "/contact",
    "/resume",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date(),
  }));
}
