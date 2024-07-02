import { LangEnum, servicesLang } from "@i18n/lang-selector";
import GenericPageMainTitle from "@/components/shared-components/Typography/GenericPageMainTitle";
import { ServiceTitleSection } from "@/components/page-components/Services/ServiceTitleSection";
import { ServiceCardSection } from "@/components/page-components/Services/ServiceCardSection";
import { ServiceTextSection } from "@/components/page-components/Services/ServiceTextSection";
import { ServiceHighlightsSection } from "@/components/page-components/Services/ServiceHighlightsSection";

interface Props {
  lang: LangEnum;
}

export default function Services({ lang }: Props) {
  return (
    <>
      <GenericPageMainTitle>{servicesLang(lang, "title")}</GenericPageMainTitle>
      <ServiceTitleSection lang={lang} />
      <ServiceCardSection lang={lang} />
      <ServiceTextSection lang={lang} />
      <ServiceHighlightsSection lang={lang} />
    </>
  );
}
