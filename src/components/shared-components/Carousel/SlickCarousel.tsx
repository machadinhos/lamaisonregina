import Slider from "react-slick";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import useWindowWidth from "@/hooks/use-window-width";
import { useEffect, useRef, useState } from "react";
import imageSelect from "@images/ImageSelect";

function ImageCard({
  src,
  alt,
  setOpenedImage,
}: {
  src: string;
  alt: string;
  setOpenedImage: (image: OpenedImage | null) => void;
}) {
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
    <Box height={"100%"} width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
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
    </Box>
  );
}

const Arrow = ({ direction }: { direction: "left" | "right" }) => {
  return (
    <Image
      src={imageSelect.globals.carouselArrow.src}
      alt={`${direction}-arrow`}
      fill
      style={{
        rotate: direction === "right" ? "180deg" : "0",
      }}
    />
  );
};

const ArrowBox = ({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) => {
  return (
    <IconButton
      sx={{
        "&:hover": { cursor: "pointer" },
        display: "flex",
        position: "relative",
        width: "4rem",
        height: "4rem",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <Box width={"2.5rem"} height={"2rem"} position={"relative"} alignItems={"center"}>
        <Arrow direction={direction} />
      </Box>
    </IconButton>
  );
};

interface OpenedImage {
  coords: {
    open: { top: number; left: number };
    close: { top: number; left: number };
  };
  size: {
    open: { width: number; height: number };
    close: { width: number; height: number };
  };
  src: string;
  alt: string;
}

const ImageModal = ({
  openedImage,
  setOpenedImage,
}: {
  openedImage: OpenedImage | null;
  setOpenedImage: (image: OpenedImage | null) => void;
}) => {
  const imageBoxRef = useRef<HTMLImageElement>(null);
  const darkenedBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openedImage || !imageBoxRef.current || !darkenedBoxRef.current) return;
    // force reflow
    imageBoxRef.current.offsetHeight;

    imageBoxRef.current.style.width = "100%";
    imageBoxRef.current.style.height = "100%";
    imageBoxRef.current.style.top = "0";
    imageBoxRef.current.style.left = "0";

    darkenedBoxRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  }, [openedImage]);

  const handleClick = () => {
    if (!imageBoxRef.current || !openedImage || !darkenedBoxRef.current) return;
    imageBoxRef.current.style.width = openedImage.size.close.width + "px";
    imageBoxRef.current.style.height = openedImage.size.close.height + "px";
    imageBoxRef.current.style.top = openedImage.coords.close.top + "px";
    imageBoxRef.current.style.left = openedImage.coords.close.left + "px";

    darkenedBoxRef.current.style.backgroundColor = "rgba(0, 0, 0, 0)";
    setTimeout(() => {
      setOpenedImage(null);
    }, 500);
  };

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
};

export default function SlickCarousel({ images }: { images: { src: string; alt: string }[] }) {
  const screenWidth = useWindowWidth();
  const sliderRef = useRef<Slider>(null);
  const [openedImage, setOpenedImage] = useState<OpenedImage | null>(null);
  if (screenWidth === null) return null;

  const getMaxWidth = () => Math.min(500, screenWidth * 0.85);

  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };
  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const responsive = [
    {
      breakpoint: 5000,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 3,
    responsive,
  };

  return (
    <Box width={"100%"} height={"fit-content"} mb={"2rem"}>
      <Slider ref={sliderRef} {...settings}>
        {images.map(({ src, alt }, index) => (
          <Box key={src + index} height={"350px"} width={`${getMaxWidth()}px`} sx={{ flexShrink: 0 }}>
            <ImageCard setOpenedImage={setOpenedImage} src={src} alt={alt} />
          </Box>
        ))}
      </Slider>
      <Box mt={"2rem"} display="flex" justifyContent="center" gap={"1rem"}>
        <ArrowBox onClick={prevSlide} direction={"left"} />
        <ArrowBox onClick={nextSlide} direction={"right"} />
      </Box>
      <ImageModal openedImage={openedImage} setOpenedImage={setOpenedImage} />
    </Box>
  );
}
