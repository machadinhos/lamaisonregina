import { Box } from "@mui/material";

import SectionContainer from "@/components/ui/SectionContainer";
import GenericPageSubTitle from "@/components/ui/Typography/GenericPageSubTitle";
import GenericPageText from "@/components/ui/Typography/GenericPageText";
import GenericPageTitle from "@/components/ui/Typography/GenericPageTitle";
import { LangEnum, servicesLang } from "@/i18n";

export function ServiceTextSection({ lang }: { lang: LangEnum }) {
  return (
    <SectionContainer>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          mt: { md: "4rem" },
          mb: "4rem",
        }}
      >
        <GenericPageTitle>{servicesLang(lang, "sep-1")}</GenericPageTitle>
        <GenericPageSubTitle>{servicesLang(lang, "sep-2")}</GenericPageSubTitle>
      </Box>
      <GenericPageText sx={{ mb: "2rem" }}>{servicesLang(lang, "text-3")}</GenericPageText>
      <GenericPageText sx={{ mb: "2rem" }}>{servicesLang(lang, "text-4")}</GenericPageText>
      <GenericPageText>{servicesLang(lang, "text-5")}</GenericPageText>
    </SectionContainer>
  );
}
