import type { AppProps } from "next/app";

import "../styles/globals.css";
import { createTheme, CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { Montserrat } from "next/font/google";
import Error from "next/error";

import PageContent from "@/components/global-components/PageContent";

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
  if (pageProps.statusCode && pageProps.statusCode === 404) {
    return <Error statusCode={404} />;
  } else if (pageProps.statusCode && pageProps.statusCode === 500) {
    return <Error statusCode={500} />;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PageContent isHome={pageProps.isHome} lang={pageProps.language}>
          <AnimatePresence mode="wait">
            <Component {...pageProps} />
          </AnimatePresence>
        </PageContent>
      </ThemeProvider>
      <GoogleTagManager gtmId="G-DDBD6FPCJV" />
    </>
  );
}
