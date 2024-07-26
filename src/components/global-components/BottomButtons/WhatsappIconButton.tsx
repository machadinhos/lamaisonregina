import { Box } from "@mui/material";
import WhatsappIcon from "@mui/icons-material/WhatsApp";

export default function WhatsappIconButton({ size }: { size: number }) {
  return (
    <Box sx={{ width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <WhatsappIcon sx={{ fontSize: `${size}rem` }} color={"success"} />
    </Box>
  );
}
