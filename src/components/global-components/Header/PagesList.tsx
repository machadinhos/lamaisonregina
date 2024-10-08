import {
  cateringLang,
  contactsLang,
  faqLang,
  galleryLang,
  homeLang,
  LangEnum,
  servicesLang,
} from "@i18n/lang-selector";
import { Box, List, ListItem, Theme } from "@mui/material";
import Link from "next/link";
import { SxProps } from "@mui/material/styles";
import { useRouter } from "next/router";

import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";
import { primaryColor } from "@/styles/globals";

interface Page {
  href: string;
  text: string;
}

export const getPagesList = (lang: LangEnum): Page[] => [
  { text: homeLang(lang, "label"), href: `/${lang}/` },
  { text: servicesLang(lang, "label"), href: `/${lang}/services/` },
  { text: galleryLang(lang, "label"), href: `/${lang}/gallery/` },
  { text: cateringLang(lang, "label"), href: `/${lang}/catering/` },
  { text: faqLang(lang, "label"), href: `/${lang}/faq/` },
  { text: contactsLang(lang, "label"), href: `/${lang}/contacts/` },
];

function HeaderListItem({
  page,
  currentPage,
  isHome,
  fontSize,
  toggleMobileDrawer,
}: {
  page: Page;
  currentPage: string;
  isHome?: boolean;
  fontSize?: string;
  toggleMobileDrawer?: () => void;
}) {
  const isCurrentPage = currentPage.split("#")[0] === page.href.split("/")[2];

  return (
    <ListItem sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        sx={{
          "&:hover": {
            "& > div": {
              width: "100%",
            },
          },
        }}
        onClick={toggleMobileDrawer}
      >
        <Link href={page.href}>
          <GenericPageTitle
            noLine
            sx={{
              mt: 0,
              mb: 0,
              ...(fontSize ? { fontSize: fontSize } : {}),
              transition: "all 0.5s ease-in-out",
              color: isCurrentPage ? primaryColor : isHome ? "white" : "auto",
            }}
          >
            {page.text}
          </GenericPageTitle>
        </Link>
        <Box
          sx={{
            height: 2,
            backgroundColor: isCurrentPage ? primaryColor : isHome ? "white" : "black",
            width: isCurrentPage ? "100%" : 0,
            transition: "width 0.3s",
            marginTop: "2px",
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
  toggleMobileDrawer,
}: {
  lang: LangEnum;
  sx?: SxProps<Theme>;
  isHome?: boolean;
  fontSize?: string;
  toggleMobileDrawer?: () => void;
}) {
  const currentPage = useRouter().asPath.split("/")[2] || "";

  return (
    <List sx={{ ...sx }}>
      {getPagesList(lang).map((page, index) => (
        <HeaderListItem
          key={index}
          currentPage={currentPage}
          fontSize={fontSize}
          isHome={isHome}
          page={page}
          toggleMobileDrawer={toggleMobileDrawer}
        />
      ))}
    </List>
  );
}
