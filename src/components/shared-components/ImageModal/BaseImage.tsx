import { useContext, useRef } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { ImageModalContext } from "@/components/shared-components/ImageModal/ImageModalWrapper";

export default function BaseImage({ src, alt }: { src: string; alt: string }) {
  const { setOpenedImage } = useContext(ImageModalContext);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageBoxRef = useRef<HTMLDivElement>(null);

  const handleImageClick = () => {
    if (!imageRef.current || !imageBoxRef.current) return;
    const open = imageRef.current.getBoundingClientRect();
    const close = imageBoxRef.current.getBoundingClientRect();

    setOpenedImage({
      coords: { open: { top: open.top, left: open.left }, close: { top: close.top, left: close.left } },
      size: { open: { width: open.width, height: open.height }, close: { width: close.width, height: close.height } },
      src: src,
      alt: alt,
    });
  };

  return (
    <Box
      position={"relative"}
      height={"90%"}
      width={"95%"}
      sx={{
        "&:hover": {
          "& img": {
            transform: "scale(1.05)",
          },
        },
      }}
      onClick={handleImageClick}
      ref={imageBoxRef}
    >
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        style={{ cursor: "pointer", objectFit: "contain", transition: "transform 300ms ease-in-out" }}
        fill
      />
    </Box>
  );
}
