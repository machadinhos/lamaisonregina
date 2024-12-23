import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

export default function Main({ children }: Props) {
  return <main style={{ minHeight: "100dvh" }}>{children}</main>;
}
