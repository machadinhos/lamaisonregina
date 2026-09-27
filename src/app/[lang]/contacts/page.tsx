import type { Metadata } from "next";

import Contacts from "@/components/sections/contacts/Contacts";
import { contactsLang } from "@/i18n";
import { createPageMetadata, resolveLang } from "@/lib/page";

export async function generateMetadata({ params }: PageProps<"/[lang]/contacts">): Promise<Metadata> {
  const lang = await resolveLang(params);

  return createPageMetadata(lang, "contacts", contactsLang(lang, "title"));
}

export default async function ContactsPage({ params }: PageProps<"/[lang]/contacts">) {
  const lang = await resolveLang(params);

  return <Contacts lang={lang} />;
}
