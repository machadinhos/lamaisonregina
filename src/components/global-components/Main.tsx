import { ReactNode } from "react";
import Link from "next/link";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import { Box, Container } from "@mui/material";
import { LangEnum } from "@i18n/lang-selector";
import { HomeCarousel } from "@/components/page-components/Home";

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
          mt: isHome ? 0 : "5rem",
          maxWidth: {
            lg: "1536px",
          },
          px: {
            xs: "96px",
            sm: "96px",
            md: "96px",
            lg: "96px",
            xl: "96px",
          },
        }}
      >
        {children}
        <Box sx={{ position: "fixed", bottom: "2rem", left: "0.8rem" }}>
          <Link
            target={"_blank"}
            href={"https://api.whatsapp.com/send/?phone=351915581629&text&type=phone_number&app_absent=0"}
          >
            <WhatsappIcon sx={{ fontSize: "4rem" }} fontSize={"large"} color={"success"} />
          </Link>
        </Box>
      </Container>
    </main>
  );
}
