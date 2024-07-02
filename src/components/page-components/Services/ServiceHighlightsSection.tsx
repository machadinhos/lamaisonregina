import { LangEnum, servicesLang } from "@i18n/lang-selector";
import { Box } from "@mui/material";
import { primaryColor } from "@/styles/globals";
import { ReactNode } from "react";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import Image from "next/image";

const highlights = [
  "location",
  "accommodation",
  "kitchen",
  "people",
  "parking",
  "pergola",
  "room",
  "planner",
  "ceremony",
  "bathroom",
  "sustainability",
  "church",
];

export function ServiceHighlightsSection({ lang }: { lang: LangEnum }) {
  return (
    <section style={{ marginTop: "8rem" }}>
      <Box display={"grid"} gridTemplateColumns={{ xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}>
        {highlights.map((highlight, index) => (
          <ServiceHighlight texts={servicesLang(lang, `highlight-${highlight}`).split(" | ")} key={index}>
            <Image src={`/services/${highlight}.webp`} alt={highlight} fill />
          </ServiceHighlight>
        ))}
      </Box>
    </section>
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
