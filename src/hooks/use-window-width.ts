import { useEffect, useState } from "react";

function useWindowWidth(): number | null {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return width;
}

export default useWindowWidth;
