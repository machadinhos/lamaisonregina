import { LangEnum, selectLang } from "@i18n/lang-selector";
import { ReactNode } from "react";
import Header from "@/components/global-components/Header";
import Main from "@/components/global-components/Main";
import Footer from "@/components/global-components/Footer";
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
