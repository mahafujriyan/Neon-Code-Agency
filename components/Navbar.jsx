"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";

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

const MobileIconItem = ({ href, label, icon, onClick, active = false }) => {
  const content = (
    <div className="flex flex-col items-center justify-center gap-1.5 px-2 py-2">
      <span
        className={`grid h-9 w-9 place-items-center rounded-2xl transition-all ${
          active
            ? "bg-emerald-400/15 text-emerald-200 shadow-[0_10px_30px_rgba(16,185,129,0.22)] ring-1 ring-emerald-300/20"
            : "bg-white/0 text-white/80 ring-1 ring-white/0 hover:bg-white/5 hover:ring-white/10"
        }`}
      >
        {icon}
      </span>
      <span className={`text-[11px] font-semibold tracking-wide ${active ? "text-emerald-100" : "text-white/90"} transition-colors`}>
        {label}
      </span>
      <span
        aria-hidden="true"
        className={`h-[2px] w-7 rounded-full transition-all ${active ? "bg-gradient-to-r from-emerald-300/90 via-sky-300/70 to-fuchsia-300/60" : "bg-transparent"}`}
      />
    </div>
  );

  if (!href) {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        whileTap={{ scale: 0.96 }}
        className={`w-full rounded-2xl transition hover:bg-white/5 active:bg-white/10 ${active ? "bg-emerald-400/10" : ""}`}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <motion.div whileTap={{ scale: 0.96 }} className="w-full">
      <Link
      href={href}
      onClick={onClick}
      className={`w-full rounded-2xl transition hover:bg-white/5 active:bg-white/10 ${active ? "bg-emerald-400/10" : ""}`}
      >
        {content}
      </Link>
    </motion.div>
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
  const pathname = usePathname();

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
      className="fixed left-1/2 bottom-4 z-50 h-24 sm:bottom-6 md:h-16"
    >
      <div className="group relative h-full w-full">
        <div
          aria-hidden="true"
          className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-emerald-500/35 via-sky-500/15 to-fuchsia-500/25 blur-xl opacity-85 transition-opacity duration-700 group-hover:opacity-100"
        />
        <div aria-hidden="true" className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-emerald-400/25 via-white/10 to-sky-400/20 opacity-90" />
        <div
          className={`absolute inset-[1px] rounded-[27px] border transition-all duration-700 ${
            isScrolled
              ? "border-white/18 bg-black/80 shadow-[0_20px_70px_rgba(0,0,0,0.70)] backdrop-blur-2xl"
              : "border-white/12 bg-black/65 shadow-[0_16px_55px_rgba(0,0,0,0.60)] backdrop-blur-2xl"
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

          {/* Mobile bottom nav (icon + label, center floating logo) */}
          <div className="relative w-full md:hidden">
            <div className="relative">
              <motion.div
                aria-hidden="true"
                animate={{ opacity: [0.55, 0.85, 0.55] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-[3px] rounded-[28px] bg-gradient-to-r from-emerald-400/35 via-sky-400/10 to-fuchsia-400/25 blur-[10px]"
              />
              <div className="relative overflow-hidden rounded-[26px] border border-white/12 bg-black/75 shadow-[0_-18px_70px_rgba(0,0,0,0.78)] backdrop-blur-2xl">
                <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_55%)]" />
                <motion.div
                  aria-hidden="true"
                  animate={{ x: ["-60%", "140%"] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-70 blur-sm"
                />
                <div className="relative grid grid-cols-5 items-center gap-1 p-1.5 pb-[max(0.25rem,env(safe-area-inset-bottom))]">
                <MobileIconItem
                  href="/portfolio"
                  label={text.projects}
                  active={pathname === "/portfolio" || pathname?.startsWith("/portfolio/")}
                  icon={
                  <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M6 7v12a2 2 0 002 2h8a2 2 0 002-2V7" />
                  </svg>
                  }
                />
                <MobileIconItem
                  href="/services"
                  label={text.services}
                  active={pathname === "/services" || pathname?.startsWith("/services/")}
                  icon={
                  <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.2 2.4l1.7 5.6c.1.3.4.6.8.6h5.9l-4.8 3.5c-.3.2-.4.6-.3.9l1.8 5.6-4.7-3.4c-.3-.2-.7-.2-1 0l-4.7 3.4 1.8-5.6c.1-.3 0-.7-.3-.9L4.4 8.6h5.9c.4 0 .7-.3.8-.6l1.7-5.6z" />
                  </svg>
                  }
                />

                <div aria-hidden="true" />

                <MobileIconItem
                  href="/pricing"
                  label={text.pricing}
                  active={pathname === "/pricing"}
                  icon={
                  <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v22M17 5.5c0-2-1.9-3.5-5-3.5s-5 1.5-5 3.5S8.9 9 12 9s5 1.5 5 3.5S15.1 16 12 16s-5 1.5-5 3.5S8.9 23 12 23s5-1.5 5-3.5" />
                  </svg>
                  }
                />
                <div ref={exploreMobileRef} className="relative">
                  <MobileIconItem
                    label={lang === "bn" ? "আরও" : "More"}
                    onClick={() => setExploreOpen((v) => !v)}
                    active={exploreOpen}
                    icon={
                    <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    }
                  />

                  <AnimatePresence>
                    {exploreOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 bottom-full z-50 mb-3 w-[min(22rem,calc(100vw-1.5rem))] overflow-hidden rounded-3xl border border-white/10 bg-black/90 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.75)] backdrop-blur-2xl"
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {exploreLinks
                            .filter((item) => item.href !== "/")
                            .map((item) => (
                              <Link
                                key={`mobile-explore-${item.href}`}
                                href={item.href}
                                onClick={() => setExploreOpen(false)}
                                className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-emerald-300"
                              >
                                {item.label}
                              </Link>
                            ))}
                        </div>

                        <div className="mt-2 grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setLanguage("en");
                              setLangOpen(false);
                              setExploreOpen(false);
                            }}
                            className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-xs font-bold text-white transition hover:bg-white/10"
                          >
                            English
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setLanguage("bn");
                              setLangOpen(false);
                              setExploreOpen(false);
                            }}
                            className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-xs font-bold text-white transition hover:bg-white/10"
                          >
                            বাংলা
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              </div>
            </div>

            <Magnetic className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                aria-hidden="true"
                animate={{ opacity: [0.25, 0.65, 0.25], scale: [1, 1.08, 1] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-2 rounded-[26px] bg-gradient-to-r from-emerald-400/35 via-sky-400/10 to-fuchsia-400/25 blur-xl"
              />
              <Link
                href="/"
                onClick={() => setExploreOpen(false)}
                className="pointer-events-auto relative grid h-14 w-14 place-items-center rounded-2xl border border-emerald-300/35  shadow-[0_22px_60px_rgba(16,185,129,0.45)] ring-1 ring-white/10 transition-transform active:scale-95"
                aria-label="Home"
              >
                <div className="relative h-8 w-8 overflow-hidden rounded-xl bg-black/15">
                  <Image src="/navbaricon/navicon.jpg" alt="" fill sizes="32px" className="object-cover" />
                </div>
              </Link>
            </Magnetic>
          </div>

          {/* Language + CTA (desktop) */}
          <div className="hidden items-center gap-2 md:flex md:gap-4" ref={langRef}>
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
                className={`relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-emerald-400 px-4 py-2 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95 lg:px-6 lg:py-2.5 ${
                  isScrolled ? "shadow-[0_14px_40px_rgba(52,211,153,0.38)]" : "shadow-[0_10px_22px_rgba(52,211,153,0.22)] opacity-95"
                }`}
              >
                <span className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_60%)] opacity-70" />
                {isScrolled ? (
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-black/10">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
                      </svg>
                    </span>
                    <span className="flex flex-col leading-[1.05]">
                      <span className="text-[11px] font-black tracking-wide">{lang === "bn" ? "শুরু" : "Start"}</span>
                      <span className="text-[10px] font-semibold text-black/70">{lang === "bn" ? "প্রজেক্ট" : "Project"}</span>
                    </span>
                  </span>
                ) : (
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <span className="hidden lg:inline">{text.startProject}</span>
                    <span className="lg:hidden">{lang === "bn" ? "প্রজেক্ট শুরু" : "Start Project"}</span>
                    <span className="text-black/70">→</span>
                  </span>
                )}
              </Link>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
