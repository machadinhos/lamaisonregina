import { SxProps } from "@mui/material/styles";
import { Box, Theme } from "@mui/material";
import Image from "next/image";
import imageSelect from "@images/image-select";

export default function ArrowUpwardIcon({ sx }: { sx: SxProps<Theme> }) {
  return (
    <Box sx={{ width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box position={"relative"} width={"25px"} height={"40px"} sx={{ ...sx }}>
        <Image src={imageSelect.globals.up_arrow.src} alt={imageSelect.globals.up_arrow.alt} fill />
      </Box>
    </Box>
  );
}
