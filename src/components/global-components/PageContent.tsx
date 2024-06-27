import { LangEnum } from "@i18n/lang-selector";
import { ReactNode } from "react";
import Header from "@/components/global-components/Header";
import Main from "@/components/global-components/Main";
import Footer from "@/components/global-components/Footer";

interface Props {
  lang: LangEnum;
  children: ReactNode | ReactNode[];
  isHome?: boolean;
}

export default function PageContent({ lang, children, isHome }: Props) {
  return (
    <>
      <Header lang={lang} />
      <Main lang={lang} isHome={isHome}>
        {children}
      </Main>
      <Footer lang={lang} />
    </>
  );
}
