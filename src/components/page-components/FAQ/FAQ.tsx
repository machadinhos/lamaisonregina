import { faqLang, LangEnum } from "@i18n/lang-selector";
import { Box, InputAdornment, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import CTA from "@/components/shared-components/CTA";
import SectionContainer from "@/components/shared-components/SectionContainer";
import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";
import FAQList from "@/components/page-components/FAQ/FAQList";
import { SearchRounded } from "@mui/icons-material";

interface Props {
  lang: LangEnum;
}

export default function FAQ({ lang }: Props) {
  const listRef = useRef<HTMLUListElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    if (listRef.current) {
      for (let i = 0; i < listRef.current.children.length; i++) {
        const child: HTMLLIElement = listRef.current.children[i] as HTMLLIElement;
        child.hidden = !(
          child.textContent && child.textContent.toLowerCase().includes(event.target.value.toLowerCase())
        );
      }
    }
  };

  return (
    <>
      <SectionContainer>
        <GenericPageTitle>FAQ</GenericPageTitle>
        <Box sx={{ mb: "1rem" }}>
          <TextField
            label={searchQuery ? "" : faqLang(lang, "faq-serch-label")}
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRounded />
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              shrink: false,
              style: {
                transition: "all 0.3s",
                paddingLeft: "2.2rem",
              },
            }}
          />
        </Box>
        <FAQList lang={lang} listRef={listRef} />
      </SectionContainer>
      <CTA lang={lang} />
    </>
  );
}
