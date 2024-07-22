import { LangEnum } from "@i18n/lang-selector";
import { ServiceTitleSection } from "@/components/page-components/Services/ServiceTitleSection";
import { ServiceCardSection } from "@/components/page-components/Services/ServiceCardSection";
import { ServiceTextSection } from "@/components/page-components/Services/ServiceTextSection";
import { ServiceHighlightsSection } from "@/components/page-components/Services/ServiceHighlightsSection";
import CTA from "@/components/shared-components/CTA";
import React from "react";

interface Props {
  lang: LangEnum;
}

export default function Services({ lang }: Props) {
  return (
    <>
      <ServiceTitleSection lang={lang} />
      <ServiceCardSection lang={lang} />
      <ServiceTextSection lang={lang} />
      <ServiceHighlightsSection lang={lang} />
      <CTA lang={lang} />
    </>
  );
}
