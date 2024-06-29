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
        <Box mt={"4rem"} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
          <ContactTypography isTitle>{selectLang(lang, "contacts-address-title")}</ContactTypography>
          <ContactTypography>{selectLang(lang, "contacts-address-text")}</ContactTypography>
          <Box width={"100%"} display={"flex"} justifyContent={"center"}>
            <Box width={{ xs: "100%", sm: "70%", md: "50%", lg: "30%", xl: "30%" }} sx={{ aspectRatio: "1/1" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d316.05314156281565!2d-8.804320165760586!3d40.07111548468533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDA0JzE2LjEiTiA4wrA0OCcxNS44Ilc!5e1!3m2!1spt-PT!2spt!4v1719690917033!5m2!1spt-PT!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
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
