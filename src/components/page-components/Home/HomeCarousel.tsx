import { Box, Typography } from "@mui/material";
import { homeLang, LangEnum } from "@i18n/lang-selector";
import React, { useEffect, useState } from "react";
import imageSelect from "@images/image-select";
import { useMediaQuery } from "@mui/system";

import InfiniteArrowCarousel from "@/components/shared-components/Carousel/InfiniteArrowCarousel";
import { primaryColor } from "@/styles/globals";
import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";
interface Props {
  lang: LangEnum;
}

export function HomeCarousel({ lang }: Props) {
  const textShadowColor = "rgba(0, 0, 0, 0.35)";
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
        "@media (orientation: portrait) and (max-width: 1000px)": {
          height: "50vh",
        },
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
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <Box height={"100%"} left={"0px"} position={"absolute"} top={"4px"} width={"100%"}>
          <InfiniteArrowCarousel priority images={carouselItems} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, calc(-50% + 40px))",
            zIndex: 1000,
            pointerEvents: "none",
            width: { xs: "100%", sm: "fit-content" },
            maxWidth: { xs: "100%", sm: "none" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            userSelect: "none",
            color: "white",
            textAlign: "center",
            px: { xs: "0.75rem", sm: "1.5rem", md: "2.5rem" },
            gap: "0.5rem",
            "&::before": {
              content: '""',
              position: "absolute",
              zIndex: -1,
              top: "-5rem",
              bottom: "-5rem",
              left: "-8rem",
              right: "-8rem",
              background: `
                radial-gradient(
                  ellipse at center,
                  rgba(0, 0, 0, 0.62) 0%,
                  rgba(0, 0, 0, 0.48) 30%,
                  rgba(0, 0, 0, 0.28) 55%,
                  rgba(0, 0, 0, 0.10) 72%,
                  rgba(0, 0, 0, 0) 100%
                )
              `,
              filter: "blur(12px)",
              pointerEvents: "none",
            },
            "@media (max-width: 600px)": {
              "&::before": {
                top: "-3rem",
                bottom: "-3rem",
                left: "-3rem",
                right: "-3rem",
                background: `
                  radial-gradient(
                    ellipse at center,
                    rgba(0, 0, 0, 0.62) 0%,
                    rgba(0, 0, 0, 0.45) 35%,
                    rgba(0, 0, 0, 0.20) 65%,
                    rgba(0, 0, 0, 0) 100%
                  )
                `,
                filter: "blur(8px)",
              },
            },
          }}
        >
          <GenericPageTitle
            noLine
            sx={{
              fontSize: {
                xs: "1.25rem",
                sm: "2rem",
                md: "2.3rem",
                lg: "2.75rem",
              },
              mb: 0,
            }}
          >
            {homeLang(lang, "home-slogan-1")}
          </GenericPageTitle>

          <Typography
            sx={{
              fontSize: {
                xs: "0.8rem",
                sm: "1.1rem",
                md: "1.25rem",
                lg: "1.4rem",
              },
              fontWeight: "400",
              color: primaryColor,
            }}
            variant="h4"
          >
            {homeLang(lang, "home-slogan-2")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
