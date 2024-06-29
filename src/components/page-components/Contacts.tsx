import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Typography } from "@mui/material";
import GenericPageMainTitle from "@/components/shared-components/GenericPageMainTitle";

interface Props {
  lang: LangEnum;
}

function ContactTypography({ children, variant }: { variant: "h4" | "body1"; children: string }) {
  return (
    <Typography variant={variant} sx={{ textAlign: "center" }}>
      {children}
    </Typography>
  );
}

export default function Contacts({ lang }: Props) {
  return (
    <>
      <GenericPageMainTitle>{selectLang(lang, "contacts")}</GenericPageMainTitle>
      <section>
        <ContactTypography variant="body1">{selectLang(lang, "contacts-text-1")}</ContactTypography>
        <ContactTypography variant="body1">{selectLang(lang, "contacts-text-2")}</ContactTypography>
        <ContactTypography variant="h4">{selectLang(lang, "contacts-address-title")}</ContactTypography>
        <ContactTypography variant="body1">{selectLang(lang, "contacts-address-text")}</ContactTypography>
        <ContactTypography variant="h4">{selectLang(lang, "contacts-gps-title")}</ContactTypography>
        <ContactTypography variant="body1">{selectLang(lang, "contacts-gps-text")}</ContactTypography>
        <ContactTypography variant="h4">{selectLang(lang, "contacts-telephone-title")}</ContactTypography>
        <ContactTypography variant="body1">{selectLang(lang, "contacts-telephone-text")}</ContactTypography>
        <ContactTypography variant="h4">{selectLang(lang, "contacts-email-title")}</ContactTypography>
        <ContactTypography variant="body1">{selectLang(lang, "contacts-email-text")}</ContactTypography>
      </section>
    </>
  );
}
