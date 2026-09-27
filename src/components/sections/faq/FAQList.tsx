"use client";

import { List } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

import { FAQAccordion, FAQAccordionDetails, FAQAccordionSummary } from "@/components/sections/faq/FAQAccordion";
import { FAQTitle } from "@/components/sections/faq/FAQTitle";
import BulletedList from "@/components/ui/BulletList/BulletedList";
import BulletedListItem from "@/components/ui/BulletList/BulletedListItem";
import GenericPageText from "@/components/ui/Typography/GenericPageText";
import addressSelect from "@/config/contacts";
import { faqLang, LangEnum } from "@/i18n";
import { primaryColor } from "@/theme/colors";

const FAQContactsList = dynamic(() => import("@/components/sections/faq/FAQContactsList"), { ssr: false });

export default function FAQList({
  lang,
  listRef,
}: {
  lang: LangEnum;
  listRef: React.RefObject<HTMLUListElement | null>;
}) {
  return (
    <List ref={listRef} sx={{ padding: 0, margin: 0 }}>
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
            <Link href={addressSelect.googleMapsAddress} style={{ color: primaryColor }} target={"_blank"}>
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
          <FAQContactsList lang={lang} />
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
            <Link href={`/${lang}/contacts#header`} style={{ color: primaryColor }}>
              {faqLang(lang, "faq-pricing-text-2")}
            </Link>
            {faqLang(lang, "faq-pricing-text-3")}
          </GenericPageText>
        </FAQAccordionDetails>
      </FAQAccordion>
      <FAQAccordion>
        <FAQAccordionSummary>
          <FAQTitle>{faqLang(lang, "faq-open-space-title")}</FAQTitle>
        </FAQAccordionSummary>
        <FAQAccordionDetails>
          <GenericPageText>{faqLang(lang, "faq-open-space-text")}</GenericPageText>
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
          <FAQTitle>{faqLang(lang, "faq-other-questions-title")}</FAQTitle>
        </FAQAccordionSummary>
        <FAQAccordionDetails>
          <GenericPageText>
            {faqLang(lang, "faq-other-questions-text-1") + " "}
            <Link href={`/${lang}/contacts#header`} style={{ color: primaryColor }}>
              {faqLang(lang, "faq-other-questions-text-2")}
            </Link>
            {" " + faqLang(lang, "faq-other-questions-text-3")}
          </GenericPageText>
        </FAQAccordionDetails>
      </FAQAccordion>
    </List>
  );
}
