import { LangEnum, selectLang } from "@i18n/lang-selector";
import GenericPageText from "@/components/shared-components/GenericPageText";
import GenericPageTitle from "@/components/shared-components/GenericPageTitle";
import React from "react";
import { WhyChooseList } from "@/components/page-components/Home/WhyChooseList";
import { HomeInfo } from "@/components/page-components/Home/HomeInfo";

interface Props {
  lang: LangEnum;
}

export default function Home({ lang }: Props) {
  return (
    <>
      <section>
        <HomeInfo lang={lang} />
        <GenericPageTitle sx={{ mb: "2rem" }}>{selectLang(lang, "home-sep-1")}</GenericPageTitle>
        <GenericPageText>{selectLang(lang, "home-text-5")}</GenericPageText>
        <GenericPageText>{selectLang(lang, "home-text-6")}</GenericPageText>
        <WhyChooseList lang={lang} />
      </section>
    </>
  );
}
