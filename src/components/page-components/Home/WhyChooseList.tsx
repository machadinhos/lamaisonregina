import { homeLang, LangEnum } from "@i18n/lang-selector";
import { Box } from "@mui/material";
import React from "react";

import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import BulletedList from "@/components/shared-components/BulletList/BulletedList";
import BulletedListItem from "@/components/shared-components/BulletList/BulletedListItem";
import SectionContainer from "@/components/shared-components/SectionContainer";

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
