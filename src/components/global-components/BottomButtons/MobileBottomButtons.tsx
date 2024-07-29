import { LangEnum } from "@i18n/lang-selector";
import ScrollTriggeredElement from "@/components/global-components/BottomButtons/ScrollTriggeredElement";
import { Box, IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import imageSelect from "@images/image-select";
import ArrowUpwardIcon from "@/components/global-components/BottomButtons/ArrowUpwardIcon";
import WhatsappIconButton from "@/components/global-components/BottomButtons/WhatsappIconButton";
import { primaryColor } from "@/styles/globals";
import addressSelect from "../../../../addresses/address-select";

export default function MobileBottomButtons({ lang }: { lang: LangEnum }) {
  return (
    <ScrollTriggeredElement threshold={50}>
      <Box bgcolor={primaryColor}>
        <Box width={"100%"} height={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <IconButton>
            <Link href={`/${lang}#header`}>
              <Image
                alt={imageSelect.globals.logo.alt}
                src={imageSelect.globals.logo.src}
                width={75}
                height={60}
                priority
              />
            </Link>
          </IconButton>
        </Box>
        <Box sx={{ position: "absolute", bottom: "0.5rem", left: "1rem" }}>
          <IconButton onClick={() => {}} target={"_blank"} href={addressSelect.whatsapp}>
            <WhatsappIconButton size={3} />
          </IconButton>
        </Box>
        <Box sx={{ position: "absolute", right: "1rem", bottom: "0.5rem" }}>
          <IconButton onClick={() => {}} href={"#header"}>
            <ArrowUpwardIcon sx={{ fontSize: "3rem", color: "white" }} />
          </IconButton>
        </Box>
      </Box>
    </ScrollTriggeredElement>
  );
}
