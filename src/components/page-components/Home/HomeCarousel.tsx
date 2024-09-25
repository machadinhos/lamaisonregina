import { Box } from "@mui/material";
import { homeLang, LangEnum } from "@i18n/lang-selector";
import React, { useEffect, useState } from "react";
import imageSelect from "@images/image-select";
import { useMediaQuery } from "@mui/system";

import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";
import InfiniteArrowCarousel from "@/components/shared-components/Carousel/InfiniteArrowCarousel";

interface Props {
  lang: LangEnum;
}

export function HomeCarousel({ lang }: Props) {
  const isSmallScreen = useMediaQuery("(max-width:1000px)");
  const [carouselItems, setCarouselItems] = useState<{ src: string; alt: string }[]>([]);

  useEffect(() => {
    setCarouselItems(isSmallScreen ? imageSelect.home.smallScreenCarouselImages : imageSelect.home.carouselImages);
  }, [isSmallScreen]);

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
        <Box height={"100%"} left={"0px"} position={"absolute"} top={"4px"} width={"100%"}>
          <InfiniteArrowCarousel priority images={carouselItems} />
        </Box>
        <GenericPageTitle
          noLine
          sx={{
            zIndex: 1000,
            userSelect: "none",
            color: "white",
            textAlign: "left",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.3rem", lg: "2.75rem" },
            px: "2.5rem",
            fontWeight: "300",
            textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
          }}
        >
          {homeLang(lang, "home-slogan")}
        </GenericPageTitle>
      </Box>
    </Box>
  );
}
