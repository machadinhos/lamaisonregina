import { SxProps } from "@mui/material/styles";
import { Container, Theme } from "@mui/material";
import { ReactNode } from "react";

export default function SectionContainer({ sx, children }: { sx?: SxProps<Theme>; children: ReactNode | ReactNode[] }) {
  return (
    <section>
      <Container
        sx={{
          position: "relative",
          mb: "6rem",
          mt: 0,
          px: {
            xs: "12px",
            sm: "96px",
          },
          maxWidth: {
            lg: "1536px",
          },
          textAlign: "justify",
          ...sx,
        }}
      >
        {children}
      </Container>
    </section>
  );
}
