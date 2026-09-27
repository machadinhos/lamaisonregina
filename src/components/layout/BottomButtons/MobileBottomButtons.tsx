"use client";

import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import ArrowUpwardIcon from "@/components/layout/BottomButtons/ArrowUpwardIcon";
import ScrollTriggeredElement from "@/components/layout/BottomButtons/ScrollTriggeredElement";
import WhatsappIconButton from "@/components/layout/BottomButtons/WhatsappIconButton";
import addressSelect from "@/config/contacts";
import imageSelect from "@/data/images";
import { LangEnum } from "@/i18n";
import { primaryColor } from "@/theme/colors";

export default function MobileBottomButtons({ lang }: { lang: LangEnum }) {
  return (
    <ScrollTriggeredElement screen={"mobile"} threshold={50}>
      <Box
        sx={{
          bgcolor: primaryColor,
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            height: "100%",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <IconButton>
            <Link href={`/${lang}#header`}>
              <Image
                preload
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
