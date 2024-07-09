import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";

interface CustomDocumentProps extends DocumentInitialProps {
  lang: string;
}

class CustomDocument extends Document<CustomDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const lang = ctx.asPath?.split("/")[1] ?? "pt";
    return { ...initialProps, lang };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head>
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
            as="font"
            type="font"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
