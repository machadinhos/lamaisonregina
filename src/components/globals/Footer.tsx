import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Typography } from "@mui/material";

interface Props {
  lang: LangEnum;
}

export default function Footer({ lang }: Props) {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <a href={`/${lang}/`}>{selectLang(lang, "home")}</a>
          </li>
          <li>
            <a href={`/${lang}/services`}>{selectLang(lang, "services")}</a>
          </li>
          <li>
            <a href={`/${lang}/gallery`}>{selectLang(lang, "gallery")}</a>
          </li>
          <li>
            <a href={`/${lang}/contacts`}>{selectLang(lang, "contacts")}</a>
          </li>
          <li>
            <a href={`/${lang}/faq`}>FAQ</a>
          </li>
        </ul>
      </nav>
      <Typography>{selectLang(lang, "footer-follow")}</Typography>
      <Typography>{selectLang(lang, "footer-rights-reserved")}</Typography>
    </footer>
  );
}
