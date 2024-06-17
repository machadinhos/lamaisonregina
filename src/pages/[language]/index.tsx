import Header from "@/components/globals/Header";
import { LangEnum } from "../../../i18n/lang-selector";

export default function Home({ language }: { language: LangEnum }) {
  console.log(language);
  return (
    <>
      <Header lang={language} />
      <div>
        <h1>Next.js + Tailwind CSS</h1>
        <p>This is a simple starter template for Next.js with Tailwind CSS.</p>
      </div>
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
