import { useContext, useRef } from "react";
import { Box } from "@mui/material";
import Image from "next/image";

import { ImageModalContext } from "@/components/shared-components/ImageModal/ImageModalWrapper";

export default function BaseImage({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  const { setOpenedImage } = useContext(ImageModalContext);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageBoxRef = useRef<HTMLDivElement>(null);

  const handleImageClick = () => {
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
      height={"90%"}
      position={"relative"}
      sx={{
        "&:hover": {
          "& img": {
            transform: "scale(1.05)",
          },
        },
      }}
      width={"95%"}
      onClick={handleImageClick}
    >
      <Image
        ref={imageRef}
        fill
        alt={alt}
        priority={priority}
        src={src}
        style={{ cursor: "pointer", objectFit: "contain", transition: "transform 300ms ease-in-out" }}
      />
    </Box>
  );
}
