import { Box, Grid, Typography } from "@mui/material";
import { LangEnum, servicesLang } from "@i18n/lang-selector";
import { primaryColor } from "@/styles/globals";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import Image from "next/image";

function ServiceCard({ title, subTitle, text, img }: { title: string; text: string; subTitle?: string; img: string }) {
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          verticalAlign: "top",
          gap: "1rem",
          height: { xs: "fit-content", sm: "5rem", lg: "5rem" },
        }}
      >
        <Typography variant={"h4"}>{title}</Typography>
      </Box>
      <Box width={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"} sx={{ aspectRatio: "1/1" }}>
        <Box
          width={"90%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ aspectRatio: "1/1", "&:hover": { width: "100%" }, transition: "width 300ms" }}
        >
          <Box
            sx={{
              position: "relative",
              aspectRatio: "1/1",
              width: "100%",
            }}
          >
            <Image style={{ borderRadius: "15px" }} src={img} alt={title} fill />
          </Box>
        </Box>
      </Box>
      <Box sx={{ alignItems: "start" }}>
        {subTitle && <GenericPageText sx={{ mt: 0, fontSize: { lg: "1rem" } }}>{subTitle}</GenericPageText>}
        <GenericPageText sx={{ mt: 0, fontSize: { lg: "1rem" } }}>{text}</GenericPageText>
      </Box>
    </Box>
  );
}

export const ServiceCardSection = ({ lang }: { lang: LangEnum }) => {
  const [card1Title, card1Subtitle, card1Text] = servicesLang(lang, "card-1").split(" | ");
  const [card2Title, card2Text] = servicesLang(lang, "card-2").split(" | ");
  const [card3Title, card3Text] = servicesLang(lang, "card-3").split(" | ");
  return (
    <Grid
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, minmax(300px, 1fr))",
          md: "repeat(2, minmax(300px, 1fr))",
          lg: "repeat(3, minmax(300px, 1fr))",
        },
        gap: "1rem",
        justifyContent: "center",
        mt: "2rem",
      }}
    >
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
    </Grid>
  );
};
