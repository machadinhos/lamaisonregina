import { homeLang, LangEnum } from "@i18n/lang-selector";
import React from "react";
import { Box } from "@mui/material";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import GenericPageMainTitle from "@/components/shared-components/Typography/GenericPageMainTitle";

export function HomeInfo({ lang }: { lang: LangEnum }) {
  return (
    <Box pt={{ xs: "2rem", md: "0" }}>
      <Box mb={"4rem"}>
        <GenericPageText sx={{ textAlign: "center" }}>{homeLang(lang, "home-welcome-1")}</GenericPageText>
        <GenericPageMainTitle>La Maison Regina</GenericPageMainTitle>
        <GenericPageText sx={{ textAlign: "center" }}>{homeLang(lang, "home-welcome-2")}</GenericPageText>
      </Box>
      <GenericPageText>{homeLang(lang, "home-text-1")}</GenericPageText>
      <GenericPageText>{homeLang(lang, "home-text-2")}</GenericPageText>
      <GenericPageText>{homeLang(lang, "home-text-3")}</GenericPageText>
      <GenericPageText>{homeLang(lang, "home-text-4")}</GenericPageText>
    </Box>
  );
}
