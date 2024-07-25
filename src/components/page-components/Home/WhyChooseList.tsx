import { homeLang, LangEnum } from "@i18n/lang-selector";
import { Box, Button } from "@mui/material";
import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";
import React, { useState } from "react";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import GenericPageSubTitle from "@/components/shared-components/Typography/GenericPageSubTitle";
import BulletedList from "@/components/shared-components/BulletList/BulletedList";
import BulletedListItem from "@/components/shared-components/BulletList/BulletedListItem";
import SectionContainer from "@/components/shared-components/SectionContainer";

export function SustainabilityText({ lang }: { lang: LangEnum }) {
  return (
    <>
      <GenericPageSubTitle sx={{ textAlign: "left" }}>
        {homeLang(lang, "home-sustainability-title-1")}
      </GenericPageSubTitle>
      <GenericPageText>{homeLang(lang, "home-sustainability-text-1")}</GenericPageText>
      <BulletedList>
        <BulletedListItem>
          <GenericPageText>{homeLang(lang, "home-sustainability-list-1")}</GenericPageText>
        </BulletedListItem>
        <BulletedListItem>
          <GenericPageText>{homeLang(lang, "home-sustainability-list-2-1")}</GenericPageText>
          <GenericPageText>{homeLang(lang, "home-sustainability-list-2-2")}</GenericPageText>
        </BulletedListItem>
        <BulletedListItem>
          <GenericPageText>{homeLang(lang, "home-sustainability-list-3")}</GenericPageText>
        </BulletedListItem>
        <BulletedListItem>
          <GenericPageText>{homeLang(lang, "home-sustainability-list-4")}</GenericPageText>
        </BulletedListItem>
        <BulletedListItem>
          <GenericPageText>{homeLang(lang, "home-sustainability-list-5")}</GenericPageText>
        </BulletedListItem>
      </BulletedList>
    </>
  );
}

function WhyChooseListItems({
  lang,
  toggleSustainability,
  showSustainability,
}: {
  lang: LangEnum;
  toggleSustainability: () => void;
  showSustainability: boolean;
}) {
  const items = homeLang(lang, "home-sep-2-list").split(" | ");
  const itemsText = items.map((item, index) => (
    <React.Fragment key={index}>
      <BulletedListItem sx={{ justifyContent: "left" }} key={`item-${index}`}>
        <GenericPageText sx={{ textAlign: "left" }}>{item}</GenericPageText>
      </BulletedListItem>
      {items.length - 1 === index && (
        <Button key="sustainability-button" sx={{ mb: "1rem" }} variant={"text"} onClick={toggleSustainability}>
          {showSustainability ? homeLang(lang, "home-show-less") : homeLang(lang, "home-learn-more")}
        </Button>
      )}
    </React.Fragment>
  ));

  return <>{itemsText}</>;
}

export function WhyChooseList({ lang }: { lang: LangEnum }) {
  const [showSustainability, setShowSustainability] = useState(false);
  const toggleSustainability = () => {
    setShowSustainability((prevState) => !prevState);
  };
  return (
    <SectionContainer>
      <Box>
        <GenericPageTitle sx={{ textAlign: "left" }}>{homeLang(lang, "home-sep-2")}</GenericPageTitle>
        <BulletedList>
          <WhyChooseListItems
            toggleSustainability={toggleSustainability}
            showSustainability={showSustainability}
            key={"listItems"}
            lang={lang}
          />
        </BulletedList>
        {showSustainability && <SustainabilityText lang={lang} />}
      </Box>
    </SectionContainer>
  );
}
