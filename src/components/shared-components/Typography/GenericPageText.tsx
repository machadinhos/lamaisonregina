import { Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import { ReactNode } from "react";

type childrenType = string | ReactNode;

interface Props {
  children: string | childrenType[];
  sx?: SxProps<Theme>;
}

export default function GenericPageText({ children, sx }: Props) {
  return (
    <Typography
      variant={"body1"}
      sx={{
        textAlign: "justify",
        fontSize: { xs: "1.2rem", sm: "1.4rem", lg: "1.5rem" },
        hyphens: "auto",
        wordBreak: "break-word",
        mt: "1rem",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}
