import { LangEnum, selectLang } from "@i18n/lang-selector";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

export default function Main({ children }: Props) {
  return <main>{children}</main>;
}
