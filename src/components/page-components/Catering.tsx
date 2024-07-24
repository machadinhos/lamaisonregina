import { cateringLang, LangEnum } from "@i18n/lang-selector";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import CTA from "@/components/shared-components/CTA";
import React from "react";
import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";

interface Props {
  lang: LangEnum;
}

export default function Catering({ lang }: Props) {
  return (
    <>
      <section>
        <GenericPageTitle>{cateringLang(lang, "catering-title-1")}</GenericPageTitle>
        <GenericPageText>{cateringLang(lang, "catering-text-1")}</GenericPageText>
        <GenericPageText>{cateringLang(lang, "catering-text-2")}</GenericPageText>
      </section>
      <section>
        <GenericPageTitle>{cateringLang(lang, "catering-title-2")}</GenericPageTitle>
        <GenericPageText>{cateringLang(lang, "catering-text-3")}</GenericPageText>
      </section>
      <section>
        <GenericPageTitle>{cateringLang(lang, "catering-title-3")}</GenericPageTitle>
        <GenericPageText>{cateringLang(lang, "catering-text-4")}</GenericPageText>
      </section>
      <CTA lang={lang} />
    </>
  );
}
