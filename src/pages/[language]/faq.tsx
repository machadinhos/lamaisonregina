import { LangEnum } from "@i18n/lang-selector";
import FAQ from "@/components/page-components/FAQ/FAQ";
import PageContent from "@/components/global-components/PageContent";

export default function FAQPage({ language }: { language: LangEnum }) {
  return (
    <>
      <PageContent lang={language}>
        <FAQ lang={language} />
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
