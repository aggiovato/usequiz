import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import UKFlag from "../components/icons/UKFlag";
import SpainFlag from "../components/icons/SpainFlag";
import ItalyFlag from "../components/icons/ItalyFlag";
import AndorraFlag from "../components/icons/AndorraFlag";

i18next.use(initReactI18next).use(LanguageDetector).use(Backend).init({
  debug: true,
  fallbackLng: "en",
});

export const LOCALES = {
  en: { code: "en", label: "English", cap: "EN", Flag: UKFlag },
  es: { code: "es", label: "Español", cap: "ES", Flag: SpainFlag },
  it: { code: "it", label: "Italiano", cap: "IT", Flag: ItalyFlag },
  ca: { code: "ca", label: "Català", cap: "CA", Flag: AndorraFlag },
};
