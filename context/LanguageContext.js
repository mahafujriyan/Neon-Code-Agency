"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../utils/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("agency-lang");
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    setLang((prev) => {
      const newLang = prev === "en" ? "bn" : "en";
      localStorage.setItem("agency-lang", newLang);
      return newLang;
    });
  };

  const t = translations[lang] || translations["en"];

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage }}>
      <div className={lang === 'en' ? 'font-en' : 'font-bn'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);