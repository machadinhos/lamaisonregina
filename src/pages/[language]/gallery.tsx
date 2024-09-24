import { LangEnum } from "@i18n/lang-selector";
import Head from "next/head";

import Gallery from "@/components/page-components/Gallery";
import MotionDiv from "@/components/global-components/MotionDiv";

export default function GalleryPage({ language }: { language: LangEnum }) {
  return (
    <>
      <Head>
        <title>{language === LangEnum.EN ? "Gallery" : "Galeria"}</title>
      </Head>
      <MotionDiv>
        <Gallery lang={language} />
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
