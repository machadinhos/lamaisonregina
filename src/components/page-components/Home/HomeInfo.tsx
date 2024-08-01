import { homeLang, LangEnum } from "@i18n/lang-selector";
import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import imageSelect from "@images/image-select";

import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";
import SectionContainer from "@/components/shared-components/SectionContainer";

export function HomeInfo({ lang }: { lang: LangEnum }) {
  return (
    <SectionContainer>
      <Box>
        <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }}>
          <Box pr={{ md: "3rem" }} width={{ xs: "100%", md: `${(2 / 3) * 100}%` }}>
            <Box mb={"4rem"}>
              <GenericPageTitle>{homeLang(lang, "home-welcome")}</GenericPageTitle>
            </Box>
            <GenericPageText>{homeLang(lang, "home-text-1")}</GenericPageText>
            <GenericPageText>{homeLang(lang, "home-text-2")}</GenericPageText>
            <GenericPageText>{homeLang(lang, "home-text-3")}</GenericPageText>
            <GenericPageText>{homeLang(lang, "home-text-4")}</GenericPageText>
            <GenericPageText>{homeLang(lang, "home-text-5")}</GenericPageText>
            <GenericPageText>{homeLang(lang, "home-text-6")}</GenericPageText>
          </Box>
          <Box
            height={{ xs: "20rem", md: "auto" }}
            mt={{ xs: "2rem", md: "0" }}
            width={{ xs: "100%", md: `${(1 / 3) * 100}%` }}
          >
            <Box height={"100%"} position={"relative"} width={"100%"}>
              <Image
                fill
                alt={imageSelect.home.infoImage.alt}
                src={imageSelect.home.infoImage.src}
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
}
