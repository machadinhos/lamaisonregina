import { contactsLang, LangEnum } from "@i18n/lang-selector";
import { Box } from "@mui/material";
import GenericPageMainTitle from "@/components/shared-components/Typography/GenericPageMainTitle";
import GenericPageSubTitle from "@/components/shared-components/Typography/GenericPageSubTitle";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import Link from "next/link";

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
      <GenericPageMainTitle>{contactsLang(lang, "title")}</GenericPageMainTitle>
      <section>
        <ContactTypography>{contactsLang(lang, "contacts-text-1")}</ContactTypography>
        <ContactTypography>{contactsLang(lang, "contacts-text-2")}</ContactTypography>
        <Box mt={"4rem"} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
          <ContactTypography isTitle>{contactsLang(lang, "contacts-address-title")}</ContactTypography>
          <Link href={"https://maps.app.goo.gl/hX1nFLUwRSRbtCS29"}>
            <ContactTypography>{contactsLang(lang, "contacts-address-text")}</ContactTypography>
          </Link>
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
          <ContactTypography isTitle>{contactsLang(lang, "contacts-gps-title")}</ContactTypography>
          <Link href={"https://maps.app.goo.gl/hX1nFLUwRSRbtCS29"}>
            <ContactTypography>{contactsLang(lang, "contacts-gps-text")}</ContactTypography>
          </Link>
          <ContactTypography isTitle>{contactsLang(lang, "contacts-telephone-title")}</ContactTypography>
          <ContactTypography>{contactsLang(lang, "contacts-telephone-text")}</ContactTypography>
          <ContactTypography isTitle>{contactsLang(lang, "contacts-email-title")}</ContactTypography>
          <ContactTypography>{contactsLang(lang, "contacts-email-text")}</ContactTypography>
        </Box>
      </section>
    </>
  );
}
