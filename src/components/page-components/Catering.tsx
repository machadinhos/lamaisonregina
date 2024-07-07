import { cateringLang, LangEnum } from "@i18n/lang-selector";
import GenericPageMainTitle from "@/components/shared-components/Typography/GenericPageMainTitle";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import CTA from "@/components/shared-components/CTA";
import React from "react";
import GenericPageSubTitle from "@/components/shared-components/Typography/GenericPageSubTitle";

interface Props {
  lang: LangEnum;
}

export default function Catering({ lang }: Props) {
  return (
    <>
      <GenericPageMainTitle>Catering</GenericPageMainTitle>
      <section>
        <GenericPageSubTitle>{cateringLang(lang, "catering-title-1")}</GenericPageSubTitle>
        <GenericPageText>{cateringLang(lang, "catering-text-1")}</GenericPageText>
        <GenericPageText>{cateringLang(lang, "catering-text-2")}</GenericPageText>
      </section>
      <section>
        <GenericPageSubTitle>{cateringLang(lang, "catering-title-2")}</GenericPageSubTitle>
        <GenericPageText>{cateringLang(lang, "catering-text-3")}</GenericPageText>
      </section>
      <section>
        <GenericPageSubTitle>{cateringLang(lang, "catering-title-3")}</GenericPageSubTitle>
        <GenericPageText>{cateringLang(lang, "catering-text-4")}</GenericPageText>
      </section>
      <CTA lang={lang} />
    </>
  );
}
