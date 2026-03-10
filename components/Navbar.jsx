"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";

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

const PremiumLink = ({ href, label, onClick, active = false }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative block overflow-hidden rounded-full px-4 py-2.5 transition-all duration-500 ${
        active
          ? "bg-white/[0.075] text-white ring-1 ring-white/10 shadow-[0_12px_32px_rgba(16,185,129,0.10)]"
          : "text-white/72 hover:bg-white/[0.045] hover:text-white"
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/42 to-transparent transition-opacity duration-500 ${
          active ? "opacity-100" : "opacity-0 group-hover:opacity-90"
        }`}
      />
      <span
        aria-hidden="true"
        className={`absolute left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-emerald-300 transition-all duration-500 ${
          active ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-70"
        }`}
      />
      <div className="relative h-5 overflow-hidden">
        <motion.span
          className={`block text-sm font-semibold transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:-translate-y-full ${
            active ? "text-white" : ""
          }`}
        >
          {label}
        </motion.span>
        <motion.span className="absolute inset-0 block translate-y-full text-sm font-semibold text-emerald-400 transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:translate-y-0">
          {label}
        </motion.span>
      </div>
      <span
        className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 bg-emerald-400 transition-all duration-500 blur-[1px] ${
          active ? "w-1/2" : "w-0 group-hover:w-1/2"
        }`}
      />
    </Link>
  );
};

