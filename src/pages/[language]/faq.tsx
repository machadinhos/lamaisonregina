import Header from "@/components/globals/Header";
import { LangEnum } from "@i18n/lang-selector";
import Footer from "@/components/globals/Footer";
import Main from "@/components/globals/Main";

export default function FAQPage({ language }: { language: LangEnum }) {
  console.log(language);
  return (
    <>
      <Header lang={language} />
      <Main>
        <p>cagada</p>
      </Main>
      <Footer lang={language} />
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

export async function getStaticProps({
  params,
}: {
  params: { language: LangEnum };
}) {
  return { props: { language: params.language } };
}
