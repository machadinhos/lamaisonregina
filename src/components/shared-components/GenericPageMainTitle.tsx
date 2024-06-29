import { Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

interface Props {
  children: string;
  sx?: SxProps<Theme>;
}

export default function GenericPageMainTitle({ children, sx }: Props) {
  const defaultSx: SxProps<Theme> = {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: { xs: "5rem", sm: "9rem" },
  };

  const mergedSx = { ...defaultSx, ...sx };

  return (
    <Typography variant={"h1"} sx={mergedSx}>
      {children}
    </Typography>
  );
}
