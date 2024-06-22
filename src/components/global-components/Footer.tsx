import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Box, Grid, List, ListItem, ListSubheader, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { primaryColor, secondaryColor } from "@/styles/globals";

interface Props {
  lang: LangEnum;
}

export default function Footer({ lang }: Props) {
  return (
    <footer style={{ backgroundColor: secondaryColor, color: primaryColor, padding: "1rem", position: "relative" }}>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <List sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
          <ListItem>
            <a href={`/${lang}/`}>{selectLang(lang, "home")}</a>
          </ListItem>
          <ListItem>
            <a href={`/${lang}/services`}>{selectLang(lang, "services")}</a>
          </ListItem>
          <ListItem>
            <a href={`/${lang}/gallery`}>{selectLang(lang, "gallery")}</a>
          </ListItem>
          <ListItem>
            <a href={`/${lang}/contacts`}>{selectLang(lang, "contacts")}</a>
          </ListItem>
          <ListItem>
            <a href={`/${lang}/faq`}>FAQ</a>
          </ListItem>
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
        <Image alt={"logo"} src={"/logo.png"} width={150} height={150} />
      </Box>
      <Typography sx={{ textAlign: "center", color: primaryColor }}>
        {selectLang(lang, "footer-rights-reserved")}
      </Typography>
    </footer>
  );
}
