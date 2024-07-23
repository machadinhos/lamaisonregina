import { Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import processChildren from "@/components/shared-components/Typography/childrenProcessor";

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
        mb: "2rem",
        ...sx,
      }}
    >
      {processChildren(children)}
    </Typography>
  );
}
