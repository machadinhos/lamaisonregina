import React, { ReactNode } from "react";
import { Box, ListItem } from "@mui/material";
import { primaryColor } from "@/styles/globals";

export const FAQListItem = ({ children }: { children: ReactNode | ReactNode[] }) => (
  <>
    <ListItem sx={{ display: "block", margin: 0, padding: 0 }}>{children}</ListItem>
    <Box width={"100%"} height={"1px"} mt={"1rem"} sx={{ backgroundColor: primaryColor }}></Box>
  </>
);