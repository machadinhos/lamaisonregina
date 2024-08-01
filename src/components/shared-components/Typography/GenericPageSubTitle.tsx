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
      sx={{
        textAlign: "center",
        fontWeight: "400",
        fontSize: { xs: "1.2rem", lg: "1.25rem" },
        mt: "1rem",
        ...sx,
      }}
      variant={"h4"}
    >
      {processChildren(children)}
    </Typography>
  );
}
