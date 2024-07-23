import { Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import processChildren from "@/components/shared-components/Typography/childrenProcessor";

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
        fontWeight: "400",
        fontSize: { xs: "1.7rem", lg: "1.8rem" },
        mt: "1.5rem",
        ...sx,
      }}
    >
      {processChildren(children)}
    </Typography>
  );
}
