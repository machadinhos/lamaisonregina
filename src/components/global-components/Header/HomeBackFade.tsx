import { Box } from "@mui/material";

export type MainBoxType = {
  height: number;
};

export default function HomeBackFade({
  isHome,
  mainBox,
  isDesktop,
}: {
  isHome?: boolean;
  mainBox?: MainBoxType;
  isDesktop?: boolean;
}) {
  return (
    <Box
      height={mainBox?.height ? mainBox?.height + (isDesktop ? 100 : 0) : 0}
      left={"0px"}
      position={"absolute"}
      sx={{
        pointerEvents: "none",
        transition: "opacity 0.5s ease-in-out",
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))",
        opacity: isHome ? 1 : 0,
      }}
      top={"4px"}
      width={"100%"}
      zIndex={isDesktop ? 0 : 150}
    />
  );
}
