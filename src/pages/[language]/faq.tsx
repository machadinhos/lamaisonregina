import { LangEnum } from "@i18n/lang-selector";
import Head from "next/head";

import FAQ from "@/components/page-components/FAQ/FAQ";
import MotionDiv from "@/components/global-components/MotionDiv";

export default function FAQPage({ language }: { language: LangEnum }) {
  return (
    <>
      <Head>
        <title>FAQ</title>
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
