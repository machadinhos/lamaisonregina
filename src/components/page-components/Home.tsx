import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Typography } from "@mui/material";

interface Props {
  lang: LangEnum;
}

export default function Home({ lang }: Props) {
  return (
    <>
      <section>
        <Typography variant="h3">{selectLang(lang, "home-welcome-1")}</Typography>
        <Typography variant="h1">La Maison Regina</Typography>
        <Typography variant="h3">{selectLang(lang, "home-welcome-2")}</Typography>
        <Typography variant="h2">{selectLang(lang, "home-slogan")}</Typography>
      </section>
      <section>
        <Typography variant="body1">{selectLang(lang, "home-text-1")}</Typography>
        <Typography variant="body1">{selectLang(lang, "home-text-2")}</Typography>
        <Typography variant="body1">{selectLang(lang, "home-text-3")}</Typography>
        <Typography variant="body1">{selectLang(lang, "home-text-4")}</Typography>
        <Typography variant="h3">{selectLang(lang, "home-sep-1")}</Typography>
        <Typography variant="body1">{selectLang(lang, "home-text-5")}</Typography>
        <Typography variant="body1">{selectLang(lang, "home-text-6")}</Typography>
        <Typography variant="h3">{selectLang(lang, "home-sep-2")}</Typography>
        <ul>
          {selectLang(lang, "home-sep-2-list")
            .split(" | ")
            .map((item, index) => (
              <li key={index}>
                <Typography variant={"body1"}>{item}</Typography>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
