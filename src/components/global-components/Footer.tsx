import { contactsLang, galleryLang, globalsLang, homeLang, LangEnum, servicesLang } from "@i18n/lang-selector";
import { Box, List, ListItem, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { primaryColor, secondaryColor } from "@/styles/globals";
import Link from "next/link";
import Image from "next/image";
import React from "react";

interface Props {
  lang: LangEnum;
}

const ListItemLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <Link href={href} style={{ fontWeight: 400 }}>
      <ListItem>{children}</ListItem>
    </Link>
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
            <Image alt={"logo"} src={"/logos/logo_primary.png"} fill />
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
          <ListItemLink href={`/${lang}/#header`}>{homeLang(lang, "title")}</ListItemLink>
          <ListItemLink href={`/${lang}/services#header`}>{servicesLang(lang, "title")}</ListItemLink>
          <ListItemLink href={`/${lang}/gallery#header`}>{galleryLang(lang, "title")}</ListItemLink>
          <ListItemLink href={`/${lang}/catering#header`}>Catering</ListItemLink>
          <ListItemLink href={`/${lang}/faq#header`}>FAQ</ListItemLink>
          <ListItemLink href={`/${lang}/contacts#header`}>{contactsLang(lang, "title")}</ListItemLink>
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
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <ListItem>
              <Link href={"https://www.facebook.com/"}>
                <FacebookIcon />
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"https://api.whatsapp.com/send/?phone=351915581629&text&type=phone_number&app_absent=0"}>
                <WhatsappIcon />
              </Link>
            </ListItem>
            <ListItem>
              <Link href={"https://www.instagram.com/?hl=pt"}>
                <InstagramIcon />
              </Link>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ textAlign: "center", color: primaryColor, display: { xs: "block", sm: "inline" } }}>
          {`${globalsLang(lang, "footer-rights-reserved-1")} `}
        </Typography>
        <Typography sx={{ textAlign: "center", color: primaryColor, display: { xs: "block", sm: "inline" } }}>
          {globalsLang(lang, "footer-rights-reserved-2")}
        </Typography>
      </Box>
    </footer>
  );
}
