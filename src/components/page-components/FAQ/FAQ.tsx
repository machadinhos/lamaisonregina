import { faqLang, LangEnum } from "@i18n/lang-selector";
import { List } from "@mui/material";
import Link from "next/link";
import React from "react";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import { primaryColor } from "@/styles/globals";
import BulletedList from "@/components/shared-components/BulletList/BulletedList";
import BulletedListItem from "@/components/shared-components/BulletList/BulletedListItem";
import { FAQTitle } from "@/components/page-components/FAQ/FAQTitle";
import CTA from "@/components/shared-components/CTA";
import { FAQAccordion, FAQAccordionDetails, FAQAccordionSummary } from "@/components/page-components/FAQ/FAQAccordion";
import SectionContainer from "@/components/shared-components/SectionContainer";
import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";

interface Props {
  lang: LangEnum;
}

export default function FAQ({ lang }: Props) {
  return (
    <>
      <SectionContainer>
        <GenericPageTitle>FAQ</GenericPageTitle>
        <List sx={{ padding: 0, margin: 0 }}>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-where-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>{faqLang(lang, "faq-where-text-1")}</GenericPageText>
              <GenericPageText>{faqLang(lang, "faq-where-text-2")}</GenericPageText>
              <GenericPageText>{faqLang(lang, "faq-where-text-3")}</GenericPageText>
              <GenericPageText>{faqLang(lang, "faq-where-text-4")}</GenericPageText>
              <GenericPageText>
                {faqLang(lang, "faq-where-text-5-1") + " "}
                <Link style={{ color: primaryColor }} href={`/${lang}/contacts`}>
                  {faqLang(lang, "faq-where-text-5-2")}
                </Link>
                {" " + faqLang(lang, "faq-where-text-5-3")}
              </GenericPageText>
            </FAQAccordionDetails>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-event-types-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>{faqLang(lang, "faq-event-types-text")}</GenericPageText>
            </FAQAccordionDetails>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-capacity-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>{faqLang(lang, "faq-capacity-text")}</GenericPageText>
            </FAQAccordionDetails>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-hotel-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>{faqLang(lang, "faq-hotel-text")}</GenericPageText>
            </FAQAccordionDetails>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-why-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>{faqLang(lang, "faq-why-text")}</GenericPageText>
            </FAQAccordionDetails>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-contact-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>{faqLang(lang, "faq-contact-text")}</GenericPageText>
              <BulletedList>
                <BulletedListItem>
                  <GenericPageText>{faqLang(lang, "faq-contact-list-1")}</GenericPageText>
                </BulletedListItem>
                <BulletedListItem>
                  <GenericPageText>{faqLang(lang, "faq-contact-list-2")}</GenericPageText>
                </BulletedListItem>
              </BulletedList>
            </FAQAccordionDetails>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-suppliers-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>{faqLang(lang, "faq-suppliers-text")}</GenericPageText>
            </FAQAccordionDetails>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-catering-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>{faqLang(lang, "faq-catering-text-1")}</GenericPageText>
              <GenericPageText>{faqLang(lang, "faq-catering-text-2")}</GenericPageText>
              <GenericPageText>{faqLang(lang, "faq-catering-text-3")}</GenericPageText>
            </FAQAccordionDetails>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-noise-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>{faqLang(lang, "faq-noise-text")}</GenericPageText>
            </FAQAccordionDetails>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-tourism-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>{faqLang(lang, "faq-tourism-text")}</GenericPageText>
              <BulletedList>
                <BulletedListItem>
                  <GenericPageText>{faqLang(lang, "faq-tourism-list-1")}</GenericPageText>
                </BulletedListItem>
                <BulletedListItem>
                  <GenericPageText>{faqLang(lang, "faq-tourism-list-2")}</GenericPageText>
                </BulletedListItem>
                <BulletedListItem>
                  <GenericPageText>{faqLang(lang, "faq-tourism-list-3")}</GenericPageText>
                </BulletedListItem>
                <BulletedListItem>
                  <GenericPageText>{faqLang(lang, "faq-tourism-list-4")}</GenericPageText>
                </BulletedListItem>
                <BulletedListItem>
                  <GenericPageText>{faqLang(lang, "faq-tourism-list-5")}</GenericPageText>
                </BulletedListItem>
                <BulletedListItem>
                  <GenericPageText>{faqLang(lang, "faq-tourism-list-6")}</GenericPageText>
                </BulletedListItem>
              </BulletedList>
            </FAQAccordionDetails>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-beach-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>{faqLang(lang, "faq-beach-text-1")}</GenericPageText>
              <GenericPageText>{faqLang(lang, "faq-beach-text-2")}</GenericPageText>
            </FAQAccordionDetails>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-supermarket-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>{faqLang(lang, "faq-supermarket-text")}</GenericPageText>
            </FAQAccordionDetails>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-pricing-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>
                {faqLang(lang, "faq-pricing-text-1")}{" "}
                <Link style={{ color: primaryColor }} href={`/${lang}/contacts`}>
                  {faqLang(lang, "faq-pricing-text-2")}
                </Link>{" "}
                {faqLang(lang, "faq-pricing-text-3")}
              </GenericPageText>
            </FAQAccordionDetails>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-portugal-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>{faqLang(lang, "faq-portugal-text")}</GenericPageText>
            </FAQAccordionDetails>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-open-space-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>{faqLang(lang, "faq-portugal-text")}</GenericPageText>
            </FAQAccordionDetails>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-parking-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>{faqLang(lang, "faq-parking-text")}</GenericPageText>
            </FAQAccordionDetails>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-communication-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>{faqLang(lang, "faq-communication-text")}</GenericPageText>
            </FAQAccordionDetails>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-ceremonies-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>{faqLang(lang, "faq-ceremonies-text")}</GenericPageText>
            </FAQAccordionDetails>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-mosquitoes-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>{faqLang(lang, "faq-mosquitoes-text")}</GenericPageText>
            </FAQAccordionDetails>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-sustainability-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>{faqLang(lang, "faq-sustainability-text")}</GenericPageText>
            </FAQAccordionDetails>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordionSummary>
              <FAQTitle>{faqLang(lang, "faq-other-questions-title")}</FAQTitle>
            </FAQAccordionSummary>
            <FAQAccordionDetails>
              <GenericPageText>{faqLang(lang, "faq-other-questions-text")}</GenericPageText>
            </FAQAccordionDetails>
          </FAQAccordion>
        </List>
      </SectionContainer>
      <CTA lang={lang} />
    </>
  );
}
