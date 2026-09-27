"use client";

import { usePathname } from "next/navigation";

import DesktopHeader from "@/components/layout/Header/DesktopHeader";
import HomeBackFade from "@/components/layout/Header/HomeBackFade";
import MobileHeader from "@/components/layout/Header/MobileHeader";
import { LangEnum } from "@/i18n";

interface Props {
  lang: LangEnum;
}

function Header({ lang }: Props) {
  const isHome = usePathname().split("/").filter(Boolean).length <= 1;

  return (
    <header id={"header"}>
      <MobileHeader isHome={isHome} lang={lang} />
      <DesktopHeader isHome={isHome} lang={lang} />
      <HomeBackFade isHome={isHome} />
    </header>
  );
}

export default Header;
