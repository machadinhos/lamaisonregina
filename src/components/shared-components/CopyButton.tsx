import React, { useState } from "react";
import { IconButton, Snackbar } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { primaryColor } from "@/styles/globals";

export default function CopyButton({ textToCopy }: { textToCopy: string }) {
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
      <Snackbar open={open} onClose={() => setOpen(false)} autoHideDuration={2000} message="Copied to clipboard" />
    </>
  );
}
