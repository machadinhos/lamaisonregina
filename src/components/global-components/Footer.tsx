import {
  cateringLang,
  contactsLang,
  faqLang,
  galleryLang,
  globalsLang,
  homeLang,
  LangEnum,
  servicesLang,
} from "@i18n/lang-selector";
import { Box, IconButton, List, ListItem, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import Image from "next/image";
import React, { ReactNode } from "react";
import imageSelect from "@images/image-select";

import addressSelect from "../../../addresses/address-select";

import { primaryColor, secondaryColor } from "@/styles/globals";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";

interface Props {
  lang: LangEnum;
}

function SocialMediaListItem({ href, children }: { href: string; children: ReactNode }) {
  return (
    <ListItem sx={{ p: 0 }}>
      <IconButton>
        <Link href={href} target={"_blank"}>
          {children}
        </Link>
      </IconButton>
    </ListItem>
  );
}

const PageListItemLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <IconButton style={{ padding: 0 }}>
      <Link href={href} style={{ fontWeight: 400, color: primaryColor }}>
        <ListItem sx={{ fontSize: { xs: "1.15rem", sm: "1.1rem", lg: "1rem" } }}>{children}</ListItem>
      </Link>
    </IconButton>
  );
};

export default function Footer({ lang }: Props) {
  return (
    <footer
      style={{
        backgroundColor: secondaryColor,
        color: primaryColor,
        padding: "2rem",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "0.75rem",
      }}
    >
      <Box
        bgcolor={primaryColor}
        height={"5px"}
        position={"absolute"}
        sx={{ inset: 0, display: { xs: "none", md: "block" } }}
        width={"100%"}
        zIndex={2432}
      />
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Link href={`/${lang}#header`}>
          <Box position={"relative"} sx={{ aspectRatio: "1.3/1" }} width={"200px"}>
            <Image fill alt={imageSelect.globals.logoPrimary.alt} src={imageSelect.globals.logoPrimary.src} />
          </Box>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: { xs: "100%", md: "90%", lg: "80%", xl: "80%" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <List
          sx={{
            display: "flex",
            mb: { xs: "1rem", md: "auto" },
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: { xs: "center", sm: "flex-start" },
            fontSize: "1.25rem",
            width: "50px",
          }}
        >
          <PageListItemLink href={`/${lang}/#header`}>{homeLang(lang, "label")}</PageListItemLink>
          <PageListItemLink href={`/${lang}/services#header`}>{servicesLang(lang, "label")}</PageListItemLink>
          <PageListItemLink href={`/${lang}/gallery#header`}>{galleryLang(lang, "label")}</PageListItemLink>
          <PageListItemLink href={`/${lang}/catering#header`}>{cateringLang(lang, "label")}</PageListItemLink>
          <PageListItemLink href={`/${lang}/faq#header`}>{faqLang(lang, "label")}</PageListItemLink>
          <PageListItemLink href={`/${lang}/contacts#header`}>{contactsLang(lang, "label")}</PageListItemLink>
        </List>
        <Box alignItems={"center"} display={"flex"} flexDirection={"column"} justifyContent={"center"} mb={"1rem"}>
          <Typography
            sx={{ fontSize: "1.25rem", color: primaryColor, display: { xs: "block", sm: "none", md: "block" } }}
            variant={"h4"}
          >
            {globalsLang(lang, "footer-follow")}
          </Typography>
          <List
            sx={{
              display: "flex",
              flexDirection: { sm: "column", md: "row" },
              alignItems: "center",
            }}
          >
            <SocialMediaListItem href={addressSelect.facebook}>
              <FacebookIcon sx={{ color: primaryColor }} />
            </SocialMediaListItem>
            <SocialMediaListItem href={addressSelect.whatsapp}>
              <WhatsappIcon sx={{ color: primaryColor }} />
            </SocialMediaListItem>
            <SocialMediaListItem href={addressSelect.instagram}>
              <InstagramIcon sx={{ color: primaryColor }} />
            </SocialMediaListItem>
          </List>
        </Box>
      </Box>
      <Box>
        <GenericPageText
          sx={{
            textAlign: "center",
            color: primaryColor,
          }}
        >
          {globalsLang(lang, "footer-rights-reserved-1") + " " + globalsLang(lang, "footer-rights-reserved-2")}
        </GenericPageText>
      </Box>
    </footer>
  );
}
