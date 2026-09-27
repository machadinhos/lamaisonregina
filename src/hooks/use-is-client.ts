import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// False during prerender and hydration, true once running in the browser.
function useIsClient(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

export default useIsClient;
