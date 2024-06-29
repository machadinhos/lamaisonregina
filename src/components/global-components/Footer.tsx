import { LangEnum, selectLang } from "@i18n/lang-selector";
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
        <Link href={`/${lang}/`}>
          <Image alt={"logo"} src={"/logo.png"} width={150} height={150} />
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          width: { xs: "100%", md: "90%", lg: "80%", xl: "60%" },
          justifyContent: "space-between",
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
            <ListItem>{selectLang(lang, "home")}</ListItem>
          </Link>
          <Link href={`/${lang}/services#header`}>
            <ListItem>{selectLang(lang, "services")}</ListItem>
          </Link>
          <Link href={`/${lang}/catering#header`}>
            <ListItem>Catering</ListItem>
          </Link>
          <Link href={`/${lang}/gallery#header`}>
            <ListItem>{selectLang(lang, "gallery")}</ListItem>
          </Link>
          <Link href={`/${lang}/contacts#header`}>
            <ListItem>{selectLang(lang, "contacts")}</ListItem>
          </Link>
          <Link href={`/${lang}/faq#header`}>
            <ListItem>FAQ</ListItem>
          </Link>
        </List>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Typography sx={{ color: primaryColor }} variant={"h4"}>
            {selectLang(lang, "footer-follow")}
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
        {selectLang(lang, "footer-rights-reserved")}
      </Typography>
    </footer>
  );
}
