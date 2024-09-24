import { LangEnum } from "@i18n/lang-selector";
import React, { ReactNode } from "react";
import { Box } from "@mui/material";

import BottomButtons from "@/components/global-components/BottomButtons/BottomButtons";
import Footer from "@/components/global-components/Footer";
import { primaryColor } from "@/styles/globals";
import Header from "@/components/global-components/Header/Header";

interface Props {
  lang: LangEnum;
  children: ReactNode | ReactNode[];
  isHome?: boolean;
}

export default function PageContent({ lang, children, isHome }: Props) {
  return (
    <>
      <Box bgcolor={primaryColor} height={"4px"} position={"fixed"} width={"100%"} zIndex={2432} />
      <Header isHome={isHome} lang={lang} />
      {children}
      <BottomButtons lang={lang} />
      <Box bgcolor={primaryColor} height={"5px"} width={"100%"} zIndex={2432} />
      <Footer lang={lang} />
    </>
  );
}
