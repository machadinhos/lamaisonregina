import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function ImagesDiv({ imagesSrc }: { imagesSrc: [string, string, string] }) {
  const imageBoxStyle = {
    width: `${(1 / 3) * 100}%`,
    transition: "width 0.4s ease-in-out",
    "&:hover": {
      width: "100%",
    },
  };

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"25rem"} width={"100%"}>
      {imagesSrc.map((src, index) => (
        <Box key={index} position="relative" height={"100%"} sx={imageBoxStyle}>
          <Image src={src} alt={`image-${index}`} style={{ objectFit: "cover" }} fill />
        </Box>
      ))}
    </Box>
  );
}
