import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Typography } from "@mui/material";

interface Props {
  lang: LangEnum;
}

export default function Gallery({ lang }: Props) {
  return (
    <>
      <Typography variant={"h1"}>{selectLang(lang, "gallery")}</Typography>
      <section>
        <Typography variant="h3">{selectLang(lang, "gallery-title-1")}</Typography>
        <Typography variant="body1">{selectLang(lang, "gallery-text-1")}</Typography>
      </section>
      <section>
        <Typography variant="h3">{selectLang(lang, "gallery-title-2")}</Typography>
        <Typography variant="body1">{selectLang(lang, "gallery-text-2")}</Typography>
      </section>
      <section>
        <Typography variant="h3">{selectLang(lang, "gallery-title-3")}</Typography>
        <Typography variant="body1">{selectLang(lang, "gallery-text-3")}</Typography>
      </section>
      <section>
        <Typography variant="h3">{selectLang(lang, "gallery-title-4")}</Typography>
        <Typography variant="body1">{selectLang(lang, "gallery-text-4")}</Typography>
      </section>
      <section>
        <Typography variant="h3">{selectLang(lang, "gallery-title-5")}</Typography>
        <Typography variant="body1">{selectLang(lang, "gallery-text-5")}</Typography>
      </section>
    </>
  );
}
