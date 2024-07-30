import { galleryLang, LangEnum } from "@i18n/lang-selector";
import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import CTA from "@/components/shared-components/CTA";
import React from "react";
import SlickCarousel from "@/components/shared-components/Carousel/SlickCarousel";
import SectionContainer from "@/components/shared-components/SectionContainer";
import imageSelect from "@images/image-select";
import { Box } from "@mui/material";

interface Props {
  lang: LangEnum;
}

export default function Gallery({ lang }: Props) {
  return (
    <>
      <SectionContainer>
        <Box display={"flex"} justifyContent={"center"} mb={"1rem"}>
          <GenericPageTitle>{galleryLang(lang, "gallery-title-1")}</GenericPageTitle>
        </Box>
        <SlickCarousel priority images={imageSelect.gallery.carousel1} />
        <GenericPageText>{galleryLang(lang, "gallery-text-1")}</GenericPageText>
      </SectionContainer>
      <SectionContainer>
        <Box display={"flex"} justifyContent={"center"} mb={"1rem"}>
          <GenericPageTitle>{galleryLang(lang, "gallery-title-2")}</GenericPageTitle>
        </Box>
        <SlickCarousel images={imageSelect.gallery.carousel2} />
        <GenericPageText>{galleryLang(lang, "gallery-text-2")}</GenericPageText>
      </SectionContainer>
      <SectionContainer>
        <Box display={"flex"} justifyContent={"center"} mb={"1rem"}>
          <GenericPageTitle>{galleryLang(lang, "gallery-title-3")}</GenericPageTitle>
        </Box>
        <SlickCarousel images={imageSelect.gallery.carousel3} />
        <GenericPageText>{galleryLang(lang, "gallery-text-3")}</GenericPageText>
      </SectionContainer>
      <SectionContainer>
        <Box display={"flex"} justifyContent={"center"} mb={"1rem"}>
          <GenericPageTitle>{galleryLang(lang, "gallery-title-4")}</GenericPageTitle>
        </Box>
        <SlickCarousel images={imageSelect.gallery.carousel4} />
        <GenericPageText>{galleryLang(lang, "gallery-text-4")}</GenericPageText>
      </SectionContainer>
      <CTA lang={lang} />
    </>
  );
}
