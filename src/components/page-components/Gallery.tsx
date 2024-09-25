import { galleryLang, LangEnum } from "@i18n/lang-selector";
import React from "react";
import imageSelect from "@images/image-select";
import { Box } from "@mui/material";

import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import CTA from "@/components/shared-components/CTA";
import SlickCarousel from "@/components/shared-components/Carousel/SlickCarousel";
import SectionContainer from "@/components/shared-components/SectionContainer";
import useWindowWidth from "@/hooks/use-window-width";
import ImageModalWrapper from "@/components/shared-components/ImageModal/ImageModalWrapper";
import BaseImage from "@/components/shared-components/ImageModal/BaseImage";

interface Props {
  lang: LangEnum;
}

export default function Gallery({ lang }: Props) {
  const screenWidth = useWindowWidth();

  if (screenWidth === null) return null;

  const getMaxWidth = () => Math.min(500, screenWidth * 0.85);

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
        {/*<SlickC|arousel images={imageSelect.gallery.carousel2} />*/}
        <ImageModalWrapper>
          <Box display={"flex"} justifyContent={"center"} width={"100%"}>
            <Box height={"350px"} sx={{ flexShrink: 0 }} width={`${getMaxWidth()}px`}>
              <Box alignItems={"center"} display={"flex"} height={"100%"} justifyContent={"center"} width={"100%"}>
                <BaseImage alt={imageSelect.gallery.carousel2.alt} src={imageSelect.gallery.carousel2.src} />
              </Box>
            </Box>
          </Box>
        </ImageModalWrapper>
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
