import { LangEnum } from "@i18n/lang-selector";
import { Box } from "@mui/material";
import { primaryColor } from "@/styles/globals";
import { ReactNode } from "react";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import PlaceIcon from "@mui/icons-material/Place";

export function ServiceHighlightsSection({ lang }: { lang: LangEnum }) {
  return (
    <section>
      <Box display={"grid"} gridTemplateColumns={"repeat(3, 1fr)"}>
        <ServiceHighlight lang={lang} text={"ola"}>
          <PlaceIcon />
        </ServiceHighlight>
      </Box>
    </section>
  );
}

function ServiceHighlight({ lang, text, children }: { lang: LangEnum; text: string; children: ReactNode }) {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mb={"4rem"}>
      <ServiceHighlightIcon>{children}</ServiceHighlightIcon>
      <GenericPageText>{text}</GenericPageText>
    </Box>
  );
}

function ServiceHighlightIcon({ children }: { children: ReactNode }) {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"50px"}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: primaryColor, height: "100%", aspectRatio: "1/1", borderRadius: "50%" }}
      >
        {children}
      </Box>
    </Box>
  );
}
