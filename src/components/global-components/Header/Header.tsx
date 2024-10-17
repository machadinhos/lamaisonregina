import { LangEnum } from "@i18n/lang-selector";

import MobileHeader from "@/components/global-components/Header/MobileHeader";
import DesktopHeader from "@/components/global-components/Header/DesktopHeader";
import HomeBackFade from "@/components/global-components/Header/HomeBackFade";

interface Props {
  lang: LangEnum;
  isHome?: boolean;
}

function Header({ lang, isHome }: Props) {
  return (
    <header id={"header"}>
      <MobileHeader isHome={isHome} lang={lang} />
      <DesktopHeader isHome={isHome} lang={lang} />
      <HomeBackFade isHome={isHome} />
    </header>
  );
}

export default Header;
