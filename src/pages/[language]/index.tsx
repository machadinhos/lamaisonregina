import { LangEnum } from "@i18n/lang-selector";
import Home from "@/components/page-components/Home/Home";
import PageContent from "@/components/global-components/PageContent";

export default function HomePage({ language }: { language: LangEnum }) {
  console.log(language);
  return (
    <PageContent isHome lang={language}>
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

export async function getStaticProps({ params }: { params: { language: LangEnum } }) {
  return { props: { language: params.language } };
}
