import { Typography } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import { ReactNode } from "react";

type childrenType = string | ReactNode;

interface Props {
  children: string | childrenType[];
  sx?: SxProps<Theme>;
}

const processChild = (child: string, array: childrenType[]) => {
  const splitChild = child.split("_");
  if (splitChild.length === 1) {
    array.push(child);
    return;
  }
  for (let i = 0; i < splitChild.length; i++) {
    if (splitChild[i] !== "") {
      if (i % 2 === 0) {
        array.push(splitChild[i]);
      } else {
        array.push(<i key={i}>{splitChild[i]}</i>);
      }
    }
  }
};

export default function GenericPageText({ children, sx }: Props) {
  const finalChildren: childrenType[] = [];
  if (Array.isArray(children)) {
    for (const child of children) {
      if (typeof child === "string") {
        processChild(child, finalChildren);
      }
    }
  } else {
    processChild(children, finalChildren);
  }

  return (
    <Typography
      variant={"body1"}
      sx={{
        textAlign: "justify",
        fontSize: { xs: "1.15rem", sm: "1.1rem", lg: "1rem" },
        hyphens: "auto",
        wordBreak: "break-word",
        mt: "1rem",
        ...sx,
      }}
    >
      {finalChildren}
    </Typography>
  );
}
