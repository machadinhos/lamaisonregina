import { Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

interface Props {
  children: string;
  sx?: SxProps<Theme>;
}

export default function GenericPageSubTitle({ children, sx }: Props) {
  const defaultSx: SxProps<Theme> = {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3rem" },
    mt: "1rem",
  };

  const mergedSx = { ...defaultSx, ...sx };

  return (
    <Typography variant={"h4"} sx={mergedSx}>
      {children}
    </Typography>
  );
}
