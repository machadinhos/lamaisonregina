import { Box } from "@mui/material";

export type MainBoxType = {
  top: number;
  left: number;
  height: number;
};

export default function HomeBackFade({ isHome, mainBox }: { isHome?: boolean; mainBox?: MainBoxType }) {
  return (
    <Box
      height={mainBox?.height}
      left={mainBox?.left}
      position={"absolute"}
      sx={{
        transition: "opacity 0.5s ease-in-out",
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2))",
        opacity: isHome ? 1 : 0,
      }}
      top={mainBox?.top}
      width={"100%"}
    />
  );
}
