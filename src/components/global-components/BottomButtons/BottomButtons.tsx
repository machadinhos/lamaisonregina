import { LangEnum } from "@i18n/lang-selector";

import MobileBottomButtons from "@/components/global-components/BottomButtons/MobileBottomButtons";
import DesktopBottomButtons from "@/components/global-components/BottomButtons/DesktopBottomButtons";

export default function BottomButtons({ lang }: { lang: LangEnum }) {
  return (
    <>
      <MobileBottomButtons lang={lang} />
      <DesktopBottomButtons />;
    </>
  );
}
