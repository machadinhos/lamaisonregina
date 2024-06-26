import { LangEnum, selectLang } from "@i18n/lang-selector";
import { SxProps, Theme, Typography } from "@mui/material";
import Carousel from "@/components/shared-components/carousel";
import { useHeaderHeight } from "@/hooks/header-height";

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
export default function Home({ lang }: Props) {
  return (
    <>
      <section
        style={{
          marginTop: "0",
          height: "75vh",
          width: "100%",
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
        <TitleTypography variant="h4">{selectLang(lang, "home-welcome-1")}</TitleTypography>
        <TitleTypography variant="h1" sx={{ fontWeight: "bold" }}>
          La Maison Regina
        </TitleTypography>
        <TitleTypography variant="h4">{selectLang(lang, "home-welcome-2")}</TitleTypography>
        <TitleTypography variant="h5">{selectLang(lang, "home-slogan")}</TitleTypography>
      </section>
      <section>
        <Typography variant="body1">{selectLang(lang, "home-text-1")}</Typography>
        <Typography variant="body1">{selectLang(lang, "home-text-2")}</Typography>
        <Typography variant="body1">{selectLang(lang, "home-text-3")}</Typography>
        <Typography variant="body1">{selectLang(lang, "home-text-4")}</Typography>
        <Typography variant="h3">{selectLang(lang, "home-sep-1")}</Typography>
        <Typography variant="body1">{selectLang(lang, "home-text-5")}</Typography>
        <Typography variant="body1">{selectLang(lang, "home-text-6")}</Typography>
        <Typography variant="h3">{selectLang(lang, "home-sep-2")}</Typography>
        <ul>
          {selectLang(lang, "home-sep-2-list")
            .split(" | ")
            .map((item, index) => (
              <li key={index}>
                <Typography variant={"body1"}>{item}</Typography>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
