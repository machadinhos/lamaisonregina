import { LangEnum } from "./config";
import Catering from "./dictionaries/catering.json";
import Contacts from "./dictionaries/contacts.json";
import Faq from "./dictionaries/faq.json";
import Gallery from "./dictionaries/gallery.json";
import Globals from "./dictionaries/globals.json";
import Home from "./dictionaries/home.json";
import Services from "./dictionaries/services.json";

export * from "./config";

enum SectionEnum {
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
