"use client";

import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";

function ImageCard({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        position: "relative",
        width: "100%",
        backgroundColor: "black",

        // Clips any horizontal bleeding
        overflow: "hidden",
      }}
    >
      <Image
        fill
        alt={alt}
        preload={priority}
        src={src}
        style={{
          objectFit: "cover",
          left: 0,
          top: 0,
          transform: "scaleX(1.01)", // Only stretches horizontally to kill the 1px right gap
        }}
      />
    </Box>
  );
}

export default function InfiniteArrowCarousel({
  images,
  priority,
}: {
  images: { src: string; alt: string }[];
  priority?: boolean;
}) {
  const sliderRef = useRef<Slider>(null);

  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
    lazyLoad: "progressive" as const,
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",

        "& .slick-slider": {
          width: "100%",
          height: "100%",
        },

        "& .slick-list": {
          width: "100%",
          height: "100%",
        },

        "& .slick-track": {
          height: "100%",
        },

        "& .slick-slide": {
          height: "100%",
        },

        "& .slick-slide > div": {
          height: "100%",
        },
      }}
    >
      <Slider ref={sliderRef} {...settings}>
        {images.map(({ src, alt }, index) => (
          <ImageCard key={index} alt={alt} priority={priority} src={src} />
        ))}
      </Slider>

      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          "&:hover": { cursor: "pointer" },
          color: "white",
        }}
        onClick={prevSlide}
      >
        <Box
          sx={{
            height: "24px",
            width: "24px",
            backgroundColor: "rgb(0, 0, 0, 0.5)",
            borderRadius: "100%",
          }}
        >
          <ArrowBack />
        </Box>
      </IconButton>

      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          "&:hover": { cursor: "pointer" },
          color: "white",
        }}
        onClick={nextSlide}
      >
        <Box
          sx={{
            height: "24px",
            width: "24px",
            backgroundColor: "rgb(0, 0, 0, 0.5)",
            borderRadius: "100%",
          }}
        >
          <ArrowForward />
        </Box>
      </IconButton>
    </Box>
  );
}
