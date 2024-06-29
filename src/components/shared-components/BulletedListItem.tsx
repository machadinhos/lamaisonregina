import { ReactNode } from "react";
import { ListItem } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

interface Props {
  children: ReactNode | ReactNode[];
  sx?: SxProps<Theme>;
}

export default function BulletedListItem({ children, sx }: Props) {
  return <ListItem sx={{ display: "list-item", pl: 0, pr: 0, ...sx }}>{children}</ListItem>;
}
