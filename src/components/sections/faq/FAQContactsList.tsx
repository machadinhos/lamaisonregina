import React from "react";

import BulletedList from "@/components/ui/BulletList/BulletedList";
import BulletedListItem from "@/components/ui/BulletList/BulletedListItem";
import GenericPageText from "@/components/ui/Typography/GenericPageText";
import { faqLang, LangEnum } from "@/i18n";

export default function FAQContactsList({ lang }: { lang: LangEnum }) {
  return (
    <BulletedList>
      <BulletedListItem>
        <GenericPageText>{faqLang(lang, "faq-contact-list-1")}</GenericPageText>
      </BulletedListItem>
      <BulletedListItem>
        <GenericPageText>{faqLang(lang, "faq-contact-list-2")}</GenericPageText>
      </BulletedListItem>
    </BulletedList>
  );
}
