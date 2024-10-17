import { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";

function Document({ lang }: { lang: string }) {
  return (
    <Html lang={lang}>
      <Head>
        <meta content="all" name="robots" />
        <meta content="Pedro Machado (machadinhos) and Manuel Santos" name="author" />
        <meta content="06P2RTJNJDrbrG-sT4uv5yNSCbG0iE7EcN8rolF0JOc" name="google-site-verification" />
        <link href="https://www.googletagmanager.com" rel="preconnect" />
      </Head>
      <body style={{ height: "100dvh" }}>
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
