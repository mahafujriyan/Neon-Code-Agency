"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// --- Magnetic Effect Component ---
const Magnetic = ({ children, className = "" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const onMove = (event) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const rx = event.clientX - rect.left - rect.width / 2;
    const ry = event.clientY - rect.top - rect.height / 2;
    x.set(rx * 0.35);
    y.set(ry * 0.35);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Premium Text Slide Component (DesignMonks Style) ---
const PremiumLink = ({ href, label, onClick, mobile = false }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative block overflow-hidden px-5 py-2.5 transition-all duration-500 ${mobile ? "w-full text-center" : ""}`}
    >
      <div className="relative h-5 overflow-hidden">
        <motion.span className="block text-sm font-semibold text-white/70 transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:-translate-y-full">
          {label}
        </motion.span>
        <motion.span className="absolute inset-0 block translate-y-full text-sm font-semibold text-emerald-400 transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:translate-y-0">
          {label}
        </motion.span>
      </div>
      <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-emerald-400 transition-all duration-500 group-hover:w-1/2 blur-[1px]" />
    </Link>
  );
};

// --- Main Navbar Component ---
const Navbar = () => {
  const { lang, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const langRef = useRef(null);
  const exploreRef = useRef(null);

  const text = {
    projects: lang === "bn" ? "প্রজেক্টস" : "Projects",
    services: lang === "bn" ? "সার্ভিসেস" : "Services",
    startProject: lang === "bn" ? "প্রজেক্ট শুরু করুন" : "Start a Project",
    pricing: lang === "bn" ? "প্রাইসিং" : "Pricing",
    explore: lang === "bn" ? "এক্সপ্লোর+" : "Explore+",
  };

  const exploreLinks = [
    { href: "/", label: lang === "bn" ? "হোম" : "Home" },
    { href: "/about", label: lang === "bn" ? "আমাদের সম্পর্কে" : "About" },
    { href: "/career", label: lang === "bn" ? "ক্যারিয়ার" : "Career" },
    { href: "/contact", label: lang === "bn" ? "যোগাযোগ" : "Contact" },
    { href: "https://neon-code-top-up.vercel.app/login", label: lang === "bn" ? "লগইন" : "Login" },
    { href: "https://neon-code-top-up.vercel.app/register", label: lang === "bn" ? "সাইন আপ" : "Sign Up" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
      if (exploreRef.current && !exploreRef.current.contains(event.target)) {
        setExploreOpen(false);
      }
    };
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{
        y: 0,
        x: "-50%",
        opacity: 1,
        width: isScrolled ? "min(750px, calc(100vw - 1rem))" : "min(1050px, calc(100vw - 1rem))",
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-1/2 top-4 z-50 h-16 sm:top-6"
    >
      <div className="group relative h-full w-full">
        <div
          className={`absolute inset-0 rounded-[28px] border transition-all duration-700 ${
            isScrolled
              ? "border-white/10 bg-black/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
              : "border-white/5 bg-white/5"
          }`}
        />

        <div className="relative flex h-full items-center justify-between px-3 sm:px-4 md:px-6">
          <Magnetic>
            <Link href="/" className="group flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold text-black">
                <Image src="/navbaricon/navicon.jpg" alt="Neon Code" width={24} height={24} />
              </div>
              <span className="hidden text-sm font-bold tracking-tighter text-white transition-all duration-500 group-hover:tracking-widest sm:block">
                Neon<span className="text-emerald-400">Code</span>
              </span>
            </Link>
          </Magnetic>

          <div className="hidden items-center gap-2 rounded-full border border-white/5 bg-white/5 px-2 mx-2 py-1 lg:flex">
            <PremiumLink href="/portfolio" label={text.projects} />
            <PremiumLink href="/services" label={text.services} />
            <PremiumLink href="/pricing" label={text.pricing} />
            <div
              ref={exploreRef}
              className="relative"
              onMouseEnter={() => setExploreOpen(true)}
              onMouseLeave={() => setExploreOpen(false)}
            >
              <PremiumLink href="#" label={text.explore} onClick={(e) => e.preventDefault()} />
              <AnimatePresence>
                {exploreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full z-50 mt-3 w-52 overflow-hidden rounded-2xl border border-white/10 bg-black/90 p-1.5 backdrop-blur-xl"
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {exploreLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="rounded-xl px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-emerald-300"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-white transition-all hover:bg-white/15"
              >
                {lang === "en" ? "EN" : "BN"}
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-3 w-32 overflow-hidden rounded-2xl border border-white/10 bg-black/90 p-1 backdrop-blur-xl"
                  >
                    <button
                      onClick={() => {
                        setLanguage("en");
                        setLangOpen(false);
                      }}
                      className="w-full rounded-xl px-4 py-2 text-left text-xs text-white hover:bg-white/10"
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("bn");
                        setLangOpen(false);
                      }}
                      className="w-full rounded-xl px-4 py-2 text-left text-xs text-white hover:bg-white/10"
                    >
                      বাংলা
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Magnetic className="hidden md:block">
              <Link
                href="/contact"
                className="relative overflow-hidden rounded-full bg-emerald-400 px-4 py-2 text-sm font-bold text-black shadow-[0_10px_20px_rgba(52,211,153,0.3)] transition-transform hover:scale-105 active:scale-95 lg:px-6 lg:py-2.5"
              >
                {text.startProject}
              </Link>
            </Magnetic>

            <button className="text-white lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-white/10 px-3 pb-4 pt-3 sm:px-4"
            >
              <div className="space-y-1 rounded-2xl border border-white/10 bg-black/35 p-2">
                <PremiumLink href="/portfolio" label={text.projects} mobile onClick={() => setMobileMenuOpen(false)} />
                <PremiumLink href="/services" label={text.services} mobile onClick={() => setMobileMenuOpen(false)} />
                <PremiumLink href="/pricing" label={text.pricing} mobile onClick={() => setMobileMenuOpen(false)} />
                <div className="mt-2 rounded-xl border border-white/10 bg-white/5 p-2">
                  <p className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-300/90">{text.explore}</p>
                  <div className="grid grid-cols-1 gap-1">
                    {exploreLinks.map((item) => (
                      <Link
                        key={`mobile-${item.href}`}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="rounded-lg px-3 py-2 text-sm text-white/90 transition hover:bg-white/10 hover:text-emerald-300"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-1 block rounded-xl bg-emerald-400 px-4 py-3 text-center text-sm font-bold text-black"
                >
                  {text.startProject}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
