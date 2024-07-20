import { Box } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

export default function ImagesDiv({ imagesSrc }: { imagesSrc: [string, string, string] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const imageBoxStyle = (index: number) => ({
    width: { xs: "100%", md: hoveredIndex === null ? `${(1 / 3) * 100}%` : hoveredIndex === index ? "100%" : "0%" },
    opacity: { md: hoveredIndex === null || hoveredIndex === index ? 1 : 0 },
    transition: "all 0.4s ease-in-out",
    overflow: "hidden",
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={{ xs: "75rem", md: "25rem" }}
      width="100%"
      flexDirection={{ xs: "column", md: "row" }}
    >
      {imagesSrc.map((src, index) => (
        <Box
          key={index}
          position="relative"
          height="100%"
          sx={imageBoxStyle(index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image src={src} alt={`image-${index}`} style={{ objectFit: "cover" }} fill />
        </Box>
      ))}
    </Box>
  );
}
