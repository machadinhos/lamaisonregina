import { ReactNode } from "react";
import Link from "next/link";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import { Box, Container } from "@mui/material";
import { primaryColor } from "@/styles/globals";

interface Props {
  children: ReactNode | ReactNode[];
}

export default function Main({ children }: Props) {
  return (
    <main>
      <Container sx={{ position: "relative", mt: "5rem", mb: "8rem" }}>
        {children}
        <Box sx={{ position: "fixed", bottom: "2rem", left: "0.8rem" }}>
          <Link
            target={"_blank"}
            href={"https://api.whatsapp.com/send/?phone=351915581629&text&type=phone_number&app_absent=0"}
          >
            <WhatsappIcon sx={{ fontSize: "4rem" }} fontSize={"large"} color={"success"} />
          </Link>
        </Box>
      </Container>
    </main>
  );
}
