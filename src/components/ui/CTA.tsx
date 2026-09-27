import { Box, IconButton } from "@mui/material";
import Link from "next/link";

import SectionContainer from "@/components/ui/SectionContainer";
import GenericPageText from "@/components/ui/Typography/GenericPageText";
import { globalsLang, LangEnum } from "@/i18n";
import { primaryColor } from "@/theme/colors";

export default function CTA({ lang }: { lang: LangEnum }) {
  return (
    <>
      <SectionContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link href={`/${lang}/contacts/#header`}>
            <IconButton
              sx={{
                backgroundColor: primaryColor,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textTransform: "none",
                padding: "1rem",
                pt: "0",
                margin: 0,
                borderRadius: 0,
                "&:hover": { backgroundColor: primaryColor },
              }}
            >
              <GenericPageText sx={{ color: "white" }}>{globalsLang(lang, "cta")}</GenericPageText>
            </IconButton>
          </Link>
        </Box>
      </SectionContainer>
    </>
  );
}
