import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import { LangEnum, servicesLang } from "@i18n/lang-selector";
import { Box } from "@mui/material";
import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";
import GenericPageSubTitle from "@/components/shared-components/Typography/GenericPageSubTitle";

export function ServiceTextSection({ lang }: { lang: LangEnum }) {
  return (
    <section>
      <Box sx={{ mt: "4rem", mb: "4rem" }}>
        <GenericPageTitle>{servicesLang(lang, "sep-1")}</GenericPageTitle>
        <GenericPageSubTitle>{servicesLang(lang, "sep-2")}</GenericPageSubTitle>
      </Box>
      <GenericPageText sx={{ mb: "2rem" }}>{servicesLang(lang, "text-3")}</GenericPageText>
      <GenericPageText sx={{ mb: "2rem" }}>{servicesLang(lang, "text-4")}</GenericPageText>
      <GenericPageText>{servicesLang(lang, "text-5")}</GenericPageText>
    </section>
  );
}
