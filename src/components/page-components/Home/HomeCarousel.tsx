import { Box } from "@mui/material";
import Carousel from "@/components/shared-components/Carousel";
import { homeLang, LangEnum } from "@i18n/lang-selector";
import React from "react";
import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";

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
        height: { xs: "calc(100vh - 120px)", sm: "calc(100vh - 150px)" },
      }}
    >
      <section
        style={{
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
        <Carousel
          sources={[
            "https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
          ]}
        />
        <GenericPageTitle sx={{ color: "white", textAlign: "left" }}>{homeLang(lang, "home-slogan")}</GenericPageTitle>
      </section>
    </Box>
  );
}
