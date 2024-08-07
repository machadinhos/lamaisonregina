import type { AppProps } from "next/app";

import "../styles/globals.css";
import { createTheme, CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

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
    allVariants: {
      fontFamily: montserrat.style.fontFamily,
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
      <Head>
        <GoogleAnalytics gaId="G-DDBD6FPCJV" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
      <GoogleTagManager gtmId="G-DDBD6FPCJV" />
    </>
  );
}
