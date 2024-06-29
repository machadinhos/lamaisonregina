import { LangEnum } from "@i18n/lang-selector";
import { Box } from "@mui/material";
import { primaryColor, secondaryColor } from "@/styles/globals";
import Link from "next/link";
import Image from "next/image";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function MobileBottomButtons({ lang, zIndex }: { lang: LangEnum; zIndex?: number }) {
  return (
    <Box
      display={{ xs: "block", sm: "none" }}
      position={"sticky"}
      top={"calc(100vh - 5rem)"}
      mb={"-6rem"}
      left={0}
      width={"100vw"}
      height={"5rem"}
      sx={{ backgroundColor: primaryColor }}
      zIndex={zIndex ? zIndex : 10}
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

function DesktopBottomButtons({ zIndex }: { zIndex?: number }) {
  return (
    <Box
      display={{ xs: "none", sm: zIndex ? "none" : "block" }}
      position={"sticky"}
      top={"calc(100vh - 6rem)"}
      mb={"-6rem"}
      left={0}
      width={"100vw"}
      height={"6rem"}
      zIndex={zIndex ? zIndex : 10}
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

export default function BottomButtons({ lang, zIndex }: { lang: LangEnum; zIndex?: number }) {
  return (
    <>
      <MobileBottomButtons lang={lang} zIndex={zIndex} />
      <DesktopBottomButtons zIndex={zIndex} />
    </>
  );
}
