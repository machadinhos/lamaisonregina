import { Cormorant_Garamond, Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-montserrat",
});

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant-garamond",
});
