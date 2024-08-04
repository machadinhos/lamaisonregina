import { faqLang, LangEnum } from "@i18n/lang-selector";
import React from "react";

import BulletedListItem from "@/components/shared-components/BulletList/BulletedListItem";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import BulletedList from "@/components/shared-components/BulletList/BulletedList";

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
