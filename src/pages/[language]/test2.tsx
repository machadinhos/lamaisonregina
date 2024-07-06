import { Box } from "@mui/material";
import Image from "next/image";

export default function Test2() {
  const images = [
    "https://www.portugalafora.com/wp-content/uploads/2018/09/portugalafora_porto_ponteDluis01.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/d3/ac/21/ponte-sobre-o-rio-lima.jpg?w=1200&h=1200&s=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAQQbSHOTEKxhOACKv8nIkHn96oNetBXqaw&s",
    "https://www.voltaaomundo.pt/files/2017/08/Python-Bridge-Amesterd%C3%A3o-Holanda-741x486_c.jpg",
    "https://construliga.com.br/wp-content/uploads/2023/10/construtoras-chinesas-devem-erguer-no-brasil-maior-ponte-da-america-latina-superando-rio-niteroi.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Amarante-Ponte_sobre_o_T%C3%A2mega_%281%29.jpg/1200px-Amarante-Ponte_sobre_o_T%C3%A2mega_%281%29.jpg",
  ];

  return (
    <>
      <Box
        sx={{
          width: `100%`,
          height: "100vh",
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
    </>
  );
}
