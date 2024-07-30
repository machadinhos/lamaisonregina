import { LangEnum } from "@i18n/lang-selector";
import MobileHeader from "@/components/global-components/Header/MobileHeader";
import DesktopHeader from "@/components/global-components/Header/DesktopHeader";

interface Props {
  lang: LangEnum;
  isHome?: boolean;
}

function Header({ lang, isHome }: Props) {
  return (
    <>
      <MobileHeader isHome={isHome} lang={lang} />
      <DesktopHeader isHome={isHome} lang={lang} />
    </>
  );
}

export default Header;
