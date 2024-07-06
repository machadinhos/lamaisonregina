import { globalsLang, LangEnum } from "@i18n/lang-selector";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import GenericPageText from "@/components/shared-components/Typography/GenericPageText";

export default function CTA({ lang }: { lang: LangEnum }) {
  return (
    <>
      <Box display={"flex"} justifyContent={"center"} marginTop={"3rem"}>
        <Link href={`/${lang}/contacts/#header`} style={{ width: "max-content" }}>
          <Button
            variant={"contained"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textTransform: "none",
              padding: "1rem",
              pt: "0",
              margin: 0,
            }}
          >
            <GenericPageText>{globalsLang(lang, "cta")}</GenericPageText>
          </Button>
        </Link>
      </Box>
    </>
  );
}