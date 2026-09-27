import type { Metadata } from "next";

import Gallery from "@/components/sections/gallery/Gallery";
import { galleryLang } from "@/i18n";
import { createPageMetadata, resolveLang } from "@/lib/page";

export async function generateMetadata({ params }: PageProps<"/[lang]/gallery">): Promise<Metadata> {
  const lang = await resolveLang(params);

  return createPageMetadata(lang, "gallery", galleryLang(lang, "title"));
}

export default async function GalleryPage({ params }: PageProps<"/[lang]/gallery">) {
  const lang = await resolveLang(params);

  return <Gallery lang={lang} />;
}
