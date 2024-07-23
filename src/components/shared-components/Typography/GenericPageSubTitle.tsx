import { Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import processChildren from "@/components/shared-components/Typography/childrenProcessor";

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
      {processChildren(children)}
    </Typography>
  );
}
