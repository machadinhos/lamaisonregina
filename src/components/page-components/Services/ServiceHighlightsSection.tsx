import { LangEnum, servicesLang } from "@i18n/lang-selector";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import Image from "next/image";
import imageSelect from "@images/image-select";

import { primaryColor } from "@/styles/globals";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import SectionContainer from "@/components/shared-components/SectionContainer";

export function ServiceHighlightsSection({ lang }: { lang: LangEnum }) {
  return (
    <div style={{ marginTop: "6rem", backgroundColor: "#E9E9E9", paddingTop: "2rem" }}>
      <SectionContainer>
        <Box
          display={"grid"}
          gridTemplateColumns={{ xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        >
          {imageSelect.services.highlights.map(({ src, alt }, index) => (
            <ServiceHighlight key={index} texts={servicesLang(lang, `highlight-${alt}`).split(" | ")}>
              <Image fill alt={alt} src={src} />
            </ServiceHighlight>
          ))}
        </Box>
      </SectionContainer>
    </div>
  );
}

function ServiceHighlight({ texts, children }: { texts: string[]; children: ReactNode }) {
  return (
    <Box alignItems={"center"} display={"flex"} flexDirection={"column"} mb={"4rem"}>
      <ServiceHighlightIcon>{children}</ServiceHighlightIcon>
      <GenericPageText sx={{ textAlign: "center" }}>{texts[0]}</GenericPageText>
      <GenericPageText sx={{ width: "80%", textAlign: "center" }}>{texts[1]}</GenericPageText>
    </Box>
  );
}

function ServiceHighlightIcon({ children }: { children: ReactNode }) {
  return (
    <Box alignItems={"center"} display={"flex"} height={"100px"} justifyContent={"center"} width={"100px"}>
      <Box
        alignItems={"center"}
        border={`1.5rem solid ${primaryColor}`}
        display={"flex"}
        justifyContent={"center"}
        position={"relative"}
        sx={{ backgroundColor: primaryColor, height: "100%", aspectRatio: "1/1", borderRadius: "50%" }}
      >
        {children}
      </Box>
    </Box>
  );
}
