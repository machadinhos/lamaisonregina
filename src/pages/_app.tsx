import type { AppProps } from "next/app";
import Header from "@/components/globals/Header";
import Footer from "@/components/globals/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
