import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageSlug } from "@/config/site";
import { globalsLang, isLocale, LangEnum, locales } from "@/i18n";

export const getPagePath = (lang: LangEnum, slug: PageSlug) => `/${lang}${slug ? `/${slug}` : ""}`;

export async function resolveLang(params: Promise<{ lang: string }>): Promise<LangEnum> {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  return lang;
}

export function createPageMetadata(lang: LangEnum, slug: PageSlug, title: string): Metadata {
  return {
    title,
    description: globalsLang(lang, `${slug || "home"}-meta-description`),
    alternates: {
      languages: Object.fromEntries(locales.map((locale) => [locale, getPagePath(locale, slug)])),
    },
  };
}
