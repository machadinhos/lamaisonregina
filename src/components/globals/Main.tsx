import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  children: ReactNode | ReactNode[];
}

export default function Main({ children }: Props) {
  return (
    <main>
      {children}
      <Link href={"https://api.whatsapp.com/send/?phone=351915581629&text&type=phone_number&app_absent=0"}>
        Whatsapp
      </Link>
    </main>
  );
}
