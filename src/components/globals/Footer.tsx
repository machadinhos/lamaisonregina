import { LangEnum, selectLang } from "@i18n/lang-selector";

interface Props {
  lang: LangEnum;
}

export default function Footer({ lang }: Props) {
  return (
    <footer>
      <h1>{selectLang(lang, "footer")}</h1>
    </footer>
  );
}
