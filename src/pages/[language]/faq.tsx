import { faqLang, globalsLang, LangEnum } from "@i18n/lang-selector";
import Head from "next/head";

import FAQ from "@/components/page-components/FAQ/FAQ";
import MotionDiv from "@/components/global-components/MotionDiv";

export default function FAQPage({ language }: { language: LangEnum }) {
  return (
    <>
      <Head>
        <title>{faqLang(language, "title")}</title>
        <meta content={globalsLang(language, "faq-meta-description")} name="description" />
        <meta content={globalsLang(language, "faq-meta-keywords")} name="keywords" />
        <link href="https://www.lamaisonregina.com/en/faq" hrefLang="en" rel="alternate" />
        <link href="https://www.lamaisonregina.com/pt/faq" hrefLang="pt" rel="alternate" />
      </Head>
      <MotionDiv>
        <FAQ lang={language} />
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
