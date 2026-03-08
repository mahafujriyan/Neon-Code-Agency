"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const serviceCategories = [
  {
    id: "growth",
    title: "Growth Marketing",
    tagline: "Performance-first acquisition stack",
    gradient: "from-cyan-500/20 via-sky-500/10 to-blue-600/20",
    services: [
      {
        id: "meta-ads",
        name: "Data Driven Meta Ads Campaign",
        summary: "Full-funnel Meta campaigns with audience testing, CAC tracking, and weekly optimization loops.",
        whatYouGet: ["Creative + copy matrix", "Pixel + CAPI setup", "Weekly analytics dashboard", "Scaling playbook"],
        bestFor: "Brands wanting predictable lead flow",
        timeline: "7-10 days to launch",
        model: "Monthly retainer + ad budget",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: "business-profile",
        name: "Professional Business Profile",
        summary: "Conversion-focused company profile kit for Facebook, LinkedIn, and Google Business.",
        whatYouGet: ["Brand story rewrite", "Profile cover designs", "Trust assets section", "Posting guideline"],
        bestFor: "Service businesses and agencies",
        timeline: "3-5 days",
        model: "One-time setup",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: "seo-visibility",
        name: "Search Visibility Sprint",
        summary: "Technical fixes + content structure to improve discoverability and qualified organic traffic.",
        whatYouGet: ["Audit report", "On-page optimization", "Schema + speed fixes", "Keyword mapping"],
        bestFor: "Sites with low organic reach",
        timeline: "2-3 weeks",
        model: "Sprint based",
        image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: "social-ops",
        name: "Social Growth Operations",
        summary: "Content planning and publishing rhythm engineered to generate inbound conversations.",
        whatYouGet: ["30-day calendar", "Short-form creative direction", "Community response flow", "Monthly insights"],
        bestFor: "Founders building authority",
        timeline: "5 days onboarding",
        model: "Monthly retainer",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "design",
    title: "Creative + Brand",
    tagline: "Distinct visuals people remember",
    gradient: "from-amber-500/20 via-orange-400/10 to-rose-500/20",
    services: [
      {
        id: "creative-graphics",
        name: "Creative Graphic Design",
        summary: "Campaign-ready visuals for ads, social feeds, and product stories with consistent style.",
        whatYouGet: ["Design system", "Ad/post templates", "Motion-ready assets", "Production files"],
        bestFor: "Teams needing fast, premium creatives",
        timeline: "4-7 days",
        model: "Package or monthly",
        image: "https://images.unsplash.com/photo-1452802447250-470a88ac82bc?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: "branding",
        name: "Branding",
        summary: "Positioning, voice, and identity crafted to make your company look and feel premium.",
        whatYouGet: ["Brand strategy", "Logo suite", "Color + typography guide", "Usage handbook"],
        bestFor: "New launches and rebrands",
        timeline: "2-4 weeks",
        model: "Project based",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: "ui-ux",
        name: "Product UI/UX Design",
        summary: "Interface systems that balance visual quality, speed, and conversion outcomes.",
        whatYouGet: ["User flow", "Wireframes", "Hi-fi screens", "Prototype handoff"],
        bestFor: "SaaS, dashboard, marketplace",
        timeline: "1-3 weeks",
        model: "Per module",
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "build",
    title: "Web + App Engineering",
    tagline: "Production-grade products that scale",
    gradient: "from-emerald-500/20 via-teal-500/10 to-lime-500/20",
    services: [
      {
        id: "website-dev",
        name: "Website Development",
        summary: "Fast, SEO-aware, responsive websites with CMS control and conversion-ready structure.",
        whatYouGet: ["Custom UI build", "CMS integration", "Core web vitals tuning", "Deployment + docs"],
        bestFor: "Corporate and service websites",
        timeline: "2-5 weeks",
        model: "Project based",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: "web-app-dev",
        name: "Web App Development",
        summary: "Secure and maintainable web applications with role-based flows and clean architecture.",
        whatYouGet: ["Auth + RBAC", "API integration", "Admin dashboard", "QA + release pipeline"],
        bestFor: "Internal tools and SaaS MVP",
        timeline: "3-8 weeks",
        model: "Milestone based",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: "app-development",
        name: "App Development",
        summary: "Cross-platform mobile apps with smooth UX, analytics hooks, and app-store readiness.",
        whatYouGet: ["iOS + Android build", "Push setup", "Crash analytics", "Store publishing support"],
        bestFor: "Consumer and service apps",
        timeline: "4-10 weeks",
        model: "Milestone based",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: "automation",
        name: "Workflow Automation",
        summary: "No-code and API-driven automations that reduce repetitive ops and manual errors.",
        whatYouGet: ["Process mapping", "Automation build", "Alerting", "Owner training"],
        bestFor: "Growing teams with repetitive ops",
        timeline: "1-2 weeks",
        model: "Scope based",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
];

export default function ServicesPage() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);
  const [expandedService, setExpandedService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const currentCategory = useMemo(
    () => serviceCategories.find((category) => category.id === activeCategory) ?? serviceCategories[0],
    [activeCategory]
  );

  if (!t) return null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040607] pt-24 pb-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-[5%] h-80 w-80 rounded-full bg-cyan-600/15 blur-[120px]" />
        <div className="absolute right-[-10%] top-[25%] h-[28rem] w-[28rem] rounded-full bg-orange-600/10 blur-[140px]" />
        <div className="absolute bottom-[-15%] left-[30%] h-96 w-96 rounded-full bg-emerald-600/10 blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto px-5 md:px-8">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.25em] text-white/70">
            Service Architecture
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">{t.services.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">{t.services.desc}</p>
        </motion.section>

        <section className="mb-10 flex flex-wrap gap-3">
          {serviceCategories.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => {
                  setActiveCategory(category.id);
                  setExpandedService(null);
                }}
                className={`rounded-2xl border px-5 py-3 text-left transition-all duration-300 ${
                  isActive
                    ? "border-white/30 bg-white/15 text-white shadow-[0_10px_30px_rgba(255,255,255,0.08)]"
                    : "border-white/10 bg-white/5 text-gray-300 hover:border-white/20 hover:bg-white/10"
                }`}
              >
                <p className="text-sm font-semibold">{category.title}</p>
                <p className="text-xs text-gray-400">{category.services.length} active services</p>
              </button>
            );
          })}
        </section>

        <motion.section
          key={currentCategory.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br ${currentCategory.gradient} p-6 md:p-8`}
        >
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold md:text-3xl">{currentCategory.title}</h2>
              <p className="mt-2 text-sm text-white/80 md:text-base">{currentCategory.tagline}</p>
            </div>
            <Link
              href="/contact"
              className="rounded-xl border border-white/20 bg-white px-5 py-2 text-sm font-bold text-black transition hover:scale-[1.03]"
            >
              Book discovery call
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {currentCategory.services.map((service, index) => {
              const isExpanded = expandedService === service.id;
              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.35 }}
                  className="overflow-hidden rounded-2xl border border-white/15 bg-[#0b1114]/85 shadow-[0_14px_35px_rgba(0,0,0,0.35)]"
                >
                  <div className="relative h-44 w-full">
                    <Image src={service.image} alt={service.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                    <span className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-widest text-gray-200">
                      {service.timeline}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold leading-tight">{service.name}</h3>
                    <p className="mt-3 mb-4 text-sm leading-relaxed text-gray-300">{service.summary}</p>

                    <div className="grid grid-cols-2 gap-3 text-xs text-gray-300">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <p className="mb-1 text-[10px] uppercase tracking-[0.15em] text-gray-400">Best for</p>
                        <p className="font-medium text-white">{service.bestFor}</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <p className="mb-1 text-[10px] uppercase tracking-[0.15em] text-gray-400">Pricing model</p>
                        <p className="font-medium text-white">{service.model}</p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className="rounded-lg border border-cyan-300/35 bg-cyan-500/15 px-4 py-2 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-400/25"
                      >
                        View details
                      </button>
                      <button
                        type="button"
                        onClick={() => setExpandedService((prev) => (prev === service.id ? null : service.id))}
                        className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/15"
                      >
                        {isExpanded ? "Hide preview" : "See sample workflow"}
                      </button>
                      <Link
                        href="/contact"
                        className="rounded-lg border border-white/20 px-4 py-2 text-xs font-semibold text-gray-100 transition hover:border-white/35 hover:bg-white/10"
                      >
                        Start this service
                      </Link>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 overflow-hidden rounded-xl border border-white/15 bg-black/35"
                        >
                          <div className="p-4">
                            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Included deliverables</p>
                            <ul className="grid gap-2 text-sm text-gray-200">
                              {service.whatYouGet.map((item) => (
                                <li key={item} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.section>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-[#081015]"
            >
              <div className="relative h-56 w-full">
                <Image src={selectedService.image} alt={selectedService.name} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Service Detail</p>
                    <h3 className="mt-2 text-2xl font-black leading-tight">{selectedService.name}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="rounded-lg border border-white/20 bg-white/5 px-3 py-1 text-sm text-gray-100"
                  >
                    Close
                  </button>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-gray-300">{selectedService.summary}</p>

                <div className="grid gap-3 md:grid-cols-2">
                  {selectedService.whatYouGet.map((item) => (
                    <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="rounded-xl bg-white px-5 py-2 text-sm font-bold text-black transition hover:scale-[1.02]"
                  >
                    Request proposal
                  </Link>
                  <Link
                    href="/portfolio"
                    className="rounded-xl border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    View work samples
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
