import { Box } from "@mui/material";
import Image from "next/image";
import useScreenWidth from "@/hooks/use-screen-width";
import DragNSlide from "@/components/shared-components/DragNSlide/DragNSlide";

export default function ArrowCarousel({ images }: { images: string[] }) {
  const screenWidth = useScreenWidth();

  const getMaxWidth = () => {
    return Math.min(500, screenWidth * 0.85);
  };
  return (
    <Box
      my={"2rem"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"300px"}
    >
      <DragNSlide>
        <Box width={`${getMaxWidth() * images.length}px`} height={"100%"} display={"flex"}>
          {images.map((image, index) => (
            <ImageCard key={index} image={image} />
          ))}
        </Box>
      </DragNSlide>
    </Box>
  );
}

function ImageCard({ image }: { image: string }) {
  return (
    <Box width={"100%"} height={"100%"} display={"inline-flex"}>
      <Box height={"100%"} width={"100%"} display={"flex"} alignItems={"center"}>
        <Box
          position={"relative"}
          height={"100%"}
          width={"100%"}
          m={"2%"}
          sx={{
            "&:hover": { m: 0, width: "110%", height: "110%" },
            transition: "300ms ease-in-out",
          }}
        >
          <Image style={{ objectFit: "cover", borderRadius: "10px" }} fill src={image} alt="image" />
        </Box>
      </Box>
    </Box>
  );
}
