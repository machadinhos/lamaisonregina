import { faqLang, LangEnum } from "@i18n/lang-selector";
import { List } from "@mui/material";
import Link from "next/link";
import React from "react";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import GenericPageMainTitle from "@/components/shared-components/Typography/GenericPageMainTitle";
import { primaryColor } from "@/styles/globals";
import BulletedList from "@/components/shared-components/BulletList/BulletedList";
import BulletedListItem from "@/components/shared-components/BulletList/BulletedListItem";
import { FAQListItem } from "@/components/page-components/FAQ/FAQListItem";
import { FAQTitle } from "@/components/page-components/FAQ/FAQTitle";
import CTA from "@/components/shared-components/CTA";

interface Props {
  lang: LangEnum;
}

export default function FAQ({ lang }: Props) {
  return (
    <>
      <GenericPageMainTitle>FAQ</GenericPageMainTitle>
      <List sx={{ padding: 0, margin: 0 }}>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-where-title")}</FAQTitle>
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
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-event-types-title")}</FAQTitle>
          <GenericPageText>{faqLang(lang, "faq-event-types-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-capacity-title")}</FAQTitle>
          <GenericPageText>{faqLang(lang, "faq-capacity-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-hotel-title")}</FAQTitle>
          <GenericPageText>{faqLang(lang, "faq-hotel-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-why-title")}</FAQTitle>
          <GenericPageText>{faqLang(lang, "faq-why-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-contact-title")}</FAQTitle>
          <GenericPageText>{faqLang(lang, "faq-contact-text")}</GenericPageText>
          <BulletedList>
            <BulletedListItem>
              <GenericPageText>{faqLang(lang, "faq-contact-list-1")}</GenericPageText>
            </BulletedListItem>
            <BulletedListItem>
              <GenericPageText>{faqLang(lang, "faq-contact-list-2")}</GenericPageText>
            </BulletedListItem>
          </BulletedList>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-suppliers-title")}</FAQTitle>
          <GenericPageText>{faqLang(lang, "faq-suppliers-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-catering-title")}</FAQTitle>
          <GenericPageText>{faqLang(lang, "faq-catering-text-1")}</GenericPageText>
          <GenericPageText>{faqLang(lang, "faq-catering-text-2")}</GenericPageText>
          <GenericPageText>{faqLang(lang, "faq-catering-text-3")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-noise-title")}</FAQTitle>
          <GenericPageText>{faqLang(lang, "faq-noise-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-tourism-title")}</FAQTitle>
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
          </BulletedList>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-beach-title")}</FAQTitle>
          <GenericPageText>{faqLang(lang, "faq-beach-text-1")}</GenericPageText>
          <GenericPageText>{faqLang(lang, "faq-beach-text-2")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-supermarket-title")}</FAQTitle>
          <GenericPageText>{faqLang(lang, "faq-supermarket-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-pricing-title")}</FAQTitle>
          <GenericPageText>
            {faqLang(lang, "faq-pricing-text-1")}{" "}
            <Link style={{ color: primaryColor }} href={`/${lang}/contacts`}>
              {faqLang(lang, "faq-pricing-text-2")}
            </Link>{" "}
            {faqLang(lang, "faq-pricing-text-3")}
          </GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-portugal-title")}</FAQTitle>
          <GenericPageText>{faqLang(lang, "faq-portugal-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-open-space-title")}</FAQTitle>
          <GenericPageText>{faqLang(lang, "faq-portugal-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-parking-title")}</FAQTitle>
          <GenericPageText>{faqLang(lang, "faq-parking-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-communication-title")}</FAQTitle>
          <GenericPageText>{faqLang(lang, "faq-communication-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-ceremonies-title")}</FAQTitle>
          <GenericPageText>{faqLang(lang, "faq-ceremonies-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-mosquitoes-title")}</FAQTitle>
          <GenericPageText>{faqLang(lang, "faq-mosquitoes-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-sustainability-title")}</FAQTitle>
          <GenericPageText>{faqLang(lang, "faq-sustainability-text")}</GenericPageText>
        </FAQListItem>
        <FAQListItem>
          <FAQTitle>{faqLang(lang, "faq-other-questions-title")}</FAQTitle>
          <GenericPageText>{faqLang(lang, "faq-other-questions-text")}</GenericPageText>
        </FAQListItem>
      </List>
      <CTA lang={lang} />
    </>
  );
}
