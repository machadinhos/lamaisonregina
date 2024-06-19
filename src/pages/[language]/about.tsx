import { LangEnum } from "@i18n/lang-selector";
import PageContent from "@/components/globals/PageContent";
import About from "@/components/page-components/About";

export default function AboutPage({ language }: { language: LangEnum }) {
  console.log(language);
  return (
    <PageContent lang={language}>
      <About lang={language} />
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
