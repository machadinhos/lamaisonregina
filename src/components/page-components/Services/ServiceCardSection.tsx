import { Box } from "@mui/material";
import { LangEnum, servicesLang } from "@i18n/lang-selector";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import Image from "next/image";
import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";
import SectionContainer from "@/components/shared-components/SectionContainer";
import imageSelect from "@images/image-select";

function ServiceCard({
  title,
  subTitle,
  text,
  img,
}: {
  title: string;
  text: string;
  subTitle?: string;
  img: { src: string; alt: string };
}) {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "start",
          width: "100%",
          maxWidth: "400px",
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
          <GenericPageTitle noLine>{title}</GenericPageTitle>
        </Box>
        <Box
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ aspectRatio: "1/1" }}
        >
          <Box
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              aspectRatio: "1/1",
              "&:hover": { transform: "scale(1.05)" },
              transition: "transform 300ms ease-in-out",
            }}
          >
            <Box
              sx={{
                position: "relative",
                aspectRatio: "1/1",
                width: "100%",
              }}
            >
              <Image src={img.src} alt={img.alt} fill />
            </Box>
          </Box>
        </Box>
        <Box sx={{ alignItems: "start" }}>
          {subTitle && <GenericPageText sx={{ mt: 0 }}>{subTitle}</GenericPageText>}
          <GenericPageText sx={{ mt: 0 }}>{text}</GenericPageText>
        </Box>
      </Box>
    </Box>
  );
}

export const ServiceCardSection = ({ lang }: { lang: LangEnum }) => {
  const [card1Title, card1Subtitle, card1Text] = servicesLang(lang, "card-1").split(" | ");
  const [card2Title, card2Text] = servicesLang(lang, "card-2").split(" | ");
  const [card3Title, card3Text] = servicesLang(lang, "card-3").split(" | ");

  return (
    <SectionContainer>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          mt: "2rem",
        }}
      >
        <ServiceCard title={card1Title} subTitle={card1Subtitle} text={card1Text} img={imageSelect.services.card1} />
        <ServiceCard title={card2Title} text={card2Text} img={imageSelect.services.card2} />
        <ServiceCard title={card3Title} text={card3Text} img={imageSelect.services.card3} />
      </Box>
    </SectionContainer>
  );
};
