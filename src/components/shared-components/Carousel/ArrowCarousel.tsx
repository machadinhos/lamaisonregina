import { Box } from "@mui/material";
import Image from "next/image";
import useScreenWidth from "@/hooks/use-screen-width";
import { useRef, useState } from "react";

export default function ArrowCarousel({ images }: { images: string[] }) {
  const screenWidth = useScreenWidth();
  const getMaxWidth = () => Math.min(500, screenWidth * 0.85);
  const [showingImage, setShowingImage] = useState<string>("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const scrollLeft = () => {
    if (isScrolling) return;
    setCanScrollRight(true);
    if (scrollContainerRef.current) {
      setIsScrolling(true);
      const element = scrollContainerRef.current;
      element.scrollBy({ left: -getMaxWidth(), behavior: "smooth" });
      setTimeout(() => {
        setIsScrolling(false);
        if (element.scrollLeft <= getMaxWidth() / 10) {
          setCanScrollLeft(false);
        }
      }, 500);
    }
  };

  const scrollRight = () => {
    if (isScrolling) return;
    setCanScrollLeft(true);
    if (scrollContainerRef.current) {
      setIsScrolling(true);
      const element = scrollContainerRef.current;
      element.scrollBy({ left: getMaxWidth(), behavior: "smooth" });
      setTimeout(() => {
        setIsScrolling(false);
        if (element.scrollLeft > element.scrollWidth - element.getBoundingClientRect().width - getMaxWidth() / 10) {
          setCanScrollRight(false);
        }
      }, 500);
    }
  };

  return (
    <>
      <Box
        width={"100%"}
        height={"400px"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          height={"350px"}
          width={"100%"}
          my={"2rem"}
        >
          <Box
            ref={scrollContainerRef}
            height={"100%"}
            display={"flex"}
            sx={{ scrollBehavior: "smooth", overflowX: "hidden" }}
          >
            {images.map((image, index) => (
              <Box
                key={image + index}
                width={`${getMaxWidth()}px`}
                sx={{ opacity: showingImage === image ? 0 : 1, flexShrink: 0 }}
              >
                <ImageCard setShowingImage={setShowingImage} image={image} />
              </Box>
            ))}
          </Box>
        </Box>
        <Box alignItems={"center"} height={"50px"} display={"flex"} justifyContent={"center"} gap={"2rem"}>
          <ArrowBox enabled={canScrollLeft} direction={"left"} onClick={scrollLeft} />
          <ArrowBox enabled={canScrollRight} direction={"right"} onClick={scrollRight} />
        </Box>
      </Box>
      {showingImage && <ImageModal setShowingImage={setShowingImage} image={showingImage} />}
    </>
  );
}

function ImageCard({ image, setShowingImage }: { image: string; setShowingImage: (image: string) => void }) {
  return (
    <Box height={"100%"} width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <Box
        position={"relative"}
        height={"90%"}
        width={"98%"}
        m={"2%"}
        sx={{
          "&:hover": { m: 0, width: "100%", height: "100%" },
          transition: "300ms ease-in-out",
        }}
        onClick={() => setShowingImage(image)}
      >
        <Image style={{ cursor: "pointer", objectFit: "cover", borderRadius: "10px" }} fill src={image} alt="image" />
      </Box>
    </Box>
  );
}

const ArrowBox = ({
  direction,
  onClick,
  enabled,
}: {
  direction: "left" | "right";
  onClick: () => void;
  enabled: boolean;
}) => {
  return (
    <Box
      position={"relative"}
      width={"50px"}
      height={"50px"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        opacity: enabled ? 1 : 0.3,
        "&:hover": { cursor: enabled ? "pointer" : "default" },
      }}
      onClick={() => enabled && onClick()}
    >
      <Image src={`/arrows/${direction}_arrow.webp`} alt={`${direction} arrow`} fill />
    </Box>
  );
};

const ImageModal = ({ image, setShowingImage }: { image: string; setShowingImage: (image: string) => void }) => {
  return (
    <>
      <Box
        position={"fixed"}
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ backgroundColor: "rgba(0,0,0,0.65)" }}
        onClick={() => setShowingImage("")}
        zIndex={50}
      >
        <Box position={"relative"} width={"90vw"} height={"90vh"}>
          <Image src={image} alt={image} fill style={{ objectFit: "contain", margin: "5px" }} />
        </Box>
      </Box>
    </>
  );
};
