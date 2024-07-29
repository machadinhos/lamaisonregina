import { LangEnum, servicesLang } from "@i18n/lang-selector";
import { Box } from "@mui/material";
import { primaryColor } from "@/styles/globals";
import { ReactNode } from "react";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import Image from "next/image";
import SectionContainer from "@/components/shared-components/SectionContainer";
import imageSelect from "@images/image-select";

export function ServiceHighlightsSection({ lang }: { lang: LangEnum }) {
  return (
    <div style={{ marginTop: "6rem", backgroundColor: "#E9E9E9", paddingTop: "2rem" }}>
      <SectionContainer>
        <Box
          display={"grid"}
          gridTemplateColumns={{ xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
        >
          {imageSelect.services.highlights.map(({ src, alt }, index) => (
            <ServiceHighlight texts={servicesLang(lang, `highlight-${alt}`).split(" | ")} key={index}>
              <Image src={src} alt={alt} fill />
            </ServiceHighlight>
          ))}
        </Box>
      </SectionContainer>
    </div>
  );
}

function ServiceHighlight({ texts, children }: { texts: string[]; children: ReactNode }) {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mb={"4rem"}>
      <ServiceHighlightIcon>{children}</ServiceHighlightIcon>
      <GenericPageText sx={{ textAlign: "center" }}>{texts[0]}</GenericPageText>
      <GenericPageText sx={{ width: "80%", textAlign: "center", fontSize: "100%" }}>{texts[1]}</GenericPageText>
    </Box>
  );
}

function ServiceHighlightIcon({ children }: { children: ReactNode }) {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100px"} width={"100px"}>
      <Box
        display={"flex"}
        position={"relative"}
        border={`1.5rem solid ${primaryColor}`}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: primaryColor, height: "100%", aspectRatio: "1/1", borderRadius: "50%" }}
      >
        {children}
      </Box>
    </Box>
  );
}
