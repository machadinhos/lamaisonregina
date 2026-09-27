"use client";

import { Box } from "@mui/material";
import React from "react";

import SlickCarousel from "@/components/ui/Carousel/SlickCarousel";
import CTA from "@/components/ui/CTA";
import SectionContainer from "@/components/ui/SectionContainer";
import GenericPageText from "@/components/ui/Typography/GenericPageText";
import GenericPageTitle from "@/components/ui/Typography/GenericPageTitle";
import imageSelect from "@/data/images";
import useWindowWidth from "@/hooks/use-window-width";
import { galleryLang, LangEnum } from "@/i18n";

interface Props {
  lang: LangEnum;
}

export default function Gallery({ lang }: Props) {
  const screenWidth = useWindowWidth();

  if (screenWidth === null) return null;

  return (
    <>
      <SectionContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "1rem",
          }}
        >
          <GenericPageTitle>{galleryLang(lang, "gallery-title-1")}</GenericPageTitle>
        </Box>
        <SlickCarousel priority images={imageSelect.gallery.carousel1} />
        <GenericPageText>{galleryLang(lang, "gallery-text-1")}</GenericPageText>
      </SectionContainer>
      <SectionContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "1rem",
          }}
        >
          <GenericPageTitle>{galleryLang(lang, "gallery-title-2")}</GenericPageTitle>
        </Box>
        <SlickCarousel clickable={false} images={imageSelect.gallery.carousel2} />
        <GenericPageText>{galleryLang(lang, "gallery-text-2")}</GenericPageText>
      </SectionContainer>
      <SectionContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "1rem",
          }}
        >
          <GenericPageTitle>{galleryLang(lang, "gallery-title-3")}</GenericPageTitle>
        </Box>
        <SlickCarousel images={imageSelect.gallery.carousel3} />
        <GenericPageText>{galleryLang(lang, "gallery-text-3")}</GenericPageText>
      </SectionContainer>
      <SectionContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "1rem",
          }}
        >
          <GenericPageTitle>{galleryLang(lang, "gallery-title-4")}</GenericPageTitle>
        </Box>
        <SlickCarousel images={imageSelect.gallery.carousel4} />
        <GenericPageText>{galleryLang(lang, "gallery-text-4")}</GenericPageText>
      </SectionContainer>
      <CTA lang={lang} />
    </>
  );
}
