import { LangEnum } from "@i18n/lang-selector";
import { useMediaQuery } from "@mui/system";
import { sizes } from "@/styles/globals";
import MobileBottomButtons from "@/components/global-components/BottomButtons/MobileBottomButtons";
import DesktopBottomButtons from "@/components/global-components/BottomButtons/DesktopBottomButtons";

export default function BottomButtons({ lang }: { lang: LangEnum }) {
  const isSmallScreen = useMediaQuery(`(max-width:${sizes.sm}px)`);

  return isSmallScreen ? <MobileBottomButtons lang={lang} /> : <DesktopBottomButtons />;
}
