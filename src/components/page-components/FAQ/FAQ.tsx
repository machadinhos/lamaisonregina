import { faqLang, LangEnum } from "@i18n/lang-selector";
import { Box, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CTA from "@/components/shared-components/CTA";
import SectionContainer from "@/components/shared-components/SectionContainer";
import GenericPageTitle from "@/components/shared-components/Typography/GenericPageTitle";
import FAQList from "@/components/page-components/FAQ/FAQList";
import { CloseRounded, SearchRounded } from "@mui/icons-material";

interface Props {
  lang: LangEnum;
}

export default function FAQ({ lang }: Props) {
  const listRef = useRef<HTMLUListElement>(null);
  const textFieldRef = useRef<HTMLInputElement>(null);
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

  useEffect(() => {
    if (textFieldRef.current) {
      const target = textFieldRef.current.children[0].children[1] as HTMLInputElement;
      target.focus();
    }
  }, []);

  return (
    <>
      <SectionContainer>
        <Box display={"flex"} justifyContent={"center"}>
          <GenericPageTitle noLine>FAQ</GenericPageTitle>
        </Box>
        <Box sx={{ mt: "1.5rem", mb: "1rem" }}>
          <TextField
            ref={textFieldRef}
            placeholder={searchQuery ? "" : faqLang(lang, "faq-serch-label")}
            variant={"standard"}
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ bgcolor: "#f6f8fb" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ ml: "0.5rem" }}>
                  <SearchRounded />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{ mr: "0.5rem", cursor: "pointer" }}
                  onClick={() => {
                    setSearchQuery("");
                    handleSearchChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
                  }}
                >
                  {searchQuery && <CloseRounded />}
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <FAQList lang={lang} listRef={listRef} />
      </SectionContainer>
      <CTA lang={lang} />
    </>
  );
}
