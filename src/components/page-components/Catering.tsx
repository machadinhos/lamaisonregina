import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Typography } from "@mui/material";

interface Props {
  lang: LangEnum;
}

export default function Catering({ lang }: Props) {
  return (
    <>
      <Typography variant={"h1"}>Catering</Typography>
      <section>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem", lg: "3.25rem" },
          }}
          variant="h3"
        >
          {selectLang(lang, "catering-title-1")}
        </Typography>
        <Typography variant="body1">{selectLang(lang, "catering-text-1")}</Typography>
        <Typography variant="body1">{selectLang(lang, "catering-text-2")}</Typography>
      </section>
      <section>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem", lg: "3.25rem" },
          }}
          variant="h3"
        >
          {selectLang(lang, "catering-title-2")}
        </Typography>
        <Typography variant="body1">{selectLang(lang, "catering-text-3")}</Typography>
      </section>
      <section>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem", lg: "3.25rem" },
          }}
          variant="h3"
        >
          {selectLang(lang, "catering-title-3")}
        </Typography>
        <Typography variant="body1">{selectLang(lang, "catering-text-4")}</Typography>
      </section>
    </>
  );
}
