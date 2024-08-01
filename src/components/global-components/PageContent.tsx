import { LangEnum } from "@i18n/lang-selector";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

import Main from "@/components/global-components/Main";
import BottomButtons from "@/components/global-components/BottomButtons/BottomButtons";
import Footer from "@/components/global-components/Footer";
import { primaryColor } from "@/styles/globals";
import Header from "@/components/global-components/Header/Header";

interface Props {
  lang: LangEnum;
  children: ReactNode | ReactNode[];
  isHome?: boolean;
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 100,
  },
};

const pageTransition = {
  duration: 0.3,
};

export default function PageContent({ lang, children, isHome }: Props) {
  return (
    <>
      <Box bgcolor={primaryColor} height={"4px"} position={"fixed"} width={"100%"} zIndex={2432} />
      <Header isHome={isHome} lang={lang} />
      <motion.div animate="animate" exit="exit" initial="initial" transition={pageTransition} variants={pageVariants}>
        <Main>{children}</Main>
      </motion.div>
      <BottomButtons lang={lang} />
      <Box bgcolor={primaryColor} height={"5px"} width={"100%"} zIndex={2432} />
      <Footer lang={lang} />
    </>
  );
}
