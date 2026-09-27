import { Box } from "@mui/material";

import SectionContainer from "@/components/ui/SectionContainer";
import GenericPageText from "@/components/ui/Typography/GenericPageText";
import { LangEnum, servicesLang } from "@/i18n";

export function ServiceTitleSection({ lang }: { lang: LangEnum }) {
  return (
    <SectionContainer sx={{ mb: 0 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "center", lg: "start" },
          width: "100%",
        }}
      >
        <GenericPageText
          sx={{
            textAlign: { xs: "justify", md: "center" },
          }}
        >
          {servicesLang(lang, "text-1")}
        </GenericPageText>
      </Box>
    </SectionContainer>
  );
}
