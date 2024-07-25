import { LangEnum } from "@i18n/lang-selector";
import { useMediaQuery } from "@mui/system";
import { sizes } from "@/styles/globals";
import MobileHeader from "@/components/global-components/Header/MobileHeader";
import DesktopHeader from "@/components/global-components/Header/DesktopHeader";

interface Props {
  lang: LangEnum;
  isHome?: boolean;
  id: string;
}

function Header({ lang, isHome, id }: Props) {
  const isSmallScreen = useMediaQuery(`(max-width:${sizes.sm}px)`);

  return isSmallScreen ? (
    <MobileHeader id={id} isHome={isHome} lang={lang} />
  ) : (
    <DesktopHeader id={id} isHome={isHome} lang={lang} />
  );
}

export default Header;
