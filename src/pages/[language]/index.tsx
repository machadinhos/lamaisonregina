import Header from "@/components/globals/Header";
import { LangEnum } from "@i18n/lang-selector";
import Footer from "@/components/globals/Footer";
import Main from "@/components/globals/Main";
import { Typography } from "@mui/material";
import Home from "@/components/page-components/Home";
import PageContent from "@/components/globals/PageContent";

export default function HomePage({ language }: { language: LangEnum }) {
  console.log(language);
  return (
    <PageContent lang={language}>
      <Home lang={language} />
    </PageContent>
  );
}

export async function getStaticPaths() {
  const params = [LangEnum.EN, LangEnum.PT];

  const paths = params.map((lang) => ({
    params: { language: lang },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({
  params,
}: {
  params: { language: LangEnum };
}) {
  return { props: { language: params.language } };
}
