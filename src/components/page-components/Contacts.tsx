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
import CopyButton from "@/components/shared-components/CopyButton";
import addressSelect from "../../../addresses/address-select";

interface Props {
  lang: LangEnum;
}

function ContactTextSection({ children, link, lang }: { children: string; link: string; lang: LangEnum }) {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
      justifyItems={"center"}
    >
      <Link href={link} target={"_blank"}>
        <GenericPageText sx={{ textAlign: "center", m: 0, p: 0 }}>{children}</GenericPageText>
      </Link>
      <CopyButton lang={lang} textToCopy={children} />
    </Box>
  );
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
    <SectionContainer>
      <GenericPageText sx={{ textAlign: "center" }}>{contactsLang(lang, "contacts-text-1")}</GenericPageText>
      <GenericPageText sx={{ textAlign: "center" }}>{contactsLang(lang, "contacts-text-2")}</GenericPageText>
      <Box mt={"2rem"} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <ContactIcon>
          <LocalPhoneRoundedIcon />
        </ContactIcon>
        <ContactTextSection lang={lang} link={""}>
          {contactsLang(lang, "contacts-telephone-text")}
        </ContactTextSection>
        <ContactIcon>
          <EmailRoundedIcon />
        </ContactIcon>
        <ContactTextSection lang={lang} link={`https://mail.google.com/mail?view=cm&fs=1&to=${addressSelect.email}`}>
          {addressSelect.email}
        </ContactTextSection>
        <ContactIcon>
          <ExploreRoundedIcon />
        </ContactIcon>
        <ContactTextSection lang={lang} link={addressSelect.googleMaps}>
          {contactsLang(lang, "contacts-address-text")}
        </ContactTextSection>
        <Box width={"100%"} display={"flex"} justifyContent={"center"}>
          <Box width={{ xs: "100%", md: "70%" }} sx={{ aspectRatio: "2/1" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d763.2969855168978!2d-8.804499708003998!3d40.071219679959604!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDA0JzE2LjEiTiA4wrA0OCcxNS44Ilc!5e0!3m2!1spt-PT!2spt!4v1719874529334!5m2!1spt-PT!2spt"
              style={{ marginTop: "1rem", border: 0, width: "100%", height: "100%" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Box>
        <ContactIcon>
          <RoomSharpIcon />
        </ContactIcon>
        <Box display={"flex"} justifyContent={"center"}>
          <ContactTextSection lang={lang} link={addressSelect.googleMaps}>
            {contactsLang(lang, "contacts-gps-text")}
          </ContactTextSection>
        </Box>
      </Box>
    </SectionContainer>
  );
}
