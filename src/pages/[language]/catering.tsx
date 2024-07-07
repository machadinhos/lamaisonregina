import { LangEnum } from "@i18n/lang-selector";
import Catering from "@/components/page-components/Catering";
import PageContent from "@/components/global-components/PageContent";
import Head from "next/head";

export default function CateringPage({ language }: { language: LangEnum }) {
  return (
    <>
      <Head>
        <title>Catering</title>
      </Head>
      <PageContent lang={language}>
        <Catering lang={language} />
      </PageContent>
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
