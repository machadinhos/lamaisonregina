"use client";

import { Box, useScrollTrigger } from "@mui/material";
import { ReactElement } from "react";

import useIsClient from "@/hooks/use-is-client";

const ScrollTriggeredElement = ({
  threshold,
  screen,
  children,
}: {
  threshold: number;
  screen: "mobile" | "desktop";
  children: ReactElement | ReactElement[];
}) => {
  const isClient = useIsClient();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
    target: isClient ? document.body : undefined,
  });

  const display = screen === "mobile" ? { xs: "block", md: "none" } : { md: "block", xs: "none" };

  return (
    <Box
      sx={{
        bottom: trigger ? 0 : "-6rem",
        display: display,
        position: "sticky",
        transition: "bottom 0.25s ease-in-out",
      }}
    >
      {children}
    </Box>
  );
};

export default ScrollTriggeredElement;
