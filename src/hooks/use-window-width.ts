import { useSyncExternalStore } from "react";

const subscribe = (onChange: () => void) => {
  window.addEventListener("resize", onChange);

  return () => window.removeEventListener("resize", onChange);
};

// Returns null during prerender and hydration, then the live window width.
function useWindowWidth(): number | null {
  return useSyncExternalStore(
    subscribe,
    () => window.innerWidth,
    () => null,
  );
}

export default useWindowWidth;
