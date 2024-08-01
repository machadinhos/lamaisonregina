import React, { useState } from "react";
import { IconButton, Snackbar } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { globalsLang, LangEnum } from "@i18n/lang-selector";

import { primaryColor } from "@/styles/globals";

export default function CopyButton({ textToCopy, lang }: { textToCopy: string; lang: LangEnum }) {
  const [open, setOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(true);
    } catch (err) {
      setCopySuccess(false);
    }
    setOpen(true);
  };

  return (
    <>
      <IconButton onClick={handleCopy}>
        <ContentCopyIcon sx={{ fontSize: "1.25rem", color: primaryColor }} />
      </IconButton>
      <Snackbar
        autoHideDuration={2000}
        message={copySuccess ? globalsLang(lang, "copied-message") : globalsLang(lang, "copied-error")}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
