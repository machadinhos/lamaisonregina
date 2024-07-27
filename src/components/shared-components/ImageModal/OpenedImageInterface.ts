export default interface OpenedImage {
  coords: {
    open: { top: number; left: number };
    close: { top: number; left: number };
  };
  size: {
    open: { width: number; height: number };
    close: { width: number; height: number };
  };
  src: string;
  alt: string;
}
