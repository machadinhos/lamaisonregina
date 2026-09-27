"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

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

export default function PageTransition({ children }: Props) {
  return (
    <motion.div animate="animate" exit="exit" initial="initial" transition={pageTransition} variants={pageVariants}>
      <main style={{ minHeight: "100dvh" }}>{children}</main>
    </motion.div>
  );
}
