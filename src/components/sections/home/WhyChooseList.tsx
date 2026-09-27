import { Box } from "@mui/material";
import React from "react";

import BulletedList from "@/components/ui/BulletList/BulletedList";
import BulletedListItem from "@/components/ui/BulletList/BulletedListItem";
import SectionContainer from "@/components/ui/SectionContainer";
import GenericPageText from "@/components/ui/Typography/GenericPageText";
import GenericPageTitle from "@/components/ui/Typography/GenericPageTitle";
import { homeLang, LangEnum } from "@/i18n";

function WhyChooseListItems({ lang }: { lang: LangEnum }) {
  const items = homeLang(lang, "home-sep-2-list").split(" | ");
  const itemsText = items.map((item, index) => (
    <React.Fragment key={index}>
      <BulletedListItem key={`item-${index}`} sx={{ justifyContent: "left" }}>
        <GenericPageText sx={{ textAlign: "left" }}>{item}</GenericPageText>
      </BulletedListItem>
    </React.Fragment>
  ));

  return <>{itemsText}</>;
}

export function WhyChooseList({ lang }: { lang: LangEnum }) {
  return (
    <SectionContainer>
      <Box>
        <GenericPageTitle sx={{ textAlign: "center" }}>{homeLang(lang, "home-sep-2")}</GenericPageTitle>
        <BulletedList>
          <WhyChooseListItems key={"listItems"} lang={lang} />
        </BulletedList>
      </Box>
    </SectionContainer>
  );
}
