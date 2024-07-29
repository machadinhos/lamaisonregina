import { contactsLang, galleryLang, globalsLang, homeLang, LangEnum, servicesLang } from "@i18n/lang-selector";
import { Box, IconButton, List, ListItem, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { primaryColor, secondaryColor } from "@/styles/globals";
import Link from "next/link";
import Image from "next/image";
import React, { ReactNode } from "react";
import imageSelect from "@images/image-select";
import addressSelect from "../../../addresses/address-select";

interface Props {
  lang: LangEnum;
}

function SocialMediaListItem({ href, children }: { href: string; children: ReactNode }) {
  return (
    <ListItem sx={{ p: 0 }}>
      <IconButton>
        <Link href={href}>{children}</Link>
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
      }}
    >
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
          <Box position={"relative"} width={"200px"} sx={{ aspectRatio: "1.3/1" }}>
            <Image alt={imageSelect.globals.logoPrimary.alt} src={imageSelect.globals.logoPrimary.src} fill />
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
            alignItems: { xs: "center", md: "flex-start" },
            fontSize: "1.25rem",
            width: "50px",
          }}
        >
          <PageListItemLink href={`/${lang}/#header`}>{homeLang(lang, "title")}</PageListItemLink>
          <PageListItemLink href={`/${lang}/services#header`}>{servicesLang(lang, "title")}</PageListItemLink>
          <PageListItemLink href={`/${lang}/gallery#header`}>{galleryLang(lang, "title")}</PageListItemLink>
          <PageListItemLink href={`/${lang}/catering#header`}>Catering</PageListItemLink>
          <PageListItemLink href={`/${lang}/faq#header`}>FAQ</PageListItemLink>
          <PageListItemLink href={`/${lang}/contacts#header`}>{contactsLang(lang, "title")}</PageListItemLink>
        </List>
        <Box mb={"1rem"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
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
              // justifyContent: "center",
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
        <Typography
          sx={{ fontSize: "0.75rem", textAlign: "center", color: primaryColor, display: { xs: "block", sm: "inline" } }}
        >
          {globalsLang(lang, "footer-rights-reserved-1") + " "}
        </Typography>
        <Typography
          sx={{ fontSize: "0.75rem", textAlign: "center", color: primaryColor, display: { xs: "block", sm: "inline" } }}
        >
          {globalsLang(lang, "footer-rights-reserved-2")}
        </Typography>
      </Box>
    </footer>
  );
}
