import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Box, List, ListItem } from "@mui/material";
import Link from "next/link";
import React, { ReactNode } from "react";
import GenericPageText from "@/components/shared-components/GenericPageText";
import GenericPageMainTitle from "@/components/shared-components/GenericPageMainTitle";
import GenericPageSubTitle from "@/components/shared-components/GenericPageSubTitle";
import { primaryColor } from "@/styles/globals";

interface Props {
  lang: LangEnum;
}

const FAQTitle = ({ children }: { children: string }) => (
  <GenericPageSubTitle
    sx={{
      fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
      textAlign: "left",
      mt: "2rem",
    }}
  >
    {children}
  </GenericPageSubTitle>
);

const FAQListItem = ({ children }: { children: ReactNode | ReactNode[] }) => (
  <>
    <ListItem sx={{ display: "block", margin: 0, padding: 0 }}>{children}</ListItem>
    <Box width={"100%"} height={"1px"} mt={"1rem"} sx={{ backgroundColor: primaryColor }}></Box>
  </>
);

const FAQNestedList = ({ children }: { children: ReactNode | ReactNode[] }) => (
  <>
    <List sx={{ listStyleType: "disc" }}>{children}</List>
  </>
);

export default function FAQ({ lang }: Props) {
  return (
    <>
      <GenericPageMainTitle>FAQ</GenericPageMainTitle>
      <List sx={{ padding: 0, margin: 0 }}>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-where-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-where-text-1")}</GenericPageText>
          <GenericPageText>{selectLang(lang, "faq-where-text-2")}</GenericPageText>
          <GenericPageText>{selectLang(lang, "faq-where-text-3")}</GenericPageText>
          <GenericPageText>{selectLang(lang, "faq-where-text-4")}</GenericPageText>
          <GenericPageText>
            {selectLang(lang, "faq-where-text-5-1") + " "}
            <Link href={`/${lang}/contacts`}>{selectLang(lang, "faq-where-text-5-2")}</Link>
            {" " + selectLang(lang, "faq-where-text-5-3")}
          </GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-event-types-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-event-types-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-capacity-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-capacity-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-hotel-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-hotel-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-why-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-why-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-contact-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-contact-text")}</GenericPageText>
          <FAQNestedList>
            <ListItem>
              <GenericPageText>{selectLang(lang, "faq-contact-list-1")}</GenericPageText>
            </ListItem>
            <ListItem>
              <GenericPageText>{selectLang(lang, "faq-contact-list-2")}</GenericPageText>
            </ListItem>
          </FAQNestedList>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-suppliers-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-suppliers-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-catering-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-catering-text-1")}</GenericPageText>
          <GenericPageText>{selectLang(lang, "faq-catering-text-2")}</GenericPageText>
          <GenericPageText>{selectLang(lang, "faq-catering-text-3")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-noise-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-noise-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-tourism-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-tourism-text")}</GenericPageText>
          <List>
            <ListItem>
              <GenericPageText>{selectLang(lang, "faq-tourism-list-1")}</GenericPageText>
            </ListItem>
            <ListItem>
              <GenericPageText>{selectLang(lang, "faq-tourism-list-2")}</GenericPageText>
            </ListItem>
            <ListItem>
              <GenericPageText>{selectLang(lang, "faq-tourism-list-3")}</GenericPageText>
            </ListItem>
            <ListItem>
              <GenericPageText>{selectLang(lang, "faq-tourism-list-4")}</GenericPageText>
            </ListItem>
            <ListItem>
              <GenericPageText>{selectLang(lang, "faq-tourism-list-5")}</GenericPageText>
            </ListItem>
          </List>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-beach-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-beach-text-1")}</GenericPageText>
          <GenericPageText>{selectLang(lang, "faq-beach-text-2")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-supermarket-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-supermarket-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-pricing-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-pricing-text-1")}</GenericPageText>
          <GenericPageText>{selectLang(lang, "faq-pricing-text-2")}</GenericPageText>
          <GenericPageText>{selectLang(lang, "faq-pricing-text-3")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-portugal-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-portugal-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-open-space-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-portugal-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-parking-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-parking-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-communication-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-communication-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-ceremonies-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-ceremonies-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-mosquitoes-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-mosquitoes-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-sustainability-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-sustainability-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{selectLang(lang, "faq-other-questions-title")}</FAQTitle>
          <GenericPageText>{selectLang(lang, "faq-other-questions-text")}</GenericPageText>
        </FAQListItem>
      </List>
    </>
  );
}
