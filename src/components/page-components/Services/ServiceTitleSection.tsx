import { LangEnum, servicesLang } from "@i18n/lang-selector";
import { Box } from "@mui/material";

import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import SectionContainer from "@/components/shared-components/SectionContainer";

export function ServiceTitleSection({ lang }: { lang: LangEnum }) {
  return (
    <SectionContainer sx={{ mb: 0 }}>
      <Box display={"flex"} flexDirection={"column"} justifyContent={{ xs: "center", lg: "start" }} width={"100%"}>
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
