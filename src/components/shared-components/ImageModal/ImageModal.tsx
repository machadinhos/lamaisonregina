import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";

import { ImageModalContext } from "@/components/shared-components/ImageModal/ImageModalWrapper";

export default function ImageModal() {
  const imageBoxRef = useRef<HTMLImageElement>(null);
  const darkenedBoxRef = useRef<HTMLDivElement>(null);
  const { openedImage, setOpenedImage } = useContext(ImageModalContext);
  const [canClose, setCanClose] = useState(false);

  const handleClick = useCallback(() => {
    if (!canClose || !imageBoxRef.current || !openedImage || !darkenedBoxRef.current || !openedImage.imageRef.current)
      return;
    const close = openedImage.imageRef.current.getBoundingClientRect();

    imageBoxRef.current.style.width = close.width + "px";
    imageBoxRef.current.style.height = close.height + "px";
    imageBoxRef.current.style.top = close.top + "px";
    imageBoxRef.current.style.left = close.left + "px";

    darkenedBoxRef.current.style.backgroundColor = "rgba(0, 0, 0, 0)";
    setTimeout(() => {
      if (!openedImage.imageRef.current) return;
      openedImage.imageRef.current.style.opacity = "1";
      setOpenedImage(null);
      setCanClose(false); // Reset canClose state
    }, 500);
  }, [canClose, openedImage, setOpenedImage]);

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClick();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    if (!openedImage || !imageBoxRef.current || !darkenedBoxRef.current || !openedImage.imageRef.current) return;

    openedImage.imageRef.current.style.opacity = "0";

    // force reflow
    imageBoxRef.current.offsetHeight;

    imageBoxRef.current.style.width = "100%";
    imageBoxRef.current.style.height = "100%";
    imageBoxRef.current.style.top = "0";
    imageBoxRef.current.style.left = "0";

    darkenedBoxRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

    const timer = setTimeout(() => {
      setCanClose(true);
    }, 500);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      clearTimeout(timer);
    };
  }, [openedImage, handleClick]);

  return (
    <>
      {openedImage && (
        <Box
          ref={darkenedBoxRef}
          alignItems={"center"}
          bgcolor={"rgba(0, 0, 0, 0)"}
          display={"flex"}
          height={"100%"}
          justifyContent={"center"}
          left={0}
          position={"fixed"}
          sx={{
            transition: "background-color 0.5s ease-in-out",
          }}
          top={0}
          width={"100%"}
          zIndex={3000}
          onClick={() => canClose && handleClick()}
        >
          <Box
            ref={imageBoxRef}
            alignItems={"center"}
            display={"flex"}
            height={openedImage.size.open.height}
            justifyContent={"center"}
            left={openedImage.coords.open.left}
            position={"fixed"}
            sx={{
              transition: "all 0.5s ease-in-out",
            }}
            top={openedImage.coords.open.top}
            width={openedImage.size.open.width}
          >
            <Image
              fill
              alt={openedImage.alt}
              src={openedImage.src}
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      )}
    </>
  );
}
