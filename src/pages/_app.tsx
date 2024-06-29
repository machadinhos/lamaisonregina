import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Theme, createTheme, ThemeProvider } from "@mui/material";
import { secondaryColor } from "@/styles/globals";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#e0bc7c",
    },
    secondary: {
      main: "#403c34",
    },
  },
  typography: {
    fontFamily: ["Poppins"].join(","),
    fontSize: 16,
    allVariants: {
      color: secondaryColor,
    },
    h1: {
      textAlign: "center",
      fontFamily: "Elipses Caps",
    },
    h2: {
      textAlign: "center",
    },
    h3: {
      textAlign: "center",
    },
    h4: {
      textAlign: "center",
    },
    h5: {
      textAlign: "center",
    },
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
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
