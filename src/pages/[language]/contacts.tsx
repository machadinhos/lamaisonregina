import { globalsLang, LangEnum } from "@i18n/lang-selector";
import Head from "next/head";

import Contacts from "@/components/page-components/Contacts";
import MotionDiv from "@/components/global-components/MotionDiv";

export default function ContactsPage({ language }: { language: LangEnum }) {
  return (
    <>
      <Head>
        <title>{language === LangEnum.EN ? "Contacts" : "Contactos"}</title>
        <meta content={globalsLang(language, "contacts-meta-description")} name="description" />
        <meta content={globalsLang(language, "contacts-meta-keywords")} name="keywords" />
        <link href="https://www.lamaisonregina.com/en/contacts" hrefLang="en" rel="alternate" />
        <link href="https://www.lamaisonregina.com/pt/contacts" hrefLang="pt" rel="alternate" />
      </Head>
      <MotionDiv>
        <Contacts lang={language} />
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
