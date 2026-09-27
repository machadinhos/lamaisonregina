"use client";

import { Box, IconButton } from "@mui/material";

import ArrowUpwardIcon from "@/components/layout/BottomButtons/ArrowUpwardIcon";
import ScrollTriggeredElement from "@/components/layout/BottomButtons/ScrollTriggeredElement";
import WhatsappIconButton from "@/components/layout/BottomButtons/WhatsappIconButton";
import addressSelect from "@/config/contacts";
import { primaryColor, secondaryColor } from "@/theme/colors";

export default function DesktopBottomButtons() {
  return (
    <ScrollTriggeredElement screen={"desktop"} threshold={50}>
      <Box
        sx={{
          bottom: "1.5rem",
          left: "1rem",
          position: "absolute",
        }}
      >
        <IconButton href={addressSelect.whatsapp} target={"_blank"} onClick={() => {}}>
          <WhatsappIconButton size={4} />
        </IconButton>
      </Box>
      <Box
        sx={{
          alignItems: "center",
          border: `1px solid ${primaryColor}`,
          borderRadius: "50%",
          bottom: "1.5rem",
          display: "flex",
          height: "3.5rem",
          justifyContent: "center",
          position: "absolute",
          right: "1.5rem",
          width: "3.5rem",
        }}
      >
        <IconButton href={"#header"} onClick={() => {}}>
          <ArrowUpwardIcon sx={{ fontSize: "3.5rem", color: secondaryColor }} />
        </IconButton>
      </Box>
    </ScrollTriggeredElement>
  );
}
