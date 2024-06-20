import { LangEnum, selectLang } from "@i18n/lang-selector";
import { ReactNode } from "react";
import Header from "@/components/globals/Header";
import Main from "@/components/globals/Main";
import Footer from "@/components/globals/Footer";
import Link from "next/link";

interface Props {
  lang: LangEnum;
  children: ReactNode | ReactNode[];
}

export default function PageContent({ lang, children }: Props) {
  return (
    <>
      <Header lang={lang} />
      <Main>{children}</Main>
      <Footer lang={lang} />
    </>
  );
}
