import type { Metadata } from "next";

import Home from "@/components/sections/home/Home";
import { homeLang } from "@/i18n";
import { createPageMetadata, resolveLang } from "@/lib/page";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const lang = await resolveLang(params);

  return createPageMetadata(lang, "", homeLang(lang, "title"));
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const lang = await resolveLang(params);

  return <Home lang={lang} />;
}
