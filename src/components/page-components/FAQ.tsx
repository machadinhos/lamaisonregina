import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Typography } from "@mui/material";
import Link from "next/link";

interface Props {
  lang: LangEnum;
}

export default function FAQ({ lang }: Props) {
  return (
    <>
      <Typography variant="h3">{selectLang(lang, "faq-main-title")}</Typography>
      <ol>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-where-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-where-text-1")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-where-text-2")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-where-text-3")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-where-text-4")}</Typography>
          <Typography variant="body1">
            {selectLang(lang, "faq-where-text-5-1") + " "}
            <Link href={`/${lang}/contacts`}>{selectLang(lang, "faq-where-text-5-2")}</Link>
            {" " + selectLang(lang, "faq-where-text-5-3")}
          </Typography>
        </li>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-event-types-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-event-types-text")}</Typography>
        </li>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-capacity-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-capacity-text")}</Typography>
        </li>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-hotel-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-hotel-text")}</Typography>
        </li>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-why-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-why-text")}</Typography>
        </li>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-contact-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-contact-text")}</Typography>
          <ul>
            <li>
              <Typography variant="body1">{selectLang(lang, "faq-contact-list-1")}</Typography>
            </li>
            <li>
              <Typography variant="body1">{selectLang(lang, "faq-contact-list-2")}</Typography>
            </li>
          </ul>
        </li>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-suppliers-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-suppliers-text")}</Typography>
        </li>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-catering-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-catering-text-1")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-catering-text-2")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-catering-text-3")}</Typography>
        </li>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-noise-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-noise-text")}</Typography>
        </li>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-tourism-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-tourism-text")}</Typography>
          <ul>
            <li>
              <Typography variant="body1">{selectLang(lang, "faq-tourism-list-1")}</Typography>
            </li>
            <li>
              <Typography variant="body1">{selectLang(lang, "faq-tourism-list-2")}</Typography>
            </li>
            <li>
              <Typography variant="body1">{selectLang(lang, "faq-tourism-list-3")}</Typography>
            </li>
            <li>
              <Typography variant="body1">{selectLang(lang, "faq-tourism-list-4")}</Typography>
            </li>
            <li>
              <Typography variant="body1">{selectLang(lang, "faq-tourism-list-5")}</Typography>
            </li>
          </ul>
        </li>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-beach-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-beach-text-1")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-beach-text-2")}</Typography>
        </li>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-supermarket-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-supermarket-text")}</Typography>
        </li>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-pricing-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-pricing-text-1")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-pricing-text-2")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-pricing-text-3")}</Typography>
        </li>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-portugal-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-portugal-text")}</Typography>
        </li>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-open-space-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-portugal-text")}</Typography>
        </li>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-parking-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-parking-text")}</Typography>
        </li>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-communication-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-communication-text")}</Typography>
        </li>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-cerimonies-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-cerimonies-text")}</Typography>
        </li>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-mosquitoes-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-mosquitoes-text")}</Typography>
        </li>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-sustainability-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-sustainability-text")}</Typography>
        </li>
        <li>
          <Typography variant="h5">{selectLang(lang, "faq-other-questions-title")}</Typography>
          <Typography variant="body1">{selectLang(lang, "faq-other-questions-text")}</Typography>
        </li>
      </ol>
    </>
  );
}
