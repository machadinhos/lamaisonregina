import { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";
import { GoogleAnalytics } from "@next/third-parties/google";

function Document({ lang }: { lang: string }) {
  return (
    <Html lang={lang}>
      <Head>
        <GoogleAnalytics gaId="G-DDBD6FPCJV" />
        <meta charSet="utf-8" />
        <meta content="index, follow" name="robots" />
        <meta content="Pedro Machado (machadinhos) and Manuel Santos" name="author" />
        <meta content="06P2RTJNJDrbrG-sT4uv5yNSCbG0iE7EcN8rolF0JOc" name="google-site-verification" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps & { lang: string }> => {
  const initialProps = await ctx.defaultGetInitialProps(ctx);
  const lang = ctx.asPath?.split("/")[1] ?? "pt";

  return { ...initialProps, lang };
};

export default Document;
