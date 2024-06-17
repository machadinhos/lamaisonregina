import { Lang } from "./lang";

export enum LangEnum {
  PT = "pt",
  EN = "en",
}

export const selectLang = (lang: LangEnum, text: string) => {
  const key = Object.entries(Lang[lang]).find((key) => key[0] === text);
  if (key) {
    return key[1];
  } else {
    throw new Error(`Key ${text} not found in lang.json`);
  }
};
