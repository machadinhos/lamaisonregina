import { LangEnum } from "@i18n/lang-selector";
import { useMediaQuery } from "@mui/system";

import MobileHeader from "@/components/global-components/Header/MobileHeader";
import DesktopHeader from "@/components/global-components/Header/DesktopHeader";

interface Props {
  lang: LangEnum;
  isHome?: boolean;
}

function Header({ lang, isHome }: Props) {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <header id={"header"}>
      {isSmallScreen ? <MobileHeader isHome={isHome} lang={lang} /> : <DesktopHeader isHome={isHome} lang={lang} />}
    </header>
  );
}

export default Header;
