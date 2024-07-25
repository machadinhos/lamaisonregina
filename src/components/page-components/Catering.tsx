import { cateringLang, LangEnum } from "@i18n/lang-selector";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import CTA from "@/components/shared-components/CTA";
import React, { ReactNode } from "react";
import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";
import SectionContainer from "@/components/shared-components/SectionContainer";
import { Box } from "@mui/material";
import Image from "next/image";

interface Props {
  lang: LangEnum;
}

function CateringSection({ children }: { children: ReactNode[] }) {
  return <Box sx={{ display: "flex", height: "500px", "& > *": { flex: 1 }, mt: "2rem" }}>{children}</Box>;
}

function CateringTextBox({ children }: { children: ReactNode | ReactNode[] }) {
  return (
    <Box
      pr={{ md: "1.5rem" }}
      width={{ xs: "100%", md: "70%" }}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box width={"80%"}>{children}</Box>
    </Box>
  );
}

function CateringImageBox({ src, alt }: { src: string; alt: string }) {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={{ xs: "2rem", md: "0" }}
      width={{ xs: "100%", md: "30%" }}
      height={{ xs: "20rem", md: "auto" }}
    >
      <Box height={"80%"} width={"80%"} position={"relative"}>
        <Image src={src} alt={alt} style={{ objectFit: "cover" }} fill />
      </Box>
    </Box>
  );
}

export default function Catering({ lang }: Props) {
  return (
    <>
      <SectionContainer>
        <GenericPageTitle>{cateringLang(lang, "catering-title-1")}</GenericPageTitle>
        <CateringSection>
          <CateringTextBox>
            <GenericPageText sx={{ mt: 0 }}>{cateringLang(lang, "catering-text-1")}</GenericPageText>
            <GenericPageText>{cateringLang(lang, "catering-text-2")}</GenericPageText>
          </CateringTextBox>
          <CateringImageBox
            src="https://cdn.europosters.eu/image/750/posters/noddy-solo-i27845.jpg"
            alt="home-info-image"
          />
        </CateringSection>
      </SectionContainer>
      <SectionContainer>
        <GenericPageTitle>{cateringLang(lang, "catering-title-2")}</GenericPageTitle>
        <CateringSection>
          <CateringImageBox
            src="https://cdn.europosters.eu/image/750/posters/noddy-solo-i27845.jpg"
            alt="home-info-image"
          />
          <CateringTextBox>
            <GenericPageText sx={{ mt: 0 }}>{cateringLang(lang, "catering-text-3")}</GenericPageText>
          </CateringTextBox>
        </CateringSection>
      </SectionContainer>
      <SectionContainer>
        <GenericPageTitle>{cateringLang(lang, "catering-title-3")}</GenericPageTitle>
        <CateringSection>
          <CateringTextBox>
            <GenericPageText sx={{ mt: 0 }}>{cateringLang(lang, "catering-text-4")}</GenericPageText>
          </CateringTextBox>
          <CateringImageBox
            src="https://cdn.europosters.eu/image/750/posters/noddy-solo-i27845.jpg"
            alt="home-info-image"
          />
        </CateringSection>
      </SectionContainer>
      <CTA lang={lang} />
    </>
  );
}
