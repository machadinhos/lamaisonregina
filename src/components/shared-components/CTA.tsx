import { globalsLang, LangEnum } from "@i18n/lang-selector";
import { Box, IconButton } from "@mui/material";
import Link from "next/link";

import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import SectionContainer from "@/components/shared-components/SectionContainer";
import { primaryColor } from "@/styles/globals";

export default function CTA({ lang }: { lang: LangEnum }) {
  return (
    <>
      <SectionContainer>
        <Box display={"flex"} justifyContent={"center"} marginTop={"3rem"}>
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
            <Link href={`/${lang}/contacts/#header`}>
              <GenericPageText sx={{ color: "white" }}>{globalsLang(lang, "cta")}</GenericPageText>
            </Link>
          </IconButton>
        </Box>
      </SectionContainer>
    </>
  );
}
