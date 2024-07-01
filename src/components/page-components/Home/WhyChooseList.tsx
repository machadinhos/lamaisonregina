import { homeLang, LangEnum } from "@i18n/lang-selector";
import { Box, Button, List, ListItem } from "@mui/material";
import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";
import React, { useState } from "react";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import { primaryColor } from "@/styles/globals";
import GenericPageSubTitle from "@/components/shared-components/Typography/GenericPageSubTitle";
import BulletedList from "@/components/shared-components/BulletList/BulletedList";
import BulletedListItem from "@/components/shared-components/BulletList/BulletedListItem";

export function SustainabilityText({ lang }: { lang: LangEnum }) {
  return (
    <>
      <GenericPageSubTitle>{homeLang(lang, "home-sustainability-title-1")}</GenericPageSubTitle>
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

function WhyChooseListItems({ lang }: { lang: LangEnum }) {
  const [showSustainability, setShowSustainability] = useState(false);
  const items = homeLang(lang, "home-sep-2-list").split(" | ");
  const itemsText = items.map((item, index) => (
    <React.Fragment key={index}>
      <ListItem
        sx={{ width: { md: "70%", lg: "50%" }, display: "flex", justifyContent: "center" }}
        key={`item-${index}`}
      >
        <GenericPageText sx={{ textAlign: "center" }}>{item}</GenericPageText>
      </ListItem>
      {items.length - 1 === index && (
        <Button
          key="sustainability-button"
          sx={{ mb: "1rem" }}
          variant={"text"}
          onClick={() => setShowSustainability((prevState) => !prevState)}
        >
          {showSustainability ? homeLang(lang, "home-show-less") : homeLang(lang, "home-learn-more")}
        </Button>
      )}
      <Box key={`divider-${index}`} width={"40%"} height={"1px"} sx={{ backgroundColor: primaryColor }} />
    </React.Fragment>
  ));

  return (
    <>
      {itemsText}
      {showSustainability && <SustainabilityText lang={lang} />}
    </>
  );
}

export function WhyChooseList({ lang }: { lang: LangEnum }) {
  return (
    <Box
      sx={{
        px: { xs: "0.5rem", sm: "1rem", md: "1.5rem", lg: "2rem" },
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0",
          margin: "0",
          listStyle: "outside",
        }}
      >
        <GenericPageTitle>{homeLang(lang, "home-sep-2")}</GenericPageTitle>
        <WhyChooseListItems key={"listItems"} lang={lang} />
      </List>
    </Box>
  );
}
