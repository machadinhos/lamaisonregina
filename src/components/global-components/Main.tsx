import { ReactNode } from "react";
import { Container, Theme } from "@mui/material";
import { LangEnum } from "@i18n/lang-selector";
import { HomeCarousel } from "@/components/page-components/Home/HomeCarousel";
import { SxProps } from "@mui/material/styles";
import { mainPadding, mainSmallPadding } from "@/styles/globals";

interface Props {
  children: ReactNode | ReactNode[];
  isHome?: boolean;
  lang: LangEnum;
}

const mainContainerSx: SxProps<Theme> = {
  position: "relative",
  mb: "6rem",
  mt: { xs: "2rem", sm: "4rem", md: "4rem", lg: "4rem", xl: "4rem" },
  maxWidth: {
    lg: "1536px",
  },
  textAlign: "justify",
  px: {
    xs: "2rem",
    sm: `${mainSmallPadding}px`,
    md: `${mainPadding}px`,
    lg: `${mainPadding}px`,
    xl: `${mainPadding}px`,
  },
};

export default function Main({ children, isHome, lang }: Props) {
  return (
    <main>
      {isHome && <HomeCarousel lang={lang} />}
      <Container sx={mainContainerSx}>{children}</Container>
    </main>
  );
}
