import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  lang: LangEnum;
}

export default function About({ lang }: Props) {
  const [card1Title, card1Text] = selectLang(lang, "about-card-1").split(" | ");
  const [card2Title, card2Text] = selectLang(lang, "about-card-2").split(" | ");
  const [card3Title, card3Text] = selectLang(lang, "about-card-3").split(" | ");
  return (
    <>
      <section>
        <Typography variant={"body1"}>
          {selectLang(lang, "about-text-1")}
        </Typography>
        <div>
          <div>
            <Typography variant={"h3"}>{card1Title}</Typography>
            <div>
              <Image
                src={
                  "https://www.petz.com.br/blog//wp-content/uploads/2022/01/cabra-de-estimacao.jpg"
                }
                alt={card1Title}
                width={100}
                height={100}
                // fill
              />
            </div>
            <Typography variant={"body1"}>{card1Text}</Typography>
          </div>
          <div>
            <Typography variant={"h3"}>{card2Title}</Typography>
            <div>
              <Image
                src={
                  "https://www.petz.com.br/blog//wp-content/uploads/2022/01/cabra-de-estimacao.jpg"
                }
                alt={card2Title}
                width={100}
                height={100}
                // fill
              />
            </div>
            <Typography variant={"body1"}>{card2Text}</Typography>
          </div>
          <div>
            <Typography variant={"h3"}>{card3Title}</Typography>
            <div>
              <Image
                src={
                  "https://www.petz.com.br/blog//wp-content/uploads/2022/01/cabra-de-estimacao.jpg"
                }
                alt={card3Title}
                width={100}
                height={100}
                // fill
              />
            </div>
            <Typography variant={"body1"}>{card3Text}</Typography>
          </div>
        </div>
      </section>
      <section>
        <Typography variant={"body1"}>
          {selectLang(lang, "about-text-2")}
        </Typography>
        <Typography variant={"h3"}>
          {selectLang(lang, "about-sep-1")}
        </Typography>
        <Typography variant={"h4"}>
          {selectLang(lang, "about-sep-2")}
        </Typography>
        <Typography variant={"body1"}>
          {selectLang(lang, "about-text-3")}
        </Typography>
        <Typography variant={"body1"}>
          {selectLang(lang, "about-text-4")}
        </Typography>
      </section>
    </>
  );
}
