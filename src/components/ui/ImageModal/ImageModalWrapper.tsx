"use client";

import { createContext, ReactNode, useState } from "react";

import ImageModal from "@/components/ui/ImageModal/ImageModal";
import OpenedImage from "@/components/ui/ImageModal/OpenedImageInterface";

export const ImageModalContext = createContext<{
  openedImage: OpenedImage | null;
  setOpenedImage: (image: OpenedImage | null) => void;
}>({
  openedImage: null,
  setOpenedImage: () => {},
});

export default function ImageModalWrapper({ children }: { children: ReactNode | ReactNode[] }) {
  const [openedImage, setOpenedImage] = useState<OpenedImage | null>(null);
  const [canClose, setCanClose] = useState(false);

  return (
    <ImageModalContext.Provider value={{ openedImage, setOpenedImage }}>
      {children}
      <ImageModal canClose={canClose} setCanClose={setCanClose} />
    </ImageModalContext.Provider>
  );
}
