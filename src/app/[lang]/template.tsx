import type { ReactNode } from "react";

import PageTransition from "@/components/layout/PageTransition";

// A template (unlike a layout) remounts on every navigation, replaying the page enter animation.
export default function Template({ children }: { children: ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
