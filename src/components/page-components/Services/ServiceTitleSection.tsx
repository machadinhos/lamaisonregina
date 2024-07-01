import { LangEnum, selectLang } from "@i18n/lang-selector";
import { Box } from "@mui/material";
import GenericPageText from "@/components/shared-components/GenericPageText";

export function ServiceTitleSection({ lang }: { lang: LangEnum }) {
  return (
    <Box
      width={"100%"}
      height={{ xs: "calc(80vh - 120px)", sm: "calc(75vh - 150px)", md: "calc(70vh - 150px)" }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={{ xs: "center", lg: "start" }}
    >
      <GenericPageText
        sx={{
          textAlign: { xs: "justify", md: "center" },
        }}
      >
        {selectLang(lang, "services-text-1")}
      </GenericPageText>
    </Box>
  );
}