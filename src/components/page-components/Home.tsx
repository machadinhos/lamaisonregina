import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Box, Button, Divider, List, ListItem, ListSubheader, SxProps, Theme, Typography } from "@mui/material";
import Carousel from "@/components/shared-components/carousel";
import GenericPageText from "@/components/shared-components/GenericPageText";
import GenericPageTitle from "@/components/shared-components/GenericPageTitle";
import { useState } from "react";
import { primaryColor, secondaryColor } from "@/styles/globals";

interface Props {
  lang: LangEnum;
}

const TitleTypography = ({
  children,
  variant,
  sx,
}: {
  children: string;
  variant: "h4" | "h1" | "h5";
  sx?: SxProps<Theme>;
}) => {
  return (
    <Typography variant={variant} sx={{ ...sx, color: "#fff" /*, userSelect: "none"*/ }}>
      {children}
    </Typography>
  );
};

export const HomeCarousel = ({ lang }: Props) => {
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
          alignItems: "center",
          justifyContent: "center",
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
        <TitleTypography
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
          }}
          variant="h4"
        >
          {selectLang(lang, "home-welcome-1")}
        </TitleTypography>
        <TitleTypography
          variant="h1"
          sx={{
            padding: "1rem",
            fontWeight: "bold",
            fontSize: { xs: "5rem", sm: "8rem", md: "10rem", lg: "12rem" },
          }}
        >
          La Maison Regina
        </TitleTypography>
        <TitleTypography
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
            marginBottom: "1.5rem",
          }}
          variant="h4"
        >
          {selectLang(lang, "home-welcome-2")}
        </TitleTypography>
        <TitleTypography
          sx={{
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
          }}
          variant="h5"
        >
          {selectLang(lang, "home-slogan")}
        </TitleTypography>
      </section>
    </Box>
  );
};

export default function Home({ lang }: Props) {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <section>
        <Box pt={{ xs: "2rem", md: "0" }}>
          <Box
            height={{
              xs: showText ? "max-content" : "200px",
              sm: showText ? "max-content" : "150px",
              md: showText ? "max-content" : "100px",
              lg: showText ? "max-content" : "50px",
            }}
            overflow={"hidden"}
          >
            <GenericPageText>{selectLang(lang, "home-text-1")}</GenericPageText>
            <GenericPageText>{selectLang(lang, "home-text-2")}</GenericPageText>
            <GenericPageText>{selectLang(lang, "home-text-3")}</GenericPageText>
            <GenericPageText>{selectLang(lang, "home-text-4")}</GenericPageText>
          </Box>
          <Box width={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
            {!showText && <Typography variant={"h3"}>...</Typography>}
            <Button
              sx={{ mt: "2rem", mb: "1rem" }}
              variant={"contained"}
              onClick={() => setShowText((prevState) => !prevState)}
            >
              {showText ? selectLang(lang, "home-show-less") : selectLang(lang, "home-learn-more")}
            </Button>
          </Box>
        </Box>
        <GenericPageTitle sx={{ mb: "2rem" }}>{selectLang(lang, "home-sep-1")}</GenericPageTitle>
        <GenericPageText>{selectLang(lang, "home-text-5")}</GenericPageText>
        <GenericPageText>{selectLang(lang, "home-text-6")}</GenericPageText>
        <Box
          sx={{
            px: { xs: "0.5rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
          }}
        >
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "0",
              margin: "0",
              listStyle: "outside",
            }}
          >
            <ListSubheader>
              <GenericPageTitle>{selectLang(lang, "home-sep-2")}</GenericPageTitle>
            </ListSubheader>
            {selectLang(lang, "home-sep-2-list")
              .split(" | ")
              .map((item, index) => (
                <>
                  <ListItem
                    sx={{ width: { md: "70%", lg: "50%" }, display: "flex", justifyContent: "center" }}
                    key={index}
                  >
                    <GenericPageText>{item}</GenericPageText>
                  </ListItem>
                  <Box width={"40%"} height={"1px"} sx={{ backgroundColor: primaryColor }} />
                </>
              ))}
          </List>
        </Box>
      </section>
    </>
  );
}
