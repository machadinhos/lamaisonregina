import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(event.clientX);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging) return;

    const diff = event.clientX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    if (translateX < -100 && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (translateX > 100 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }

    setTranslateX(0);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, translateX, currentIndex, handleMouseMove, handleMouseUp]);

  return (
    <Box sx={{ width: "100%", overflow: "hidden", position: "relative" }} ref={sliderRef}>
      <Box
        display={"flex"}
        sx={{
          cursor: "grab",
          transform: `translateX(${-currentIndex * 100 + translateX}px)`,
          transition: isDragging ? "none" : "transform 0.3s ease",
          width: `${images.length * 500}px`,
          height: "300px",
        }}
        onMouseDown={handleMouseDown}
      >
        {images.map((image, index) => (
          <Box width={"500px"} height={"100%"} key={index}>
            <Image
              src={image}
              alt={`Slide ${index}`}
              style={{
                flexShrink: 0,
                userSelect: "none",
                pointerEvents: "none",
              }}
              fill
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ImageSlider;
