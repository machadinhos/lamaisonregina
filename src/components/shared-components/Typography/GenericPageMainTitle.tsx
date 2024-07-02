import { Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

interface Props {
  children: string;
  sx?: SxProps<Theme>;
}

export default function GenericPageMainTitle({ children, sx }: Props) {
  return (
    <Typography
      variant={"h1"}
      sx={{
        textAlign: "center",
        fontWeight: "300",
        fontSize: { xs: "4rem", sm: "6rem" },
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}
