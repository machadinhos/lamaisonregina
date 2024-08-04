import Home from "./sections/home.json";
import Globals from "./sections/globals.json";
import Services from "./sections/services.json";
import Gallery from "./sections/gallery.json";
import Catering from "./sections/catering.json";
import Contacts from "./sections/contacts.json";
import Faq from "./sections/faq.json";

export enum SectionEnum {
  HOME = "Home",
  GLOBALS = "Globals",
  SERVICES = "Services",
  GALLERY = "Gallery",
  CATERING = "Catering",
  CONTACTS = "Contacts",
  FAQ = "Faq",
}

const Lang = {
  Home,
  Globals,
  Services,
  Gallery,
  Catering,
  Contacts,
  Faq,
};

export enum LangEnum {
  PT = "pt",
  EN = "en",
}

export const servicesLang = (lang: LangEnum, text: string) => {
  return selectLang(lang, SectionEnum.SERVICES, text);
};

export const homeLang = (lang: LangEnum, text: string) => {
  return selectLang(lang, SectionEnum.HOME, text);
};

export const globalsLang = (lang: LangEnum, text: string) => {
  return selectLang(lang, SectionEnum.GLOBALS, text);
};

export const galleryLang = (lang: LangEnum, text: string) => {
  return selectLang(lang, SectionEnum.GALLERY, text);
};

export const cateringLang = (lang: LangEnum, text: string) => {
  return selectLang(lang, SectionEnum.CATERING, text);
};

export const contactsLang = (lang: LangEnum, text: string) => {
  return selectLang(lang, SectionEnum.CONTACTS, text);
};

export const faqLang = (lang: LangEnum, text: string) => {
  return selectLang(lang, SectionEnum.FAQ, text);
};

const selectLang = (lang: LangEnum, section: SectionEnum, text: string) => {
  const key = Object.entries(Lang[section][lang]).find((key) => key[0] === text);

  if (key) {
    return key[1];
  } else {
    throw new Error(`Key ${text} not found in lang.json`);
  }
};
