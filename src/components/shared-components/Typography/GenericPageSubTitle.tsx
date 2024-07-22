import { Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

interface Props {
  children: string;
  sx?: SxProps<Theme>;
}

export default function GenericPageSubTitle({ children, sx }: Props) {
  return (
    <Typography
      variant={"h4"}
      sx={{
        textAlign: "center",
        fontWeight: "400",
        fontSize: { xs: "1.6rem", lg: "1.65rem" },
        mt: "1rem",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}
