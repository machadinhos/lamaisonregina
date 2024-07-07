import { LangEnum } from "@i18n/lang-selector";
import PageContent from "@/components/global-components/PageContent";
import Services from "@/components/page-components/Services/Services";

export default function ServicesPage({ language }: { language: LangEnum }) {
  return (
    <PageContent lang={language}>
      <Services lang={language} />
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
