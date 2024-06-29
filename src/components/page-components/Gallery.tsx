import { LangEnum, selectLang } from "@i18n/lang-selector";
import GenericPageTitle from "@/components/shared-components/GenericPageTitle";
import GenericPageText from "@/components/shared-components/GenericPageText";
import GenericPageMainTitle from "@/components/shared-components/GenericPageMainTitle";

interface Props {
  lang: LangEnum;
}

export default function Gallery({ lang }: Props) {
  return (
    <>
      <GenericPageMainTitle>{selectLang(lang, "gallery")}</GenericPageMainTitle>
      <section>
        <GenericPageTitle>{selectLang(lang, "gallery-title-1")}</GenericPageTitle>
        <GenericPageText>{selectLang(lang, "gallery-text-1")}</GenericPageText>
      </section>
      <section>
        <GenericPageTitle>{selectLang(lang, "gallery-title-2")}</GenericPageTitle>
        <GenericPageText>{selectLang(lang, "gallery-text-2")}</GenericPageText>
      </section>
      <section>
        <GenericPageTitle>{selectLang(lang, "gallery-title-3")}</GenericPageTitle>
        <GenericPageText>{selectLang(lang, "gallery-text-3")}</GenericPageText>
      </section>
      <section>
        <GenericPageTitle>{selectLang(lang, "gallery-title-4")}</GenericPageTitle>
        <GenericPageText>{selectLang(lang, "gallery-text-4")}</GenericPageText>
      </section>
      <section>
        <GenericPageTitle>{selectLang(lang, "gallery-title-5")}</GenericPageTitle>
        <GenericPageText>{selectLang(lang, "gallery-text-5")}</GenericPageText>
      </section>
    </>
  );
}
