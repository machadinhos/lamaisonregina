import { globalsLang, LangEnum, servicesLang } from "@i18n/lang-selector";
import Head from "next/head";

import Services from "@/components/page-components/Services/Services";
import MotionDiv from "@/components/global-components/MotionDiv";

export default function ServicesPage({ language }: { language: LangEnum }) {
  return (
    <>
      <Head>
        <title>{servicesLang(language, "title")}</title>
        <meta content={globalsLang(language, "services-meta-description")} name="description" />
        <link href="https://www.lamaisonregina.com/en/services" hrefLang="en" rel="alternate" />
        <link href="https://www.lamaisonregina.com/pt/services" hrefLang="pt" rel="alternate" />
      </Head>
      <MotionDiv>
        <Services lang={language} />
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
