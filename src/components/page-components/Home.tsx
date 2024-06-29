import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Box, Button, List, ListItem, ListSubheader, SxProps, Theme, Typography } from "@mui/material";
import Carousel from "@/components/shared-components/carousel";
import GenericPageText from "@/components/shared-components/GenericPageText";
import GenericPageTitle from "@/components/shared-components/GenericPageTitle";
import { Dispatch, Key, ReactNode, SetStateAction, useState } from "react";
import { primaryColor } from "@/styles/globals";
import GenericPageSubTitle from "@/components/shared-components/GenericPageSubTitle";

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

const showMoreText = (showText: boolean, lang: LangEnum) => {
  if (showText) {
    return (
      <>
        <GenericPageText>{selectLang(lang, "home-text-3")}</GenericPageText>
        <GenericPageText>{selectLang(lang, "home-text-4")}</GenericPageText>
      </>
    );
  } else return <></>;
};

const sustainabilityText = (lang: LangEnum, showSustainability: boolean) => {
  if (showSustainability) {
    return (
      <>
        <GenericPageSubTitle>{selectLang(lang, "home-sustainability-title-1")}</GenericPageSubTitle>
        <GenericPageText>{selectLang(lang, "home-sustainability-text-1")}</GenericPageText>
        <List>
          <ListItem>
            <GenericPageText>{selectLang(lang, "home-sustainability-list-1")}</GenericPageText>
          </ListItem>
          <ListItem sx={{ display: "block" }}>
            <GenericPageText>{selectLang(lang, "home-sustainability-list-2-1")}</GenericPageText>
            <GenericPageText>{selectLang(lang, "home-sustainability-list-2-2")}</GenericPageText>
          </ListItem>
          <ListItem>
            <GenericPageText>{selectLang(lang, "home-sustainability-list-3")}</GenericPageText>
          </ListItem>
          <ListItem>
            <GenericPageText>{selectLang(lang, "home-sustainability-list-4")}</GenericPageText>
          </ListItem>
          <ListItem>
            <GenericPageText>{selectLang(lang, "home-sustainability-list-5")}</GenericPageText>
          </ListItem>
        </List>
      </>
    );
  } else return <></>;
};

const whyChooseListItems = (
  lang: LangEnum,
  showSustainability: boolean,
  setShowSustainability: Dispatch<SetStateAction<boolean>>,
) => {
  const items = selectLang(lang, "home-sep-2-list").split(" | ");
  const itemsText = items.map((item: string | ReactNode[], index: Key | null | undefined) => (
    <>
      <ListItem sx={{ width: { md: "70%", lg: "50%" }, display: "flex", justifyContent: "center" }} key={index}>
        <GenericPageText sx={{ textAlign: "center" }}>{item}</GenericPageText>
      </ListItem>
      {items.length - 1 == index ? (
        <>
          <Button
            sx={{ mb: "1rem" }}
            variant={"contained"}
            onClick={() => setShowSustainability((prevState) => !prevState)}
          >
            {showSustainability ? selectLang(lang, "home-show-less") : selectLang(lang, "home-learn-more")}
          </Button>
        </>
      ) : (
        <></>
      )}
      <Box width={"40%"} height={"1px"} sx={{ backgroundColor: primaryColor }} />
    </>
  ));

  return (
    <>
      {itemsText}
      {sustainabilityText(lang, showSustainability)}
    </>
  );
};

export default function Home({ lang }: Props) {
  const [showSustainability, setShowSustainability] = useState(false);
  const [showText, setShowText] = useState(false);
  return (
    <>
      <section>
        <Box pt={{ xs: "2rem", md: "0" }}>
          <GenericPageText>{selectLang(lang, "home-text-1")}</GenericPageText>
          <GenericPageText>{selectLang(lang, "home-text-2")}</GenericPageText>
          {showMoreText(showText, lang)}
          <Box width={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
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
            {whyChooseListItems(lang, showSustainability, setShowSustainability)}
          </List>
        </Box>
      </section>
    </>
  );
}
