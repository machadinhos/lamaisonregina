import { LangEnum } from "@i18n/lang-selector";
import { Box, IconButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import imageSelect from "@images/image-select";

import addressSelect from "../../../../addresses/address-select";

import ArrowUpwardIcon from "@/components/global-components/BottomButtons/ArrowUpwardIcon";
import WhatsappIconButton from "@/components/global-components/BottomButtons/WhatsappIconButton";
import { primaryColor } from "@/styles/globals";
import ScrollTriggeredElement from "@/components/global-components/BottomButtons/ScrollTriggeredElement";

export default function MobileBottomButtons({ lang }: { lang: LangEnum }) {
  return (
    <ScrollTriggeredElement screen={"mobile"} threshold={50}>
      <Box bgcolor={primaryColor}>
        <Box alignItems={"center"} display={"flex"} height={"100%"} justifyContent={"center"} width={"100%"}>
          <IconButton>
            <Link href={`/${lang}#header`}>
              <Image
                priority
                alt={imageSelect.globals.logo.alt}
                height={60}
                src={imageSelect.globals.logo.src}
                width={75}
              />
            </Link>
          </IconButton>
        </Box>
        <Box sx={{ position: "absolute", bottom: "0.5rem", left: "1rem" }}>
          <IconButton href={addressSelect.whatsapp} target={"_blank"} onClick={() => {}}>
            <WhatsappIconButton size={3} />
          </IconButton>
        </Box>
        <Box sx={{ position: "absolute", right: "1rem", bottom: "0.5rem" }}>
          <IconButton href={"#header"} onClick={() => {}}>
            <ArrowUpwardIcon sx={{ fontSize: "3rem", color: "white" }} />
          </IconButton>
        </Box>
      </Box>
    </ScrollTriggeredElement>
  );
}
