"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import { useContext, useRef } from "react";

import { ImageModalContext } from "@/components/ui/ImageModal/ImageModalWrapper";

export default function BaseImage({
  src,
  alt,
  priority,
  clickable,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  clickable: boolean;
}) {
  const { setOpenedImage } = useContext(ImageModalContext);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageBoxRef = useRef<HTMLDivElement>(null);

  const handleImageClick = () => {
    if (!clickable) return;
    if (!imageRef.current || !imageBoxRef.current) return;
    const open = imageRef.current.getBoundingClientRect();
    const close = imageBoxRef.current.getBoundingClientRect();

    setOpenedImage({
      coords: { open: { top: open.top, left: open.left } },
      size: { open: { width: open.width, height: open.height }, close: { width: close.width, height: close.height } },
      src: src,
      alt: alt,
      imageRef: imageRef,
    });
  };

  return (
    <Box
      ref={imageBoxRef}
      sx={{
        height: "90%",
        position: "relative",
        width: "95%",

        "&:hover": {
          "& img": {
            transform: "scale(1.05)",
          },
        },
      }}
      onClick={handleImageClick}
    >
      <Image
        ref={imageRef}
        fill
        alt={alt}
        preload={priority}
        src={src}
        style={{
          cursor: clickable ? "pointer" : "default",
          objectFit: "contain",
          transition: "transform 300ms ease-in-out",
        }}
      />
    </Box>
  );
}
