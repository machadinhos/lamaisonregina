import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Typography } from "@mui/material";

interface Props {
  lang: LangEnum;
}

export default function Contacts({ lang }: Props) {
  return (
    <>
      <section>
        <Typography variant="body1">{selectLang(lang, "contacts-text-1")}</Typography>
        <Typography variant="body1">{selectLang(lang, "contacts-text-2")}</Typography>
      </section>
      <section>
        <Typography variant="h4">{selectLang(lang, "contacts-address-title")}</Typography>
        <Typography variant="body1">{selectLang(lang, "contacts-address-text")}</Typography>
        <Typography variant="h4">{selectLang(lang, "contacts-gps-title")}</Typography>
        <Typography variant="body1">{selectLang(lang, "contacts-gps-text")}</Typography>
        <Typography variant="h4">{selectLang(lang, "contacts-telephone-title")}</Typography>
        <Typography variant="body1">{selectLang(lang, "contacts-telephone-text")}</Typography>
        <Typography variant="h4">{selectLang(lang, "contacts-email-title")}</Typography>
        <Typography variant="body1">{selectLang(lang, "contacts-email-text")}</Typography>
      </section>
    </>
  );
}
