import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  lang: LangEnum;
}

export default function Services({ lang }: Props) {
  const [card1Title, card1Subtitle, card1Text] = selectLang(lang, "services-card-1").split(" | ");
  const [card2Title, card2Text] = selectLang(lang, "services-card-2").split(" | ");
  const [card3Title, card3Text] = selectLang(lang, "services-card-3").split(" | ");
  return (
    <>
      <section>
        <Typography variant={"body1"}>{selectLang(lang, "services-text-1")}</Typography>
        <div>
          <div>
            <Typography variant={"h3"}>{card1Title}</Typography>
            <Typography variant={"h4"}>{card1Subtitle}</Typography>
            <div>
              <Image
                src={"https://www.petz.com.br/blog//wp-content/uploads/2022/01/cabra-de-estimacao.jpg"}
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
                src={"https://www.petz.com.br/blog//wp-content/uploads/2022/01/cabra-de-estimacao.jpg"}
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
                src={"https://www.petz.com.br/blog//wp-content/uploads/2022/01/cabra-de-estimacao.jpg"}
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
        <Typography variant={"body1"}>{selectLang(lang, "services-text-2")}</Typography>
        <Typography variant={"h3"}>{selectLang(lang, "services-sep-1")}</Typography>
        <Typography variant={"h4"}>{selectLang(lang, "services-sep-2")}</Typography>
        <Typography variant={"body1"}>{selectLang(lang, "services-text-3")}</Typography>
        <Typography variant={"body1"}>{selectLang(lang, "services-text-4")}</Typography>
        <Typography variant={"body1"}>{selectLang(lang, "services-text-5")}</Typography>
      </section>
    </>
  );
}
