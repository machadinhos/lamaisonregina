import type { Metadata } from "next";

import FAQ from "@/components/sections/faq/FAQ";
import { faqLang } from "@/i18n";
import { createPageMetadata, resolveLang } from "@/lib/page";

export async function generateMetadata({ params }: PageProps<"/[lang]/faq">): Promise<Metadata> {
  const lang = await resolveLang(params);

  return createPageMetadata(lang, "faq", faqLang(lang, "title"));
}

export default async function FAQPage({ params }: PageProps<"/[lang]/faq">) {
  const lang = await resolveLang(params);

  return <FAQ lang={lang} />;
}
