import type { Metadata } from "next";

import Services from "@/components/sections/services/Services";
import { servicesLang } from "@/i18n";
import { createPageMetadata, resolveLang } from "@/lib/page";

export async function generateMetadata({ params }: PageProps<"/[lang]/services">): Promise<Metadata> {
  const lang = await resolveLang(params);

  return createPageMetadata(lang, "services", servicesLang(lang, "title"));
}

export default async function ServicesPage({ params }: PageProps<"/[lang]/services">) {
  const lang = await resolveLang(params);

  return <Services lang={lang} />;
}
