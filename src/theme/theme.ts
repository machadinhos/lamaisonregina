"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e0bc7c",
    },
    secondary: {
      main: "#403c34",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "var(--font-montserrat)",
      fontOpticalSizing: "auto",
      fontWeight: 400,
      fontStyle: "normal",
    },
    h3: {
      fontFamily: "var(--font-cormorant-garamond)",
    },
    h1: { textAlign: "center" },
    h2: { textAlign: "center" },
    h4: { textAlign: "center" },
    h5: { textAlign: "center" },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
