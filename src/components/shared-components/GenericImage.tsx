import { SxProps } from "@mui/material/styles";
import { Box, Theme } from "@mui/material";
import Image from "next/image";

export default function GenericImage({ sx, src, alt }: { sx?: SxProps<Theme>; src: string; alt: string }) {
  return (
    <Box
      position={"absolute"}
      width={"100%"}
      height={"100%"}
      top={0}
      left={0}
      sx={sx}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box position={"relative"} width={"100%"} height={"100%"}>
        <Image src={src} alt={alt} fill style={{ objectFit: "cover", borderRadius: "10px" }} />
      </Box>
    </Box>
  );
}
