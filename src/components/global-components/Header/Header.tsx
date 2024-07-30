import { LangEnum } from "@i18n/lang-selector";
import { useMediaQuery } from "@mui/system";
import { sizes } from "@/styles/globals";
import MobileHeader from "@/components/global-components/Header/MobileHeader";
import DesktopHeader from "@/components/global-components/Header/DesktopHeader";

interface Props {
  lang: LangEnum;
  isHome?: boolean;
}

function Header({ lang, isHome }: Props) {
  const isSmallScreen = useMediaQuery(`(max-width:${sizes.sm}px)`);

  return isSmallScreen ? <MobileHeader isHome={isHome} lang={lang} /> : <DesktopHeader isHome={isHome} lang={lang} />;
}

export default Header;
