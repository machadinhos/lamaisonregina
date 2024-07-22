import Slider from "react-slick";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import useScreenWidth from "@/hooks/use-screen-width";
import { useRef } from "react";

function ImageCard({ image, index }: { image: string; index: number }) {
  return (
    <Box height={"100%"} width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <Box
        position={"relative"}
        height={"90%"}
        width={"95%"}
        m={"1%"}
        sx={{ "&:hover": { transform: "scale(1.05)" }, transition: "transform 300ms ease-in-out" }}
      >
        <Image
          src={image}
          alt={`image${index}`}
          style={{ cursor: "pointer", objectFit: "cover", borderRadius: "10px" }}
          fill
        />
      </Box>
    </Box>
  );
}

const Arrow = ({ direction }: { direction: "left" | "right" }) => {
  return (
    <Image
      src={"/arrows/carousel_arrow.webp"}
      alt={`${direction} arrow`}
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

export default function SlickCarousel({ images }: { images: string[] }) {
  const screenWidth = useScreenWidth();
  const getMaxWidth = () => Math.min(500, screenWidth * 0.85);

  const sliderRef = useRef<Slider>(null);

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
        {images.map((image, index) => (
          <Box key={image + index} height={"350px"} width={`${getMaxWidth()}px`} sx={{ flexShrink: 0 }}>
            <ImageCard image={image} index={index} />
          </Box>
        ))}
      </Slider>
      <Box mt={"2rem"} display="flex" justifyContent="center" gap={"1rem"}>
        <ArrowBox onClick={prevSlide} direction={"left"} />
        <ArrowBox onClick={nextSlide} direction={"right"} />
      </Box>
    </Box>
  );
}
