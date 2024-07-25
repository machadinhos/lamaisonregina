import { useCallback, useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import Image from "next/image";

interface Props {
  sources: { src: string; alt: string }[];
}

const generateImages = (sources: { src: string; alt: string }[]) => {
  return sources.map(({ src, alt }, index) => ({
    src,
    alt,
    _id: String(index),
  }));
};

export default function InfiniteArrowCarousel({ sources }: Props) {
  const [images] = useState(generateImages(sources));
  const [leftImage, setLeftImage] = useState(images.length - 1);
  const [rightImage, setRightImage] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [movingForward, setMovingForward] = useState(true);
  const [moving, setMoving] = useState(false);
  const moveImage = useCallback(
    (position: number, forward: boolean) => {
      setMovingForward(forward);
      if (forward) {
        if (position === images.length - 1) {
          return 0;
        }
        return position + 1;
      }
      if (position === 0) {
        return images.length - 1;
      }
      return position - 1;
    },
    [images],
  );

  const moveImages = useCallback(
    (forward: boolean) => {
      if (!moving) {
        setMoving(true);
        setCurrentImage((prevState) => moveImage(prevState, forward));
        setLeftImage((prevState) => moveImage(prevState, forward));
        setRightImage((prevState) => moveImage(prevState, forward));
        setTimeout(() => setMoving(false), 500);
      }
    },
    [moving, moveImage],
  );

  const isLeftImage = (id: string) => {
    return id === images[leftImage]._id;
  };
  const isRightImage = (id: string) => {
    return id === images[rightImage]._id;
  };
  const isCurrentImage = (id: string) => {
    return id === images[currentImage]._id;
  };

  const resolveTransform = (id: string) => {
    if (isLeftImage(id)) {
      return "translateX(-100%)";
    } else if (isRightImage(id)) {
      return "translateX(100%)";
    } else if (isCurrentImage(id)) {
      return "translateX(0)";
    } else return "translateX(-100%)";
  };

  const resolveOpacity = (id: string) => {
    if (isLeftImage(id)) {
      return movingForward ? 1 : 0;
    } else if (isRightImage(id)) {
      return movingForward ? 0 : 1;
    } else if (isCurrentImage(id)) {
      return 1;
    } else return 0;
  };
  useEffect(() => {
    const interval = setInterval(() => moveImages(true), 5000);
    return () => clearInterval(interval);
  }, [moveImages]);
  if (images.length < 1) {
    return <></>;
  }
  return (
    <>
      <Box position={"absolute"} top={0} left={0} width={"100%"} height={"100%"}>
        <Box
          width={"100%"}
          height={"100%"}
          overflow={"hidden"}
          position={"relative"}
          display={"flex"}
          alignItems={"center"}
        >
          {images.map(({ src, alt, _id }) => (
            <Box
              key={_id}
              width={"100%"}
              height={"100%"}
              position={"absolute"}
              top={0}
              left={0}
              sx={{
                transition: "transform 0.5s ease-in-out",
                opacity: resolveOpacity(_id),
                transform: resolveTransform(_id),
              }}
              zIndex={-1}
            >
              <Box width={"100%"} height={"100%"} position={"relative"}>
                <Image fill src={src} alt={alt} style={{ objectFit: "cover" }} />
              </Box>
            </Box>
          ))}
          <IconButton
            sx={{ position: "absolute", left: 0, "&:hover": { cursor: "pointer" }, color: "white" }}
            onClick={() => moveImages(false)}
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            sx={{ position: "absolute", right: 0, "&:hover": { cursor: "pointer" }, color: "white" }}
            onClick={() => moveImages(true)}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}
