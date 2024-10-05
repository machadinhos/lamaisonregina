import { galleryLang, globalsLang, LangEnum } from "@i18n/lang-selector";
import Head from "next/head";

import Gallery from "@/components/page-components/Gallery";
import MotionDiv from "@/components/global-components/MotionDiv";

export default function GalleryPage({ language }: { language: LangEnum }) {
  return (
    <>
      <Head>
        <title>{galleryLang(language, "title")}</title>
        <meta content={globalsLang(language, "gallery-meta-description")} name="description" />
        <link href="https://www.lamaisonregina.com/en/gallery" hrefLang="en" rel="alternate" />
        <link href="https://www.lamaisonregina.com/pt/gallery" hrefLang="pt" rel="alternate" />
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
