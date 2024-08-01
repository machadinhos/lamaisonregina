import { SxProps } from "@mui/material/styles";
import { Box, Theme } from "@mui/material";
import { ReactNode } from "react";

export default function SectionContainer({ sx, children }: { sx?: SxProps<Theme>; children: ReactNode | ReactNode[] }) {
  return (
    <section>
      <Box
        sx={{
          position: "relative",
          mb: "6rem",
          mt: 0,
          px: {
            xs: "7%",
            sm: "15%",
            md: "10%",
          },
          textAlign: "justify",
          ...sx,
        }}
      >
        {children}
      </Box>
    </section>
  );
}
