import { globalsLang, LangEnum } from "@i18n/lang-selector";
import { Box, Button, IconButton } from "@mui/material";
import Link from "next/link";

import GenericPageText from "@/components/shared-components/Typography/GenericPageText";
import SectionContainer from "@/components/shared-components/SectionContainer";

export default function CTA({ lang }: { lang: LangEnum }) {
  return (
    <>
      <SectionContainer>
        <Box display={"flex"} justifyContent={"center"} marginTop={"3rem"}>
          <IconButton>
            <Link href={`/${lang}/contacts/#header`} style={{ width: "max-content" }}>
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textTransform: "none",
                  padding: "1rem",
                  pt: "0",
                  margin: 0,
                  borderRadius: 0,
                }}
                variant={"contained"}
              >
                <GenericPageText sx={{ color: "white" }}>{globalsLang(lang, "cta")}</GenericPageText>
              </Button>
            </Link>
          </IconButton>
        </Box>
      </SectionContainer>
    </>
  );
}
