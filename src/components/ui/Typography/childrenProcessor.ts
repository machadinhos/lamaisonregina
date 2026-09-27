import React, { ReactNode } from "react";

type childrenType = string | ReactNode;

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
        array.push(React.createElement("i", { key: i }, splitChild[i]));
      }
    }
  }
};

export default function processChildren(children: string | childrenType[]) {
  const finalChildren: childrenType[] = [];

  if (Array.isArray(children)) {
    for (const child of children) {
      if (typeof child === "string") {
        processChild(child, finalChildren);
      } else {
        finalChildren.push(child);
      }
    }
  } else {
    processChild(children, finalChildren);
  }

  return finalChildren;
}
