import { ReactNode } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function FAQAccordion({ children }: { children: ReactNode[] }) {
  return <Accordion sx={{ boxShadow: "none" }}>{children}</Accordion>;
}

export function FAQAccordionSummary({ children }: { children: ReactNode }) {
  return (
    <AccordionSummary aria-controls="panel1-content" expandIcon={<ExpandMoreIcon />}>
      {children}
    </AccordionSummary>
  );
}

export function FAQAccordionDetails({ children }: { children: ReactNode | ReactNode[] }) {
  return <AccordionDetails>{children}</AccordionDetails>;
}
