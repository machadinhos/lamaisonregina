import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link rel="preload" href="/fonts/elipses-caps.otf" as="font" type={"font/otf"} crossOrigin={"anonymous"} />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
