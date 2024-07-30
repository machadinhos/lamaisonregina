import { cateringLang, LangEnum } from "@i18n/lang-selector";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import CTA from "@/components/shared-components/CTA";
import React, { ReactNode } from "react";
import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";
import SectionContainer from "@/components/shared-components/SectionContainer";
import { Box } from "@mui/material";
import Image from "next/image";
import imageSelect from "@images/image-select";

interface Props {
  lang: LangEnum;
}

function CateringSection({ children, reverse }: { children: ReactNode[]; reverse?: boolean }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: reverse ? "column-reverse" : "column", md: "row" },
        height: { xs: "auto", md: "500px" },
        "& > *": { flex: 1 },
        mt: "2rem",
      }}
    >
      {children}
    </Box>
  );
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
      <Box width={{ xs: "100%", md: "80%" }}>{children}</Box>
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
    >
      <Box height={{ xs: "25rem", md: "80%" }} width={{ xs: "100%", md: "80%" }} position={"relative"}>
        <Image src={src} alt={alt} style={{ objectFit: "cover" }} fill />
      </Box>
    </Box>
  );
}

export default function Catering({ lang }: Props) {
  return (
    <>
      <SectionContainer>
        <CateringSection>
          <CateringTextBox>
            <Box display={"flex"} justifyContent={"center"} mb={"1.5rem"}>
              <GenericPageTitle>{cateringLang(lang, "catering-title-1")}</GenericPageTitle>
            </Box>
            <GenericPageText sx={{ mt: 0 }}>{cateringLang(lang, "catering-text-1")}</GenericPageText>
            <GenericPageText>{cateringLang(lang, "catering-text-2")}</GenericPageText>
          </CateringTextBox>
          <CateringImageBox src={imageSelect.catering.imageBox1.src} alt={imageSelect.catering.imageBox1.alt} />
        </CateringSection>
      </SectionContainer>
      <SectionContainer>
        <CateringSection reverse>
          <CateringImageBox src={imageSelect.catering.imageBox2.src} alt={imageSelect.catering.imageBox2.alt} />
          <CateringTextBox>
            <Box display={"flex"} justifyContent={"center"} mb={"1.5rem"}>
              <GenericPageTitle>{cateringLang(lang, "catering-title-2")}</GenericPageTitle>
            </Box>
            <GenericPageText sx={{ mt: 0 }}>{cateringLang(lang, "catering-text-3")}</GenericPageText>
          </CateringTextBox>
        </CateringSection>
      </SectionContainer>
      <SectionContainer>
        <CateringSection>
          <CateringTextBox>
            <Box display={"flex"} justifyContent={"center"} mb={"1.5rem"}>
              <GenericPageTitle>{cateringLang(lang, "catering-title-3")}</GenericPageTitle>
            </Box>
            <GenericPageText sx={{ mt: 0 }}>{cateringLang(lang, "catering-text-4")}</GenericPageText>
          </CateringTextBox>
          <CateringImageBox src={imageSelect.catering.imageBox3.src} alt={imageSelect.catering.imageBox3.alt} />
        </CateringSection>
      </SectionContainer>
      <CTA lang={lang} />
    </>
  );
}
