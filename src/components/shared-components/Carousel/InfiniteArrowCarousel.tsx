import Slider from "react-slick";
import { Box, IconButton } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

function ImageCard({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  return (
    <Box
      key={src + alt}
      alignItems={"center"}
      display={"flex"}
      height={"100vh"}
      justifyContent={"center"}
      position={"relative"}
      width={"100%"}
    >
      <Image fill alt={alt} priority={priority} src={src} style={{ objectFit: "cover", left: 0, top: 0 }} />
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
    lazyLoad: "ondemand" as const,
  };

  return (
    <Box height={"100%"} position={"relative"} width={"100%"}>
      <Slider ref={sliderRef} {...settings}>
        {images.map(({ src, alt }, index) => (
          <ImageCard key={index} alt={alt} priority={priority} src={src} />
        ))}
      </Slider>
      <IconButton
        sx={{ position: "absolute", top: "50%", left: 0, "&:hover": { cursor: "pointer" }, color: "white" }}
        onClick={prevSlide}
      >
        <Box
          height="24px"
          sx={{
            backgroundColor: "rgb(0, 0, 0, 0.5)",
            borderRadius: "100%",
          }}
          width="24px"
        >
          <ArrowBack />
        </Box>
      </IconButton>
      <IconButton
        sx={{ position: "absolute", top: "50%", right: 0, "&:hover": { cursor: "pointer" }, color: "white" }}
        onClick={nextSlide}
      >
        <Box
          height="24px"
          sx={{
            backgroundColor: "rgb(0, 0, 0, 0.5)",
            borderRadius: "100%",
          }}
          width="24px"
        >
          <ArrowForward />
        </Box>
      </IconButton>
    </Box>
  );
}
