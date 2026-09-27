import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import LangSelector from "@/components/layout/Header/LangSelector";
import PagesList from "@/components/layout/Header/PagesList";
import imageSelect from "@/data/images";
import { LangEnum } from "@/i18n";

export default function DesktopHeader({ lang, isHome }: { lang: LangEnum; isHome?: boolean }) {
  return (
    <>
      <Box
        className={"desktop-header"}
        sx={{
          display: { md: "block", xs: "none" },
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
          <Box
            sx={{
              flex: 1,
            }}
          />
          <Box
            sx={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              position: "relative",
            }}
          >
            <IconButton disableRipple>
              <Link href={`/${lang}/`}>
                <Image
                  preload
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <nav>
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
          </nav>
        </Box>
      </Box>
    </>
  );
}
