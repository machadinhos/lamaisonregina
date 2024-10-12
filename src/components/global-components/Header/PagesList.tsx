import React, { useState, useEffect, useRef } from "react";
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
  onHover,
  isMobile,
}: {
  page: Page;
  currentPage: string;
  isHome?: boolean;
  fontSize?: string;
  toggleMobileDrawer?: () => void;
  onHover: (index: number | null) => void;
  isMobile?: boolean;
}) {
  const isCurrentPage = currentPage.split("#")[0] === page.href.split("/")[2];

  return (
    <Link
      href={page.href}
      onMouseEnter={() =>
        onHover(getPagesList(page.href.split("/")[1] as LangEnum).findIndex((p) => p.href === page.href))
      }
      onMouseLeave={() => onHover(null)}
    >
      <ListItem sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box
          alignItems={"center"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          onClick={toggleMobileDrawer}
        >
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
          {!isMobile || (
            <Box
              sx={{
                height: 2,
                backgroundColor: isCurrentPage ? primaryColor : "transparent",
                width: isCurrentPage ? "100%" : 0,
                transition: "width 0.3s",
                marginTop: "2px",
              }}
            />
          )}
        </Box>
      </ListItem>
    </Link>
  );
}

export default function PagesList({
  lang,
  sx,
  isHome,
  fontSize,
  toggleMobileDrawer,
  isMobile,
}: {
  lang: LangEnum;
  sx?: SxProps<Theme>;
  isHome?: boolean;
  fontSize?: string;
  toggleMobileDrawer?: () => void;
  isMobile?: boolean;
}) {
  const router = useRouter();
  const currentPage = router.asPath.split("/")[2] || "";
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const index = getPagesList(lang).findIndex((page) => page.href.split("/")[2] === currentPage);

    setActiveIndex(index !== -1 ? index : 0);
  }, [currentPage, lang]);

  const handleHover = (index: number | null) => {
    setHoverIndex(index);
  };

  const getUnderlineStyle = () => {
    if (!listRef.current) return {};
    const items = listRef.current.children;
    const currentItem = items[hoverIndex !== null ? hoverIndex : activeIndex] as HTMLElement;

    if (!currentItem) return {};

    const itemRect = currentItem.getBoundingClientRect();
    const listRect = listRef.current.getBoundingClientRect();

    return {
      left: `${itemRect.left - listRect.left}px`,
      width: `${itemRect.width}px`,
    };
  };

  return (
    <Box position="relative">
      <List ref={listRef} style={{ paddingBottom: 0, marginBottom: 0, userSelect: "none" }} sx={{ ...sx }}>
        {getPagesList(lang).map((page, index) => (
          <HeaderListItem
            key={index}
            currentPage={currentPage}
            fontSize={fontSize}
            isHome={isHome}
            isMobile={isMobile}
            page={page}
            toggleMobileDrawer={toggleMobileDrawer}
            onHover={handleHover}
          />
        ))}
      </List>
      {isMobile || (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            height: 2,
            backgroundColor: primaryColor,
            transition: "all 0.3s ease-in-out",
            p: 0,
            m: 0,
            pointerEvents: "none",
            ...getUnderlineStyle(),
          }}
        />
      )}
    </Box>
  );
}
