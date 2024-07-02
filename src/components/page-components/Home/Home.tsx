import { homeLang, LangEnum } from "@i18n/lang-selector";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import React from "react";
import { WhyChooseList } from "@/components/page-components/Home/WhyChooseList";
import { HomeInfo } from "@/components/page-components/Home/HomeInfo";
import CTA from "@/components/shared-components/CTA";

interface Props {
  lang: LangEnum;
}

export default function Home({ lang }: Props) {
  return (
    <>
      <section>
        <HomeInfo lang={lang} />
        <GenericPageText>{homeLang(lang, "home-text-5")}</GenericPageText>
        <GenericPageText>{homeLang(lang, "home-text-6")}</GenericPageText>
        <WhyChooseList lang={lang} />
      </section>
      <CTA lang={lang} />
    </>
  );
}
