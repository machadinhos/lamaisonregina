import { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";
import { globalsLang, LangEnum } from "@i18n/lang-selector";
import { GoogleAnalytics } from "@next/third-parties/google";

function Document({ lang }: { lang: string }) {
  const langEnum = lang === "pt" ? LangEnum.PT : LangEnum.EN;

  return (
    <Html lang={lang}>
      <Head>
        <meta charSet="utf-8" />
        <meta content={globalsLang(langEnum, "meta-description")} name="description" />
        <meta content={globalsLang(langEnum, "meta-keywords")} name="keywords" />
        <meta content="index, follow" name="robots" />
        <meta content="Pedro Machado (machadinhos) and Manuel Santos" name="author" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <GoogleAnalytics gaId="G-DDBD6FPCJV" />
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps & { lang: string }> => {
  const initialProps = await ctx.defaultGetInitialProps(ctx);
  const lang = ctx.asPath?.split("/")[1] ?? "pt";

  return { ...initialProps, lang };
};

export default Document;
