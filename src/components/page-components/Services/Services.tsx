import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Box } from "@mui/material";
import GenericPageText from "@/components/shared-components/GenericPageText";
import GenericPageTitle from "@/components/shared-components/GenericPageTitle";
import GenericPageSubTitle from "@/components/shared-components/GenericPageSubTitle";
import GenericPageMainTitle from "@/components/shared-components/GenericPageMainTitle";
import { ServiceTitleSection } from "@/components/page-components/Services/ServiceTitleSection";
import { ServiceCardSection } from "@/components/page-components/Services/ServiceCardSection";

interface Props {
  lang: LangEnum;
}

export default function Services({ lang }: Props) {
  return (
    <>
      <GenericPageMainTitle>{selectLang(lang, "services")}</GenericPageMainTitle>
      <ServiceTitleSection lang={lang} />
      <ServiceCardSection lang={lang} />
      <section>
        <GenericPageText>{selectLang(lang, "services-text-2")}</GenericPageText>
        <Box sx={{ mt: "4rem", mb: "4rem" }}>
          <GenericPageTitle>{selectLang(lang, "services-sep-1")}</GenericPageTitle>
          <GenericPageSubTitle>{selectLang(lang, "services-sep-2")}</GenericPageSubTitle>
        </Box>
        <GenericPageText sx={{ mb: "2rem" }}>{selectLang(lang, "services-text-3")}</GenericPageText>
        <GenericPageText sx={{ mb: "2rem" }}>{selectLang(lang, "services-text-4")}</GenericPageText>
        <GenericPageText>{selectLang(lang, "services-text-5")}</GenericPageText>
      </section>
    </>
  );
}
