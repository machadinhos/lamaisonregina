import { LangEnum, selectLang } from "@i18n/lang-selector";
import { List, ListItem, Typography } from "@mui/material";

interface Props {
  lang: LangEnum;
}

export default function Footer({ lang }: Props) {
  return (
    <footer>
      <nav>
        <List sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
          <ListItem>
            <a href={`/${lang}/`}>{selectLang(lang, "home")}</a>
          </ListItem>
          <ListItem>
            <a href={`/${lang}/services`}>{selectLang(lang, "services")}</a>
          </ListItem>
          <ListItem>
            <a href={`/${lang}/gallery`}>{selectLang(lang, "gallery")}</a>
          </ListItem>
          <ListItem>
            <a href={`/${lang}/contacts`}>{selectLang(lang, "contacts")}</a>
          </ListItem>
          <ListItem>
            <a href={`/${lang}/faq`}>FAQ</a>
          </ListItem>
        </List>
      </nav>
      <Typography>{selectLang(lang, "footer-follow")}</Typography>
      <Typography>{selectLang(lang, "footer-rights-reserved")}</Typography>
    </footer>
  );
}
