import { List } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  sx?: SxProps<Theme>;
}

export default function BulletedList({ children, sx }: Props) {
  return <List sx={{ listStyleType: "disc", ml: "5%", ...sx }}>{children}</List>;
}
