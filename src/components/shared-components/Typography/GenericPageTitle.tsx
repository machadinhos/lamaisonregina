import { Box, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

import processChildren from "@/components/shared-components/Typography/childrenProcessor";
import { primaryColor } from "@/styles/globals";

interface Props {
  children: string;
  sx?: SxProps<Theme>;
  noLine?: boolean;
}

export default function GenericPageTitle({ children, sx, noLine }: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "fit-content" }}>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "400",
          fontSize: { xs: "1.7rem", lg: "1.8rem" },
          mt: "1.5rem",
          mb: "1.5rem",
          ...sx,
        }}
        variant={"h3"}
      >
        {processChildren(children)}
      </Typography>
      {!noLine && (
        <Box
          sx={{
            width: "30%",
            height: "1px",
            backgroundColor: primaryColor,
          }}
        />
      )}
    </Box>
  );
}
