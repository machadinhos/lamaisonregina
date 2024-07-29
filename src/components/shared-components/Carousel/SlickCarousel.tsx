import Slider from "react-slick";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import useWindowWidth from "@/hooks/use-window-width";
import { useRef } from "react";
import imageSelect from "@images/image-select";
import BaseImage from "@/components/shared-components/ImageModal/BaseImage";
import ImageModalWrapper from "@/components/shared-components/ImageModal/ImageModalWrapper";

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <Box height={"100%"} width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <BaseImage src={src} alt={alt} />
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

export default function SlickCarousel({ images }: { images: { src: string; alt: string }[] }) {
  const screenWidth = useWindowWidth();
  const sliderRef = useRef<Slider>(null);
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
    <ImageModalWrapper>
      <Box width={"100%"} height={"fit-content"} mb={"2rem"}>
        <Slider ref={sliderRef} {...settings}>
          {images.map(({ src, alt }, index) => (
            <Box key={src + index} height={"350px"} width={`${getMaxWidth()}px`} sx={{ flexShrink: 0 }}>
              <ImageCard src={src} alt={alt} />
            </Box>
          ))}
        </Slider>
        <Box mt={"2rem"} display="flex" justifyContent="center" gap={"1rem"}>
          <ArrowBox onClick={prevSlide} direction={"left"} />
          <ArrowBox onClick={nextSlide} direction={"right"} />
        </Box>
      </Box>
    </ImageModalWrapper>
  );
}
