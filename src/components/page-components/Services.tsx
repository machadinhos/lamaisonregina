import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";
import { primaryColor } from "@/styles/globals";

interface Props {
  lang: LangEnum;
}

const ServiceText = ({ children }: { children: string }) => {
  return (
    <Typography
      variant={"body1"}
      sx={{
        textAlign: "justify",
        // fontSize: "1.5rem",
      }}
    >
      {children}
    </Typography>
  );
};

const ServiceCard = ({
  title,
  subTitle,
  text,
  img,
}: {
  title: string;
  text: string;
  img: string;
  subTitle?: string;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
        border: "1px solid",
        borderRadius: "1rem",
        borderColor: primaryColor,
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          verticalAlign: "top",
          gap: "1rem",
          height: "5rem",
        }}
      >
        <Typography variant={"h4"}>{title}</Typography>
        {subTitle && <Typography variant={"h5"}>{subTitle}</Typography>}
      </Box>
      <Box
        sx={{
          position: "relative",
          aspectRatio: "1/1",
          width: "100%",
        }}
      >
        <Image src={img} alt={title} fill />
      </Box>
      <Typography
        variant={"body1"}
        sx={{
          textAlign: "justify",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

const ServiceCardSection = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <Grid
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(auto-fit, minmax(300px, 1fr))",
          lg: "repeat(3, minmax(300px, 1fr))",
        },
        gap: "1rem",
        justifyContent: "center",
      }}
    >
      {children}
    </Grid>
  );
};

export default function Services({ lang }: Props) {
  const [card1Title, card1Subtitle, card1Text] = selectLang(lang, "services-card-1").split(" | ");
  const [card2Title, card2Text] = selectLang(lang, "services-card-2").split(" | ");
  const [card3Title, card3Text] = selectLang(lang, "services-card-3").split(" | ");
  return (
    <>
      <Typography variant={"h1"}>{selectLang(lang, "services")}</Typography>
      <section style={{ height: "auto", minHeight: "unset" }}>
        <Typography
          variant={"body1"}
          sx={{
            textAlign: { xs: "justify", md: "center" },
            mb: "2rem",
          }}
        >
          {selectLang(lang, "services-text-1")}
        </Typography>
        <ServiceCardSection>
          <ServiceCard
            title={card1Title}
            subTitle={card1Subtitle}
            text={card1Text}
            img={"https://www.petz.com.br/blog//wp-content/uploads/2022/01/cabra-de-estimacao.jpg"}
          />
          <ServiceCard
            title={card2Title}
            text={card2Text}
            img={"https://www.petz.com.br/blog//wp-content/uploads/2022/01/cabra-de-estimacao.jpg"}
          />
          <ServiceCard
            title={card3Title}
            text={card3Text}
            img={"https://www.petz.com.br/blog//wp-content/uploads/2022/01/cabra-de-estimacao.jpg"}
          />
        </ServiceCardSection>
      </section>
      <section>
        <ServiceText>{selectLang(lang, "services-text-2")}</ServiceText>
        <Box sx={{ mt: "4rem" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              marginTop: "1.5rem",
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem", lg: "3.25rem" },
            }}
            variant={"h3"}
          >
            {selectLang(lang, "services-sep-1")}
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
            }}
            variant={"h4"}
          >
            {selectLang(lang, "services-sep-2")}
          </Typography>
        </Box>
        <ServiceText>{selectLang(lang, "services-text-3")}</ServiceText>
        <ServiceText>{selectLang(lang, "services-text-4")}</ServiceText>
        <ServiceText>{selectLang(lang, "services-text-5")}</ServiceText>
      </section>
    </>
  );
}
