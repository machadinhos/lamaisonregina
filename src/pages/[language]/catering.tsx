import { LangEnum } from "@i18n/lang-selector";
import Head from "next/head";

import Catering from "@/components/page-components/Catering";
import MotionDiv from "@/components/global-components/MotionDiv";

export default function CateringPage({ language }: { language: LangEnum }) {
  return (
    <>
      <Head>
        <title>Catering</title>
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