const MobileIconItem = ({ href, label, icon, onClick, active = false }) => {
  const content = (
    <div className="flex flex-col items-center justify-center gap-2 px-1 py-2.5">
      <span
        className={`grid h-9 w-9 place-items-center rounded-2xl transition-all ${
          active ? "text-emerald-200" : "text-white/82"
        }`}
      >
        {icon}
      </span>
      <span
        className={`whitespace-nowrap text-[11px] font-semibold tracking-tight transition-colors ${
          active ? "text-white" : "text-white/88"
        }`}
      >
        {label}
      </span>
    </div>
  );

  if (!href) {
    return (
      <motion.button
        type="button"
        onClick={onClick}
        whileTap={{ scale: 0.96 }}
        className={`w-full rounded-2xl transition hover:bg-white/[0.04] active:bg-white/[0.08] ${active ? "bg-white/[0.03]" : ""}`}
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
        className={`block w-full rounded-2xl transition hover:bg-white/[0.04] active:bg-white/[0.08] ${active ? "bg-white/[0.03]" : ""}`}
      >
        {content}
      </Link>
    </motion.div>
  );
};

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
    projectsMobile: lang === "bn" ? "কাজ" : "Works",
    servicesMobile: lang === "bn" ? "সেবা" : "Service",
    pricingMobile: lang === "bn" ? "দাম" : "Pricing",
    startProject: lang === "bn" ? "প্রজেক্ট শুরু করুন" : "Start a Project",
    pricing: lang === "bn" ? "প্রাইসিং" : "Pricing",
    explore: lang === "bn" ? "এক্সপ্লোর+" : "Explore+",
    more: lang === "bn" ? "আরও" : "More",
    home: lang === "bn" ? "হোম" : "Home",
    about: lang === "bn" ? "আমাদের সম্পর্কে" : "About",
    career: lang === "bn" ? "ক্যারিয়ার" : "Career",
    contact: lang === "bn" ? "যোগাযোগ" : "Contact",
    login: lang === "bn" ? "লগইন" : "Login",
    signup: lang === "bn" ? "সাইন আপ" : "Sign Up",
    start: lang === "bn" ? "শুরু" : "Start",
    project: lang === "bn" ? "প্রজেক্ট" : "Project",
  };

  const exploreLinks = [
    { href: "/", label: text.home },
    { href: "/about", label: text.about },
    { href: "/career", label: text.career },
    { href: "/contact", label: text.contact },
    { href: "https://neon-code-top-up.vercel.app/login", label: text.login },
    { href: "https://neon-code-top-up.vercel.app/register", label: text.signup },
  ];

  const primaryLinks = [
    {
      href: "/portfolio",
      label: text.projects,
      active: pathname === "/portfolio" || pathname?.startsWith("/portfolio/"),
    },
    {
      href: "/services",
      label: text.services,
      active: pathname === "/services" || pathname?.startsWith("/services/"),
    },
    {
      href: "/pricing",
      label: text.pricing,
      active: pathname === "/pricing",
    },
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
        width: isScrolled ? "min(780px, calc(100vw - 1rem))" : "min(1040px, calc(100vw - 1rem))",
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-1/2 bottom-3 z-50 h-24 sm:bottom-5 md:h-[4.4rem]"
    >
      <div className="group relative h-full w-full">
        <div
          aria-hidden="true"
          className="absolute -inset-1.5 rounded-[36px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(16,185,129,0.24),rgba(59,130,246,0.10),rgba(244,114,182,0.14),rgba(16,185,129,0.24))] blur-xl opacity-70 transition-opacity duration-700 group-hover:opacity-95"
        />
        <div aria-hidden="true" className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-emerald-400/14 via-white/8 to-sky-400/12 opacity-90" />
        <div
          className={`absolute inset-[1px] rounded-[29px] border transition-all duration-700 ${
            isScrolled
              ? "border-white/16 bg-black/84 shadow-[0_24px_80px_rgba(0,0,0,0.72)] backdrop-blur-2xl"
              : "border-white/10 bg-black/72 shadow-[0_18px_58px_rgba(0,0,0,0.62)] backdrop-blur-2xl"
          }`}
        />
        <div aria-hidden="true" className="absolute inset-x-16 top-[1px] h-px rounded-full bg-gradient-to-r from-transparent via-white/38 to-transparent" />
        <motion.div
          aria-hidden="true"
          animate={{ x: ["-25%", "112%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-y-0 w-28 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md"
        />

        <div className="relative flex h-full flex-col justify-center gap-2 px-3 py-2 md:flex-row md:items-center md:justify-between md:gap-0 md:py-0 sm:px-4 md:px-5">
          <Magnetic className="hidden md:block">
            <Link href="/" className="group flex items-center gap-2.5 rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1.5 transition hover:bg-white/[0.05]">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/15 to-white/5 shadow-[0_10px_26px_rgba(16,185,129,0.14)]">
                <div aria-hidden="true" className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-300/15 via-transparent to-sky-300/15" />
                <Image src="/navbaricon/navicon.jpg" alt="Neon Code" width={24} height={24} className="relative rounded-lg" />
              </div>
              <span className="hidden text-sm font-bold tracking-[0.04em] text-white transition-all duration-500 group-hover:text-emerald-300 sm:block">
                Neon<span className="text-emerald-400">Code</span>
              </span>
            </Link>
          </Magnetic>

          <div className="hidden items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.04] px-2 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] lg:flex">
            {primaryLinks.map((item) => (
              <PremiumLink key={item.href} href={item.href} label={item.label} active={item.active} />
            ))}

            <div
              ref={exploreDesktopRef}
              className="relative"
              onMouseEnter={() => setExploreOpen(true)}
              onMouseLeave={() => setExploreOpen(false)}
            >
              <button
                type="button"
                onClick={() => setExploreOpen((value) => !value)}
                className={`group relative flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-500 ${
                  exploreOpen ? "bg-white/[0.075] text-white ring-1 ring-white/10" : "text-white/72 hover:bg-white/[0.045] hover:text-white"
                }`}
              >
                <span>{text.explore}</span>
                <motion.span
                  animate={{ rotate: exploreOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-white/60 group-hover:text-emerald-300"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                  </svg>
                </motion.span>
                <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-emerald-400 transition-all duration-500 group-hover:w-1/2" />
              </button>

              <AnimatePresence>
                {exploreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 bottom-full z-50 mb-4 w-[19rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(9,9,11,0.96),rgba(4,4,5,0.94))] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.75)] backdrop-blur-2xl"
                  >
                    <div className="grid grid-cols-1 gap-1.5">
                      {exploreLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group rounded-2xl border border-white/0 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white/90 transition hover:border-white/10 hover:bg-white/10 hover:text-emerald-300"
                        >
                          <span className="flex items-center justify-between gap-3">
                            <span>{item.label}</span>
                            <span className="translate-x-0 text-white/25 transition group-hover:translate-x-1 group-hover:text-emerald-300">→</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="relative w-full md:hidden">
            <div className="relative">
              <motion.div
                aria-hidden="true"
                animate={{ opacity: [0.42, 0.72, 0.42] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-[2px] rounded-[30px] bg-gradient-to-r from-emerald-400/30 via-emerald-300/10 to-emerald-400/30 blur-[12px]"
              />
              <div className="relative rounded-[28px] border border-emerald-400/20 bg-black/92 shadow-[0_-18px_70px_rgba(0,0,0,0.82)] backdrop-blur-2xl">
                <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_55%)]" />
                <motion.div
                  aria-hidden="true"
                  animate={{ x: ["-60%", "140%"] }}
                  transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-emerald-200/8 to-transparent opacity-60 blur-sm"
                />
                <div aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/45 to-transparent" />

                <div className="relative z-10 grid grid-cols-5 items-end gap-0 px-1.5 pt-3 pb-[max(0.35rem,env(safe-area-inset-bottom))]">
                  <MobileIconItem
                    href="/portfolio"
                    label={text.projectsMobile}
                    active={pathname === "/portfolio" || pathname?.startsWith("/portfolio/")}
                    icon={
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M6 7v12a2 2 0 002 2h8a2 2 0 002-2V7" />
                      </svg>
                    }
                  />
                  <MobileIconItem
                    href="/services"
                    label={text.servicesMobile}
                    active={pathname === "/services" || pathname?.startsWith("/services/")}
                    icon={
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.2 2.4l1.7 5.6c.1.3.4.6.8.6h5.9l-4.8 3.5c-.3.2-.4.6-.3.9l1.8 5.6-4.7-3.4c-.3-.2-.7-.2-1 0l-4.7 3.4 1.8-5.6c.1-.3 0-.7-.3-.9L4.4 8.6h5.9c.4 0 .7-.3.8-.6l1.7-5.6z" />
                      </svg>
                    }
                  />

                  <div aria-hidden="true" className="h-full" />

                  <MobileIconItem
                    href="/pricing"
                    label={text.pricingMobile}
                    active={pathname === "/pricing"}
                    icon={
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v22M17 5.5c0-2-1.9-3.5-5-3.5s-5 1.5-5 3.5S8.9 9 12 9s5 1.5 5 3.5S15.1 16 12 16s-5 1.5-5 3.5S8.9 23 12 23s5-1.5 5-3.5" />
                      </svg>
                    }
                  />

                  <div ref={exploreMobileRef} className="relative z-20">
                    <MobileIconItem
                      label={text.more}
                      onClick={() => setExploreOpen((value) => !value)}
                      active={exploreOpen}
                      icon={
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                          className="absolute right-0 bottom-full z-[70] mb-3 w-[min(20rem,calc(100vw-1rem))] overflow-hidden rounded-3xl border border-emerald-400/15 bg-black/94 p-2 shadow-[0_20px_80px_rgba(0,0,0,0.75)] backdrop-blur-2xl"
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

            <Magnetic className="pointer-events-none absolute left-1/2 top-0 z-30 -translate-x-1/2 -translate-y-[58%]">
              <motion.div
                aria-hidden="true"
                animate={{ opacity: [0.28, 0.62, 0.28], scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-2 rounded-[28px] bg-gradient-to-r from-emerald-400/45 via-emerald-300/18 to-emerald-400/45 blur-xl"
              />
              <Link
                href="/"
                onClick={() => setExploreOpen(false)}
                className="pointer-events-auto relative grid h-[3.6rem] w-[3.6rem] place-items-center rounded-[1.35rem] border border-emerald-300/40 bg-[linear-gradient(180deg,#7c3aed,#6d28d9)] shadow-[0_18px_44px_rgba(16,185,129,0.34)] ring-4 ring-emerald-300/20 transition-transform active:scale-95"
                aria-label="Home"
              >
                <div className="absolute inset-[1px] rounded-[1.2rem] " />
                <div className="relative h-8 w-8 overflow-hidden rounded-xl">
                  <Image src="/navbaricon/navicon.jpg" alt="Neon Code" fill sizes="32px" className="object-cover" />
                </div>
              </Link>
            </Magnetic>
          </div>

          <div className="hidden items-center gap-2 md:flex md:gap-3" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-bold text-white transition-all hover:bg-white/[0.12]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
              {lang === "en" ? "EN" : "BN"}
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 bottom-full mb-3 w-36 overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/90 p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.68)] backdrop-blur-xl"
                >
                  <button
                    onClick={() => {
                      setLanguage("en");
                      setLangOpen(false);
                    }}
                    className="w-full rounded-xl px-4 py-2.5 text-left text-xs text-white hover:bg-white/10"
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("bn");
                      setLangOpen(false);
                    }}
                    className="w-full rounded-xl px-4 py-2.5 text-left text-xs text-white hover:bg-white/10"
                  >
                    বাংলা
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <Magnetic className="hidden md:block">
              <Link
                href="/contact"
                className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-emerald-200/35 bg-[linear-gradient(135deg,#9cf1bb,#34d399_45%,#6ee7b7)] px-4 py-2 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95 lg:px-5 lg:py-2.5 ${
                  isScrolled ? "shadow-[0_18px_50px_rgba(52,211,153,0.42)]" : "shadow-[0_12px_26px_rgba(52,211,153,0.26)] opacity-95"
                }`}
              >
                <span className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_60%)] opacity-70" />
                <span className="absolute inset-y-0 left-0 w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-[220%]" />
                {isScrolled ? (
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-black/10">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
                      </svg>
                    </span>
                    <span className="flex flex-col leading-[1.05]">
                      <span className="text-[11px] font-black tracking-wide">{text.start}</span>
                      <span className="text-[10px] font-semibold text-black/70">{text.project}</span>
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
