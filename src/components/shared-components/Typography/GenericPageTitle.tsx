import { Box, Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

import processChildren from "@/components/shared-components/Typography/childrenProcessor";
import { primaryColor } from "@/styles/globals";

interface Props {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  noLine?: boolean;
  data?: string;
}

export default function GenericPageTitle({ children, sx, noLine, data }: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "fit-content" }}>
      <Typography
        data-coco={data}
        sx={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: { xs: "1.7rem", lg: "1.8rem" },
          mt: { xs: "1rem", md: "1.5rem" },
          mb: { xs: "1rem", md: "1.5rem" },
          ...sx,
        }}
        variant={"h3"}
      >
        {typeof children === "string" ? processChildren(children) : children}
      </Typography>
      {!noLine && (
        <Box
          sx={{
            width: "100px",
            height: "2px",
            backgroundColor: primaryColor,
          }}
        />
      )}
    </Box>
  );
}
