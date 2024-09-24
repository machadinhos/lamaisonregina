import { LangEnum } from "@i18n/lang-selector";
import Head from "next/head";

import Home from "@/components/page-components/Home/Home";
import MotionDiv from "@/components/global-components/MotionDiv";

export default function HomePage({ language }: { language: LangEnum }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <MotionDiv>
        <Home lang={language} />
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
  return { props: { language: params.language, isHome: true } };
}
