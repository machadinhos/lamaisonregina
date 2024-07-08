import { LangEnum } from "@i18n/lang-selector";
import { Box, Theme } from "@mui/material";
import { primaryColor, rootFontSize, secondaryColor } from "@/styles/globals";
import Link from "next/link";
import Image from "next/image";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import { useEffect } from "react";
import { SxProps } from "@mui/material/styles";

function ArrowUpwardIcon({ sx }: { sx: SxProps<Theme> }) {
  return (
    <Box position={"relative"} width={"50px"} height={"50px"} sx={{ ...sx }}>
      <Image src={"/arrows/up_arrow.webp"} alt={"arrow"} fill />
    </Box>
  );
}

export function MobileBottomButtons({ lang }: { lang: LangEnum }) {
  useEffect(() => {
    const mobileBottomButtons = document.getElementById("mobile-bottom-buttons")!;
    const changeButtons = () => {
      if (body.scrollTop <= rootFontSize * 6) {
        mobileBottomButtons.classList.remove("sticky");
        mobileBottomButtons.classList.add("fixed");
      } else {
        mobileBottomButtons.classList.remove("fixed");
        mobileBottomButtons.classList.add("sticky");
      }
    };
    const body = document.querySelector("body")!;
    body.addEventListener("scroll", () => {
      changeButtons();
    });

    return () => {
      body.removeEventListener("scroll", () => {
        changeButtons();
      });
    };
  });
  return (
    <Box
      display={{ xs: "block", sm: "none" }}
      position={"absolute"}
      bottom={"-5rem"}
      left={0}
      width={"100%"}
      height={"5rem"}
      sx={{ backgroundColor: primaryColor }}
      zIndex={40}
      id={"mobile-bottom-buttons"}
    >
      <Box width={"100%"} height={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Link href={`/${lang}#header`}>
          <Image alt={"logo"} src={"/logos/logo.png"} width={75} height={60} />
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

export function DesktopBottomButtons() {
  useEffect(() => {
    const desktopBottomButtons = document.getElementById("desktop-bottom-buttons")!;
    const changeButtons = () => {
      if (body.scrollTop <= rootFontSize * 5) {
        desktopBottomButtons.classList.remove("sticky");
        desktopBottomButtons.classList.add("fixed-desktop");
      } else {
        desktopBottomButtons.classList.remove("fixed-desktop");
        desktopBottomButtons.classList.add("sticky");
      }
    };
    const body = document.querySelector("body")!;
    body.addEventListener("scroll", () => {
      changeButtons();
    });

    return () => {
      body.removeEventListener("scroll", () => {
        changeButtons();
      });
    };
  });
  return (
    <Box
      display={{ xs: "none", sm: "block" }}
      position={"absolute"}
      top={"-6rem"}
      left={0}
      width={"100%"}
      height={0}
      id={"desktop-bottom-buttons"}
    >
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
        right={"1.5rem"}
        bottom={"1.5rem"}
        width={"3.5rem"}
        height={"3.5rem"}
        border={`3px solid ${primaryColor}`}
        borderRadius={"50%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Link href={"#header"}>
          <ArrowUpwardIcon sx={{ fontSize: "3.5rem", color: secondaryColor }} />
        </Link>
      </Box>
    </Box>
  );
}

export default function BottomButtons({ lang }: { lang: LangEnum }) {
  return (
    <>
      <MobileBottomButtons lang={lang} />
      <DesktopBottomButtons />
    </>
  );
}