import { Box, IconButton } from "@mui/material";

import addressSelect from "../../../../addresses/address-select";

import ScrollTriggeredElement from "@/components/global-components/BottomButtons/ScrollTriggeredElement";
import { primaryColor, secondaryColor } from "@/styles/globals";
import ArrowUpwardIcon from "@/components/global-components/BottomButtons/ArrowUpwardIcon";
import WhatsappIconButton from "@/components/global-components/BottomButtons/WhatsappIconButton";

export default function DesktopBottomButtons() {
  return (
    <ScrollTriggeredElement threshold={50}>
      <>
        <Box bottom={"1.5rem"} left={"1rem"} position={"absolute"}>
          <IconButton href={addressSelect.whatsapp} target={"_blank"} onClick={() => {}}>
            <WhatsappIconButton size={4} />
          </IconButton>
        </Box>
        <Box
          alignItems={"center"}
          border={`1px solid ${primaryColor}`}
          borderRadius={"50%"}
          bottom={"1.5rem"}
          display={"flex"}
          height={"3.5rem"}
          justifyContent={"center"}
          position={"absolute"}
          right={"1.5rem"}
          width={"3.5rem"}
        >
          <IconButton href={"#header"} onClick={() => {}}>
            <ArrowUpwardIcon sx={{ fontSize: "3.5rem", color: secondaryColor }} />
          </IconButton>
        </Box>
      </>
    </ScrollTriggeredElement>
  );
}
