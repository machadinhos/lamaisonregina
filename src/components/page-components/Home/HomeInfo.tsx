import { LangEnum, selectLang } from "@i18n/lang-selector";
import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import GenericPageText from "@/components/shared-components/GenericPageText";

export function HomeInfo({ lang }: { lang: LangEnum }) {
  const [showText, setShowText] = useState(false);
  return (
    <Box pt={{ xs: "2rem", md: "0" }}>
      <GenericPageText>{selectLang(lang, "home-text-1")}</GenericPageText>
      <GenericPageText>{selectLang(lang, "home-text-2")}</GenericPageText>
      {showText && (
        <>
          <GenericPageText>{selectLang(lang, "home-text-3")}</GenericPageText>
          <GenericPageText>{selectLang(lang, "home-text-4")}</GenericPageText>
        </>
      )}
      <Box width={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Button
          sx={{ mt: "2rem", mb: "1rem" }}
          variant={"contained"}
          onClick={() => setShowText((prevState) => !prevState)}
        >
          {showText ? selectLang(lang, "home-show-less") : selectLang(lang, "home-learn-more")}
        </Button>
      </Box>
    </Box>
  );
}