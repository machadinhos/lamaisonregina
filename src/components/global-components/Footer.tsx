import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Box, Grid, List, ListItem, ListSubheader, Typography, useTheme } from "@mui/material";
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
      }}
    >
      <Box
        sx={{
          display: "flex",
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
      <Grid container sx={{ justifyContent: "space-between" }}>
        <List sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
          <Link href={`/${lang}/`}>
            <ListItem>{selectLang(lang, "home")}</ListItem>
          </Link>
          <Link href={`/${lang}/services`}>
            <ListItem>{selectLang(lang, "services")}</ListItem>
          </Link>
          <Link href={`/${lang}/catering`}>
            <ListItem>Catering</ListItem>
          </Link>
          <Link href={`/${lang}/gallery`}>
            <ListItem>{selectLang(lang, "gallery")}</ListItem>
          </Link>
          <Link href={`/${lang}/contacts`}>
            <ListItem>{selectLang(lang, "contacts")}</ListItem>
          </Link>
          <Link href={`/${lang}/faq`}>
            <ListItem>FAQ</ListItem>
          </Link>
        </List>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Typography sx={{ color: primaryColor }}>{selectLang(lang, "footer-follow")}</Typography>
          <List sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
            <ListItem>
              <FacebookIcon />
            </ListItem>
            <ListItem>
              <WhatsappIcon />
            </ListItem>
            <ListItem>
              <InstagramIcon />
            </ListItem>
          </List>
        </Box>
      </Grid>
      <Typography sx={{ textAlign: "center", color: primaryColor }}>
        {selectLang(lang, "footer-rights-reserved")}
      </Typography>
    </footer>
  );
}
