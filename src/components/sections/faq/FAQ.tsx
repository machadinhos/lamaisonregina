"use client";

import { CloseRounded, SearchRounded } from "@mui/icons-material";
import { Box, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import FAQList from "@/components/sections/faq/FAQList";
import CTA from "@/components/ui/CTA";
import SectionContainer from "@/components/ui/SectionContainer";
import GenericPageTitle from "@/components/ui/Typography/GenericPageTitle";
import { faqLang, LangEnum } from "@/i18n";

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <GenericPageTitle noLine>FAQ</GenericPageTitle>
        </Box>
        <Box sx={{ mt: "1.5rem", mb: "1rem" }}>
          <TextField
            ref={textFieldRef}
            fullWidth
            placeholder={searchQuery ? "" : faqLang(lang, "faq-serch-label")}
            slotProps={{
              input: {
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
              },
            }}
            sx={{ bgcolor: "#f6f8fb" }}
            value={searchQuery}
            variant={"standard"}
            onChange={handleSearchChange}
          />
        </Box>
        <FAQList lang={lang} listRef={listRef} />
      </SectionContainer>
      <CTA lang={lang} />
    </>
  );
}
