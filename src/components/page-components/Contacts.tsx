import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Box } from "@mui/material";
import GenericPageMainTitle from "@/components/shared-components/GenericPageMainTitle";
import GenericPageSubTitle from "@/components/shared-components/GenericPageSubTitle";
import GenericPageText from "@/components/shared-components/GenericPageText";

interface Props {
  lang: LangEnum;
}

function ContactTypography({ children, isTitle }: { isTitle?: boolean; children: string }) {
  return isTitle ? (
    <GenericPageSubTitle sx={{ textAlign: "center" }}>{children}</GenericPageSubTitle>
  ) : (
    <GenericPageText sx={{ textAlign: "center" }}>{children}</GenericPageText>
  );
}

export default function Contacts({ lang }: Props) {
  return (
    <>
      <GenericPageMainTitle>{selectLang(lang, "contacts")}</GenericPageMainTitle>
      <section>
        <ContactTypography>{selectLang(lang, "contacts-text-1")}</ContactTypography>
        <ContactTypography>{selectLang(lang, "contacts-text-2")}</ContactTypography>
        <Box mt={"4rem"}>
          <ContactTypography isTitle>{selectLang(lang, "contacts-address-title")}</ContactTypography>
          <ContactTypography>{selectLang(lang, "contacts-address-text")}</ContactTypography>
          <ContactTypography isTitle>{selectLang(lang, "contacts-gps-title")}</ContactTypography>
          <ContactTypography>{selectLang(lang, "contacts-gps-text")}</ContactTypography>
          <ContactTypography isTitle>{selectLang(lang, "contacts-telephone-title")}</ContactTypography>
          <ContactTypography>{selectLang(lang, "contacts-telephone-text")}</ContactTypography>
          <ContactTypography isTitle>{selectLang(lang, "contacts-email-title")}</ContactTypography>
          <ContactTypography>{selectLang(lang, "contacts-email-text")}</ContactTypography>
        </Box>
      </section>
    </>
  );
}
