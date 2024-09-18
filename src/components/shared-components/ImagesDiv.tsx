import { Box } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

type ImageComp = {
  src: string;
  alt: string;
};

export default function ImagesDiv({ images }: { images: ImageComp[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const imageBoxStyle = (index: number) => ({
    width: {
      xs: "100%",
      md: hoveredIndex === null ? `${(1 / images.length) * 100}%` : hoveredIndex === index ? "100%" : "0%",
    },
    opacity: { md: hoveredIndex === null || hoveredIndex === index ? 1 : 0 },
    transition: "all 0.4s ease-in-out",
    overflow: "hidden",
  });

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      height={{ xs: "75rem", md: "35rem" }}
      justifyContent="center"
      width="100%"
    >
      {images.map(({ src, alt }, index) => (
        <Box
          key={index}
          height="100%"
          position="relative"
          sx={imageBoxStyle(index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image fill alt={alt} src={src} style={{ objectFit: "cover" }} />
        </Box>
      ))}
    </Box>
  );
}
