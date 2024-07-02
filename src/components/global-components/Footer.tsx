import { contactsLang, galleryLang, globalsLang, homeLang, LangEnum, servicesLang } from "@i18n/lang-selector";
import { Box, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { primaryColor, secondaryColor } from "@/styles/globals";
import Link from "next/link";

interface Props {
  lang: LangEnum;
}

export default function Footer({ lang }: Props) {
  return (
    <footer
      style={{
        backgroundColor: secondaryColor,
        color: primaryColor,
        padding: "1rem",
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
          <Box
            position={"relative"}
            width={{ xs: "150px", sm: "200px", md: "250px", lg: "300px", xl: "350px" }}
            sx={{ aspectRatio: "1.3/1" }}
          >
            <Image alt={"logo"} src={"/logo_primary.png"} fill />
          </Box>
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          width: { xs: "100%", md: "90%", lg: "80%", xl: "60%" },
          justifyContent: "space-between",
          "& > *": {
            flex: { sm: "0 0 150px", md: "0 0 200px", lg: "0 0 250px", xl: "0 0 300px" },
            width: { sm: "150px", md: "200px", lg: "250px", xl: "300px" },
          },
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            fontSize: "1.5rem",
          }}
        >
          <Link href={`/${lang}/#header`}>
            <ListItem>{homeLang(lang, "title")}</ListItem>
          </Link>
          <Link href={`/${lang}/services#header`}>
            <ListItem>{servicesLang(lang, "title")}</ListItem>
          </Link>
          <Link href={`/${lang}/catering#header`}>
            <ListItem>Catering</ListItem>
          </Link>
          <Link href={`/${lang}/gallery#header`}>
            <ListItem>{galleryLang(lang, "title")}</ListItem>
          </Link>
          <Link href={`/${lang}/contacts#header`}>
            <ListItem>{contactsLang(lang, "title")}</ListItem>
          </Link>
          <Link href={`/${lang}/faq#header`}>
            <ListItem>FAQ</ListItem>
          </Link>
        </List>
        <Box mb={"1rem"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
          <Typography sx={{ color: primaryColor, display: { xs: "block", sm: "none", md: "block" } }} variant={"h4"}>
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
              <Link href={""}>
                <FacebookIcon />
              </Link>
            </ListItem>
            <ListItem>
              <Link href={""}>
                <WhatsappIcon />
              </Link>
            </ListItem>
            <ListItem>
              <Link href={""}>
                <InstagramIcon />
              </Link>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Typography sx={{ textAlign: "center", color: primaryColor }}>
        {globalsLang(lang, "footer-rights-reserved")}
      </Typography>
    </footer>
  );
}
