import { createContext, ReactNode, useState } from "react";

import OpenedImage from "@/components/shared-components/ImageModal/OpenedImageInterface";
import ImageModal from "@/components/shared-components/ImageModal/ImageModal";

export const ImageModalContext = createContext<{
  openedImage: OpenedImage | null;
  setOpenedImage: (image: OpenedImage | null) => void;
}>({
  openedImage: null,
  setOpenedImage: () => {},
});

export default function ImageModalWrapper({ children }: { children: ReactNode | ReactNode[] }) {
  const [openedImage, setOpenedImage] = useState<OpenedImage | null>(null);

  return (
    <ImageModalContext.Provider value={{ openedImage, setOpenedImage }}>
      {children}
      <ImageModal />
    </ImageModalContext.Provider>
  );
}
