import { Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import { ReactNode } from "react";
import processChildren from "@/components/shared-components/Typography/childrenProcessor";

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
        fontSize: { xs: "1.15rem", sm: "1.1rem", lg: "1rem" },
        hyphens: "auto",
        wordBreak: "break-word",
        mt: "1rem",
        ...sx,
      }}
    >
      {processChildren(children)}
    </Typography>
  );
}
