import { Box } from "@mui/material";
import Image from "next/image";
import useScreenWidth from "@/hooks/use-screen-width";

export default function ArrowCarousel({ images }: { images: string[] }) {
  const screenWidth = useScreenWidth();
  const getMaxWidth = () => Math.min(500, screenWidth * 0.85);

  return (
    <>
      <Box
        width={"100%"}
        height={"350px"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          height={"300px"}
          width={"100%"}
          my={"2rem"}
          sx={{ overflowX: "clip" }}
        >
          <Box width={`${getMaxWidth() * images.length}px`} height={"100%"} display={"flex"}>
            {images.map((image, index) => (
              <ImageCard key={image + index} image={image} />
            ))}
          </Box>
        </Box>
        <Box alignItems={"center"} height={"50px"} display={"flex"} justifyContent={"center"} gap={"2rem"}>
          <ArrowBox direction={"left"} />
          <ArrowBox direction={"right"} />
        </Box>
      </Box>
    </>
  );
}

function ImageCard({ image }: { image: string }) {
  return (
    <Box height={"100%"} width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <Box
        position={"relative"}
        height={"100%"}
        width={"100%"}
        m={"2%"}
        paddingLeft={"2%"}
        sx={{
          "&:hover": { m: 0, width: "110%", height: "110%" },
          transition: "300ms ease-in-out",
        }}
      >
        <Image style={{ cursor: "pointer", objectFit: "cover", borderRadius: "10px" }} fill src={image} alt="image" />
      </Box>
    </Box>
  );
}

const ArrowBox = ({ direction }: { direction: "left" | "right" }) => {
  return (
    <Box
      position={"relative"}
      width={"50px"}
      height={"50px"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ cursor: "pointer" }}
    >
      <Image src={`/arrows/${direction}_arrow.webp`} alt={`${direction} arrow`} fill />
    </Box>
  );
};
