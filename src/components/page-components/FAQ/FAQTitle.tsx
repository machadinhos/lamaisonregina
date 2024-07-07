import GenericPageSubTitle from "@/components/shared-components/Typography/GenericPageSubTitle";
import React from "react";

export const FAQTitle = ({ children }: { children: string }) => (
  <GenericPageSubTitle
    sx={{
      fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
      fontWeight: "300",
      textAlign: "left",
      mt: "2rem",
    }}
  >
    {children}
  </GenericPageSubTitle>
);
