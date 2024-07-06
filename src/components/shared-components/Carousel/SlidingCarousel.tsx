import { Box } from "@mui/material";
import Image from "next/image";

export default function SlidingCarousel({ images }: { images: string[] }) {
  return (
    <Box
      sx={{
        width: `100%`,
        height: "100%",
        overflowX: "clip",
        scrollbarWidth: "none",
        "-ms-overflow-style": "none" /* for Internet Explorer, Edge */,
        "&::-webkit-scrollbar": {
          display: "none" /* for Chrome, Safari, and Opera */,
        },
      }}
    >
      <Box
        sx={{
          "@keyframes scroll-effect": {
            "0%": {
              transform: "translateX(0)",
            },
            "50%": {
              transform: `translateX(-${100 - 100 / images.length}%)`,
            },
            "100%": {
              transform: "translateX(0)",
            },
          },
          width: `${images.length * 100}%`,
          display: "flex",
          height: "100%",
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          animation: `scroll-effect ${8 * images.length}s ease-in-out infinite`,
        }}
      >
        {images.map((image, index) => (
          <Box key={index} position={"relative"} width={"100%"} height={"100%"}>
            <Image src={image} alt={"test"} fill />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
