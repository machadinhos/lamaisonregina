import { LangEnum, selectLang } from "@i18n/lang-selector";
import GenericPageMainTitle from "@/components/shared-components/GenericPageMainTitle";
import GenericPageTitle from "@/components/shared-components/GenericPageTitle";
import GenericPageText from "@/components/shared-components/GenericPageText";

interface Props {
  lang: LangEnum;
}

export default function Catering({ lang }: Props) {
  return (
    <>
      <GenericPageMainTitle>Catering</GenericPageMainTitle>
      <section>
        <GenericPageTitle>{selectLang(lang, "catering-title-1")}</GenericPageTitle>
        <GenericPageText>{selectLang(lang, "catering-text-1")}</GenericPageText>
        <GenericPageText>{selectLang(lang, "catering-text-2")}</GenericPageText>
      </section>
      <section>
        <GenericPageTitle>{selectLang(lang, "catering-title-2")}</GenericPageTitle>
        <GenericPageText>{selectLang(lang, "catering-text-3")}</GenericPageText>
      </section>
      <section>
        <GenericPageTitle>{selectLang(lang, "catering-title-3")}</GenericPageTitle>
        <GenericPageText>{selectLang(lang, "catering-text-4")}</GenericPageText>
      </section>
    </>
  );
}
