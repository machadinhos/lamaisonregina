import { motion } from "framer-motion";
import React, { ReactNode } from "react";

import Main from "@/components/global-components/Main";

interface Props {
  children: ReactNode | ReactNode[];
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

export default function MotionDiv({ children }: Props) {
  return (
    <>
      <motion.div animate="animate" exit="exit" initial="initial" transition={pageTransition} variants={pageVariants}>
        <Main>{children}</Main>
      </motion.div>
    </>
  );
}
