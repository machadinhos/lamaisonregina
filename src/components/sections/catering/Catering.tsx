import { Box } from "@mui/material";
import Image from "next/image";
import React, { ReactNode } from "react";

import CTA from "@/components/ui/CTA";
import SectionContainer from "@/components/ui/SectionContainer";
import GenericPageText from "@/components/ui/Typography/GenericPageText";
import GenericPageTitle from "@/components/ui/Typography/GenericPageTitle";
import imageSelect from "@/data/images";
import { cateringLang, LangEnum } from "@/i18n";

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
      }}
    >
      {children}
    </Box>
  );
}

function CateringTextBox({ children }: { children: ReactNode | ReactNode[] }) {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        pr: { md: "1.5rem" },
        width: { xs: "100%", md: "70%" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "80%" },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

function CateringImageBox({ src, alt }: { src: string; alt: string }) {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        mt: { xs: "2rem", md: "0" },
        width: { xs: "100%", md: "30%" },
        transform: { md: "scale(0.80)" },
      }}
    >
      <Image
        alt={alt}
        height={0}
        sizes="100vw"
        src={src}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
        width={0}
      />
    </Box>
  );
}

export default function Catering({ lang }: Props) {
  return (
    <>
      <SectionContainer sx={{ mb: { xs: "3rem", md: "1rem" } }}>
        <CateringSection>
          <CateringTextBox>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: "1.5rem",
              }}
            >
              <GenericPageTitle>{cateringLang(lang, "catering-title-1")}</GenericPageTitle>
            </Box>
            <GenericPageText sx={{ mt: 0 }}>{cateringLang(lang, "catering-text-1")}</GenericPageText>
            <GenericPageText>{cateringLang(lang, "catering-text-2")}</GenericPageText>
          </CateringTextBox>
          <CateringImageBox alt={imageSelect.catering.imageBox1.alt} src={imageSelect.catering.imageBox1.src} />
        </CateringSection>
      </SectionContainer>
      <SectionContainer sx={{ mb: { xs: "3rem", md: "1rem" } }}>
        <CateringSection reverse>
          <CateringImageBox alt={imageSelect.catering.imageBox2.alt} src={imageSelect.catering.imageBox2.src} />
          <CateringTextBox>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: "1.5rem",
              }}
            >
              <GenericPageTitle>{cateringLang(lang, "catering-title-2")}</GenericPageTitle>
            </Box>
            <GenericPageText sx={{ mt: 0 }}>{cateringLang(lang, "catering-text-3-1")}</GenericPageText>
            <GenericPageText sx={{ mt: 0 }}>{cateringLang(lang, "catering-text-3-2")}</GenericPageText>
          </CateringTextBox>
        </CateringSection>
      </SectionContainer>
      <CTA lang={lang} />
    </>
  );
}
