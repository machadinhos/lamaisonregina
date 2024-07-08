import type { AppProps } from "next/app";
import "../styles/globals.css";
import { createTheme, CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { secondaryColor } from "@/styles/globals";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

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
    fontSize: 16,
    allVariants: {
      color: secondaryColor,
      fontFamily: "Montserrat, sans-serif",
      fontOpticalSizing: "auto",
      fontWeight: 400,
      fontStyle: "normal",
    },
    h1: {
      textAlign: "center",
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
  const router = useRouter();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
