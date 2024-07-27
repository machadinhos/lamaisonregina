import ScrollTriggeredElement from "@/components/global-components/BottomButtons/ScrollTriggeredElement";
import { Box, IconButton } from "@mui/material";
import { primaryColor, secondaryColor } from "@/styles/globals";
import ArrowUpwardIcon from "@/components/global-components/BottomButtons/ArrowUpwardIcon";
import WhatsappIconButton from "@/components/global-components/BottomButtons/WhatsappIconButton";

export default function DesktopBottomButtons() {
  return (
    <ScrollTriggeredElement threshold={50}>
      <>
        <Box position={"absolute"} bottom={"1.5rem"} left={"1rem"}>
          <IconButton
            onClick={() => {}}
            target={"_blank"}
            href={"https://api.whatsapp.com/send/?phone=351912411695&text&type=phone_number&app_absent=0"}
          >
            <WhatsappIconButton size={4} />
          </IconButton>
        </Box>
        <Box
          position={"absolute"}
          right={"1.5rem"}
          bottom={"1.5rem"}
          width={"3.5rem"}
          height={"3.5rem"}
          border={`1px solid ${primaryColor}`}
          borderRadius={"50%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <IconButton onClick={() => {}} href={"#header"}>
            <ArrowUpwardIcon sx={{ fontSize: "3.5rem", color: secondaryColor }} />
          </IconButton>
        </Box>
      </>
    </ScrollTriggeredElement>
  );
}
