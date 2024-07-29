import React, { useState } from "react";
import { IconButton, Snackbar } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { primaryColor } from "@/styles/globals";
import { globalsLang, LangEnum } from "@i18n/lang-selector";

export default function CopyButton({ textToCopy, lang }: { textToCopy: string; lang: LangEnum }) {
  const [open, setOpen] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setOpen(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      <IconButton onClick={handleCopy}>
        <ContentCopyIcon sx={{ color: primaryColor }} />
      </IconButton>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message={globalsLang(lang, "copied-message")}
      />
    </>
  );
}
