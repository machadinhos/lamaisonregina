import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Box, List, ListItem, SxProps, Theme, Typography } from "@mui/material";
import Carousel from "@/components/shared-components/carousel";

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
            fontSize: { xs: "6rem", sm: "8rem", md: "10rem", lg: "12rem" },
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
  return (
    <>
      <section>
        <Typography variant="body1">{selectLang(lang, "home-text-1")}</Typography>
        <Typography variant="body1">{selectLang(lang, "home-text-2")}</Typography>
        <Typography variant="body1">{selectLang(lang, "home-text-3")}</Typography>
        <Typography variant="body1">{selectLang(lang, "home-text-4")}</Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            marginTop: "1.5rem",
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem", lg: "3.25rem" },
          }}
          variant="h3"
        >
          {selectLang(lang, "home-sep-1")}
        </Typography>
        <Typography variant="body1">{selectLang(lang, "home-text-5")}</Typography>
        <Typography variant="body1">{selectLang(lang, "home-text-6")}</Typography>
        <Typography
          sx={{
            fontWeight: "bold",
            marginTop: "1.5rem",
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem", lg: "3.25rem" },
          }}
          variant="h3"
        >
          {selectLang(lang, "home-sep-2")}
        </Typography>
        <Box
          sx={{
            px: { xs: "0.5rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
          }}
        >
          <List sx={{ textAlign: "center" }}>
            {selectLang(lang, "home-sep-2-list")
              .split(" | ")
              .map((item, index) => (
                <ListItem sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} key={index}>
                  <Typography variant={"body1"}>{item}</Typography>
                </ListItem>
              ))}
          </List>
        </Box>
      </section>
    </>
  );
}
