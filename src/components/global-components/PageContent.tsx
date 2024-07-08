import { LangEnum } from "@i18n/lang-selector";
import { ReactNode } from "react";
import Header from "@/components/global-components/Header";
import Main from "@/components/global-components/Main";
import Footer from "@/components/global-components/Footer";
import { motion } from "framer-motion";
import BottomButtons from "@/components/shared-components/BottomButtons";

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
  duration: 0.5,
};

export default function PageContent({ lang, children, isHome }: Props) {
  return (
    <>
      <Header lang={lang} />
      <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
        <Main lang={lang} isHome={isHome}>
          {children}
        </Main>
      </motion.div>
      <BottomButtons lang={lang} />
      <Footer lang={lang} />
    </>
  );
}
