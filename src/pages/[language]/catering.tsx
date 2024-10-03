import { cateringLang, globalsLang, LangEnum } from "@i18n/lang-selector";
import Head from "next/head";

import Catering from "@/components/page-components/Catering";
import MotionDiv from "@/components/global-components/MotionDiv";

export default function CateringPage({ language }: { language: LangEnum }) {
  return (
    <>
      <Head>
        <title>{cateringLang(language, "title")}</title>
        <meta content={globalsLang(language, "catering-meta-description")} name="description" />
        <meta content={globalsLang(language, "catering-meta-keywords")} name="keywords" />
        <link href="https://www.lamaisonregina.com/en/catering" hrefLang="en" rel="alternate" />
        <link href="https://www.lamaisonregina.com/pt/catering" hrefLang="pt" rel="alternate" />
      </Head>
      <MotionDiv>
        <Catering lang={language} />
      </MotionDiv>
    </>
  );
}

export async function getStaticPaths() {
  const params = [LangEnum.EN, LangEnum.PT];

  const paths = params.map((lang) => ({
    params: { language: lang },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { language: LangEnum } }) {
  return { props: { language: params.language } };
}
