import React from "react";

import { ServiceCardSection } from "@/components/sections/services/ServiceCardSection";
import { ServiceHighlightsSection } from "@/components/sections/services/ServiceHighlightsSection";
import { ServiceTextSection } from "@/components/sections/services/ServiceTextSection";
import { ServiceTitleSection } from "@/components/sections/services/ServiceTitleSection";
import CTA from "@/components/ui/CTA";
import { LangEnum } from "@/i18n";

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
