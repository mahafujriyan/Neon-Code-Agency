"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import PricingCard from "@/components/pricing/PricingCard";
import { pricingCatalog, pricingContentByLang } from "@/components/pricing/pricingData";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_NUMBER = "8801344224787";

export default function PricingSection() {
  const { lang } = useLanguage();
  const labels = useMemo(() => pricingContentByLang[lang] || pricingContentByLang.en, [lang]);

  const [service, setService] = useState("website");
  const [activeMode, setActiveMode] = useState("monthly");
  const [pageKey, setPageKey] = useState("p8");
  const [customModalOpen, setCustomModalOpen] = useState(false);
  const [customForm, setCustomForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    serviceKey: "website",
    modeKey: "monthly",
    pageKey: "p8",
    budget: "",
    timeline: "",
    phone: "",
    details: "",
  });

  const serviceData = pricingCatalog[service];
  const modes = serviceData.billingModes;

  const safeMode = modes.includes(activeMode) ? activeMode : modes[0];
  const safePageKey = serviceData.pageKeys?.includes(pageKey) ? pageKey : serviceData.pageKeys?.[0];

  const plans = serviceData.pageKeys ? serviceData.plansByPage[safePageKey] : serviceData.plans;
  const customServiceData = pricingCatalog[customForm.serviceKey] || pricingCatalog.website;
  const customModeOptions = customServiceData.billingModes || ["monthly"];
  const customPageOptions = customServiceData.pageKeys || [];
  const safeCustomMode = customModeOptions.includes(customForm.modeKey) ? customForm.modeKey : customModeOptions[0];
  const safeCustomPage = customPageOptions.includes(customForm.pageKey) ? customForm.pageKey : customPageOptions[0] || "";

  const openCustomModal = () => {
    setCustomForm((prev) => ({
      ...prev,
      serviceKey: service,
      modeKey: safeMode,
      pageKey: safePageKey || "",
    }));
    setCustomModalOpen(true);
  };

  const handleCustomFormChange = (field, value) => {
    setCustomForm((prev) => {
      if (field === "serviceKey") {
        const nextService = pricingCatalog[value];
        const nextModes = nextService?.billingModes || ["monthly"];
        const nextPages = nextService?.pageKeys || [];
        return {
          ...prev,
          serviceKey: value,
          modeKey: nextModes.includes(prev.modeKey) ? prev.modeKey : nextModes[0],
          pageKey: nextPages.includes(prev.pageKey) ? prev.pageKey : nextPages[0] || "",
        };
      }

      if (field === "modeKey" || field === "pageKey") {
        return { ...prev, [field]: value };
      }

      return { ...prev, [field]: value };
    });
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();

    if (!customForm.phone.trim()) return;

    const serviceLabel = labels.serviceTabs?.[customForm.serviceKey] || customForm.serviceKey;
    const modeLabel = labels.modeTabs?.[safeCustomMode] || safeCustomMode;
    const pageLabel = safeCustomPage ? labels.pageTabs?.[safeCustomPage] || safeCustomPage : "N/A";

    const messageLines = [
      "Assalamu Alaikum, I want a custom package.",
      `Name: ${customForm.fullName || "N/A"}`,
      `Company: ${customForm.companyName || "N/A"}`,
      `Email: ${customForm.email || "N/A"}`,
      `Phone: ${customForm.phone}`,
      `Service: ${serviceLabel}`,
      `Billing Mode: ${modeLabel}`,
      `Page Requirement: ${pageLabel}`,
      `Budget: ${customForm.budget || "Not mentioned"}`,
      `Timeline: ${customForm.timeline || "Not mentioned"}`,
      `Details: ${customForm.details || "Not provided"}`,
    ];

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageLines.join("\n"))}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setCustomModalOpen(false);
  };

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
            <PricingCard
              key={plan.id}
              plan={plan}
              lang={lang}
              labels={labels}
              activeMode={safeMode}
              index={index}
              serviceKey={service}
              pageKey={safePageKey}
            />
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

        <div className="mt-8 rounded-2xl border border-[#00F5D4]/25 bg-gradient-to-r from-[#0f1f27] via-[#101726] to-[#1a1230] p-6 shadow-[0_0_40px_rgba(0,245,212,0.08)]">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#67FFE9]">Custom Quote</p>
              <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">Make your plan as you want</h3>
              <p className="mt-2 text-sm text-[#CBD5E1]">
                Share your exact requirement and submit directly to WhatsApp with all details.
              </p>
            </div>
            <button
              type="button"
              onClick={openCustomModal}
              className="rounded-xl bg-gradient-to-r from-[#00F5D4] via-[#2DD4BF] to-[#4ADE80] px-6 py-3 text-sm font-bold text-[#072128] transition hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(0,245,212,0.35)]"
            >
              Build Custom Package
            </button>
          </div>
        </div>
      </div>

      {customModalOpen && (
        <div className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-2xl border border-[#374151] bg-[#0b1220] p-5 shadow-2xl md:p-6">
            <button
              type="button"
              onClick={() => setCustomModalOpen(false)}
              className="absolute right-3 top-3 rounded-full border border-white/15 px-3 py-1 text-xs text-[#E5E7EB] hover:bg-white/10"
            >
              Close
            </button>

            <h3 className="text-xl font-bold text-white md:text-2xl">Custom Package Request</h3>
            <p className="mt-2 text-sm text-[#9CA3AF]">
              Fill the form below. Your message will open in WhatsApp with all submitted information.
            </p>

            <form onSubmit={handleCustomSubmit} className="mt-5 space-y-4">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={customForm.fullName}
                  onChange={(e) => handleCustomFormChange("fullName", e.target.value)}
                  className="rounded-lg border border-[#374151] bg-[#111827] px-4 py-3 text-sm text-white outline-none focus:border-[#00F5D4]"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={customForm.companyName}
                  onChange={(e) => handleCustomFormChange("companyName", e.target.value)}
                  className="rounded-lg border border-[#374151] bg-[#111827] px-4 py-3 text-sm text-white outline-none focus:border-[#00F5D4]"
                />
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={customForm.email}
                  onChange={(e) => handleCustomFormChange("email", e.target.value)}
                  className="rounded-lg border border-[#374151] bg-[#111827] px-4 py-3 text-sm text-white outline-none focus:border-[#00F5D4]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Your Phone Number (Required)"
                  value={customForm.phone}
                  onChange={(e) => handleCustomFormChange("phone", e.target.value)}
                  className="rounded-lg border border-[#00F5D4]/45 bg-[#111827] px-4 py-3 text-sm text-white outline-none focus:border-[#00F5D4]"
                />
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                <select
                  value={customForm.serviceKey}
                  onChange={(e) => handleCustomFormChange("serviceKey", e.target.value)}
                  className="rounded-lg border border-[#374151] bg-[#111827] px-4 py-3 text-sm text-white outline-none focus:border-[#00F5D4]"
                >
                  {Object.keys(labels.serviceTabs).map((key) => (
                    <option key={key} value={key}>
                      {labels.serviceTabs[key]}
                    </option>
                  ))}
                </select>

                <select
                  value={safeCustomMode}
                  onChange={(e) => handleCustomFormChange("modeKey", e.target.value)}
                  className="rounded-lg border border-[#374151] bg-[#111827] px-4 py-3 text-sm text-white outline-none focus:border-[#00F5D4]"
                >
                  {customModeOptions.map((mode) => (
                    <option key={mode} value={mode}>
                      {labels.modeTabs?.[mode] || mode}
                    </option>
                  ))}
                </select>

                <select
                  value={safeCustomPage}
                  onChange={(e) => handleCustomFormChange("pageKey", e.target.value)}
                  disabled={!customPageOptions.length}
                  className="rounded-lg border border-[#374151] bg-[#111827] px-4 py-3 text-sm text-white outline-none focus:border-[#00F5D4] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {customPageOptions.length ? (
                    customPageOptions.map((key) => (
                      <option key={key} value={key}>
                        {labels.pageTabs?.[key] || key}
                      </option>
                    ))
                  ) : (
                    <option value="">No page option</option>
                  )}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Expected Budget (USD)"
                  value={customForm.budget}
                  onChange={(e) => handleCustomFormChange("budget", e.target.value)}
                  className="rounded-lg border border-[#374151] bg-[#111827] px-4 py-3 text-sm text-white outline-none focus:border-[#00F5D4]"
                />
                <input
                  type="text"
                  placeholder="Expected Timeline (e.g. 3 weeks)"
                  value={customForm.timeline}
                  onChange={(e) => handleCustomFormChange("timeline", e.target.value)}
                  className="rounded-lg border border-[#374151] bg-[#111827] px-4 py-3 text-sm text-white outline-none focus:border-[#00F5D4]"
                />
              </div>

              <textarea
                rows={4}
                placeholder="Write your project details clearly (features, goals, references, special notes)."
                value={customForm.details}
                onChange={(e) => handleCustomFormChange("details", e.target.value)}
                className="w-full rounded-lg border border-[#374151] bg-[#111827] px-4 py-3 text-sm text-white outline-none focus:border-[#00F5D4]"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-[#22C55E] to-[#16A34A] px-5 py-3 text-sm font-bold text-white transition hover:brightness-110 hover:shadow-[0_0_20px_rgba(34,197,94,0.35)]"
              >
                Submit and Continue to WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
