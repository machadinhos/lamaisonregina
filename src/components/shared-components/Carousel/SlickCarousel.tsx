import Slider from "react-slick";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import imageSelect from "@images/image-select";

import useWindowWidth from "@/hooks/use-window-width";
import BaseImage from "@/components/shared-components/ImageModal/BaseImage";
import ImageModalWrapper from "@/components/shared-components/ImageModal/ImageModalWrapper";

function ImageCard({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  return (
    <Box alignItems={"center"} display={"flex"} height={"100%"} justifyContent={"center"} width={"100%"}>
      <BaseImage alt={alt} priority={priority} src={src} />
    </Box>
  );
}

const Arrow = ({ direction, priority }: { direction: "left" | "right"; priority?: boolean }) => {
  return (
    <Image
      fill
      alt={`${direction}-arrow`}
      priority={priority}
      src={imageSelect.globals.carouselArrow.src}
      style={{
        rotate: direction === "right" ? "180deg" : "0",
      }}
    />
  );
};

const ArrowBox = ({
  direction,
  onClick,
  priority,
}: {
  direction: "left" | "right";
  onClick: () => void;
  priority?: boolean;
}) => {
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
      <Box alignItems={"center"} height={"2rem"} position={"relative"} width={"2.5rem"}>
        <Arrow direction={direction} priority={priority} />
      </Box>
    </IconButton>
  );
};

export default function SlickCarousel({
  images,
  priority,
}: {
  images: { src: string; alt: string }[];
  priority?: boolean;
}) {
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
    lazyLoad: "ondemand" as const,
  };

  return (
    <ImageModalWrapper>
      <Box height={"fit-content"} mb={"2rem"} width={"100%"}>
        <Slider ref={sliderRef} {...settings}>
          {images.map(({ src, alt }, index) => (
            <Box key={src + index} height={"350px"} sx={{ flexShrink: 0 }} width={`${getMaxWidth()}px`}>
              <ImageCard alt={alt} priority={priority} src={src} />
            </Box>
          ))}
        </Slider>
        <Box display="flex" gap={"1rem"} justifyContent="center" mt={"2rem"}>
          <ArrowBox direction={"left"} priority={priority} onClick={prevSlide} />
          <ArrowBox direction={"right"} priority={priority} onClick={nextSlide} />
        </Box>
      </Box>
    </ImageModalWrapper>
  );
}
