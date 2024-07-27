import { useCallback, useContext, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { ImageModalContext } from "@/components/shared-components/ImageModal/ImageModalWrapper";

export default function ImageModal({}: {}) {
  const imageBoxRef = useRef<HTMLImageElement>(null);
  const darkenedBoxRef = useRef<HTMLDivElement>(null);
  const { openedImage, setOpenedImage } = useContext(ImageModalContext);

  const handleClick = useCallback(() => {
    if (!imageBoxRef.current || !openedImage || !darkenedBoxRef.current) return;
    imageBoxRef.current.style.width = openedImage.size.close.width + "px";
    imageBoxRef.current.style.height = openedImage.size.close.height + "px";
    imageBoxRef.current.style.top = openedImage.coords.close.top + "px";
    imageBoxRef.current.style.left = openedImage.coords.close.left + "px";

    darkenedBoxRef.current.style.backgroundColor = "rgba(0, 0, 0, 0)";
    setTimeout(() => {
      setOpenedImage(null);
    }, 500);
  }, [openedImage, setOpenedImage]);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        handleClick();
      }
    });

    if (!openedImage || !imageBoxRef.current || !darkenedBoxRef.current) return;
    // force reflow
    imageBoxRef.current.offsetHeight;

    imageBoxRef.current.style.width = "100%";
    imageBoxRef.current.style.height = "100%";
    imageBoxRef.current.style.top = "0";
    imageBoxRef.current.style.left = "0";

    darkenedBoxRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  }, [handleClick, openedImage]);

  return (
    <>
      {openedImage && (
        <Box
          ref={darkenedBoxRef}
          position={"fixed"}
          top={0}
          left={0}
          width={"100%"}
          height={"100%"}
          bgcolor={"rgba(0, 0, 0, 0)"}
          sx={{
            transition: "background-color 0.5s ease-in-out",
          }}
          zIndex={3000}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          onClick={handleClick}
        >
          <Box
            ref={imageBoxRef}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"fixed"}
            top={openedImage.coords.open.top}
            left={openedImage.coords.open.left}
            height={openedImage.size.open.height}
            width={openedImage.size.open.width}
            sx={{
              transition: "all 0.5s ease-in-out",
            }}
          >
            <Image
              style={{
                objectFit: "contain",
              }}
              src={openedImage.src}
              alt={openedImage.alt}
              fill
            />
          </Box>
        </Box>
      )}
    </>
  );
}
