import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

import SectionContainer from "@/components/ui/SectionContainer";
import GenericPageText from "@/components/ui/Typography/GenericPageText";
import GenericPageTitle from "@/components/ui/Typography/GenericPageTitle";
import imageSelect from "@/data/images";
import { homeLang, LangEnum } from "@/i18n";

export function HomeInfo({ lang }: { lang: LangEnum }) {
  return (
    <SectionContainer>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              pr: { md: "3rem" },
              width: { xs: "100%", md: `${(2 / 3) * 100}%` },
            }}
          >
            <Box
              sx={{
                mb: { xs: "2rem", md: "4rem" },
              }}
            >
              <GenericPageTitle>{homeLang(lang, "home-welcome")}</GenericPageTitle>
            </Box>
            <GenericPageText>{homeLang(lang, "home-text-1")}</GenericPageText>
            <GenericPageText>{homeLang(lang, "home-text-2")}</GenericPageText>
            <GenericPageText>{homeLang(lang, "home-text-3")}</GenericPageText>
            <GenericPageText>{homeLang(lang, "home-text-4")}</GenericPageText>
          </Box>
          <Box
            sx={{
              height: { xs: "20rem", md: "auto" },
              mt: { xs: "1rem", md: "0" },
              width: { xs: "100%", md: `${(1 / 3) * 100}%` },
            }}
          >
            <Box
              sx={{
                height: "100%",
                position: "relative",
                width: "100%",
              }}
            >
              <Image
                fill
                alt={imageSelect.home.infoImage.alt}
                src={imageSelect.home.infoImage.src}
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
}
