import { homeLang, LangEnum } from "@i18n/lang-selector";
import React from "react";
import { Box } from "@mui/material";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import GenericPageMainTitle from "@/components/shared-components/Typography/GenericPageMainTitle";
import GenericPageSubTitle from "@/components/shared-components/Typography/GenericPageSubTitle";
import Image from "next/image";

export function HomeInfo({ lang }: { lang: LangEnum }) {
  return (
    <section>
      <Box pt={{ xs: "2rem", md: "0" }}>
        <Box mb={"4rem"}>
          <GenericPageSubTitle sx={{ textAlign: "center", fontWeight: "200", fontSize: "2rem" }}>
            {homeLang(lang, "home-welcome-1")}
          </GenericPageSubTitle>
          <GenericPageMainTitle>La Maison Regina</GenericPageMainTitle>
          <GenericPageSubTitle sx={{ textAlign: "center", fontWeight: "200", fontSize: "2rem" }}>
            {homeLang(lang, "home-welcome-2")}
          </GenericPageSubTitle>
        </Box>
        <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }}>
          <Box width={{ xs: "100%", md: `${(2 / 3) * 100}%` }}>
            <GenericPageText>{homeLang(lang, "home-text-1")}</GenericPageText>
            <GenericPageText>{homeLang(lang, "home-text-2")}</GenericPageText>
            <GenericPageText>{homeLang(lang, "home-text-3")}</GenericPageText>
            <GenericPageText>{homeLang(lang, "home-text-4")}</GenericPageText>
            <GenericPageText>{homeLang(lang, "home-text-5")}</GenericPageText>
            <GenericPageText>{homeLang(lang, "home-text-6")}</GenericPageText>
          </Box>
          <Box ml={"1rem"} width={{ xs: "100%", md: `${(1 / 3) * 100}%` }} height={"auto"} mt={{ xs: "2rem", md: "0" }}>
            <Box height={"100%"} width={"100%"} position={"relative"}>
              <Image
                src="https://cdn.europosters.eu/image/750/posters/noddy-solo-i27845.jpg"
                alt="home-info-image"
                style={{ objectFit: "cover" }}
                fill
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
