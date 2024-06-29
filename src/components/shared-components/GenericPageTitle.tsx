import { Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

interface Props {
  children: string;
  sx?: SxProps<Theme>;
}

export default function GenericPageTitle({ children, sx }: Props) {
  const defaultSx: SxProps<Theme> = {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem", lg: "3.25rem" },
    mt: "1.5rem",
  };

  const mergedSx = { ...defaultSx, ...sx };

  return (
    <Typography variant={"h3"} sx={mergedSx}>
      {children}
    </Typography>
  );
}
