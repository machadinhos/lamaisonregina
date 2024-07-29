import { Box } from "@mui/material";
import InfiniteArrowCarousel from "@/components/shared-components/Carousel/InfiniteArrowCarousel";
import { homeLang, LangEnum } from "@i18n/lang-selector";
import React from "react";
import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";
import imageSelect from "@images/image-select";

interface Props {
  lang: LangEnum;
}

export function HomeCarousel({ lang }: Props) {
  return (
    <Box
      sx={{
        my: "0",
        padding: "0",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          marginTop: "0",
          marginBottom: "0",
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingBottom: "6rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <InfiniteArrowCarousel sources={imageSelect.home.carouselImages} />
        <GenericPageTitle
          sx={{
            color: "white",
            textAlign: "left",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.3rem", lg: "2.75rem" },
            px: "2.5rem",
            fontWeight: "300",
          }}
        >
          {homeLang(lang, "home-slogan")}
        </GenericPageTitle>
      </Box>
    </Box>
  );
}
