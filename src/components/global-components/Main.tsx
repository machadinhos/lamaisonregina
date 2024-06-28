import { ReactNode } from "react";
import Link from "next/link";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import { Box, Container } from "@mui/material";
import { LangEnum } from "@i18n/lang-selector";
import { HomeCarousel } from "@/components/page-components/Home";
import { primaryColor, secondaryColor } from "@/styles/globals";
import Image from "next/image";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

interface Props {
  children: ReactNode | ReactNode[];
  isHome?: boolean;
  lang: LangEnum;
}

function MobileBottomButtons({ lang }: { lang: LangEnum }) {
  return (
    <Box
      display={{ xs: "block", sm: "none" }}
      position={"fixed"}
      bottom={0}
      left={0}
      width={"100vw"}
      height={"5rem"}
      sx={{ backgroundColor: primaryColor }}
    >
      <Box width={"100%"} height={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Link href={`/${lang}/`}>
          <Image alt={"logo"} src={"/logo.png"} width={75} height={60} />
        </Link>
      </Box>
      <Box position={"absolute"} bottom={"1rem"} left={"1rem"}>
        <Link
          target={"_blank"}
          href={"https://api.whatsapp.com/send/?phone=351915581629&text&type=phone_number&app_absent=0"}
        >
          <WhatsappIcon sx={{ fontSize: "3rem" }} color={"success"} />
        </Link>
      </Box>
      <Box position={"absolute"} right={"1rem"} bottom={"1rem"}>
        <Link href={"#header"}>
          <ArrowUpwardIcon sx={{ fontSize: "3rem", color: "white" }} />
        </Link>
      </Box>
    </Box>
  );
}

function DesktopBottomButtons({ lang }: { lang: LangEnum }) {
  return (
    <Box display={{ xs: "none", sm: "block" }} position={"fixed"} bottom={0} left={0} width={"100vw"} height={"5rem"}>
      <Box position={"absolute"} bottom={"1rem"} left={"1rem"}>
        <Link
          target={"_blank"}
          href={"https://api.whatsapp.com/send/?phone=351915581629&text&type=phone_number&app_absent=0"}
        >
          <WhatsappIcon sx={{ fontSize: "4rem" }} color={"success"} />
        </Link>
      </Box>
      <Box
        position={"absolute"}
        right={"1rem"}
        bottom={"1rem"}
        width={"4rem"}
        height={"4rem"}
        border={`3px solid ${primaryColor}`}
        borderRadius={"50%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Link href={"#header"}>
          <ArrowUpwardIcon sx={{ fontSize: "4rem", color: secondaryColor }} />
        </Link>
      </Box>
    </Box>
  );
}

function BottomButtons({ lang }: { lang: LangEnum }) {
  return (
    <>
      <MobileBottomButtons lang={lang} />
      <DesktopBottomButtons lang={lang} />
    </>
  );
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
