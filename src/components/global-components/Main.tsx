import { ReactNode } from "react";
import { Container } from "@mui/material";
import { LangEnum } from "@i18n/lang-selector";
import BottomButtons from "@/components/shared-components/bottom-buttons/BottomButtons";
import { HomeCarousel } from "@/components/page-components/Home/HomeCarousel";

interface Props {
  children: ReactNode | ReactNode[];
  isHome?: boolean;
  lang: LangEnum;
}

export default function Main({ children, isHome, lang }: Props) {
  return (
    <main>
      {isHome && <HomeCarousel lang={lang} />}
      <Container
        sx={{
          position: "relative",
          mb: "6rem",
          mt: { xs: "2rem", sm: "4rem", md: "4rem", lg: "4rem", xl: "4rem" },
          maxWidth: {
            lg: "1536px",
          },
          textAlign: "justify",
          px: {
            xs: "1.25rem",
            sm: "96px",
            md: "96px",
            lg: "96px",
            xl: "96px",
          },
        }}
      >
        {children}
      </Container>
      <BottomButtons lang={lang} />
    </main>
  );
}
