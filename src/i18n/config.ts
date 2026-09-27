export enum LangEnum {
  PT = "pt",
  EN = "en",
}

export const locales = [LangEnum.PT, LangEnum.EN] as const;

export const defaultLocale = LangEnum.PT;

export const isLocale = (value: string): value is LangEnum => locales.includes(value as LangEnum);
