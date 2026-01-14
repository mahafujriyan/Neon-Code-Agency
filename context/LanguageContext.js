"use client";

import { createContext, useContext, useState } from "react";
import { translations } from "../utils/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("agency-lang") || "en";
    }
    return "en";
  });

  const toggleLanguage = () => {
    setLang((prev) => {
      const newLang = prev === "en" ? "bn" : "en";
      if (typeof window !== "undefined") localStorage.setItem("agency-lang", newLang);
      return newLang;
    });
  };

  const setLanguage = (newLang) => {
    if (!newLang) return;
    if (typeof window !== "undefined") localStorage.setItem("agency-lang", newLang);
    setLang(newLang);
  };

  const t = translations[lang] || translations["en"];

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLanguage, setLanguage }}>
      <div className={lang === 'en' ? 'font-en' : 'font-bn'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);