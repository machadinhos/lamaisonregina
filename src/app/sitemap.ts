import type { MetadataRoute } from "next";

import { pageSlugs, siteConfig } from "@/config/site";
import { locales } from "@/i18n";
import { getPagePath } from "@/lib/page";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString().split("T")[0];

  return pageSlugs.flatMap((slug) =>
    locales.map((lang) => ({
      url: siteConfig.url + getPagePath(lang, slug),
      lastModified,
      alternates: {
        languages: Object.fromEntries(locales.map((locale) => [locale, siteConfig.url + getPagePath(locale, slug)])),
      },
    })),
  );
}
