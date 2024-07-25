import { contactsLang, LangEnum } from "@i18n/lang-selector";
import { Box } from "@mui/material";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import Link from "next/link";
import SectionContainer from "@/components/shared-components/SectionContainer";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import { ReactNode } from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import RoomSharpIcon from "@mui/icons-material/RoomSharp";
import { primaryColor } from "@/styles/globals";

interface Props {
  lang: LangEnum;
}

function ContactTypography({ children }: { children: string }) {
  return <GenericPageText sx={{ textAlign: "center", mb: "2rem" }}>{children}</GenericPageText>;
}

function ContactIcon({ children }: { children: ReactNode }) {
  return (
    <Box color={primaryColor} mt={"3rem"} display={"flex"} justifyContent={"center"}>
      {children}
    </Box>
  );
}

export default function Contacts({ lang }: Props) {
  return (
    <>
      <SectionContainer>
        <ContactTypography>{contactsLang(lang, "contacts-text-1")}</ContactTypography>
        <ContactTypography>{contactsLang(lang, "contacts-text-2")}</ContactTypography>
        <Box mt={"2rem"} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
          <ContactIcon>
            <LocalPhoneRoundedIcon />
          </ContactIcon>
          <ContactTypography>{contactsLang(lang, "contacts-telephone-text")}</ContactTypography>
          <ContactIcon>
            <EmailRoundedIcon />
          </ContactIcon>
          <ContactTypography>{contactsLang(lang, "contacts-email-text")}</ContactTypography>
          <ContactIcon>
            <ExploreRoundedIcon />
          </ContactIcon>
          <Link href={"https://maps.app.goo.gl/hX1nFLUwRSRbtCS29"}>
            <ContactTypography>{contactsLang(lang, "contacts-address-text")}</ContactTypography>
          </Link>
          <Box width={"100%"} display={"flex"} justifyContent={"center"}>
            <Box width={{ xs: "100%", md: "70%" }} sx={{ aspectRatio: "2/1" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d763.2969855168978!2d-8.804499708003998!3d40.071219679959604!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDA0JzE2LjEiTiA4wrA0OCcxNS44Ilc!5e0!3m2!1spt-PT!2spt!4v1719874529334!5m2!1spt-PT!2spt"
                style={{ border: 0, width: "100%", height: "100%" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Box>
          <ContactIcon>
            <RoomSharpIcon />
          </ContactIcon>
          <Box display={"flex"} justifyContent={"center"}>
            <Link style={{ width: "fit-content" }} href={"https://maps.app.goo.gl/hX1nFLUwRSRbtCS29"}>
              <ContactTypography>{contactsLang(lang, "contacts-gps-text")}</ContactTypography>
            </Link>
          </Box>
        </Box>
      </SectionContainer>
    </>
  );
}
