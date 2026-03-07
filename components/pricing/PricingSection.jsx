"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import PricingCard from "@/components/pricing/PricingCard";
import { pricingCatalog, pricingContentByLang } from "@/components/pricing/pricingData";
import { useLanguage } from "@/context/LanguageContext";

export default function PricingSection() {
  const { lang } = useLanguage();
  const labels = useMemo(() => pricingContentByLang[lang] || pricingContentByLang.en, [lang]);

  const [service, setService] = useState("website");
  const [activeMode, setActiveMode] = useState("monthly");
  const [pageKey, setPageKey] = useState("p8");

  const serviceData = pricingCatalog[service];
  const modes = serviceData.billingModes;

  const safeMode = modes.includes(activeMode) ? activeMode : modes[0];
  const safePageKey = serviceData.pageKeys?.includes(pageKey) ? pageKey : serviceData.pageKeys?.[0];

  const plans = serviceData.pageKeys ? serviceData.plansByPage[safePageKey] : serviceData.plans;

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#0B0F19] px-6 pb-20 pt-24 text-white"
      style={{ backgroundImage: "radial-gradient(circle at top, #1a1f35 0%, #0b0f19 55%)" }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#00F5D4]/10 blur-3xl"
        animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-[#7C3AED]/20 blur-3xl"
        animate={{ y: [0, 18, 0], x: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold tracking-[0.2em] text-[#00F5D4]"
          >
            {labels.tag}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl font-bold leading-tight md:text-5xl"
          >
            {labels.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base text-[#9CA3AF] md:text-lg"
          >
            {labels.desc}
          </motion.p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex w-full max-w-4xl flex-wrap items-center justify-center gap-2 rounded-2xl border border-[#374151] bg-[#0d1322]/90 p-2">
            {Object.keys(labels.serviceTabs).map((serviceKey) => (
              <button
                key={serviceKey}
                onClick={() => setService(serviceKey)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  service === serviceKey
                    ? "bg-[#7C3AED] text-white shadow-[0_0_16px_rgba(124,58,237,0.45)]"
                    : "text-[#D1D5DB] hover:bg-[#111827] hover:text-white"
                }`}
              >
                {labels.serviceTabs[serviceKey]}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex w-fit flex-wrap items-center gap-1 rounded-full border border-[#00F5D4] bg-[#111827] p-1">
            {modes.map((mode) => (
              <button
                key={mode}
                onClick={() => setActiveMode(mode)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  safeMode === mode ? "bg-[#00F5D4] text-[#0B0F19]" : "text-[#9CA3AF] hover:text-white"
                }`}
              >
                {labels.modeTabs[mode]}
              </button>
            ))}
          </div>

          {serviceData.pageKeys && (
            <div className="flex w-fit flex-wrap items-center justify-center gap-2 rounded-2xl border border-[#374151] bg-[#0f172a]/85 p-2">
              {serviceData.pageKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => setPageKey(key)}
                  className={`rounded-lg px-4 py-2 text-sm transition ${
                    safePageKey === key
                      ? "bg-[#7C3AED] text-white shadow-[0_0_16px_rgba(124,58,237,0.45)]"
                      : "bg-transparent text-[#D1D5DB] border border-[#374151] hover:border-[#00F5D4]"
                  }`}
                >
                  {labels.pageTabs[key]}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} lang={lang} labels={labels} activeMode={safeMode} index={index} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#1F2937] bg-white/5 p-5 backdrop-blur-lg md:p-6">
          <div className="grid grid-cols-1 gap-3 text-sm text-[#E5E7EB] md:grid-cols-2 xl:grid-cols-4">
            {labels.trust.map((item) => (
              <p key={item} className="flex items-center gap-2">
                <span className="text-[#00F5D4]">✓</span>
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
