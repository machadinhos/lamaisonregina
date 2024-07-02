import { Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

interface Props {
  children: string;
  sx?: SxProps<Theme>;
}

export default function GenericPageTitle({ children, sx }: Props) {
  return (
    <Typography
      variant={"h3"}
      sx={{
        textAlign: "center",
        fontWeight: "300",
        fontSize: { xs: "2rem", sm: "2.25rem", md: "2.75rem", lg: "3.25rem" },
        mt: "1.5rem",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}
