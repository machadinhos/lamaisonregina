import Slider from "react-slick";
import { Box, IconButton, keyframes } from "@mui/material";
import Image from "next/image";
import useScreenWidth from "@/hooks/use-screen-width";
import { useEffect, useRef, useState } from "react";

function ImageCard({
  image,
  index,
  setOpenedImage,
}: {
  image: string;
  index: number;
  setOpenedImage: (image: OpenedImage | null) => void;
}) {
  const imageRef = useRef<HTMLImageElement>(null);
  const handleImageClick = () => {
    if (imageRef.current) {
      let { top, left } = imageRef.current.getBoundingClientRect();
      top = top - imageRef.current.height / 3;
      left = left - imageRef.current.width / 2;

      setOpenedImage({
        coords: { top, left },
        size: { width: imageRef.current.width, height: imageRef.current.height },
        src: image,
        alt: `image${index}`,
      });
    }
  };

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
          ref={imageRef}
          src={image}
          alt={`image${index}`}
          style={{ cursor: "pointer", objectFit: "cover", borderRadius: "10px" }}
          fill
          onClick={handleImageClick}
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

interface OpenedImage {
  coords: { top: number; left: number };
  size: { width: number; height: number };
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
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (openedImage && imageRef.current) {
      imageRef.current.style.top = `${openedImage.coords.top}px`;
      imageRef.current.style.left = `${openedImage.coords.left}px`;

      // force reflow
      imageRef.current.offsetHeight;

      imageRef.current.style.top = "0";
      imageRef.current.style.left = "0";
    }
  }, [openedImage]);

  const graduallyDarkenBox = keyframes({
    "0%": { backgroundColor: "rgba(0, 0, 0, 0)" },
    "100%": { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  });

  return (
    <>
      {openedImage && (
        <Box
          position={"fixed"}
          top={0}
          left={0}
          width={"100%"}
          height={"100%"}
          sx={{ animation: `${graduallyDarkenBox} 0.5s forwards` }}
          zIndex={100}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          onClick={() => setOpenedImage(null)}
        >
          <Box height={"80%"} width={"80%"} position={"relative"} m={"auto"} display={"flex"}>
            <Image
              ref={imageRef}
              src={openedImage.src}
              alt={openedImage.alt}
              style={{
                transition: "all 0.5s ease-in-out",
              }}
              fill
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default function SlickCarousel({ images }: { images: string[] }) {
  const screenWidth = useScreenWidth();
  const getMaxWidth = () => Math.min(500, screenWidth * 0.85);

  const sliderRef = useRef<Slider>(null);

  const [openedImage, setOpenedImage] = useState<OpenedImage | null>(null);

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
            <ImageCard setOpenedImage={setOpenedImage} image={image} index={index} />
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
