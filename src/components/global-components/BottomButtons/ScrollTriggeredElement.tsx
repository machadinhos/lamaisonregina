import { ReactElement, useEffect, useState } from "react";
import { Box, useScrollTrigger } from "@mui/material";

const ScrollTriggeredElement = ({ threshold, children }: { threshold: number; children: ReactElement }) => {
  const [document, setDocument] = useState<Document | null>(null);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
    target: document ? (document.querySelector("body") as Node) : undefined,
  });

  useEffect(() => {
    setDocument(window.document);
  }, []);

  return (
    <Box
      position={"sticky"}
      bottom={trigger ? 0 : "-6rem"}
      sx={{
        transition: "bottom 0.25s ease-in-out",
      }}
    >
      {children}
    </Box>
  );
};

export default ScrollTriggeredElement;
