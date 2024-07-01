import { galleryLang, LangEnum } from "@i18n/lang-selector";
import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import GenericPageMainTitle from "@/components/shared-components/Typography/GenericPageMainTitle";

interface Props {
  lang: LangEnum;
}

export default function Gallery({ lang }: Props) {
  return (
    <>
      <GenericPageMainTitle>{galleryLang(lang, "title")}</GenericPageMainTitle>
      <section>
        <GenericPageTitle>{galleryLang(lang, "gallery-title-1")}</GenericPageTitle>
        <GenericPageText>{galleryLang(lang, "gallery-text-1")}</GenericPageText>
      </section>
      <section>
        <GenericPageTitle>{galleryLang(lang, "gallery-title-2")}</GenericPageTitle>
        <GenericPageText>{galleryLang(lang, "gallery-text-2")}</GenericPageText>
      </section>
      <section>
        <GenericPageTitle>{galleryLang(lang, "gallery-title-3")}</GenericPageTitle>
        <GenericPageText>{galleryLang(lang, "gallery-text-3")}</GenericPageText>
      </section>
      <section>
        <GenericPageTitle>{galleryLang(lang, "gallery-title-4")}</GenericPageTitle>
        <GenericPageText>{galleryLang(lang, "gallery-text-4")}</GenericPageText>
      </section>
      <section>
        <GenericPageTitle>{galleryLang(lang, "gallery-title-5")}</GenericPageTitle>
        <GenericPageText>{galleryLang(lang, "gallery-text-5")}</GenericPageText>
      </section>
    </>
  );
}
