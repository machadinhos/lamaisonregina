import { LangEnum } from "@i18n/lang-selector";
import LangSelector from "@/components/global-components/Header/LangSelector";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import PagesList from "@/components/global-components/Header/PagesList";
import imageSelect from "@images/ImageSelect";
import Link from "next/link";

export default function DesktopHeader({ lang, isHome }: { lang: LangEnum; isHome?: boolean }) {
  return (
    <header
      id={"header"}
      style={{
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
        <Box flex={1} display={"flex"} justifyContent={"center"} position={"relative"} height={"7rem"}>
          <Link href={`/${lang}/`}>
            <Image
              priority
              src={imageSelect.globals.logoPrimary.src}
              alt={imageSelect.globals.logoPrimary.alt}
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </Link>
        </Box>
        <LangSelector sx={{ flex: 1, justifyContent: "flex-end" }} lang={lang} isHome={isHome} fontSize={"1rem"} />
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <PagesList
          fontSize={"1rem"}
          lang={lang}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > *": {
              flex: 1,
            },
          }}
          isHome={isHome}
        />
      </Box>
    </header>
  );
}
