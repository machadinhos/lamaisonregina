import { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";
import { globalsLang, LangEnum } from "@i18n/lang-selector";

function Document({ lang }: { lang: string }) {
  const langEnum = lang === "pt" ? LangEnum.PT : LangEnum.EN;

  return (
    <Html lang={lang}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={globalsLang(langEnum, "meta-description")} />
        <meta name="keywords" content={globalsLang(langEnum, "meta-keywords")} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Pedro Machado (machadinhos) and Manuel Santos" />
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
