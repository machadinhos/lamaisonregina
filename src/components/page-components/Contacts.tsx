import { contactsLang, LangEnum } from "@i18n/lang-selector";
import { Box } from "@mui/material";
import Link from "next/link";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import { ReactNode } from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import RoomSharpIcon from "@mui/icons-material/RoomSharp";

import addressSelect from "../../../addresses/address-select";

import { primaryColor } from "@/styles/globals";
import CopyButton from "@/components/shared-components/CopyButton";
import SectionContainer from "@/components/shared-components/SectionContainer";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";

interface Props {
  lang: LangEnum;
}

function ContactTextSection({ children, link, lang }: { children: string; link?: string; lang: LangEnum }) {
  const gPText = <GenericPageText sx={{ textAlign: "center", m: 0, p: 0 }}>{children}</GenericPageText>;

  return (
    <Box
      alignContent={"center"}
      alignItems={"center"}
      display={"flex"}
      justifyContent={"center"}
      justifyItems={"center"}
    >
      {link ? (
        <Link href={link} target={"_blank"}>
          {gPText}
        </Link>
      ) : (
        gPText
      )}

      <CopyButton lang={lang} textToCopy={children} />
    </Box>
  );
}

function ContactIcon({ children }: { children: ReactNode }) {
  return (
    <Box color={primaryColor} display={"flex"} justifyContent={"center"} mt={"3rem"}>
      {children}
    </Box>
  );
}

export default function Contacts({ lang }: Props) {
  return (
    <SectionContainer>
      <GenericPageText sx={{ textAlign: "center" }}>{contactsLang(lang, "contacts-text-1")}</GenericPageText>
      <GenericPageText sx={{ textAlign: "center" }}>{contactsLang(lang, "contacts-text-2")}</GenericPageText>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} mt={"2rem"}>
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
        <ContactTextSection lang={lang} link={addressSelect.googleMapsAddress}>
          {contactsLang(lang, "contacts-address-text")}
        </ContactTextSection>
        <Box display={"flex"} justifyContent={"center"} width={"100%"}>
          <Box sx={{ aspectRatio: "2/1" }} width={{ xs: "100%", md: "70%" }}>
            <iframe
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.358403898703!2d-8.807001023470418!3d40.07083457661834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd22473b5f2eb8c3%3A0x2f1a52ee0257120!2sR.%20Santinhos%2027%2C%203090-495!5e0!3m2!1sen!2spt!4v1728078872415!5m2!1sen!2spt"
              style={{ marginTop: "1rem", border: 0, width: "100%", height: "100%" }}
              title={"Google Maps"}
            />
          </Box>
        </Box>
        <ContactIcon>
          <RoomSharpIcon />
        </ContactIcon>
        <Box display={"flex"} justifyContent={"center"}>
          <ContactTextSection lang={lang} link={addressSelect.googleMapsCoords}>
            {contactsLang(lang, "contacts-gps-text")}
          </ContactTextSection>
        </Box>
      </Box>
    </SectionContainer>
  );
}
