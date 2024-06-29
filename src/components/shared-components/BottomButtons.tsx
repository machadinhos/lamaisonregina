import { LangEnum } from "@i18n/lang-selector";
import { Box } from "@mui/material";
import { primaryColor, secondaryColor } from "@/styles/globals";
import Link from "next/link";
import Image from "next/image";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export function MobileBottomButtons({ lang }: { lang: LangEnum }) {
  return (
    <Box
      display={{ xs: "block", sm: "none" }}
      position={"sticky"}
      bottom={0}
      left={0}
      width={"100%"}
      height={"5rem"}
      sx={{ backgroundColor: primaryColor }}
      zIndex={10}
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

export function DesktopBottomButtons() {
  return (
    <Box
      display={{ xs: "none", sm: "block" }}
      position={"sticky"}
      top={"calc(100dvh - 6rem)"}
      mb={"-6rem"}
      left={0}
      width={"100%"}
      height={"6rem"}
      zIndex={10}
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
