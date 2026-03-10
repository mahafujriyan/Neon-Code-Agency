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

const MobileNavLink = ({ href, label, emphasis = false }) => {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center rounded-2xl border px-3 py-2 text-[11px] font-semibold leading-tight transition sm:text-xs ${
        emphasis
          ? "border-emerald-400/30 bg-emerald-400/15 text-emerald-200 hover:bg-emerald-400/20"
          : "border-white/10 bg-white/5 text-white/90 hover:bg-white/10 hover:text-emerald-300"
      }`}
    >
      <span className="line-clamp-2 text-center">{label}</span>
    </Link>
  );
};

// --- Main Navbar Component ---
const Navbar = () => {
  const { lang, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const langRef = useRef(null);
  const exploreDesktopRef = useRef(null);
  const exploreMobileRef = useRef(null);

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
      if (exploreDesktopRef.current && !exploreDesktopRef.current.contains(event.target)) {
        setExploreOpen(false);
      }
      if (exploreMobileRef.current && !exploreMobileRef.current.contains(event.target)) {
        setExploreOpen(false);
      }
    };
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: 100, x: "-50%", opacity: 0 }}
      animate={{
        y: 0,
        x: "-50%",
        opacity: 1,
        width: isScrolled ? "min(750px, calc(100vw - 1rem))" : "min(1050px, calc(100vw - 1rem))",
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-1/2 bottom-4 z-50 h-28 sm:bottom-6 md:h-16"
    >
      <div className="group relative h-full w-full">
        <div
          aria-hidden="true"
          className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-emerald-500/25 via-sky-500/10 to-fuchsia-500/20 blur-xl opacity-80 transition-opacity duration-700 group-hover:opacity-100"
        />
        <div
          className={`absolute inset-0 rounded-[28px] border transition-all duration-700 ${
            isScrolled
              ? "border-white/15 bg-black/75 shadow-[0_20px_60px_rgba(0,0,0,0.65)] backdrop-blur-2xl"
              : "border-white/12 bg-black/60 shadow-[0_16px_50px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
          }`}
        />

        <div className="relative flex h-full flex-col justify-center gap-2 px-3 py-2 md:flex-row md:items-center md:justify-between md:gap-0 md:py-0 sm:px-4 md:px-6">
          <Magnetic className="hidden md:block">
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
              ref={exploreDesktopRef}
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
                    className="absolute right-0 bottom-full z-50 mb-3 w-52 overflow-hidden rounded-2xl border border-white/10 bg-black/90 p-1.5 backdrop-blur-xl"
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

          {/* Mobile nav (3 items top, 2 items bottom) */}
          <div className="w-full md:hidden">
            <div className="grid grid-cols-3 gap-2 pr-14">
              <MobileNavLink href="/portfolio" label={text.projects} />
              <MobileNavLink href="/services" label={text.services} />
              <MobileNavLink href="/pricing" label={text.pricing} />
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2 pr-14">
              <div ref={exploreMobileRef} className="relative">
                <button
                  type="button"
                  onClick={() => setExploreOpen((v) => !v)}
                  className="flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-semibold leading-tight text-white/90 transition hover:bg-white/10 hover:text-emerald-300 sm:text-xs"
                >
                  {text.explore}
                </button>

                <AnimatePresence>
                  {exploreOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 bottom-full z-50 mb-3 w-56 overflow-hidden rounded-2xl border border-white/10 bg-black/90 p-1.5 backdrop-blur-xl"
                    >
                      <div className="grid grid-cols-1 gap-1">
                        {exploreLinks.map((item) => (
                          <Link
                            key={`mobile-explore-${item.href}`}
                            href={item.href}
                            onClick={() => setExploreOpen(false)}
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

              <MobileNavLink href="/contact" label={text.startProject} emphasis />
            </div>
          </div>

          <div className="hidden">
            <div className="relative">
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
                    className="absolute right-0 bottom-full mb-3 w-32 overflow-hidden rounded-2xl border border-white/10 bg-black/90 p-1 backdrop-blur-xl"
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
          </div>

          {/* Mobile language toggle (top-right) */}
          <div className="absolute right-3 top-3 flex items-center gap-2 md:static md:right-auto md:top-auto md:gap-4" ref={langRef}>
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
                  className="absolute right-0 bottom-full mb-3 w-32 overflow-hidden rounded-2xl border border-white/10 bg-black/90 p-1 backdrop-blur-xl"
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

            <Magnetic className="hidden md:block">
              <Link
                href="/contact"
                className="relative overflow-hidden rounded-full bg-emerald-400 px-4 py-2 text-sm font-bold text-black shadow-[0_10px_20px_rgba(52,211,153,0.3)] transition-transform hover:scale-105 active:scale-95 lg:px-6 lg:py-2.5"
              >
                {text.startProject}
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
