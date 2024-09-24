import { Box } from "@mui/material";

export type MainBoxType = {
  height: number;
};

export default function HomeBackFade({ isHome, mainBox }: { isHome?: boolean; mainBox?: MainBoxType }) {
  return (
    <Box
      height={mainBox?.height}
      left={"0px"}
      position={"absolute"}
      sx={{
        transition: "opacity 0.5s ease-in-out",
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2))",
        opacity: isHome ? 1 : 0,
      }}
      top={"4px"}
      width={"100%"}
    />
  );
}
