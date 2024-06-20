import { LangEnum } from "@i18n/lang-selector";
import Gallery from "@/components/page-components/Gallery";
import PageContent from "@/components/globals/PageContent";

export default function GalleryPage({ language }: { language: LangEnum }) {
  console.log(language);
  return (
    <>
      <PageContent lang={language}>
        <Gallery lang={language} />
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
