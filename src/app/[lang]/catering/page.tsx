import type { Metadata } from "next";

import Catering from "@/components/sections/catering/Catering";
import { cateringLang } from "@/i18n";
import { createPageMetadata, resolveLang } from "@/lib/page";

export async function generateMetadata({ params }: PageProps<"/[lang]/catering">): Promise<Metadata> {
  const lang = await resolveLang(params);

  return createPageMetadata(lang, "catering", cateringLang(lang, "title"));
}

export default async function CateringPage({ params }: PageProps<"/[lang]/catering">) {
  const lang = await resolveLang(params);

  return <Catering lang={lang} />;
}
