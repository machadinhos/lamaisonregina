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
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={{ xs: "75rem", md: "25rem" }}
      width="100%"
      flexDirection={{ xs: "column", md: "row" }}
    >
      {images.map(({ src, alt }, index) => (
        <Box
          key={index}
          position="relative"
          height="100%"
          sx={imageBoxStyle(index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Image src={src} alt={alt} style={{ objectFit: "cover" }} fill />
        </Box>
      ))}
    </Box>
  );
}
