import { LangEnum } from "@i18n/lang-selector";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import React from "react";
import imageSelect from "@images/image-select";
import Link from "next/link";

import PagesList from "@/components/global-components/Header/PagesList";
import LangSelector from "@/components/global-components/Header/LangSelector";

export default function DesktopHeader({ lang, isHome }: { lang: LangEnum; isHome?: boolean }) {
  return (
    <Box
      className={"desktop-header"}
      sx={{
        padding: "2rem 5rem 0 5rem",
        position: isHome ? "absolute" : "relative",
        marginBottom: "2.75rem",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1300,
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box flex={1} />
        <Box display={"flex"} flex={1} justifyContent={"center"} position={"relative"}>
          <IconButton sx={{ "&:hover": { backgroundColor: "transparent" } }}>
            <Link href={`/${lang}/`}>
              <Image
                priority
                alt={imageSelect.globals.logoPrimary.alt}
                height={315 / 2}
                src={imageSelect.globals.logoPrimary.src}
                style={{
                  objectFit: "contain",
                }}
                width={412 / 2}
              />
            </Link>
          </IconButton>
        </Box>
        <LangSelector fontSize={"1rem"} isHome={isHome} lang={lang} sx={{ flex: 1, justifyContent: "flex-end" }} />
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <PagesList
          fontSize={"1rem"}
          isHome={isHome}
          lang={lang}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > *": {
              flex: 1,
            },
          }}
        />
      </Box>
    </Box>
  );
}
