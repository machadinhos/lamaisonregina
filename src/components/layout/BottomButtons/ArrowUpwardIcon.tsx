import { Box, Theme } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import Image from "next/image";

import imageSelect from "@/data/images";

export default function ArrowUpwardIcon({ sx }: { sx: SxProps<Theme> }) {
  return (
    <Box sx={{ width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box
        sx={{
          height: "40px",
          position: "relative",
          width: "25px",
          ...sx,
        }}
      >
        <Image fill alt={imageSelect.globals.up_arrow.alt} src={imageSelect.globals.up_arrow.src} />
      </Box>
    </Box>
  );
}
