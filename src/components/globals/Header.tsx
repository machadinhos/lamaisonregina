import { LangEnum, selectLang } from "@i18n/lang-selector";

interface Props {
  lang: LangEnum;
}

export default function Header({ lang }: Props) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href={`/${lang}/`}>{selectLang(lang, "home")}</a>
          </li>
          <li>
            <a href={`/${lang}/about`}>{selectLang(lang, "about")}</a>
          </li>
          <li>
            <a href={`/${lang}/gallery`}>{selectLang(lang, "gallery")}</a>
          </li>
          <li>
            <a href={`/${lang}/contacts`}>{selectLang(lang, "contacts")}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
