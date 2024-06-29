import { Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import { ReactNode } from "react";

type childrenType = string | ReactNode;

interface Props {
  children: string | childrenType[];
  sx?: SxProps<Theme>;
}

export default function GenericPageText({ children, sx }: Props) {
  const defaultSx: SxProps<Theme> = { textAlign: "justify" };

  const mergedSx = { ...defaultSx, ...sx };

  return (
    <Typography variant={"body1"} sx={mergedSx}>
      {children}
    </Typography>
  );
}
