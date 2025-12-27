// components/Navbar.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

// === Scramble Link Component ===
const ScrambleLink = ({ href, children, onClick }) => {
  const [text, setText] = useState(children);
  const intervalRef = useRef(null);

  useEffect(() => {
    setText(children);
  }, [children]);

  const CYCLES_PER_LETTER = 2;
  const SHUFFLE_TIME = 50;
  const CHARS = "!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzঅআকখগঘঙচছজঝটঠডঢণতথদধনপফবভমযরলশষসহড়ঢ়য়ৎংঃঁ";

  const scramble = () => {
    let pos = 0;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const scrambled = children.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) return char;
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          return CHARS[randomCharIndex];
        })
        .join("");
      setText(scrambled);
      pos++;
      if (pos >= children.length * CYCLES_PER_LETTER) {
        clearInterval(intervalRef.current);
        setText(children);
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setText(children);
  };

  return (
    <Link
      href={href}
      onClick={onClick} // মোবাইলে ক্লিক করলে মেনু বন্ধ হওয়ার জন্য
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="relative px-3 py-2 group overflow-hidden block w-full text-center md:text-left md:w-auto"
    >
      <span className="text-gray-300 text-sm font-bold uppercase tracking-wider group-hover:text-blue-400 transition-colors duration-300">
        {text}
      </span>
    </Link>
  );
};

const Navbar = () => {
  const { t, lang, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false); // Language Dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile Menu

  const handleLanguageChange = (selectedLang) => {
    if (lang !== selectedLang) toggleLanguage();
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-5 left-5 right-5 z-50">
      
      {/* মেইন বার */}
      <div className="flex flex-wrap justify-between items-center py-3 px-6 bg-slate-700/50 backdrop-blur-xl shadow-2xl border border-white/10 transition-all duration-300 rounded-full relative z-50">
        
        {/* ১. লোগো */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image 
            src="https://i.ibb.co/pjcnbgCd/Neon-Studio-icon.png" 
            alt="Logo" 
            width={35} 
            height={35} 
            className="object-contain rounded-lg border border-white/10"
          />
          <span className="text-xl font-bold text-white tracking-wide">
            NeonStudio
          </span>
        </Link>

        {/* ২. ডেস্কটপ মেনু (বড় স্ক্রিনে দেখাবে) */}
        <div className="hidden md:flex gap-4 items-center">
          <ScrambleLink href="/">{t.nav.home}</ScrambleLink>
          <ScrambleLink href="/about">{t.nav.about}</ScrambleLink>
          <ScrambleLink href="/services">{t.nav.services}</ScrambleLink>
          <ScrambleLink href="/portfolio">{t.nav.portfolio}</ScrambleLink>
          <ScrambleLink href="/career">{t.nav.career}</ScrambleLink>
          <ScrambleLink href="/contact">{t.nav.contact}</ScrambleLink>
        </div>

        {/* ৩. ডান পাশের অংশ (ভাষা + বাটন + মোবাইল টগল) */}
        <div className="flex items-center gap-3">
          
          {/* ভাষা ড্রপডাউন */}
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/10 transition bg-transparent text-white"
            >
              <Image 
                src={lang === 'en' ? "https://flagcdn.com/w40/gb.png" : "https://flagcdn.com/w40/bd.png"} 
                alt="flag" width={18} height={14} className="rounded-[2px]"
              />
              <span className="font-semibold text-xs hidden sm:block">
                {lang === 'en' ? "EN" : "BN"}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-[#1e293b] text-white border border-white/10 rounded-lg shadow-xl overflow-hidden z-50">
                <button onClick={() => handleLanguageChange('en')} className="flex items-center gap-3 w-full px-4 py-2 hover:bg-white/10 transition text-left text-sm">
                  <Image src="https://flagcdn.com/w40/gb.png" alt="UK" width={16} height={12} className="rounded-[2px]"/>
                  <span>English</span>
                </button>
                <button onClick={() => handleLanguageChange('bn')} className="flex items-center gap-3 w-full px-4 py-2 hover:bg-white/10 transition text-left text-sm">
                  <Image src="https://flagcdn.com/w40/bd.png" alt="BD" width={16} height={12} className="rounded-[2px]"/>
                  <span>বাংলা</span>
                </button>
              </div>
            )}
          </div>

          {/* ডেস্কটপ লগইন/সাইনআপ */}
          <Link href="/login" className="hidden md:block px-5 py-1.5 text-white text-sm font-bold border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            {t.nav.login}
          </Link>
          <Link href="/signup" className="hidden md:block px-5 py-1.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/30">
            {t.nav.signup}
          </Link>

          {/* ৪. মোবাইল হ্যামবার্গার বাটন (শুধু মোবাইলে দেখাবে) */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              // Close Icon (X)
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Menu Icon (Bars)
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* ৫. মোবাইল মেনু ড্রপডাউন (Mobile Dropdown) */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 mx-2 mt-2 p-6 bg-[#1e293b]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col gap-4 md:hidden animate-fade-in-down">
          
          <ScrambleLink href="/" onClick={() => setMobileMenuOpen(false)}>{t.nav.home}</ScrambleLink>
          <ScrambleLink href="/about" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</ScrambleLink>
          <ScrambleLink href="/services" onClick={() => setMobileMenuOpen(false)}>{t.nav.services}</ScrambleLink>
          <ScrambleLink href="/portfolio" onClick={() => setMobileMenuOpen(false)}>{t.nav.portfolio}</ScrambleLink>
          <ScrambleLink href="/career" onClick={() => setMobileMenuOpen(false)}>{t.nav.career}</ScrambleLink>
          <ScrambleLink href="/contact" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</ScrambleLink>

          <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="block text-center w-full px-5 py-2.5 text-white text-sm font-bold border border-white/20 rounded-xl hover:bg-white hover:text-black transition-all">
              {t.nav.login}
            </Link>
            <Link href="/signup" onClick={() => setMobileMenuOpen(false)} className="block text-center w-full px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/30">
              {t.nav.signup}
            </Link>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;