import { RefObject } from "react";

export default interface OpenedImage {
  coords: {
    open: { top: number; left: number };
  };
  size: {
    open: { width: number; height: number };
    close: { width: number; height: number };
  };
  src: string;
  alt: string;
  imageRef: RefObject<HTMLImageElement>;
}
