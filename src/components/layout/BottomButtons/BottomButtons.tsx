import DesktopBottomButtons from "@/components/layout/BottomButtons/DesktopBottomButtons";
import MobileBottomButtons from "@/components/layout/BottomButtons/MobileBottomButtons";
import { LangEnum } from "@/i18n";

export default function BottomButtons({ lang }: { lang: LangEnum }) {
  return (
    <>
      <MobileBottomButtons lang={lang} />
      <DesktopBottomButtons />
    </>
  );
}
