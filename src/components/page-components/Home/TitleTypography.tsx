import { SxProps, Theme, Typography } from "@mui/material";
import React from "react";

export function TitleTypography({
  children,
  variant,
  sx,
}: {
  children: string;
  variant: "h4" | "h1" | "h5";
  sx?: SxProps<Theme>;
}) {
  return (
    <Typography variant={variant} sx={{ ...sx, color: "#fff" /*, userSelect: "none"*/ }}>
      {children}
    </Typography>
  );
}
