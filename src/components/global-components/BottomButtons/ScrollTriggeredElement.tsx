import { ReactElement, useEffect, useState } from "react";
import { Box, useScrollTrigger } from "@mui/material";

const ScrollTriggeredElement = ({
  threshold,
  screen,
  children,
}: {
  threshold: number;
  screen: "mobile" | "desktop";
  children: ReactElement | ReactElement[];
}) => {
  const [document, setDocument] = useState<Document | null>(null);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
    target: document ? (document.querySelector("body") as Node) : undefined,
  });

  useEffect(() => {
    setDocument(window.document);
  }, []);

  const display = screen === "mobile" ? { xs: "block", md: "none" } : { md: "block", xs: "none" };

  return (
    <Box
      bottom={trigger ? 0 : "-6rem"}
      display={display}
      position={"sticky"}
      sx={{
        transition: "bottom 0.25s ease-in-out",
      }}
    >
      {children}
    </Box>
  );
};

export default ScrollTriggeredElement;
