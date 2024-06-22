import { useEffect, useState } from "react";

export const useHeaderHeight = () => {
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  useEffect(() => {
    const header = document.getElementById("header");
    setHeaderHeight(header ? header.offsetHeight : 0);
  }, [setHeaderHeight]);
  return headerHeight;
};
