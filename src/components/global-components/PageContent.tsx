import { LangEnum } from "@i18n/lang-selector";
import React, { ReactNode } from "react";
import Main from "@/components/global-components/Main";
import { motion } from "framer-motion";
import BottomButtons from "@/components/global-components/BottomButtons/BottomButtons";
import Footer from "@/components/global-components/Footer";
import { Box } from "@mui/material";
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
      <Box zIndex={2432} position={"fixed"} width={"100%"} height={"4px"} bgcolor={primaryColor} />
      <Header lang={lang} isHome={isHome} />
      <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
        <Main>{children}</Main>
      </motion.div>
      <BottomButtons lang={lang} />
      <Box zIndex={2432} width={"100%"} height={"5px"} bgcolor={primaryColor} />
      <Footer lang={lang} />
    </>
  );
}
