import { contactsLang, galleryLang, homeLang, LangEnum, servicesLang } from "@i18n/lang-selector";
import { Box, IconButton, List, ListItem, Theme } from "@mui/material";
import Link from "next/link";
import { SxProps } from "@mui/material/styles";
import { useRouter } from "next/router";
import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";

interface Page {
  href: string;
  text: string;
}

export const getPagesList = (lang: LangEnum): Page[] => [
  { text: homeLang(lang, "title"), href: `/${lang}/` },
  { text: servicesLang(lang, "title"), href: `/${lang}/services/` },
  { text: galleryLang(lang, "title"), href: `/${lang}/gallery/` },
  { text: "Catering", href: `/${lang}/catering/` },
  { text: "FAQ", href: `/${lang}/faq/` },
  { text: contactsLang(lang, "title"), href: `/${lang}/contacts/` },
];

function HeaderListItem({
  page,
  currentPage,
  isHome,
  fontSize,
}: {
  page: Page;
  currentPage: string;
  isHome?: boolean;
  fontSize?: string;
}) {
  return (
    <ListItem sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          "&:hover": {
            "& > div": {
              width: "100%",
            },
          },
        }}
      >
        <IconButton sx={{ "&:hover": { backgroundColor: "transparent" } }}>
          <Link href={page.href}>
            <GenericPageTitle
              sx={{ mb: 0, ...(fontSize ? { fontSize: fontSize } : {}), color: isHome ? "white" : "auto" }}
            >
              {page.text}
            </GenericPageTitle>
          </Link>
        </IconButton>
        <Box
          sx={{
            height: 2,
            backgroundColor: isHome ? "white" : "black",
            width: currentPage === page.href.split("/")[2] ? "100%" : 0,
            transition: "width 0.3s",
            marginTop: 0,
          }}
        />
      </Box>
    </ListItem>
  );
}

export default function PagesList({
  lang,
  sx,
  isHome,
  fontSize,
}: {
  lang: LangEnum;
  sx?: SxProps<Theme>;
  isHome?: boolean;
  fontSize?: string;
}) {
  const currentPage = useRouter().asPath.split("/")[2] || "";

  return (
    <List sx={{ ...sx }}>
      {getPagesList(lang).map((page, index) => (
        <HeaderListItem fontSize={fontSize} isHome={isHome} currentPage={currentPage} key={index} page={page} />
      ))}
    </List>
  );
}
