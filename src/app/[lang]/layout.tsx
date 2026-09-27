import { Box } from "@mui/material";

import "../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { preconnect } from "react-dom";

import BottomButtons from "@/components/layout/BottomButtons/BottomButtons";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header/Header";
import ThemeRegistry from "@/components/providers/ThemeRegistry";
import { siteConfig } from "@/config/site";
import { isLocale, locales } from "@/i18n";
import { primaryColor } from "@/theme/colors";
import { cormorantGaramond, montserrat } from "@/theme/fonts";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  robots: "all",
  authors: [{ name: siteConfig.author }],
  verification: { google: siteConfig.googleSiteVerification },
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  preconnect("https://www.googletagmanager.com");

  return (
    <html className={`${montserrat.variable} ${cormorantGaramond.variable}`} lang={lang}>
      <GoogleTagManager gtmId={siteConfig.gtmId} />
      <body style={{ height: "100dvh" }}>
        <ThemeRegistry>
          <Box sx={{ bgcolor: primaryColor, height: "4px", position: "fixed", width: "100%", zIndex: 2432 }} />
          <Header lang={lang} />
          {children}
          <BottomButtons lang={lang} />
          <Footer lang={lang} />
        </ThemeRegistry>
      </body>
    </html>
  );
}
